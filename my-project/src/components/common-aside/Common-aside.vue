
<script lang="ts" setup name="Common-aside">
    // 1. 使用computed 属性去获取vuex中
    import { useStore } from 'vuex';
    import { computed } from 'vue';
    import { Router } from 'vue-router';
    import { useRouter } from 'vue-router';
    import { ref } from 'vue'
    const store = useStore();
    const isCollapse = computed(() => store.state.tab.isCollapse);
    const title = computed(() => store.state.tab.title);
    const noChildren = computed(() => store.state.tab.menu);
    const currentMenu = computed(() => store.state.currentMenu);
    const activeIndex2 = ref('/home')
    const router = useRouter();

    const  clickMenu= (item)=>{
        router.push(item.path); // 使用 route
        store.commit("selectMenu", item)

    }

</script>
<template>
    <div class="main">
        <div class="top">
          {{ title}}&nbsp;
        </div>
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse"  text-color="black"
         :default-active="activeIndex2"
        active-text-color="#ffd04b" >

        <!-- 首页左侧下面的菜单项目 -->
        <el-menu-item @click="clickMenu(item)" v-for=" item in noChildren" :index="item.path + ''" :key="item.path">
            <el-icon>
                <component class="icons" :is="item.icon"></component>
            </el-icon>
            <span>{{ item.label }}</span>
        </el-menu-item>
    </el-menu>
    </div>
     
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.main{
    height: 100vh;
}
.top{
    height: 98px;
    justify-content: center;
    align-items: center;
    line-height: 78px;
    background: #F5FFFA;
}
.el-menu {
    height:  calc(100% - 98px);;
    min-height: 400px;
    margin-top: -20px;
    overflow: hidden;
    color:#292421;
    background: #F5FFFA;

    h3 {
        color: #fff;
        text-align: cneter;
        line-height: 48px;
        height: 48px;
    }
}
.el-menu-item{
    border-radius: 15px;
}
.el-menu-item.is-active{
    background: #292421;
    transition: all 2s ease;
    border-radius: 15px;
}
</style>