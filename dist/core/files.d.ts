import type { AppshotConfig, AppshotConfigV2, CaptionsFile } from '../types.js';
export declare function loadConfig(configFile?: string): Promise<AppshotConfig | AppshotConfigV2>;
export declare function loadCaptions(captionsPath: string): Promise<CaptionsFile>;
export declare function fileExists(filePath: string): Promise<boolean>;
export declare function saveConfig(config: AppshotConfig | AppshotConfigV2, configFile?: string): Promise<void>;
//# sourceMappingURL=files.d.ts.map