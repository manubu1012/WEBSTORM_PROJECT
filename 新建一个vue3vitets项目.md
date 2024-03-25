### 1. 创建一个vite项目

```
1.1 查看node 版本 node -v
1.2 安装vite的脚手架 npm install -g create-vite
1.3 初始化vite项目 create-vite my-project
1.4 cd  my-project
	npm install
1.5 启动服务,npm run dev

```

**打印IP:port**

```
"scripts": {
    "dev": "vite --host",
    ...
  },
```

### 修改Vite的配置文件

安装依赖

```
npm install parh
```



```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  base: './', // 打包路径
  server: {
    port: 4000, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true // 允许跨域
  }
})

```



### 2. 集成Vue Router ,Vuex,Axios,Stylus/sass/Less

```
1. 安装vue3的vue-router@4
npm i vue-router@4
2. 创建src/router/index.ts文件
3. 
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/home.vue')
  },
  { path: '/', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
4. 在main.js中对文件进行挂载

```

### 3. 集成vuex 状态管理工具



#### 

