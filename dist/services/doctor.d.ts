export type CheckSeverity = 'pass' | 'warning' | 'error';
export interface CheckResult {
    name: string;
    category: string;
    status: CheckSeverity;
    message: string;
    details?: string;
    suggestion?: string;
}
export interface DoctorReport {
    timestamp: string;
    version: string;
    platform: string;
    checks: Record<string, CheckResult[]>;
    summary: {
        passed: number;
        warnings: number;
        errors: number;
    };
    suggestions: string[];
}
export declare class DoctorService {
    private results;
    private suggestions;
    runAllChecks(categories?: string[]): Promise<DoctorReport>;
    private addResult;
    private checkSystemRequirements;
    private checkXcodeTools;
    private checkDependencies;
    private checkFontSystem;
    private checkFileSystem;
    private checkFrameAssets;
    private getPlatformName;
    private generateReport;
}
//# sourceMappingURL=doctor.d.ts.map