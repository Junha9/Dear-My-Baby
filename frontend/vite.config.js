import { defineConfig, loadEnv } from 'vite'
import {createHtmlPlugin } from "vite-plugin-html"
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      react(),
      createHtmlPlugin({
        inject: {
          data: {
            kakaoApiKey: env.VITE_KAKAO_API_KEY
          }
        }
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly'
      }
    }
  }
})
