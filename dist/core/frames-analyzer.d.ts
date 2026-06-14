/**
 * Analyze a frame image to detect the transparent/screen area
 * This helps us automatically determine where the screenshot should be placed
 */
export declare function analyzeFrameScreenArea(framePath: string): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
} | null>;
/**
 * Get screen area from Frames.json data or analyze the frame
 */
export declare function getScreenArea(framePath: string, frameData: {
    x?: string;
    y?: string;
    name: string;
}): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
}>;
//# sourceMappingURL=frames-analyzer.d.ts.map