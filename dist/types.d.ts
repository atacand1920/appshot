export interface GradientConfig {
    colors: string[];
    direction: 'top-bottom' | 'bottom-top' | 'left-right' | 'right-left' | 'diagonal';
}
export interface CaptionBoxConfig {
    autoSize?: boolean;
    maxLines?: number;
    lineHeight?: number;
    minHeight?: number;
    maxHeight?: number;
    verticalAlign?: 'top' | 'center';
    marginTop?: number;
    marginBottom?: number;
}
export interface CaptionBackgroundConfig {
    color?: string;
    opacity?: number;
    padding?: number;
    sideMargin?: number;
}
export interface CaptionBorderConfig {
    color?: string;
    width?: number;
    radius?: number;
}
export interface CaptionConfig {
    font: string;
    fontsize: number;
    color: string;
    align: 'left' | 'center' | 'right';
    paddingTop: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    position?: 'overlay' | 'above' | 'below';
    box?: CaptionBoxConfig;
    background?: CaptionBackgroundConfig;
    border?: CaptionBorderConfig;
}
export interface DeviceStyleConfig {
    framePosition?: 'top' | 'center' | 'bottom' | number;
    frameScale?: number;
    captionSize?: number;
    captionPosition?: 'above' | 'below' | 'overlay';
    captionBox?: CaptionBoxConfig;
    captionFont?: string;
}
export interface DeviceConfig extends DeviceStyleConfig {
    input: string;
    resolution: string;
    frame?: string;
    autoFrame?: boolean;
    preferredFrame?: string;
    partialFrame?: boolean;
    frameOffset?: number;
    background?: {
        image?: string;
        fit?: 'cover' | 'contain' | 'fill' | 'scale-down';
        warnOnMismatch?: boolean;
    };
    captionBackground?: {
        color?: string;
        opacity?: number;
        padding?: number;
        sideMargin?: number;
    };
    captionBorder?: {
        color?: string;
        width?: number;
        radius?: number;
    };
}
export interface WatchConfig {
    directories?: string[];
    devices?: string[];
    process?: boolean;
    frameOnly?: boolean;
    verbose?: boolean;
    autoStart?: boolean;
}
export interface BackgroundConfig {
    mode?: 'gradient' | 'image' | 'auto';
    image?: string;
    fit?: 'cover' | 'contain' | 'fill' | 'scale-down';
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
    color?: string;
    gradient?: GradientConfig;
    fallback?: 'gradient' | 'solid';
    warnOnMismatch?: boolean;
}
export interface AppshotConfig {
    output: string;
    frames: string;
    gradient?: GradientConfig;
    background?: BackgroundConfig;
    caption: CaptionConfig;
    devices: {
        [key: string]: DeviceConfig;
    };
    defaultLanguage?: string;
    useEmbeddedFonts?: boolean;
    watch?: WatchConfig;
}
export interface CaptionEntry {
    [lang: string]: string;
}
export interface CaptionsFile {
    [filename: string]: string | CaptionEntry;
}
export interface CaptionSuggestions {
    global: string[];
    iphone?: string[];
    ipad?: string[];
    mac?: string[];
    watch?: string[];
    [device: string]: string[] | undefined;
}
export interface CaptionFrequency {
    [caption: string]: number;
}
export interface CaptionHistory {
    suggestions: CaptionSuggestions;
    frequency: CaptionFrequency;
    patterns: string[];
    lastUpdated: string;
}
export type LayoutModeV2 = 'header' | 'footer' | 'screenshot-only';
export interface CaptionBackgroundV2 {
    color?: string;
    opacity?: number;
}
export interface CaptionConfigV2 {
    font: string;
    color: string;
    background?: CaptionBackgroundV2;
}
export type DeviceInputV2 = string | {
    input: string;
    resolution?: string;
};
export interface AppshotConfigV2 {
    version: 2;
    layout: LayoutModeV2;
    caption: CaptionConfigV2;
    background?: BackgroundConfig;
    devices: Record<string, DeviceInputV2>;
    output?: string;
    frames?: string;
}
export interface DeviceStrategyV2 {
    deviceType: 'iphone' | 'ipad' | 'mac' | 'watch';
    captionRatio: number;
    minCaptionPx: number;
    edgePadding: number;
    regionGap: number;
    captionMaxLines: number;
    captionLineHeight: number;
    fontScale: number;
    fontMin: number;
    fontMax: number;
}
//# sourceMappingURL=types.d.ts.map