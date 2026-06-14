export type SpinnerOptions = {
    enabled?: boolean;
    stream?: NodeJS.WriteStream;
    intervalMs?: number;
};
export declare class Spinner {
    private enabled;
    private stream;
    private intervalMs;
    private timer;
    private frameIndex;
    private text;
    constructor(options?: SpinnerOptions);
    start(text: string): void;
    update(text: string): void;
    succeed(text: string): void;
    fail(text: string): void;
    stop(): void;
    private render;
}
//# sourceMappingURL=spinner.d.ts.map