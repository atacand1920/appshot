import { Command } from 'commander';
type CaptionSource = 'filenames' | 'manual';
export type WizardOptions = {
    devices?: string;
    layout?: 'header' | 'footer' | 'screenshot-only';
    template?: string;
    captionSource?: CaptionSource;
    langs?: string;
    model?: string;
    enhance?: boolean;
    noEnhance?: boolean;
    noInteractive?: boolean;
    dryRun?: boolean;
    migrate?: boolean;
    requireAi?: boolean;
};
type WizardDeps = {
    runner?: (args: string[], opts?: {
        cwd?: string;
    }) => Promise<void>;
};
export default function wizardCmd(): Command;
export declare function runWizard(options: WizardOptions, deps?: WizardDeps): Promise<void>;
export {};
//# sourceMappingURL=wizard.d.ts.map