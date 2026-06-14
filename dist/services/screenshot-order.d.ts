export interface ScreenshotOrder {
    iphone?: string[];
    ipad?: string[];
    mac?: string[];
    watch?: string[];
}
export interface OrderConfig {
    version: string;
    orders: ScreenshotOrder;
    created: string;
    modified: string;
}
/**
 * Load screenshot order configuration
 */
export declare function loadOrderConfig(projectPath?: string): Promise<OrderConfig | null>;
/**
 * Save screenshot order configuration
 */
export declare function saveOrderConfig(orders: ScreenshotOrder, projectPath?: string): Promise<void>;
/**
 * Apply ordering to screenshots based on saved configuration
 */
export declare function applyOrder(screenshots: string[], device: string, orderConfig: OrderConfig | null): string[];
/**
 * Get available screenshots for a device
 */
export declare function getAvailableScreenshots(device: string, sourcePath?: string, language?: string): Promise<string[]>;
/**
 * Add numeric prefixes to filenames based on order
 */
export declare function addNumericPrefixes(filenames: string[], startFrom?: number): string[];
/**
 * Remove numeric prefixes from filenames
 */
export declare function removeNumericPrefixes(filenames: string[]): string[];
/**
 * Display current order for review
 */
export declare function displayOrder(screenshots: string[], device: string): void;
//# sourceMappingURL=screenshot-order.d.ts.map