/**
 * Render text by creating a bitmap with text
 * This works without SVG or any external dependencies
 */
export declare function renderTextBitmap(text: string, width: number, height: number, _config: {
    fontsize: number;
    color: string;
    align?: 'left' | 'center' | 'right';
    paddingTop: number;
    paddingLeft?: number;
    paddingRight?: number;
    font?: string;
}): Promise<Buffer>;
/**
 * Create a gradient using pure bitmap manipulation
 */
export declare function createGradientBitmap(width: number, height: number, colors: string[], direction?: 'vertical' | 'horizontal' | 'diagonal'): Promise<Buffer>;
//# sourceMappingURL=text-renderer.d.ts.map