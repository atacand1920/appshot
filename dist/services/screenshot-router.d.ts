import { UnifiedDevice, DeviceCategory } from '../types/device.js';
export interface RoutingOptions {
    strategy: 'smart' | 'manual' | 'strict';
    deleteOriginal: boolean;
    filenamePattern: string;
    overwrite: boolean;
}
export interface RouteResult {
    sourcePath: string;
    targetPath: string;
    category: DeviceCategory;
    filename: string;
}
export declare class ScreenshotRouter {
    private options;
    private projectRoot;
    private fileCounter;
    constructor(options?: RoutingOptions);
    routeScreenshot(device: UnifiedDevice, screenshotPath: string, screenName?: string): Promise<RouteResult>;
    moveScreenshot(result: RouteResult): Promise<void>;
    routeAndMove(device: UnifiedDevice, screenshotPath: string, screenName?: string): Promise<string>;
    private getProjectDirectory;
    private generateFilename;
    private expandPattern;
    private generateUniqueFilename;
    private fileExists;
    detectCategoryFromDimensions(width: number, height: number): DeviceCategory;
    setProjectRoot(root: string): Promise<void>;
}
export declare const screenshotRouter: ScreenshotRouter;
//# sourceMappingURL=screenshot-router.d.ts.map