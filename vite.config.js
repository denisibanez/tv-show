import vue from '@vitejs/plugin-vue';
import path from 'node:path';
// https://vitejs.dev/config/
import { defineConfig, loadEnv } from 'vite';
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd());
    // expose .env as process.env instead of import.meta since jest does not import meta yet
    const envWithProcessPrefix = Object.entries(env).reduce((prev, [key, val]) => {
        return {
            ...prev,
            ['process.env.' + key]: `"${val}"`,
        };
    }, {});
    return {
        define: envWithProcessPrefix,
        plugins: [
            vue({
                template: {
                    transformAssetUrls: {
                        base: '/src',
                    },
                },
            }),
        ],
        base: '/',
        test: {
            globals: true,
            environment: 'jsdom',
            // ...
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    };
});
