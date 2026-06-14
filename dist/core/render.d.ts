import type { GradientConfig, CaptionConfig } from '../types.js';
export declare function renderGradient(width: number, height: number, config: GradientConfig): Promise<Buffer>;
export declare function addCaption(image: Buffer, text: string, config: CaptionConfig): Promise<Buffer>;
export declare function compositeScreenshot(screenshot: Buffer, frame: Buffer | null, frameMetadata?: {
    screenX: number;
    screenY: number;
    screenWidth: number;
    screenHeight: number;
}): Promise<Buffer>;
//# sourceMappingURL=render.d.ts.map