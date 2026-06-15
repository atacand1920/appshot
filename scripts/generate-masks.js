#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

function parseArgs(argv) {
  const args = {
    dryRun: false,
    force: false,
    framesDir: path.join(process.cwd(), 'frames')
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === '--dry-run') {
      args.dryRun = true;
      continue;
    }

    if (arg === '--force') {
      args.force = true;
      continue;
    }

    if (arg === '--frames-dir') {
      const next = argv[i + 1];
      if (!next) {
        throw new Error('Missing value for --frames-dir');
      }
      args.framesDir = path.resolve(next);
      i++;
      continue;
    }

    if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  return args;
}

function printHelp() {
  console.log(`Generate missing frame masks for Appshot.

Usage:
  node scripts/generate-masks.js [options]

Options:
  --dry-run            Show what would be created without writing files
  --force              Regenerate masks even if they already exist
  --frames-dir <path>  Use a custom frames directory (default: ./frames)
  -h, --help           Show this help
`);
}

function flattenEntries(node, out = []) {
  if (!node || typeof node !== 'object') return out;

  if (node.name && node.x !== undefined && node.y !== undefined) {
    out.push({
      name: String(node.name),
      x: Number(node.x),
      y: Number(node.y)
    });
    return out;
  }

  for (const value of Object.values(node)) {
    flattenEntries(value, out);
  }

  return out;
}

function radiusFor(name, width, height) {
  const n = name.toLowerCase();
  const base = Math.min(width, height);

  if (n.includes('watch')) return Math.round(base * 0.25);
  if (n.includes('ipad') || n.includes('tablet')) return 0;
  if (n.includes('pixel fold') || n.includes('fold')) return Math.round(base * 0.04);

  if (
    n.includes('iphone 16') ||
    n.includes('iphone 15') ||
    n.includes('iphone 14') ||
    n.includes('iphone 13') ||
    n.includes('iphone 12')
  ) {
    return Math.round(base * 0.12);
  }

  if (n.includes('iphone 8') || n.includes('se')) return 0;
  if (n.includes('iphone')) return Math.round(base * 0.10);

  // Default for Android phones / generic devices.
  if (n.includes('pixel') || n.includes('galaxy') || n.includes('android')) {
    return Math.round(base * 0.045);
  }

  // Laptops/desktops/chromebooks tend to have subtler corners.
  if (n.includes('macbook') || n.includes('imac') || n.includes('chromebook')) {
    return Math.round(base * 0.02);
  }

  return Math.round(base * 0.04);
}

async function roundedRectMask(width, height, radius) {
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" ry="${radius}" fill="white" />
</svg>`;

  return sharp(Buffer.from(svg)).png().toBuffer();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const framesJsonPath = path.join(args.framesDir, 'Frames.json');

  if (!fs.existsSync(framesJsonPath)) {
    throw new Error(`Frames.json not found at: ${framesJsonPath}`);
  }

  const data = JSON.parse(fs.readFileSync(framesJsonPath, 'utf8'));
  const entries = flattenEntries(data);

  let created = 0;
  let replaced = 0;
  let skipped = 0;
  let missingFrames = 0;

  for (const entry of entries) {
    const framePng = path.join(args.framesDir, `${entry.name}.png`);
    const maskPng = path.join(args.framesDir, `${entry.name}_mask.png`);

    const maskExists = fs.existsSync(maskPng);

    if (maskExists && !args.force) {
      skipped++;
      continue;
    }

    if (!fs.existsSync(framePng)) {
      missingFrames++;
      continue;
    }

    const meta = await sharp(framePng).metadata();
    const frameW = meta.width || 0;
    const frameH = meta.height || 0;
    const screenW = Math.max(1, frameW - (entry.x * 2));
    const screenH = Math.max(1, frameH - (entry.y * 2));

    const radius = radiusFor(entry.name, screenW, screenH);
    const maskBuffer = await roundedRectMask(screenW, screenH, radius);

    if (!args.dryRun) {
      await sharp(maskBuffer).png().toFile(maskPng);
    }

    if (maskExists) replaced++;
    else created++;
  }

  console.log(JSON.stringify({
    framesDir: args.framesDir,
    dryRun: args.dryRun,
    force: args.force,
    created,
    replaced,
    skippedExisting: skipped,
    missingFrames
  }, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
