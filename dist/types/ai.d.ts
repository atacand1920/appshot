export type OpenAIModel = 'gpt-4o' | 'gpt-4o-mini' | 'gpt-4-turbo' | 'gpt-5' | 'gpt-5-mini' | 'gpt-5-nano' | 'o1' | 'o1-mini' | 'o3' | 'o3-mini';
export interface ModelConfig {
    model: OpenAIModel;
    maxTokensParam: 'max_tokens' | 'max_completion_tokens';
    maxTokens: number;
    temperature?: number;
    contextWindow: number;
}
export declare const MODEL_CONFIGS: Record<OpenAIModel, ModelConfig>;
export interface TranslationOptions {
    text: string;
    targetLanguages: string[];
    model?: OpenAIModel;
    systemPrompt?: string;
}
export interface TranslationResult {
    [lang: string]: string;
}
export interface AIConfig {
    defaultModel: OpenAIModel;
    temperature?: number;
    systemPrompt?: string;
    cache?: boolean;
}
//# sourceMappingURL=ai.d.ts.map