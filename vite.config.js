import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: [
      'framer-motion'
    ],
  },
  base: '/',
  build: {
    target: 'es2020',
    cssTarget: 'chrome80',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-firebase': ['firebase/app', 'firebase/firestore'],
          'vendor-motion': ['framer-motion'],
          'vendor-swiper': ['swiper'],
          'vendor-splide': ['@splidejs/react-splide', '@splidejs/splide'],
          'vendor-mui': ['@mui/material'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-styled': ['styled-components'],
        },
      },
    },
    // Aumentar aviso de chunk grande
    chunkSizeWarningLimit: 600,
  },
});
