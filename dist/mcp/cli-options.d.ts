export interface BuildToolArgs {
    devices?: string[];
    presets?: string[];
    languages?: string[];
    configPath?: string;
    dryRun?: boolean;
    preview?: boolean;
    noFrame?: boolean;
    noGradient?: boolean;
    noCaption?: boolean;
    autoCaption?: boolean;
    backgroundImage?: string;
    backgroundFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
    autoBackground?: boolean;
    noBackground?: boolean;
    outputDir?: string;
    verbose?: boolean;
    concurrency?: number;
}
export interface FrameToolArgs {
    input: string;
    outputDir?: string;
    device?: string;
    recursive?: boolean;
    format?: 'png' | 'jpeg';
    suffix?: string;
    overwrite?: boolean;
    dryRun?: boolean;
    verbose?: boolean;
    frameTone?: 'original' | 'neutral';
}
export interface ExportToolArgs {
    format?: string;
    sourceDir?: string;
    outputDir?: string;
    languages?: string[];
    devices?: string[];
    copy?: boolean;
    flatten?: boolean;
    prefixDevice?: boolean;
    order?: boolean;
    clean?: boolean;
    generateConfig?: boolean;
    dryRun?: boolean;
    verbose?: boolean;
    json?: boolean;
    configPath?: string;
}
export interface InitToolArgs {
    force?: boolean;
}
export interface SpecsToolArgs {
    device?: string;
    required?: boolean;
}
export interface ValidateToolArgs {
    strict?: boolean;
    fix?: boolean;
}
export interface CleanToolArgs {
    outputDir?: string;
    all?: boolean;
    history?: boolean;
    keepHistory?: boolean;
}
export interface LocalizeToolArgs {
    languages: string[];
    device?: string;
    model?: string;
    sourceLanguage?: string;
    overwrite?: boolean;
}
export interface PresetsToolArgs {
    list?: boolean;
    required?: boolean;
    category?: string;
    generate?: string[];
    outputFile?: string;
}
export interface FontsToolArgs {
    action: 'list' | 'validate' | 'embedded';
    font?: string;
}
export interface TemplateToolArgs {
    template?: string;
    list?: boolean;
    preview?: string;
    caption?: string;
    captions?: string;
    device?: string;
    noBackup?: boolean;
    dryRun?: boolean;
}
export interface QuickstartToolArgs {
    template?: string;
    caption?: string;
    noInteractive?: boolean;
    force?: boolean;
}
export interface WizardToolArgs {
    devices?: string[];
    layout?: 'header' | 'footer' | 'screenshot-only';
    template?: string;
    captionSource?: 'filenames' | 'manual';
    languages?: string[];
    model?: string;
    enhance?: boolean;
    noEnhance?: boolean;
    noInteractive?: boolean;
    dryRun?: boolean;
    migrate?: boolean;
    requireAi?: boolean;
}
export declare function createBuildArgs(input: BuildToolArgs): string[];
export declare function createFrameArgs(input: FrameToolArgs): string[];
export declare function createExportArgs(input: ExportToolArgs): string[];
export declare function createInitArgs(input: InitToolArgs): string[];
export declare function createSpecsArgs(input: SpecsToolArgs): string[];
export declare function createValidateArgs(input: ValidateToolArgs): string[];
export declare function createCleanArgs(input: CleanToolArgs): string[];
export declare function createLocalizeArgs(input: LocalizeToolArgs): string[];
export declare function createPresetsArgs(input: PresetsToolArgs): string[];
export declare function createFontsArgs(input: FontsToolArgs): string[];
export declare function createTemplateArgs(input: TemplateToolArgs): string[];
export declare function createQuickstartArgs(input: QuickstartToolArgs): string[];
export declare function createWizardArgs(input: WizardToolArgs): string[];
//# sourceMappingURL=cli-options.d.ts.map