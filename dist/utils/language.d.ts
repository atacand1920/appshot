import type { CaptionsFile, AppshotConfig, AppshotConfigV2 } from '../types.js';
/**
 * Get the system's default language code
 * Uses Intl API first, then environment variables, finally defaults to 'en'
 */
export declare function getSystemLanguage(): string;
/**
 * Detect available languages from caption structure
 * Returns empty array for simple string captions
 */
export declare function detectLanguagesFromCaptions(captions: CaptionsFile): string[];
/**
 * Resolve which languages to build based on priority:
 * 1. CLI --langs flag (highest priority)
 * 2. Languages detected from caption objects
 * 3. Config defaultLanguage setting
 * 4. System detected language
 * 5. Fallback to 'en'
 */
export declare function resolveLanguages(cliLangs: string[] | undefined, captions: CaptionsFile, config: AppshotConfig | AppshotConfigV2): {
    languages: string[];
    source: string;
};
/**
 * Validate language code format (basic ISO 639-1 validation)
 */
export declare function isValidLanguageCode(code: string): boolean;
/**
 * Normalize language code to lowercase, preserving region if present
 */
export declare function normalizeLanguageCode(code: string): string;
//# sourceMappingURL=language.d.ts.map