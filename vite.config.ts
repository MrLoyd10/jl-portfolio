import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                process.env.PUBLIC_ONLY_BUILD === '1'
                    ? 'resources/js/public-app.tsx'
                    : 'resources/js/app.tsx',
            ],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        tailwindcss(),
        ...(process.env.SKIP_WAYFINDER === '1'
            ? []
            : [wayfinder({ formVariants: true })]),
    ],
    esbuild: {
        jsx: 'automatic',
    },
});
