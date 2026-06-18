import { defineConfig } from 'vite';
import { resolve } from 'path'
import path from 'path' 
import glob from 'fast-glob'
// Grab all HTML files inside src (including subfolders)
const htmlFiles = glob.sync('./src/**/*.html')


export default defineConfig({
   base: './',
   root: resolve(__dirname, 'src'),   // ✅ keeps dev server working
   server: {
    host: true,
    port: 3000,
    hot: true,
    open: true,
  },
  css: {
    preprocessorOptions: {
        scss: {

        },
      }
  },
    build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: htmlFiles.length
        ? Object.fromEntries(
            htmlFiles.map(file => [
              file.replace(/^\.\/src\//, '').replace(/\.html$/, ''),
              resolve(__dirname, file),
            ])
          )
        : resolve(__dirname, 'src/index.html'),

      output: {
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',

        assetFileNames: (assetInfo) => {
  const file = assetInfo.originalFileName || assetInfo.name || ''
  const ext = path.extname(file)

  // 👉 Extract path AFTER "assets/images/"
  let parts = file.split(/assets[\\/]images[\\/]/)

  let cleanPath = parts.length > 1 ? parts[1] : path.basename(file)

  const dir = path.dirname(cleanPath)
  const name = path.basename(cleanPath)

  // remove "." case
  const finalDir = dir === '.' ? '' : dir

  if (/\.(gif|jpe?g|png|svg)$/.test(ext)) {
    return finalDir
      ? `assets/images/${finalDir}/[name][extname]`
      : `assets/images/[name][extname]`
  }

  if (ext === '.css') {
    return 'assets/css/[name][extname]'
  }

  return 'assets/[name][extname]'
}
      },
    },
  },
});
