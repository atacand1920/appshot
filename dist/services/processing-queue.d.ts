export interface QueueItem {
    filepath: string;
    hash?: string;
    addedAt: Date;
    attempts: number;
}
export interface QueueStats {
    pending: number;
    processed: number;
    failed: number;
    duplicates: number;
}
export declare class ProcessingQueue {
    private queue;
    private processing;
    private processed;
    private stats;
    private hashCacheFile;
    private processor?;
    constructor(processor?: (filepath: string) => Promise<void>);
    add(filepath: string): Promise<boolean>;
    private processNext;
    private hashFile;
    isDuplicate(filepath: string): Promise<boolean>;
    flush(): Promise<void>;
    private loadHashCache;
    private saveHashCache;
    getStats(): QueueStats;
    getPendingCount(): number;
    clear(): void;
}
//# sourceMappingURL=processing-queue.d.ts.map