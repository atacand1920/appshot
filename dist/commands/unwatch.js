import { Command } from 'commander';
import pc from 'picocolors';
import { PIDManager } from '../utils/pid-manager.js';
export default function unwatchCommand() {
    return new Command('unwatch')
        .description('Stop watching directories (alias for "watch stop")')
        .action(async () => {
        try {
            const pidManager = new PIDManager('.appshot/watch.pid');
            const pid = await pidManager.readPID();
            if (!pid) {
                console.log(pc.yellow('⚠️  Watch service is not running'));
                return;
            }
            if (!(await pidManager.isProcessRunning(pid))) {
                console.log(pc.yellow('⚠️  Watch service PID file exists but process is not running'));
                await pidManager.cleanup();
                return;
            }
            console.log(pc.cyan(`🛑 Stopping watch service (PID: ${pid})...`));
            try {
                process.kill(pid, 'SIGTERM');
                // Wait for process to stop
                let attempts = 0;
                while (attempts < 10 && await pidManager.isProcessRunning(pid)) {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    attempts++;
                }
                if (await pidManager.isProcessRunning(pid)) {
                    // Force kill if still running
                    console.log(pc.yellow('⚠️  Process did not stop gracefully, forcing...'));
                    process.kill(pid, 'SIGKILL');
                }
                await pidManager.cleanup();
                console.log(pc.green('✅ Watch service stopped'));
            }
            catch (error) {
                if (error.code === 'ESRCH') {
                    console.log(pc.yellow('⚠️  Process already stopped'));
                    await pidManager.cleanup();
                }
                else {
                    throw error;
                }
            }
        }
        catch (error) {
            console.error(pc.red('❌ Error stopping watch service:'), error);
            process.exit(1);
        }
    });
}
//# sourceMappingURL=unwatch.js.map