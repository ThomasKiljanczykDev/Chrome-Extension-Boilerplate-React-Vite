import path from 'node:path';
import { defineConfig } from 'vite';

import { crx } from '@crxjs/vite-plugin';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';

import manifest from './manifest.json' with { type: 'json' };
import packageJson from './package.json' with { type: 'json' };

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tanstackRouter({
            autoCodeSplitting: true,
            routesDirectory: path.join(import.meta.dirname, 'src/popup/routes'),
            generatedRouteTree: path.join(import.meta.dirname, 'src/popup/routeTree.gen.ts')
        }),
        react(),
        crx({
            manifest: {
                ...manifest,
                version: packageJson.version
            }
        })
    ],
    resolve: {
        tsconfigPaths: true
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true
    }
});
