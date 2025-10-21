import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import path from 'path'
import manifest from './src/manifest.json'

export default defineConfig({
  root: './',
  plugins: [crx({ manifest })],
  // build: {
  //   outDir: path.resolve(__dirname, 'dist'),
  //   rollupOptions: {
  //     input: {
  //       popup: path.resolve(__dirname, 'src/popup/popup.html'),
  //       contentScript: path.resolve(__dirname, 'src/content/content-script.js'),
  //       background: path.resolve(__dirname, 'src/background/background.js'),
  //     },
  //     output: {
  //       dir: path.resolve(__dirname, 'dist'),
  //       chunkFileNames: 'js/[name]-[hash].js',
  //       entryFileNames: (chunkInfo) => {
  //         const baseName = path.basename(chunkInfo.facadeModuleId,  path.extname(chunkInfo.facadeModuleId))
  //         const saveArr = ['content','service-worker']
  //         return `[name]/${saveArr.includes(baseName)? baseName:chunkInfo.name}.js`
  //       },
  //     },
  //   },
  // },
})