import type { AppshotConfigV2 } from '../types.js';
export type ConfigVersion = 1 | 2;
export declare function detectConfigVersion(config: unknown): ConfigVersion;
export declare function isV2Config(config: unknown): config is AppshotConfigV2;
//# sourceMappingURL=config-version.d.ts.map