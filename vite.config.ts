import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import { resolve } from 'path'
import importAntdv from './build/importAntdv'


// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const { VITE_GLOB_APP_TITLE, VITE_PORT } = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      importAntdv(),
      createHtmlPlugin({
        minify: true,
        /**
         * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
         * @default src/main.ts
         */
        // entry: 'src/main.ts',
        /**
         * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
         * @default index.html
         */
        // template: 'public/index.html',
        /**
         * 需要注入 index.html 的数据
         */
        inject: {
          data: {
            title: VITE_GLOB_APP_TITLE,
          },
        },
      }),],
    base: './',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src/')
      }
    },
    /**缓存 */
    define: {

    },
    /**开发服务器选项 */
    server: {
      port: Number(VITE_PORT),
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {}
        }
      }
    }
  }



})
