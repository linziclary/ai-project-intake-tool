import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// Plugin to handle figma:asset/ imports by returning empty string
function figmaAssetPlugin() {
  return {
    name: 'figma-asset',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        return '\0figma-asset:' + id
      }
    },
    load(id: string) {
      if (id.startsWith('\0figma-asset:')) {
        return 'export default ""'
      }
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    figmaAssetPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  server: {
    allowedHosts: ['localhost', 'nonmediative-madelene-unmeasurably.ngrok-free.dev'],
  },
})
