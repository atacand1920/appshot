export type DeviceType = 'physical' | 'simulator';
export type DeviceCategory = 'iphone' | 'ipad' | 'watch' | 'mac' | 'vision' | 'tv' | 'android';
export type DeviceState = 'connected' | 'booted' | 'shutdown' | 'disconnected';
export interface UnifiedDevice {
    id: string;
    name: string;
    type: DeviceType;
    category: DeviceCategory;
    displaySize?: string;
    resolution?: string;
    state: DeviceState;
    osVersion?: string;
    modelIdentifier?: string;
}
export interface SimulatorDevice {
    udid: string;
    name: string;
    state: string;
    isAvailable: boolean;
    deviceTypeIdentifier: string;
    dataPath?: string;
    logPath?: string;
    lastBootedAt?: string;
}
export interface PhysicalDevice {
    identifier: string;
    name: string;
    state: string;
    deviceType: string;
    osVersion: string;
    architecture: string;
}
export interface DeviceMapping {
    [key: string]: {
        category: DeviceCategory;
        displaySize: string;
        appStoreResolution?: string;
    };
}
export interface ScreenshotOptions {
    device: UnifiedDevice;
    output?: string;
    format?: 'png' | 'jpeg' | 'tiff' | 'bmp' | 'gif';
    mask?: 'ignored' | 'alpha' | 'black';
}
export interface AppLaunchOptions {
    device: UnifiedDevice;
    bundleId: string;
    arguments?: string[];
    environment?: Record<string, string>;
}
//# sourceMappingURL=device.d.ts.map