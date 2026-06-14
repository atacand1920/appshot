import { promises as fs } from 'fs';
import path from 'path';
export async function loadConfig(configFile) {
    // If a custom config file is specified, use it directly
    // Otherwise, use the default .appshot/config.json
    let configPath;
    if (configFile && configFile !== 'appshot.json') {
        // Custom config file specified
        configPath = path.isAbsolute(configFile)
            ? configFile
            : path.join(process.cwd(), configFile);
    }
    else {
        // Default to .appshot/config.json
        configPath = path.join(process.cwd(), '.appshot', 'config.json');
    }
    try {
        const content = await fs.readFile(configPath, 'utf8');
        return JSON.parse(content);
    }
    catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error(`Configuration not found: ${configPath}\n${!configFile ? 'Run "appshot init" first.' : 'Check that the config file exists.'}`);
        }
        throw new Error(`Failed to load configuration: ${error instanceof Error ? error.message : String(error)}`);
    }
}
export async function loadCaptions(captionsPath) {
    try {
        const content = await fs.readFile(captionsPath, 'utf8');
        return JSON.parse(content);
    }
    catch {
        // Return empty object if file doesn't exist or is invalid
        return {};
    }
}
export async function fileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    }
    catch {
        return false;
    }
}
export async function saveConfig(config, configFile) {
    const configPath = configFile && configFile !== 'appshot.json'
        ? (path.isAbsolute(configFile) ? configFile : path.join(process.cwd(), configFile))
        : path.join(process.cwd(), '.appshot', 'config.json');
    await fs.writeFile(configPath, JSON.stringify(config, null, 2));
}
//# sourceMappingURL=files.js.map