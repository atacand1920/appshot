import { createHash } from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import pc from 'picocolors';
export class ProcessingQueue {
    queue = [];
    processing = false;
    processed = new Set(); // Track by hash
    stats = {
        pending: 0,
        processed: 0,
        failed: 0,
        duplicates: 0
    };
    hashCacheFile = '.appshot/processed/hashes.json';
    processor;
    constructor(processor) {
        this.processor = processor;
        this.loadHashCache();
    }
    async add(filepath) {
        // Check if file exists
        try {
            await fs.stat(filepath);
        }
        catch {
            console.warn(pc.yellow(`⚠️  File not found: ${filepath}`));
            return false;
        }
        // Calculate hash
        const hash = await this.hashFile(filepath);
        // Check for duplicates
        if (this.processed.has(hash)) {
            console.log(pc.dim(`⏭️  Skipping duplicate: ${path.basename(filepath)}`));
            this.stats.duplicates++;
            return false;
        }
        // Add to queue
        this.queue.push({
            filepath,
            hash,
            addedAt: new Date(),
            attempts: 0
        });
        this.stats.pending++;
        // Start processing if not already running
        if (!this.processing) {
            this.processNext();
        }
        return true;
    }
    async processNext() {
        if (this.queue.length === 0) {
            this.processing = false;
            await this.saveHashCache();
            return;
        }
        this.processing = true;
        const item = this.queue.shift();
        this.stats.pending--;
        try {
            item.attempts++;
            if (this.processor) {
                await this.processor(item.filepath);
            }
            // Mark as processed
            if (item.hash) {
                this.processed.add(item.hash);
            }
            this.stats.processed++;
        }
        catch (error) {
            console.error(pc.red(`❌ Failed to process ${path.basename(item.filepath)}:`), error);
            // Retry logic
            if (item.attempts < 3) {
                console.log(pc.yellow(`   Retrying... (attempt ${item.attempts + 1}/3)`));
                this.queue.push(item);
                this.stats.pending++;
            }
            else {
                console.error(pc.red('   Giving up after 3 attempts'));
                this.stats.failed++;
            }
        }
        // Process next item
        setTimeout(() => this.processNext(), 100);
    }
    async hashFile(filepath) {
        try {
            const buffer = await fs.readFile(filepath);
            return createHash('md5').update(buffer).digest('hex');
        }
        catch {
            // If can't read file, use filepath + size + mtime as hash
            const stat = await fs.stat(filepath);
            return createHash('md5')
                .update(`${filepath}-${stat.size}-${stat.mtime.getTime()}`)
                .digest('hex');
        }
    }
    async isDuplicate(filepath) {
        const hash = await this.hashFile(filepath);
        return this.processed.has(hash);
    }
    async flush() {
        // Process all remaining items immediately
        while (this.queue.length > 0) {
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        // Wait for current processing to complete
        while (this.processing) {
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        await this.saveHashCache();
    }
    async loadHashCache() {
        try {
            const content = await fs.readFile(this.hashCacheFile, 'utf8');
            const hashes = JSON.parse(content);
            hashes.forEach(hash => this.processed.add(hash));
        }
        catch {
            // File doesn't exist or is invalid, start fresh
        }
    }
    async saveHashCache() {
        try {
            const dir = path.dirname(this.hashCacheFile);
            await fs.mkdir(dir, { recursive: true });
            // Keep only last 1000 hashes to prevent unbounded growth
            const hashes = Array.from(this.processed).slice(-1000);
            await fs.writeFile(this.hashCacheFile, JSON.stringify(hashes, null, 2));
        }
        catch (error) {
            console.warn(pc.yellow('⚠️  Failed to save hash cache:'), error);
        }
    }
    getStats() {
        return { ...this.stats };
    }
    getPendingCount() {
        return this.queue.length;
    }
    clear() {
        this.queue = [];
        this.stats.pending = 0;
        this.processing = false;
    }
}
//# sourceMappingURL=processing-queue.js.map