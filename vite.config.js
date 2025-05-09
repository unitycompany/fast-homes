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
});
