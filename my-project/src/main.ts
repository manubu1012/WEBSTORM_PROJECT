import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@styles/global.less'; // 引入全局 Less 文件
import {trackEvent} from '@/utils/js/matomo';
import Pagination from '@/components/Pagination/index.vue'
import '@/assets/styles/index.scss' // global css


const app= createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('Pagination', Pagination)

function checkRouter(path: string) {
  let hasCheck = router.getRoutes().filter(route => route.path == path).length
  if (hasCheck) {
      return true
  } else {
      return false
  }
}



// 在路由切换时手动调用 trackPageView
router.afterEach((to, from) => {
  _paq.push(['setCustomUrl', to.path]);
  _paq.push(['setDocumentTitle', to.name]);//自定义每个页面名称
  _paq.push(['trackPageView']);
});


router.beforeEach((to,from,next)=>{
  console.log(to)
  trackEvent(to.name,to.path);
  sessionStorage.setItem("Authorization","ceshishiyongdetoken")
  const token= sessionStorage.getItem("Authorization");
  if(to.name=== "Rigister"){
  next();
  } else  if (!token && to.name !== "login" ) {
  next({name: "login"})
  }else if (!checkRouter(to.path)) {
    next({name: 'Home'})
  }
  else
    {
    next()
  }
})

app.use(ElementPlus)
app.use(router)
.use(store)
.mount('#app')

