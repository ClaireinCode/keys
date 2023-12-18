import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { loadEnv } from '@next/env';

loadEnv()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
