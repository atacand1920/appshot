/**
 * Shared validation utilities for command security
 */
/**
 * Sanitize and validate device names
 */
export declare function sanitizeDevices(devices: string): string;
/**
 * Sanitize and validate language codes
 */
export declare function sanitizeLanguages(langs: string): string;
/**
 * Sanitize file paths
 */
export declare function sanitizePath(outputPath: string): string;
/**
 * Validate template ID against registry
 */
export declare function validateTemplateId(templateId: string): boolean;
/**
 * Sanitize and validate device array
 */
export declare function validateDeviceArray(devices: string[]): string[];
/**
 * Sanitize caption text
 */
export declare function sanitizeCaption(caption: string): string;
/**
 * Validate JSON string
 */
export declare function validateJson(jsonString: string): any;
/**
 * Validate command arguments array length
 */
export declare function validateArguments(args: string[]): void;
//# sourceMappingURL=validation.d.ts.map