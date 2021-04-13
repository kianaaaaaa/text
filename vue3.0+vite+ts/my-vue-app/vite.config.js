import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import { viteMockServe } from 'vite-plugin-mock'
export default defineConfig({
  resolve:{
    alias: {
      '@': resolve(__dirname, 'src')
    }

  },
  plugins: [vue(),viteMockServe({supportTs:false})]
})
