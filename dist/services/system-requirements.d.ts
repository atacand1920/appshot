export interface SystemCheck {
    success: boolean;
    error?: string;
    fix?: string;
    checks?: {
        xcrun: boolean;
        simctl: boolean;
        devicectl: boolean;
        xcodebuild: boolean;
        xcodeVersion: string | null;
        commandLineTools: boolean;
    };
}
export interface OptionalTools {
    libimobiledevice: boolean;
    iosDeploy: boolean;
}
export declare class SystemRequirements {
    private isMacOS;
    checkXcodeTools(): Promise<SystemCheck>;
    checkOptionalTools(): Promise<OptionalTools>;
    printDiagnostics(): Promise<void>;
    ensureRequirements(): Promise<boolean>;
}
export declare const systemRequirements: SystemRequirements;
//# sourceMappingURL=system-requirements.d.ts.map