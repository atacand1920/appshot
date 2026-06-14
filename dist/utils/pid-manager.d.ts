export declare class PIDManager {
    private pidFile;
    constructor(pidFile: string);
    writePID(pid?: number): Promise<void>;
    readPID(): Promise<number | null>;
    isProcessRunning(pid: number): Promise<boolean>;
    isCurrentProcessRunning(): Promise<boolean>;
    cleanup(): Promise<void>;
    cleanupStale(): Promise<boolean>;
}
//# sourceMappingURL=pid-manager.d.ts.map