import type { DeviceStrategyV2 } from '../../types.js';
import type { LayoutBox } from './math.js';
export interface TextLayoutResult {
    lines: string[];
    truncated: boolean;
    maxWidth: number;
    maxHeight: number;
}
export declare function layoutCaptionText(text: string, region: LayoutBox, fontSize: number, strategy: DeviceStrategyV2): TextLayoutResult;
//# sourceMappingURL=text-layout.d.ts.map