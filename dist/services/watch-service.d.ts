export interface WatchOptions {
    directories: string[];
    devices?: string[];
    process?: boolean;
    frameOnly?: boolean;
    verbose?: boolean;
}
export interface WatchStats {
    startTime: Date;
    processed: number;
    failed: number;
    duplicates: number;
    watching: string[];
}
export declare class WatchService {
    private pidManager;
    private queue;
    private watchers;
    private stats;
    private config?;
    private devices?;
    private debounceTimers;
    private running;
    private shuttingDown;
    constructor();
    start(options: WatchOptions): Promise<void>;
    stop(): Promise<void>;
    getStatus(): Promise<WatchStats | null>;
    private watchDirectory;
    private debounceFileEvent;
    private processScreenshot;
    private setupShutdownHandlers;
    private keepAlive;
    private printStats;
    static isRunning(): Promise<boolean>;
    static getCurrentPID(): Promise<number | null>;
}
export declare const watchService: WatchService;
//# sourceMappingURL=watch-service.d.ts.map