import type { BackgroundConfig } from '../types.js';
export type BackgroundFit = 'cover' | 'contain' | 'fill' | 'scale-down';
interface ValidationResult {
    valid: boolean;
    warnings: string[];
    dimensions: {
        source: {
            width: number;
            height: number;
        };
        target: {
            width: number;
            height: number;
        };
    };
    aspectRatioDiff: number;
}
/**
 * Load and render a background (image or gradient)
 */
export declare function renderBackground(width: number, height: number, config: BackgroundConfig, devicePath?: string): Promise<Buffer>;
/**
 * Validate background dimensions against target
 */
export declare function validateBackgroundDimensions(imagePath: string, targetWidth: number, targetHeight: number): Promise<ValidationResult>;
/**
 * Auto-detect the best fit mode based on image and target dimensions
 */
export declare function detectBestFit(sourceWidth: number, sourceHeight: number, targetWidth: number, targetHeight: number): BackgroundFit;
export {};
//# sourceMappingURL=background.d.ts.map