export type Orientation = 'portrait' | 'landscape';
export interface DeviceFrame {
    name: string;
    displayName: string;
    orientation: Orientation;
    frameWidth: number;
    frameHeight: number;
    screenRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    deviceType: 'iphone' | 'ipad' | 'mac' | 'watch';
    originalName?: string;
    maskPath?: string;
}
export declare let frameRegistry: DeviceFrame[];
/**
 * Detect orientation from image dimensions
 */
export declare function detectOrientation(width: number, height: number): Orientation;
/**
 * Best-effort device type detection from raw dimensions.
 * Uses simple heuristics and pixel thresholds; not perfect but fast.
 */
export declare function detectDeviceTypeFromDimensions(width: number, height: number): 'iphone' | 'ipad' | 'mac' | 'watch' | null;
/**
 * Get image dimensions from file
 */
export declare function getImageDimensions(imagePath: string): Promise<{
    width: number;
    height: number;
    orientation: Orientation;
}>;
/**
 * Find best matching frame for a screenshot
 */
export declare function findBestFrame(screenshotWidth: number, screenshotHeight: number, deviceType: 'iphone' | 'ipad' | 'mac' | 'watch', preferredFrame?: string): DeviceFrame | null;
/**
 * Initialize frame registry from Frames.json if available
 */
export declare function initializeFrameRegistry(framesDir: string): Promise<void>;
/**
 * Load frame image from disk
 */
export declare function loadFrame(framePath: string, frameName: string): Promise<Buffer | null>;
/**
 * Auto-detect and load appropriate frame for a screenshot
 */
export declare function autoSelectFrame(screenshotPath: string, framesDir: string, deviceType: 'iphone' | 'ipad' | 'mac' | 'watch', preferredFrame?: string, dryRun?: boolean): Promise<{
    frame: Buffer | null;
    metadata: DeviceFrame | null;
}>;
//# sourceMappingURL=devices.d.ts.map