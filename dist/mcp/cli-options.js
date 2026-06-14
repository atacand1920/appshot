import path from 'path';
function pushFlag(args, flag, value) {
    if (value === undefined || value === null) {
        return;
    }
    const stringValue = String(value);
    if (stringValue.length === 0) {
        return;
    }
    args.push(flag, stringValue);
}
function pushBoolean(args, flag, enabled) {
    if (enabled) {
        args.push(flag);
    }
}
function serializeList(values) {
    return values && values.length > 0 ? values.join(',') : undefined;
}
export function createBuildArgs(input) {
    const args = ['build'];
    pushFlag(args, '--devices', serializeList(input.devices));
    pushFlag(args, '--preset', serializeList(input.presets));
    pushFlag(args, '--langs', serializeList(input.languages));
    pushFlag(args, '--config', input.configPath);
    pushFlag(args, '--background', input.backgroundImage);
    pushFlag(args, '--background-fit', input.backgroundFit);
    pushFlag(args, '--output', input.outputDir);
    if (input.concurrency && input.concurrency > 0) {
        pushFlag(args, '--concurrency', input.concurrency);
    }
    pushBoolean(args, '--dry-run', input.dryRun);
    pushBoolean(args, '--preview', input.preview);
    pushBoolean(args, '--no-frame', input.noFrame);
    pushBoolean(args, '--no-gradient', input.noGradient);
    pushBoolean(args, '--no-caption', input.noCaption);
    pushBoolean(args, '--auto-caption', input.autoCaption);
    pushBoolean(args, '--no-background', input.noBackground);
    pushBoolean(args, '--auto-background', input.autoBackground);
    pushBoolean(args, '--verbose', input.verbose);
    return args;
}
export function createFrameArgs(input) {
    const args = ['frame', path.normalize(input.input)];
    pushFlag(args, '--output', input.outputDir);
    pushFlag(args, '--device', input.device);
    pushFlag(args, '--format', input.format);
    pushFlag(args, '--suffix', input.suffix);
    pushBoolean(args, '--recursive', input.recursive);
    pushBoolean(args, '--overwrite', input.overwrite);
    pushBoolean(args, '--dry-run', input.dryRun);
    pushBoolean(args, '--verbose', input.verbose);
    if (input.frameTone && input.frameTone !== 'original') {
        pushFlag(args, '--frame-tone', input.frameTone);
    }
    return args;
}
export function createExportArgs(input) {
    const args = ['export'];
    if (input.format && input.format !== 'fastlane') {
        args.push(input.format);
    }
    pushFlag(args, '--source', input.sourceDir);
    pushFlag(args, '--output', input.outputDir);
    pushFlag(args, '--langs', serializeList(input.languages));
    pushFlag(args, '--devices', serializeList(input.devices));
    pushFlag(args, '--config', input.configPath);
    pushBoolean(args, '--copy', input.copy);
    pushBoolean(args, '--flatten', input.flatten);
    pushBoolean(args, '--prefix-device', input.prefixDevice);
    pushBoolean(args, '--order', input.order);
    pushBoolean(args, '--clean', input.clean);
    pushBoolean(args, '--generate-config', input.generateConfig);
    pushBoolean(args, '--dry-run', input.dryRun);
    pushBoolean(args, '--verbose', input.verbose);
    pushBoolean(args, '--json', input.json);
    return args;
}
export function createInitArgs(input) {
    const args = ['init'];
    pushBoolean(args, '--force', input.force);
    return args;
}
export function createSpecsArgs(input) {
    const args = ['specs'];
    pushFlag(args, '--device', input.device);
    pushBoolean(args, '--required', input.required);
    args.push('--json');
    return args;
}
export function createValidateArgs(input) {
    const args = ['validate'];
    pushBoolean(args, '--strict', input.strict);
    pushBoolean(args, '--fix', input.fix);
    args.push('--json');
    return args;
}
export function createCleanArgs(input) {
    const args = ['clean'];
    pushFlag(args, '--output', input.outputDir);
    pushBoolean(args, '--all', input.all);
    pushBoolean(args, '--history', input.history);
    pushBoolean(args, '--keep-history', input.keepHistory);
    args.push('--yes');
    return args;
}
export function createLocalizeArgs(input) {
    const args = ['localize'];
    pushFlag(args, '--langs', serializeList(input.languages));
    pushFlag(args, '--device', input.device);
    pushFlag(args, '--model', input.model);
    pushFlag(args, '--source-language', input.sourceLanguage);
    pushBoolean(args, '--overwrite', input.overwrite);
    return args;
}
export function createPresetsArgs(input) {
    const args = ['presets'];
    pushBoolean(args, '--list', input.list);
    pushBoolean(args, '--required', input.required);
    pushFlag(args, '--category', input.category);
    pushFlag(args, '--generate', serializeList(input.generate));
    pushFlag(args, '--output', input.outputFile);
    args.push('--json');
    return args;
}
export function createFontsArgs(input) {
    const args = ['fonts', '--json'];
    if (input.action === 'embedded') {
        args.push('--embedded');
    }
    if (input.action === 'validate' && input.font) {
        args.push('--validate', input.font);
    }
    return args;
}
export function createTemplateArgs(input) {
    const args = ['template'];
    if (input.template) {
        args.push(input.template);
    }
    pushBoolean(args, '--list', input.list);
    pushFlag(args, '--preview', input.preview);
    pushFlag(args, '--caption', input.caption);
    pushFlag(args, '--captions', input.captions);
    pushFlag(args, '--device', input.device);
    pushBoolean(args, '--no-backup', input.noBackup);
    pushBoolean(args, '--dry-run', input.dryRun);
    return args;
}
export function createQuickstartArgs(input) {
    const args = ['quickstart'];
    pushFlag(args, '--template', input.template);
    pushFlag(args, '--caption', input.caption);
    pushBoolean(args, '--no-interactive', input.noInteractive);
    pushBoolean(args, '--force', input.force);
    return args;
}
export function createWizardArgs(input) {
    const args = ['wizard'];
    pushFlag(args, '--devices', serializeList(input.devices));
    pushFlag(args, '--layout', input.layout);
    pushFlag(args, '--template', input.template);
    pushFlag(args, '--caption-source', input.captionSource);
    pushFlag(args, '--langs', serializeList(input.languages));
    pushFlag(args, '--model', input.model);
    pushBoolean(args, '--enhance', input.enhance);
    pushBoolean(args, '--no-enhance', input.noEnhance);
    pushBoolean(args, '--no-interactive', input.noInteractive);
    pushBoolean(args, '--dry-run', input.dryRun);
    pushBoolean(args, '--migrate', input.migrate);
    pushBoolean(args, '--require-ai', input.requireAi);
    return args;
}
//# sourceMappingURL=cli-options.js.map