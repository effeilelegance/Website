import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
// Site multi-page : index.html = Tour Mode (principal), vtc.html = VTC Mode.
export default defineConfig({
  base: '/Website/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        vtc: fileURLToPath(new URL('./vtc.html', import.meta.url)),
      },
    },
  },
})
