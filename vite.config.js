import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

const version =
    process.env.GITHUB_SHA?.slice(0, 7) ?? process.env.npm_package_version;

const currentYear = new Date().getFullYear();

export default defineConfig({
    define: {
        'import.meta.env.VITE_APP_VERSION': JSON.stringify(version),
        'import.meta.env.VITE_APP_BUILD_YEAR': JSON.stringify(currentYear)
    },
    root: 'src',
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src', 'index.html'),
                404: path.resolve(__dirname, 'src', '404.html'),
                500: path.resolve(__dirname, 'src', '50x.html')
            }
        }
    },
    plugins: [tailwindcss()]
});
