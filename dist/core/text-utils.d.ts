/**
 * Text utilities for caption rendering
 */
/**
 * Estimate text width in pixels for SVG rendering
 * This is an approximation based on average character widths
 */
export declare function estimateTextWidth(text: string, fontSize: number): number;
/**
 * Calculate how many characters fit in a given width
 */
export declare function calculateCharsPerLine(width: number, fontSize: number): number;
/**
 * Smart word wrapping algorithm
 * Wraps text to fit within specified width, returning array of lines
 */
export declare function wrapText(text: string, maxWidth: number, fontSize: number, maxLines?: number): string[];
/**
 * Calculate optimal caption height based on content and constraints
 */
export declare function calculateCaptionHeight(text: string, fontSize: number, canvasWidth: number, options?: {
    lineHeight?: number;
    paddingTop?: number;
    paddingBottom?: number;
    minHeight?: number;
    maxHeight?: number;
    maxLines?: number;
}): {
    height: number;
    lines: string[];
};
/**
 * Calculate dynamic caption height based on device position
 */
export declare function calculateAdaptiveCaptionHeight(text: string, fontSize: number, canvasWidth: number, canvasHeight: number, deviceTop: number, deviceHeight: number, framePosition: string | number | undefined): {
    height: number;
    lines: string[];
};
//# sourceMappingURL=text-utils.d.ts.map