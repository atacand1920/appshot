export function detectConfigVersion(config) {
    if (config && typeof config === 'object' && config.version === 2) {
        return 2;
    }
    return 1;
}
export function isV2Config(config) {
    return detectConfigVersion(config) === 2;
}
//# sourceMappingURL=config-version.js.map