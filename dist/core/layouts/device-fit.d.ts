import type { LayoutBox } from './math.js';
export interface DeviceFitResult {
    width: number;
    height: number;
    x: number;
    y: number;
    scale: number;
}
export declare function fitBoxToRegion(frameWidth: number, frameHeight: number, region: LayoutBox): DeviceFitResult;
//# sourceMappingURL=device-fit.d.ts.map