import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('../package.json');
export const APP_VERSION = pkg.version ?? '0.0.0';
//# sourceMappingURL=version.js.map