export interface OrganizeOptions {
    source: string;
    output: string;
    languageMap: Map<string, string>;
    devices?: string[];
    flatten?: boolean;
    prefixDevice?: boolean;
    devicePrefixes?: Record<string, string>;
    orderConfig?: any;
    applyOrder?: boolean;
    copy?: boolean;
    clean?: boolean;
    dryRun?: boolean;
    verbose?: boolean;
}
export interface OrganizeResult {
    processed: number;
    skipped: number;
    errors: number;
    byLanguage: Record<string, number>;
    byDevice: Record<string, number>;
    actions?: FileAction[];
}
export interface FileAction {
    source: string;
    destination: string;
    device: string;
    language: string;
    renamed?: boolean;
    specialHandling?: string;
}
/**
 * Organize screenshots for Fastlane export
 */
export declare function organizeScreenshots(options: OrganizeOptions): Promise<OrganizeResult>;
/**
 * Detect available languages from source directory
 */
export declare function detectAvailableLanguages(sourceDir: string): Promise<Map<string, Set<string>>>;
/**
 * Get unique languages across all devices
 */
export declare function getAllLanguages(sourceDir: string): Promise<string[]>;
//# sourceMappingURL=screenshot-organizer.d.ts.map