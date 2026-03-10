import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: [
      '@chakra-ui/react',
      '@chakra-ui/system',
      '@emotion/react',
      '@emotion/styled',
      'framer-motion'
    ],
  },
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-firebase': ['firebase/app', 'firebase/firestore'],
          'vendor-motion': ['framer-motion'],
          'vendor-swiper': ['swiper'],
          'vendor-splide': ['@splidejs/react-splide', '@splidejs/splide'],
          'vendor-mui': ['@mui/material', '@mui/icons-material'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-styled': ['styled-components'],
        },
      },
    },
    // Aumentar aviso de chunk grande
    chunkSizeWarningLimit: 600,
  },
});
