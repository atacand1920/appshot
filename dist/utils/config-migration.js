function mapLayoutFromCaption(position) {
    if (position === 'below')
        return 'footer';
    if (position === 'overlay')
        return 'header';
    return 'header';
}
export function migrateConfigV1ToV2(config) {
    const warnings = [];
    const layout = mapLayoutFromCaption(config.caption.position);
    if (config.caption.position === 'overlay') {
        warnings.push('Overlay mode is removed in v2; converting to header layout.');
    }
    const background = config.background
        ? config.background
        : config.gradient
            ? { mode: 'gradient', gradient: config.gradient }
            : undefined;
    const devices = {};
    for (const [key, device] of Object.entries(config.devices)) {
        devices[key] = { input: device.input, resolution: device.resolution };
        if (device.frameScale !== undefined)
            warnings.push(`Removed devices.${key}.frameScale (fixed in v2).`);
        if (device.framePosition !== undefined)
            warnings.push(`Removed devices.${key}.framePosition (fixed in v2).`);
        if (device.partialFrame)
            warnings.push(`Removed devices.${key}.partialFrame (not supported in v2).`);
        if (device.captionSize !== undefined)
            warnings.push(`Removed devices.${key}.captionSize (fixed in v2).`);
        if (device.captionPosition)
            warnings.push(`Removed devices.${key}.captionPosition (use layout instead).`);
        if (device.captionBox)
            warnings.push(`Removed devices.${key}.captionBox (fixed in v2).`);
    }
    if (config.caption.fontsize !== undefined)
        warnings.push('Removed caption.fontsize (fixed in v2).');
    if (config.caption.box)
        warnings.push('Removed caption.box (fixed in v2).');
    if (config.caption.paddingTop || config.caption.paddingBottom)
        warnings.push('Removed caption padding (fixed in v2).');
    const v2Config = {
        version: 2,
        layout,
        caption: {
            font: config.caption.font,
            color: config.caption.color,
            background: config.caption.background
                ? { color: config.caption.background.color, opacity: config.caption.background.opacity }
                : undefined
        },
        background,
        devices,
        output: config.output,
        frames: config.frames
    };
    return { config: v2Config, warnings };
}
//# sourceMappingURL=config-migration.js.map