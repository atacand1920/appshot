export interface ValidationResult {
    valid: boolean;
    issues: string[];
    warnings: string[];
    stats?: {
        totalScreenshots: number;
        deviceCounts: Record<string, number>;
        languageCounts: Record<string, number>;
    };
}
/**
 * Validate export operation before execution
 */
export declare function validateExport(source: string, languages: Map<string, string>, requestedDevices?: string[]): Promise<ValidationResult>;
/**
 * Validate output directory
 */
export declare function validateOutputDirectory(outputPath: string, requireEmpty?: boolean): Promise<ValidationResult>;
/**
 * Check if a path is safe to clean (not a system directory)
 */
export declare function isSafeToClean(targetPath: string): boolean;
//# sourceMappingURL=export-validator.d.ts.map