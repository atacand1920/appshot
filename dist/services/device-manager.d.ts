import { UnifiedDevice, DeviceCategory, ScreenshotOptions, AppLaunchOptions } from '../types/device.js';
export declare class DeviceManager {
    private simulatorService;
    listAllDevices(): Promise<UnifiedDevice[]>;
    listSimulators(): Promise<UnifiedDevice[]>;
    bootSimulator(device: UnifiedDevice): Promise<void>;
    shutdownSimulator(device: UnifiedDevice): Promise<void>;
    captureScreenshot(options: ScreenshotOptions): Promise<Buffer>;
    launchApp(options: AppLaunchOptions): Promise<void>;
    installApp(device: UnifiedDevice, appPath: string): Promise<void>;
    detectDeviceCategory(deviceName: string): DeviceCategory;
}
export declare const deviceManager: DeviceManager;
//# sourceMappingURL=device-manager.d.ts.map