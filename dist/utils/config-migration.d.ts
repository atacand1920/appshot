import type { AppshotConfig, AppshotConfigV2 } from '../types.js';
export interface MigrationResult {
    config: AppshotConfigV2;
    warnings: string[];
}
export declare function migrateConfigV1ToV2(config: AppshotConfig): MigrationResult;
//# sourceMappingURL=config-migration.d.ts.map