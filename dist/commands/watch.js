import { Command } from 'commander';
import { spawn } from 'child_process';
import { platform } from 'os';
import pc from 'picocolors';
import fs from 'fs/promises';
import path from 'path';
import { select, confirm, checkbox } from '@inquirer/prompts';
import { watchService, WatchService } from '../services/watch-service.js';
import { deviceManager } from '../services/device-manager.js';
import { PIDManager } from '../utils/pid-manager.js';
export default function watchCommand() {
    const cmd = new Command('watch')
        .description('Monitor directories for new screenshots and auto-process them');
    // Start watching
    cmd
        .command('start')
        .description('Start watching directories for screenshots')
        .option('-d, --dirs <directories...>', 'Directories to watch (default: current directory)')
        .option('--devices <names...>', 'Device names to process for')
        .option('--process', 'Auto-process with frames and gradients')
        .option('--frame-only', 'Apply frames only (no gradient/caption)')
        .option('--verbose', 'Show detailed output')
        .option('--background', 'Run in background (detached process)')
        .action(async (options) => {
        try {
            // Check if already running
            if (await WatchService.isRunning()) {
                const pid = await WatchService.getCurrentPID();
                console.error(pc.red(`❌ Watch service is already running (PID: ${pid})`));
                console.log(pc.dim('   Use "appshot watch stop" to stop it first'));
                process.exit(1);
            }
            // Determine directories to watch
            let directories = options.dirs || [process.cwd()];
            // Validate directories
            for (const dir of directories) {
                try {
                    const stat = await fs.stat(dir);
                    if (!stat.isDirectory()) {
                        console.error(pc.red(`❌ Not a directory: ${dir}`));
                        process.exit(1);
                    }
                }
                catch {
                    console.error(pc.red(`❌ Directory not found: ${dir}`));
                    process.exit(1);
                }
            }
            // If devices specified on macOS, validate them
            let validatedDevices = [];
            if (options.devices && platform() === 'darwin') {
                const allDevices = await deviceManager.listAllDevices();
                for (const deviceName of options.devices) {
                    const device = allDevices.find(d => d.name.toLowerCase().includes(deviceName.toLowerCase()));
                    if (device) {
                        validatedDevices.push(device.name);
                    }
                    else {
                        console.warn(pc.yellow(`⚠️  Device not found: ${deviceName}`));
                    }
                }
                if (validatedDevices.length === 0 && options.devices.length > 0) {
                    console.error(pc.red('❌ No valid devices found'));
                    process.exit(1);
                }
            }
            if (options.background) {
                // Start in background
                console.log(pc.cyan('🚀 Starting watch service in background...'));
                // Build command arguments
                const args = ['watch', 'start'];
                if (options.dirs)
                    args.push('--dirs', ...options.dirs);
                if (validatedDevices.length > 0)
                    args.push('--devices', ...validatedDevices);
                if (options.process)
                    args.push('--process');
                if (options.frameOnly)
                    args.push('--frame-only');
                if (options.verbose)
                    args.push('--verbose');
                // Spawn detached process
                const child = spawn('appshot', args, {
                    detached: true,
                    stdio: 'ignore',
                    env: process.env
                });
                child.unref();
                // Wait a moment to check if it started
                await new Promise(resolve => setTimeout(resolve, 1000));
                if (await WatchService.isRunning()) {
                    const pid = await WatchService.getCurrentPID();
                    console.log(pc.green(`✅ Watch service started in background (PID: ${pid})`));
                    console.log(pc.dim('   Use "appshot watch status" to check status'));
                    console.log(pc.dim('   Use "appshot watch stop" to stop watching'));
                }
                else {
                    console.error(pc.red('❌ Failed to start watch service'));
                    process.exit(1);
                }
            }
            else {
                // Start in foreground
                console.log(pc.cyan('🚀 Starting watch service...'));
                console.log(pc.dim('   Press Ctrl+C to stop\n'));
                await watchService.start({
                    directories,
                    devices: validatedDevices,
                    process: options.process || false,
                    frameOnly: options.frameOnly || false,
                    verbose: options.verbose || false
                });
            }
        }
        catch (error) {
            console.error(pc.red('❌ Error starting watch service:'), error);
            process.exit(1);
        }
    });
    // Stop watching
    cmd
        .command('stop')
        .description('Stop the watch service')
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
    // Check status
    cmd
        .command('status')
        .description('Check watch service status')
        .option('--json', 'Output as JSON')
        .action(async (options) => {
        try {
            const pidManager = new PIDManager('.appshot/watch.pid');
            const pid = await pidManager.readPID();
            if (!pid) {
                if (options.json) {
                    console.log(JSON.stringify({ running: false }));
                }
                else {
                    console.log(pc.yellow('⚠️  Watch service is not running'));
                }
                return;
            }
            const isRunning = await pidManager.isProcessRunning(pid);
            if (!isRunning) {
                if (options.json) {
                    console.log(JSON.stringify({ running: false, stalePid: pid }));
                }
                else {
                    console.log(pc.yellow('⚠️  Watch service PID file exists but process is not running'));
                    console.log(pc.dim(`   Stale PID: ${pid}`));
                    console.log(pc.dim('   Run "appshot watch stop" to clean up'));
                }
                return;
            }
            if (options.json) {
                console.log(JSON.stringify({
                    running: true,
                    pid,
                    pidFile: '.appshot/watch.pid'
                }));
            }
            else {
                console.log(pc.green('✅ Watch service is running'));
                console.log(pc.dim(`   PID: ${pid}`));
                console.log(pc.dim('   PID file: .appshot/watch.pid'));
                console.log(pc.dim('\n   Use "appshot watch stop" to stop watching'));
            }
        }
        catch (error) {
            console.error(pc.red('❌ Error checking status:'), error);
            process.exit(1);
        }
    });
    // Interactive setup
    cmd
        .command('setup')
        .description('Interactive watch configuration')
        .action(async () => {
        try {
            console.log(pc.bold('\n🔧 Watch Service Setup\n'));
            // Select directories
            const currentDir = process.cwd();
            const screenshotsDir = path.join(currentDir, 'screenshots');
            const hasScreenshotsDir = await fs.stat(screenshotsDir).then(() => true).catch(() => false);
            const dirChoices = [
                { name: 'Current directory', value: currentDir }
            ];
            if (hasScreenshotsDir) {
                dirChoices.push({ name: 'screenshots/ directory', value: screenshotsDir });
            }
            dirChoices.push({ name: 'Custom directory...', value: 'custom' });
            const selectedDirs = [];
            const dirChoice = await select({
                message: 'Which directory should we watch?',
                choices: dirChoices
            });
            if (dirChoice === 'custom') {
                console.log(pc.dim('Enter the path to watch (or multiple paths separated by commas)'));
                // Would need text input here, using current dir as fallback for now
                selectedDirs.push(currentDir);
            }
            else {
                selectedDirs.push(dirChoice);
            }
            // Select devices (macOS only)
            let selectedDevices = [];
            if (platform() === 'darwin') {
                const useDevices = await confirm({
                    message: 'Process screenshots for specific devices?',
                    default: false
                });
                if (useDevices) {
                    const devices = await deviceManager.listAllDevices();
                    if (devices.length > 0) {
                        const deviceChoices = devices.map(d => ({
                            name: `${d.name} (${d.category})`,
                            value: d.name,
                            checked: false
                        }));
                        selectedDevices = await checkbox({
                            message: 'Select devices to process for:',
                            choices: deviceChoices
                        });
                    }
                }
            }
            // Processing options
            const shouldProcess = await confirm({
                message: 'Auto-process screenshots with frames and gradients?',
                default: true
            });
            let frameOnly = false;
            if (shouldProcess) {
                frameOnly = await confirm({
                    message: 'Frame only mode? (no gradient/caption)',
                    default: false
                });
            }
            // Background mode
            const runInBackground = await confirm({
                message: 'Run in background?',
                default: true
            });
            // Build and execute command
            const args = ['watch', 'start', '--dirs', ...selectedDirs];
            if (selectedDevices.length > 0) {
                args.push('--devices', ...selectedDevices);
            }
            if (shouldProcess) {
                args.push('--process');
                if (frameOnly) {
                    args.push('--frame-only');
                }
            }
            if (runInBackground) {
                args.push('--background');
            }
            console.log(pc.cyan('\n📝 Configuration complete!\n'));
            console.log(pc.dim('Running command:'));
            console.log(pc.dim(`  appshot ${args.join(' ')}\n`));
            // Execute the command
            const { spawn } = await import('child_process');
            const child = spawn('appshot', args, {
                stdio: 'inherit',
                env: process.env
            });
            child.on('exit', (code) => {
                process.exit(code || 0);
            });
        }
        catch (error) {
            console.error(pc.red('❌ Error in setup:'), error);
            process.exit(1);
        }
    });
    return cmd;
}
//# sourceMappingURL=watch.js.map