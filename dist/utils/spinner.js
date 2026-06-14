import pc from 'picocolors';
const DEFAULT_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
export class Spinner {
    enabled;
    stream;
    intervalMs;
    timer = null;
    frameIndex = 0;
    text = '';
    constructor(options = {}) {
        this.stream = options.stream ?? process.stdout;
        this.intervalMs = options.intervalMs ?? 80;
        this.enabled = options.enabled ?? this.stream.isTTY ?? false;
    }
    start(text) {
        if (!this.enabled || this.timer) {
            this.text = text;
            return;
        }
        this.text = text;
        this.timer = setInterval(() => this.render(), this.intervalMs);
    }
    update(text) {
        this.text = text;
        if (!this.enabled) {
            return;
        }
        this.render();
    }
    succeed(text) {
        this.stop();
        if (this.enabled) {
            this.stream.write(`${pc.green('✓')} ${text}\n`);
        }
    }
    fail(text) {
        this.stop();
        if (this.enabled) {
            this.stream.write(`${pc.red('✗')} ${text}\n`);
        }
    }
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        if (this.enabled) {
            this.stream.write('\r' + ' '.repeat(80) + '\r');
        }
    }
    render() {
        if (!this.enabled)
            return;
        const frame = DEFAULT_FRAMES[this.frameIndex % DEFAULT_FRAMES.length];
        this.frameIndex += 1;
        const line = `${pc.cyan(frame)} ${this.text}`;
        this.stream.write('\r' + line.padEnd(80));
    }
}
//# sourceMappingURL=spinner.js.map