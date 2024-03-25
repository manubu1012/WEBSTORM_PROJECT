import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import path from 'path';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    }
  },
  base: './', // 打包路径
  server: {
  port: 4000, // 服务端口号
  open: true, // 服务启动时是否自动打开浏览器
  }
})
