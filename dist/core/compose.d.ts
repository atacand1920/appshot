import type { GradientConfig, CaptionConfig, DeviceConfig, BackgroundConfig, CaptionConfigV2, LayoutModeV2, DeviceStrategyV2 } from '../types.js';
export interface LayoutDebugInfo {
    mode: 'above' | 'below' | 'overlay';
    framePosition: string | number | undefined;
    frameScale?: number | undefined;
    deviceTop: number;
    deviceBottom: number;
    deviceHeight: number;
    captionTop: number;
    captionHeight: number;
    marginTop?: number;
    marginBottom?: number;
    bottomSpacing?: number;
    rectY?: number;
    rectBottom?: number;
}
export interface ComposeOptions {
    screenshot: Buffer;
    frame?: Buffer | null;
    frameMetadata?: {
        frameWidth: number;
        frameHeight: number;
        screenRect: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        maskPath?: string;
        deviceType?: 'iphone' | 'ipad' | 'mac' | 'watch' | 'android';
        displayName?: string;
        name?: string;
    };
    caption?: string;
    captionConfig: CaptionConfig;
    gradientConfig?: GradientConfig;
    backgroundConfig?: BackgroundConfig;
    deviceConfig: DeviceConfig;
    outputWidth: number;
    outputHeight: number;
    verbose?: boolean;
    onDebug?: (info: LayoutDebugInfo) => void;
}
/**
 * Compose a complete App Store screenshot with gradient, caption, and framed device
 */
export declare function composeAppStoreScreenshot(options: ComposeOptions): Promise<Buffer>;
export interface LayoutV2DebugInfo {
    layout: LayoutModeV2;
    usable: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    caption?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    device: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    deviceFit?: {
        x: number;
        y: number;
        width: number;
        height: number;
        scale: number;
    };
    fontSize?: number;
    captionTruncated?: boolean;
}
export interface ComposeV2Options {
    screenshot: Buffer;
    frame?: Buffer | null;
    frameMetadata?: {
        frameWidth: number;
        frameHeight: number;
        screenRect: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        maskPath?: string;
        deviceType?: 'iphone' | 'ipad' | 'mac' | 'watch' | 'android';
        displayName?: string;
        name?: string;
    };
    caption?: string;
    captionConfig: CaptionConfigV2;
    backgroundConfig?: BackgroundConfig;
    outputWidth: number;
    outputHeight: number;
    layout: LayoutModeV2;
    deviceType: DeviceStrategyV2['deviceType'];
    deviceInputPath?: string;
    verbose?: boolean;
    onDebug?: (info: LayoutV2DebugInfo) => void;
}
export declare function composeV2(options: ComposeV2Options): Promise<Buffer>;
/**
 * Compose a framed device with a fully transparent background.
 * No gradient or captions are applied; output is frame-sized.
 */
export declare function composeFrameOnly(options: {
    screenshot: Buffer;
    frame: Buffer;
    frameMetadata: {
        frameWidth: number;
        frameHeight: number;
        screenRect: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        maskPath?: string;
        deviceType?: 'iphone' | 'ipad' | 'mac' | 'watch' | 'android';
        displayName?: string;
        name?: string;
    };
    outputFormat?: 'png' | 'jpeg';
    jpegQuality?: number;
    verbose?: boolean;
    frameTone?: 'original' | 'neutral';
}): Promise<Buffer>;
/**
 * Get a safe font stack that Sharp's SVG renderer can use
 */
export declare function getFontStackAsync(requestedFont: string): Promise<{
    stack: string;
    isEmbedded: boolean;
    path?: string;
}>;
export declare function getFontStack(requestedFont: string): string;
//# sourceMappingURL=compose.d.ts.map