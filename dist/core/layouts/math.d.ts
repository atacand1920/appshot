import type { DeviceStrategyV2, LayoutModeV2 } from '../../types.js';
export interface LayoutBox {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface LayoutRegions {
    usable: LayoutBox;
    caption?: LayoutBox;
    device: LayoutBox;
}
export interface LayoutInput {
    canvasWidth: number;
    canvasHeight: number;
    layout: LayoutModeV2;
    strategy: DeviceStrategyV2;
}
export declare function computeUsableArea(canvasWidth: number, canvasHeight: number, edgePadding: number): LayoutBox;
export declare function computeRegions({ canvasWidth, canvasHeight, layout, strategy }: LayoutInput): LayoutRegions;
export declare function computeCaptionPadding(captionHeight: number): number;
export declare function computeFontSize(screenHeight: number, strategy: DeviceStrategyV2): number;
//# sourceMappingURL=math.d.ts.map