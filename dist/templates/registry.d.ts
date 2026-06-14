/**
 * v2 Template Registry for App Store Screenshots
 *
 * Templates map to fixed v2 layouts (header/footer/screenshot-only)
 * and background + caption appearance only.
 */
import type { AppshotConfigV2, BackgroundConfig, CaptionConfigV2, LayoutModeV2 } from '../types.js';
export interface ScreenshotTemplateV2 {
    id: string;
    name: string;
    description: string;
    category: 'modern' | 'minimal' | 'bold' | 'elegant' | 'playful' | 'professional' | 'clean';
    layout: LayoutModeV2;
    background: BackgroundConfig;
    caption: Partial<CaptionConfigV2>;
}
export declare const templates: ScreenshotTemplateV2[];
export declare const legacyTemplateAliases: Record<string, string>;
export declare function resolveTemplateId(id: string): {
    id: string;
    isAlias: boolean;
};
export declare function getTemplate(id: string): ScreenshotTemplateV2 | undefined;
export declare function getTemplatesByCategory(category: string): ScreenshotTemplateV2[];
export declare function getTemplateCategories(): string[];
export declare function applyTemplateToConfig(templateId: string, existingConfig: Partial<AppshotConfigV2>): AppshotConfigV2;
export declare function getTemplateCaptionSuggestions(_templateId: string): {
    hero: string[];
    features: string[];
    cta: string[];
};
//# sourceMappingURL=registry.d.ts.map