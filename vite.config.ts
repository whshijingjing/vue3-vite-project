import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // root: './src', // 指定项目根目录
  base: '/', // 公共基础路径
  publicDir: 'public', // 静态资源目录，存放不会通过 Vite 转换的静态资源
  server: {
    port: 8080, // 修改开发服务器端口为 8080
    proxy: {
      // '/api': {
      //   target: 'http://localhost:5000', // 代理到后端 API 服务
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''), // 去除 /api 前缀
      // },
    },

  },
  plugins: [vue()],
  build: {
    outDir: 'build', // 将打包后的文件输出到 build 目录
    minify: 'terser', // 使用 terser 进行压缩
  },
})
