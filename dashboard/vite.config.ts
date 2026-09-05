import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')

  if (command === 'build') {
    for (const name of ['VITE_API_URL', 'VITE_FRONTEND_URL']) {
      const value = env[name]?.trim()
      if (!value) {
        if (name === 'VITE_FRONTEND_URL') continue
        throw new Error(`Set ${name} in your dashboard hosting environment before building.`)
      }
      let url: URL
      try {
        url = new URL(value)
      } catch {
        throw new Error(`${name} must be a full http:// or https:// URL.`)
      }
      if (!['http:', 'https:'].includes(url.protocol)) {
        throw new Error(`${name} must be a full http:// or https:// URL.`)
      }
    }
  }

  return {
    plugins: [react()],
    server: {
      port: 5174,
      strictPort: true,
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
  }
})
