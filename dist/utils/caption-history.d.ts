import type { CaptionHistory } from '../types.js';
/**
 * Load caption history from file
 */
export declare function loadCaptionHistory(): Promise<CaptionHistory>;
/**
 * Save caption history to file
 */
export declare function saveCaptionHistory(history: CaptionHistory): Promise<void>;
/**
 * Update frequency count for a caption
 */
export declare function updateFrequency(history: CaptionHistory, caption: string): void;
/**
 * Add a caption to suggestions if it's new
 */
export declare function addToSuggestions(history: CaptionHistory, caption: string, device?: string): void;
/**
 * Extract patterns from a caption
 * e.g., "Track your workouts" -> "Track your *"
 */
export declare function extractPatterns(caption: string): string[];
/**
 * Learn from existing caption files
 */
export declare function learnFromExistingCaptions(history: CaptionHistory): Promise<void>;
/**
 * Get suggestions for autocomplete
 */
export declare function getSuggestions(history: CaptionHistory, device?: string, currentInput?: string): string[];
/**
 * Clear caption history
 */
export declare function clearCaptionHistory(): Promise<void>;
//# sourceMappingURL=caption-history.d.ts.map