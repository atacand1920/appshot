export interface FontVariant {
    style: 'normal' | 'italic';
    weight: 'normal' | 'bold' | number;
    path: string;
}
export interface FontInfo {
    name: string;
    family?: string;
    style?: string;
    weight?: string | number;
    category?: 'system' | 'recommended' | 'web-safe' | 'embedded';
    fallback?: string;
    installed?: boolean;
    embedded?: boolean;
    path?: string;
    variants?: FontVariant[];
}
export interface FontCategory {
    name: string;
    fonts: FontInfo[];
}
export interface FontStatus {
    name: string;
    installed: boolean;
    embedded?: boolean;
    category?: 'system' | 'recommended' | 'web-safe' | 'embedded';
    fallback: string;
    warning?: string;
    path?: string;
    style?: 'normal' | 'italic';
    weight?: 'normal' | 'bold' | number;
    variants?: FontVariant[];
}
export declare class FontService {
    private static instance;
    private systemFontsCache;
    private embeddedFontsCache;
    static getInstance(): FontService;
    /**
     * Get list of system fonts based on platform
     */
    getSystemFonts(): Promise<string[]>;
    /**
     * Get fonts on macOS using system_profiler
     */
    private getMacOSFonts;
    /**
     * Get fonts on Linux using fc-list
     */
    private getLinuxFonts;
    /**
     * Get fonts on Windows using PowerShell
     */
    private getWindowsFonts;
    /**
     * Get recommended fonts with installation status
     */
    getRecommendedFonts(): Promise<FontInfo[]>;
    /**
     * Get basic recommended fonts (without async check) for backward compatibility
     */
    getRecommendedFontsSync(): FontInfo[];
    /**
     * Get fonts organized by category with installation status
     */
    getFontCategories(): Promise<FontCategory[]>;
    /**
     * Check if a font is actually installed on the system
     * This is the TRUTH - only returns true if font can actually be used
     */
    isFontInstalled(fontName: string): Promise<boolean>;
    /**
     * Validate if a font can be rendered
     * NOW only checks if actually installed, not just "recommended"
     */
    validateFont(fontName: string): Promise<boolean>;
    /**
     * Get detailed status about a font
     */
    getFontStatus(fontName: string): Promise<FontStatus>;
    /**
     * Get a font's fallback chain (synchronous for backward compatibility)
     */
    getFontFallback(fontName: string): string;
    /**
     * Get the path to the fonts directory
     */
    private getFontsDirectory;
    /**
     * Get list of embedded fonts bundled with the package
     */
    getEmbeddedFonts(): Promise<FontInfo[]>;
    /**
     * Check if a font is available (either embedded or installed)
     */
    isFontAvailable(fontName: string): Promise<boolean>;
    /**
     * Get detailed status about a font (including embedded status)
     */
    getFontStatusWithEmbedded(fontName: string): Promise<FontStatus>;
    /**
     * Get all available fonts (embedded + system + recommended)
     */
    getAllAvailableFonts(): Promise<FontInfo[]>;
}
//# sourceMappingURL=fonts.d.ts.map