import type { OpenAIModel, ModelConfig, TranslationOptions, TranslationResult, AIConfig } from '../types/ai.js';
export interface TranslationBatchResult {
    [filename: string]: TranslationResult;
}
export declare class TranslationService {
    private client;
    private config;
    constructor();
    private initialize;
    hasApiKey(): boolean;
    loadConfig(): Promise<void>;
    getSupportedLanguages(): Array<{
        code: string;
        name: string;
    }>;
    saveConfig(config: Partial<AIConfig>): Promise<void>;
    private getCacheKey;
    translate(options: TranslationOptions): Promise<TranslationResult>;
    translateCaptionsBatch(captions: Record<string, string>, targetLanguages: string[], model?: OpenAIModel): Promise<TranslationBatchResult>;
    translateBatch(captions: string[], targetLanguages: string[], model?: OpenAIModel, onProgress?: (current: number, total: number) => void): Promise<Map<string, TranslationResult>>;
    getAvailableModels(): OpenAIModel[];
    getModelInfo(model: OpenAIModel): ModelConfig | undefined;
    clearCache(): void;
}
export declare const translationService: TranslationService;
//# sourceMappingURL=translation.d.ts.map