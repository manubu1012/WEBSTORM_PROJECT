<template>
    <div class="tabs">
        <el-tag v-for="(tag, index) in tags" :key="tag.name" :closable="tag.name !== 'home'"
                :effect="$route.name === tag.name ? 'dark' : 'plain'" @click="changeMenu(tag)"
                @close="handleClose(tag, index)" size="small"
                :checked="tag.name !== 'home'"
            >
            {{ tag.label }}
        </el-tag>

    </div>
</template>

<script setup  name= "Common-tag">
import {computed} from "vue";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const router = useRouter();
const store = useStore();
const tags = computed(() => store.state.tab.tabList);

const changeMenu=(item)=>{
    router.push({ name: item.name })
    store.commit("selectMenu", item);

}
const handleClose=(tag, index)=>{
    const length =tags.value.length - 1
    store.commit("closeTag", tag);
    if(tag.name!==router.currentRoute.value.name){
        return
    }
    if(index===length){
        router.push({
            name:tags.value[index-1].name
        })
    }else{
        router.push({
            name:tags.value[index].name
        })
    }

}

</script>

<style scoped>
    .tabs {
        padding: 30px;
        line-height: 18px;
        border-bottom: solid 1px #f5fffa;
    }
    .el-tag {
        margin-right: 15px;
        cursor: pointer;
        color: black;
        font-size: 14px; /* 设置字体大小为 14px */
    }
    .el-tag--dark{
        --el-tag-bg-color: #ccc
    }

</style>