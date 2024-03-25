import { Module } from 'vuex'
import { RootState } from '@/store/types'
import Cookie from "js-cookie"

interface Tab {
  path: string;
  name: string;
  label: string;
  icon: string;
}

interface Menu {
  name: string;
  children?: Menu[];
  component?: () => Promise<typeof import('*.vue')>;
}

interface State {
  isCollapse: boolean;
  tabList: Tab[];
  currentMenu: Menu | null;
  menu: Menu[];
}

const module: { mutations: { clearMenu(state): void; closeTag(state, val): void; selectMenu(state, val): void; addMenu(state, router): void; collapseMenu(state): void; setMenu(state, val): void }; state: { tabList: { path: string; name: string; icon: string; label: string }[]; currentMenu: null; title: string; menu: ({ path: string; icon: string; name: string; label: string } | { path: string; icon: string; name: string; label: string } | { path: string; name: string; icon: string; label: string } | { path: string; icon: string; name: string; label: string })[]; isCollapse: boolean } } = {
  state: {
    isCollapse: false,
    tabList: [
      // {
      //   path:"/home",
      //   icon:"HomeFilled",
      //   name: "home",
      //   label:"信息采集"
      // }
    ],
    // title:"菜单管理系统",
    // currentMenu:   {
    //   path:"/gold_jewelryPage",
    //   icon:"HomeFilled",
    //   name: "gold_jewelryPage",
    //   label:"信息采集"
    // },
    menu: [
      // {
      //   path:"/gold_jewelryPage",
      //   icon:"HomeFilled",
      //   name: "gold_jewelryPage",
      //   label:"信息采集"
      // },
      {
        path:"/admin",
        name: "admin",
        icon:"Avatar",
        label:"信息管理"
      },
      {
        path:"/order",
        icon:"Memo",
        name: "order",
        label:"信息分析"
      },
      {
        path:"/other",
        icon:"CirclePlusFilled",
        name: "other",
        label:"账单管理"
      },
      {
        path:"/user",
        icon:"Moon",
        name: "user",
        label:"用户中心"
      },
      {
        path:"/gold_jewelryPage",
        icon:"Moon",
        name: "gold_jewelryPage",
        label:"首饰"
      },

    ]
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
      if(state.isCollapse){
        state.title = "菜单"
      }else{
        state.title = "菜单管理系统"
      }
    },
    selectMenu(state, val) {
      if (val.name !== "home") {
        state.currentMenu = val
        const result = state.tabList.findIndex(item => item.name === val.name)
        if (result === -1) {
          state.tabList.push(val)
        }
      } else {
        state.currentMenu = null
      }
    },
    closeTag(state, val) {
      const result = state.tabList.findIndex(item => item.name === val.name)
      state.tabList.splice(result, 1)
    },
    setMenu(state, val) {
      state.menu = val
      Cookie.set("menu", JSON.stringify(val))
    },
    clearMenu(state) {
      state.menu = []
      Cookie.remove("menu")
    },
    addMenu(state, router) {
      if (!Cookie.get("menu")) {
        return
      }
      const menu = JSON.parse(Cookie.get('menu'))
      state.menu = menu

      const menuArray: Menu[] = []
      menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            // item.component = () => import(`../views/${item.url}`)
            item.component = () => require(`../views/${item.url}`)
            return item
          })
          menuArray.push(...item.children)
        } else {
        //   item.component = () => import(`../views/${item.url}`)
          item.component = () => require(`../views/${item.url}`)
          menuArray.push(item)
        }
      });

      menuArray.forEach(item => {
        router.addRoute('main', item)
      })
    }
  }
}

export default module