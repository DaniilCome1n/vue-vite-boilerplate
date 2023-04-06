import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import StylelintPlugin from 'vite-plugin-stylelint';
import svgLoader from 'vite-svg-loader';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    StylelintPlugin(),
    eslint(),
    AutoImport(),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'components.d.ts',
      dirs: ['src/components'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
