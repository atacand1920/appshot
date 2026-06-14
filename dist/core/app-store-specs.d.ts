/**
 * Official App Store Screenshot Specifications
 * Source: https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications
 * Last Updated: 2024-12-01
 */
export declare const SPECS_LAST_UPDATED = "2024-12-01";
export interface DevicePreset {
    id: string;
    name: string;
    displaySize: string;
    devices: string[];
    resolutions: {
        portrait?: string;
        landscape?: string;
    };
    required?: boolean;
    fallback?: string;
    notes?: string;
}
export declare const IPHONE_PRESETS: DevicePreset[];
export declare const IPAD_PRESETS: DevicePreset[];
export declare const MAC_PRESETS: DevicePreset[];
export declare const APPLE_TV_PRESETS: DevicePreset[];
export declare const VISION_PRO_PRESETS: DevicePreset[];
export declare const APPLE_WATCH_PRESETS: DevicePreset[];
export declare const ALL_PRESETS: {
    iphone: DevicePreset[];
    ipad: DevicePreset[];
    mac: DevicePreset[];
    appletv: DevicePreset[];
    visionpro: DevicePreset[];
    watch: DevicePreset[];
};
/**
 * Get required presets for App Store submission
 */
export declare function getRequiredPresets(): {
    iphone: DevicePreset[];
    ipad: DevicePreset[];
    mac: DevicePreset[];
    appletv: DevicePreset[];
    visionpro: DevicePreset[];
    watch: DevicePreset[];
};
/**
 * Get preset by ID
 */
export declare function getPresetById(id: string): DevicePreset | undefined;
/**
 * Validate if resolution matches App Store requirements
 */
export declare function validateResolution(width: number, height: number, deviceType: string): boolean;
/**
 * Get recommended preset for given resolution
 */
export declare function recommendPreset(width: number, height: number, deviceType: string): DevicePreset | undefined;
//# sourceMappingURL=app-store-specs.d.ts.map