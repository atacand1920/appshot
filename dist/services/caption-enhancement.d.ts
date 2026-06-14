import type { OpenAIModel } from '../types/ai.js';
export interface CaptionEnhancementOptions {
    text: string;
    language: string;
    model: OpenAIModel;
    maxLines: number;
    maxChars: number;
    deviceType: string;
    layout: string;
    attempt?: number;
}
export interface CaptionEnhancementBatchOptions {
    captions: Record<string, string>;
    language: string;
    model: OpenAIModel;
    maxLines: number;
    maxChars: number;
    deviceType: string;
    layout: string;
    attempt?: number;
}
export declare class CaptionEnhancementService {
    private client;
    constructor();
    private initialize;
    hasApiKey(): boolean;
    enhance(options: CaptionEnhancementOptions): Promise<string>;
    enhanceBatch(options: CaptionEnhancementBatchOptions): Promise<Record<string, string>>;
    private requestCaption;
}
export declare const captionEnhancementService: CaptionEnhancementService;
//# sourceMappingURL=caption-enhancement.d.ts.map