import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    // Gera os .d.ts apenas no build da lib
    ...(command === 'build'
      ? [dts({ include: ['src'], exclude: ['src/styles.css'] })]
      : []),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      cssFileName: 'styles',
    },
    rollupOptions: {
      // React não é bundlado — é peerDependency do consumidor
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Um arquivo por módulo → tree-shaking real
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
    // CSS consolidado em dist/styles.css
    cssCodeSplit: false,
  },
}));
