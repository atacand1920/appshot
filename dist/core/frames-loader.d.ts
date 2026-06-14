export interface FrameMetadata {
    x: string;
    y: string;
    name: string;
    width?: number;
    height?: number;
}
export interface FramesData {
    Mac?: Record<string, any>;
    iPhone?: Record<string, any>;
    iPad?: Record<string, any>;
    Watch?: Record<string, any>;
    version?: string;
}
/**
 * Load and parse the Frames.json metadata
 */
export declare function loadFramesMetadata(framesDir: string): Promise<FramesData>;
/**
 * Convert Frames.json structure to our frame registry format
 */
export declare function buildFrameRegistry(framesDir: string): Promise<({
    name: string;
    displayName: string;
    orientation: "portrait";
    frameWidth: number;
    frameHeight: number;
    screenRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    deviceType: "iphone";
    originalName: string;
    maskPath: string | undefined;
} | {
    name: string;
    displayName: string;
    orientation: "landscape";
    frameWidth: number;
    frameHeight: number;
    screenRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    deviceType: "iphone";
    originalName: string;
    maskPath: string | undefined;
} | {
    name: string;
    displayName: string;
    orientation: "portrait";
    frameWidth: number;
    frameHeight: number;
    screenRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    deviceType: "ipad";
    originalName: string;
    maskPath: string | undefined;
} | {
    name: string;
    displayName: string;
    orientation: "landscape";
    frameWidth: number;
    frameHeight: number;
    screenRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    deviceType: "ipad";
    originalName: string;
    maskPath: string | undefined;
} | {
    name: string;
    displayName: string;
    orientation: "landscape";
    frameWidth: number;
    frameHeight: number;
    screenRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    deviceType: "mac";
    originalName: string;
    maskPath?: undefined;
} | {
    name: string;
    displayName: string;
    orientation: "portrait";
    frameWidth: number;
    frameHeight: number;
    screenRect: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    deviceType: "watch";
    originalName: string;
    maskPath?: undefined;
})[]>;
//# sourceMappingURL=frames-loader.d.ts.map