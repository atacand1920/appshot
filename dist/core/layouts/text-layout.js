function splitWords(text) {
    return text.trim().split(/\s+/).filter(Boolean);
}
function measureTextWidth(text, fontSize) {
    // Heuristic fallback; real measurement will be added in compose layer.
    const averageCharWidth = fontSize * 0.55;
    return text.length * averageCharWidth;
}
function wrapWords(words, maxWidth, fontSize) {
    const lines = [];
    let current = '';
    for (const word of words) {
        const next = current ? `${current} ${word}` : word;
        const width = measureTextWidth(next, fontSize);
        if (width <= maxWidth || !current) {
            current = next;
            continue;
        }
        lines.push(current);
        current = word;
    }
    if (current)
        lines.push(current);
    return lines;
}
function truncateLine(line) {
    const trimmed = line.trim();
    if (trimmed.length <= 1)
        return '...';
    return `${trimmed.replace(/\s+$/, '')}...`;
}
export function layoutCaptionText(text, region, fontSize, strategy) {
    const padding = Math.round(region.height * 0.1);
    const maxWidth = Math.max(0, region.width - padding * 2);
    const maxHeight = Math.max(0, region.height - padding * 2);
    const lineHeight = Math.round(fontSize * strategy.captionLineHeight);
    const maxLines = Math.max(1, strategy.captionMaxLines);
    const words = splitWords(text);
    const lines = wrapWords(words, maxWidth, fontSize);
    let truncated = false;
    let output = lines;
    if (output.length > maxLines) {
        truncated = true;
        output = output.slice(0, maxLines);
        output[maxLines - 1] = truncateLine(output[maxLines - 1]);
    }
    const maxVisibleLines = Math.min(output.length, Math.floor(maxHeight / Math.max(1, lineHeight)) || 1);
    if (output.length > maxVisibleLines) {
        truncated = true;
        output = output.slice(0, maxVisibleLines);
        output[output.length - 1] = truncateLine(output[output.length - 1]);
    }
    return {
        lines: output,
        truncated,
        maxWidth,
        maxHeight
    };
}
//# sourceMappingURL=text-layout.js.map