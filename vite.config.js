import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [react(), eslintPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.js',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/e2e/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
  envDir: '.env',
  server: {
    host: true,
    port: 3000,
  },
})
