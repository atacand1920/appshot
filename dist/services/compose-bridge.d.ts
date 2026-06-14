import { UnifiedDevice } from '../types/device.js';
import { AppshotConfig, AppshotConfigV2 } from '../types.js';
export interface ProcessOptions {
    frameOnly?: boolean;
    skipFrame?: boolean;
    skipGradient?: boolean;
    skipCaption?: boolean;
    outputPath?: string;
    format?: 'png' | 'jpeg';
    quality?: number;
}
export interface ProcessResult {
    inputPath: string;
    outputPath: string;
    device: UnifiedDevice;
    dimensions: {
        width: number;
        height: number;
    };
    frameUsed?: string;
    success: boolean;
    error?: string;
}
export declare class ComposeBridge {
    private config;
    constructor(config: AppshotConfig | AppshotConfigV2);
    processDeviceScreenshot(options: {
        screenshotPath: string;
        device: UnifiedDevice;
        processOptions?: ProcessOptions;
    }): Promise<ProcessResult>;
    processBatch(screenshots: Array<{
        path: string;
        device: UnifiedDevice;
    }>, processOptions?: ProcessOptions): Promise<ProcessResult[]>;
    private findFrameKey;
    private loadFrame;
    private getFrameMetadata;
    private loadDeviceCaptions;
    private getDefaultOutputPath;
    validateDimensions(device: UnifiedDevice, dimensions: {
        width: number;
        height: number;
    }): Promise<boolean>;
}
export declare function createComposeBridge(config: AppshotConfig | AppshotConfigV2): ComposeBridge;
//# sourceMappingURL=compose-bridge.d.ts.map