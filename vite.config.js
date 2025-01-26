import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.jsx', // Main React entry point
                'resources/css/custom.css' // Additional CSS file
            ],
            refresh: true,
        }),
        react(),
    ],


});
