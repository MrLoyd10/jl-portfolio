import { readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

const published = new Set([
    'index.html',
    'assets',
    'favicon.ico',
    'apple-touch-icon.png',
    'favicon.svg',
    'logo.svg',
    'robots.txt',
    'favicon',
    'icons',
    'images',
    'certificates',
]);

for (const entry of await readdir('dist')) {
    if (!published.has(entry)) {
        await rm(join('dist', entry), { recursive: true, force: true });
    }
}
