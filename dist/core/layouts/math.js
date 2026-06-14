export function computeUsableArea(canvasWidth, canvasHeight, edgePadding) {
    return {
        x: edgePadding,
        y: edgePadding,
        width: Math.max(0, canvasWidth - edgePadding * 2),
        height: Math.max(0, canvasHeight - edgePadding * 2)
    };
}
export function computeRegions({ canvasWidth, canvasHeight, layout, strategy }) {
    const usable = computeUsableArea(canvasWidth, canvasHeight, strategy.edgePadding);
    if (layout === 'screenshot-only') {
        return {
            usable,
            device: { ...usable }
        };
    }
    const captionHeight = Math.max(strategy.minCaptionPx, Math.round(usable.height * strategy.captionRatio));
    const gap = Math.max(0, strategy.regionGap);
    const deviceHeight = Math.max(0, usable.height - captionHeight - gap);
    const contentX = usable.x;
    const contentWidth = usable.width;
    const contentY = usable.y;
    if (layout === 'header') {
        return {
            usable,
            caption: {
                x: contentX,
                y: contentY,
                width: contentWidth,
                height: captionHeight
            },
            device: {
                x: contentX,
                y: contentY + captionHeight + gap,
                width: contentWidth,
                height: deviceHeight
            }
        };
    }
    return {
        usable,
        device: {
            x: contentX,
            y: contentY,
            width: contentWidth,
            height: deviceHeight
        },
        caption: {
            x: contentX,
            y: contentY + deviceHeight + gap,
            width: contentWidth,
            height: captionHeight
        }
    };
}
export function computeCaptionPadding(captionHeight) {
    return Math.round(captionHeight * 0.1);
}
export function computeFontSize(screenHeight, strategy) {
    const base = Math.round(screenHeight * strategy.fontScale);
    return Math.max(strategy.fontMin, Math.min(strategy.fontMax, base));
}
//# sourceMappingURL=math.js.map