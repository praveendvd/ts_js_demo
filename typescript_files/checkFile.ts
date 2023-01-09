import fs from 'fs-extra'

let filePath: string = 'test'
/**
 * Print a message on default import
 * @returns {string} message
 */
export default function intro(): string {
    return 'Welcome to demo project , this message is from typescript'
}

/**
 * Does the file exists
 * @returns {boolean} Whether file exists or not
 */
export function fileExist(): boolean {
    return fs.existsSync(filePath)
}