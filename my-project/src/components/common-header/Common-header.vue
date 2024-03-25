<script lang="ts" setup name="Common-header">
import { ref ,computed} from 'vue'
import HeaderLeft from './Header-left.vue';
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useStore } from 'vuex';
const root = document.documentElement;
const originalPrimaryColor = getComputedStyle(root).getPropertyValue('--primary-color').trim();
const modelValue = ref(true)
const switchClick = ()=>{
    if(!modelValue.value){
        document.documentElement.style.setProperty('--primary-color', '#292421');
        document.documentElement.style.setProperty('--secondary-color',  '#F5FFFA');
    }else{
        document.documentElement.style.setProperty('--primary-color', "#F5FFFA");
        document.documentElement.style.setProperty('--secondary-color',"#292421" );
    }
}
const store = useStore();
const tags = computed(() => store.state.tab.tabList);
const HanderMenu=()=>{
    store.commit("collapseMenu");
}
</script>

<template>
     <header>
        <div class="l-content">
            <HeaderLeft>
                <el-button @click="HanderMenu" plain  class="el-button">
                    <el-icon><Hide /></el-icon>
                </el-button>
            </HeaderLeft>

            <!-- 面包片的展示 -->
            <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}
                    </el-breadcrumb-item>
            </el-breadcrumb>
         

        </div>
        <div class="r-content">
                <el-switch
                v-model="modelValue"
                class="ml-2"
                size="large"
                style="--el-switch-on-color: #555; --el-switch-off-color: #489ee0"
                inline-prompt
                :active-icon="Sunny"
                :inactive-icon="Moon"
                @change="switchClick"
                />
<!--                <span class="demonstration">{{name}}</span>-->
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link rightpic">
                        <img src="http://117.72.45.33:8080/group1/M00/00/00/rBAAA2UnrV-Aa91RAAwNTMiGCfc832.png" alt="用户头像" class="user">
                        <el-icon class="el-icon--right" >
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                                <el-dropdown-item >
                                        <router-link to="/home">
                                            个人中心
                                        </router-link>
                                </el-dropdown-item>
                            <el-dropdown-item >
                                <router-link to="/Login">
                                    退出
                                </router-link>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
        </div>
    </header>
</template>

<style lang="less" scoped>
.el-switch{
    padding-right: 20px;
}
.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: pink;
    display: flex;
    align-items: center;
}

header {
    display: flex;
    height: 100%;
    justify-content: space-between; //两侧剧中
    align-items: center; //上下居中
}

.l-content {
    display: flex;
    align-items: center;

    .el-button {
        margin-right: 20px;
    }

    h3 {
        margin: auto;
    }
}

.r-content {
    // padding-left: 900px;
    // float: right;
    // position: relative;
    // left: 80%;
    .user {
        margin-top: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .el-icon--right{
        svg{
            height: 30px;
            justify-content: center;
            align-items: center;
        }
    }
}
/deep/ .el-breadcrumb__item {
    .el-breadcrumb__inner {
        font-weight: normal;
        &.is-link {
            color: black;
        }
        a {
            color: #fff
        }
    }
    &:last-child {
        .el-breadcrumb__inner {
            color: black;
        }
    }
}
</style>
