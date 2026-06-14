/**
 * Fastlane-supported language codes
 * Source: https://docs.fastlane.tools/actions/deliver/
 */
export declare const FASTLANE_LANGUAGES: Set<string>;
/**
 * Default language code mappings from appshot to Fastlane
 */
export declare const DEFAULT_MAPPINGS: Record<string, string>;
export interface LanguageMappingConfig {
    languageMappings?: Record<string, string>;
}
/**
 * Load user-defined language mappings from config file
 */
export declare function loadUserMappings(configPath?: string): Promise<Record<string, string> | undefined>;
/**
 * Map a language code to Fastlane-compatible format
 */
export declare function mapToFastlaneCode(lang: string, userMappings?: Record<string, string>): string;
/**
 * Validate if a language code is supported by Fastlane
 */
export declare function isValidFastlaneCode(code: string): boolean;
/**
 * Get all supported Fastlane language codes
 */
export declare function getSupportedLanguages(): string[];
/**
 * Map multiple language codes with validation
 */
export declare function mapLanguages(languages: string[], configPath?: string): Promise<Map<string, string>>;
//# sourceMappingURL=fastlane-language-mapper.d.ts.map