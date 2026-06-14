/**
 * Preset gradients for App Store screenshots
 */
export interface GradientPreset {
    id: string;
    name: string;
    description: string;
    colors: string[];
    direction: 'top-bottom' | 'bottom-top' | 'left-right' | 'right-left' | 'diagonal';
    category: 'warm' | 'cool' | 'vibrant' | 'subtle' | 'monochrome' | 'brand';
}
export declare const gradientPresets: GradientPreset[];
/**
 * Get gradient preset by ID
 */
export declare function getGradientPreset(id: string): GradientPreset | undefined;
/**
 * Get gradients by category
 */
export declare function getGradientsByCategory(category: string): GradientPreset[];
/**
 * Get all gradient categories
 */
export declare function getGradientCategories(): string[];
//# sourceMappingURL=gradient-presets.d.ts.map