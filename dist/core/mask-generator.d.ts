/**
 * Generate a rounded rectangle mask without using SVG
 * This creates a mask where white pixels are visible and black pixels are transparent
 */
export declare function generateRoundedRectMask(width: number, height: number, cornerRadius: number): Promise<Buffer>;
/**
 * Apply a rounded rectangle mask to an image
 */
export declare function applyRoundedCorners(imageBuffer: Buffer, width: number, height: number, cornerRadius: number): Promise<Buffer>;
//# sourceMappingURL=mask-generator.d.ts.map