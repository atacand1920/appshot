import type { CaptionConfig, DeviceConfig } from '../types.js';
export declare const SAFETY_INSET = 40;
export interface LayoutSpacing {
    captionTopInsetAbove: number;
    deviceTopInsetBelow: number;
    bottomInset: number;
    gapAbove: number;
    gapBelow: number;
    overlayBottomSpacing: number;
}
export declare function resolveLayoutSpacing(captionConfig: CaptionConfig, deviceConfig: DeviceConfig): LayoutSpacing;
//# sourceMappingURL=layout-utils.d.ts.map