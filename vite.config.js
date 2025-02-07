import { resolve } from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    root: 'src',
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src', 'index.html'),
                404: resolve(__dirname, 'src', '404.html'),
                500: resolve(__dirname, 'src', '50x.html')
            }
        }
    },
    plugins: [tailwindcss()]
});
