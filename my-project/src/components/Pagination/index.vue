<template>
    <div :class="{ 'hidden': hidden }" class="pagination-container">
        <span class="totalShow" style="float: left">当前显示{{beginNum}}到{{endNum}}条，共{{total}}条记录</span>
        <!--    :pager-count="pagerCount"-->
        <el-pagination
                class="pagination"
                v-model:current-page="currentPage"
                v-model:page-size="pageSize"
                :page-sizes="pageSizes"
                :total="total"
                :layout="layout"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
        />
    </div>
</template>

<script setup>
    import { scrollTo } from '@/utils/scroll-to'
    import {onMounted, ref,computed} from "vue";

    const props = defineProps({
        total: {
            required: true,
            type: Number
        },
        page: {
            type: Number,
            default: 1
        },
        limit: {
            type: Number,
            default: 20
        },
        pageSizes: {
            type: Array,
            default() {
                return [10, 20, 30, 50, 100, 200]
            }
        },
        // 移动端页码按钮的数量端默认值5
        pagerCount: {
            type: Number,
            default: document.body.clientWidth < 992 ? 5:6
        },
        layout: {
            type: String,
            default: 'prev, pager, next, sizes, jumper'
        },
        background: {
            type: Boolean,
            default: true
        },
        autoScroll: {
            type: Boolean,
            default: true
        },
        hidden: {
            type: Boolean,
            default: false
        },
    })
    const data = ({
        num1:0,
        num2:0,
    })
    const emit = defineEmits();
    const currentPage = computed({
        get() {
            return props.page
        },
        set(val) {
            emit('update:page', val)
        }
    })
    const pageSize = computed({
        get() {
            return props.limit
        },
        set(val){
            emit('update:limit', val)
        }
    })
    const beginNum = computed({
        get(){
            return (currentPage.value - 1) * pageSize.value + 1;
        }
    })
    const endNum = computed({
        get(){
            return currentPage.value * pageSize.value;
        }
    })
    function handleSizeChange(val) {
        if (currentPage.value * val > props.total) {
            currentPage.value = 1
        }
        emit('pagination', { page: currentPage.value, limit: val })
        if (props.autoScroll) {
            scrollTo(0, 800)
        }
    }
    function handleCurrentChange(val) {
        emit('pagination', { page: val, limit: pageSize.value })
        if (props.autoScroll) {
            scrollTo(0, 800)
        }
    }
    //js代码
    onMounted(() => {
        let pageText = document.getElementsByClassName('el-pagination__goto')[0];
        console.log(pageText)
        console.log(pageText)
        console.log(pageText)
        if (pageText) { //可能存在不显示页码的情况，所以最好判断一下避免报错~;
            pageText.childNodes[0].nodeValue = '跳至';
        }
    })

</script>

<style scoped>
    .pagination {
        background: #fff;
        padding: 0px 0px;
        position: absolute;
        right: 100px;
        --el-pagination-button-height: 26px;
    }
    .pagination-container.hidden {
        display: none;
    }
    .pagination-container{
        width: 100%;
        height: 25px;
        margin-bottom: 10px;
        margin-top: 15px;
        padding: 10px 20px !important;
        position: relative;
    }




    .pagination-container >>> .el-pager li.is-active{
        background-color: transparent !important;
        color: #2779DC !important;
        border: 2px solid #2779DC;
    }
    .pagination-container >>> .el-pager li{
        background-color: transparent !important;
        color: #666666 !important;
        min-width: 20px;
        height: 24px;
        font-family: "Microsoft YaHei";
        margin-left: 10px;
    }

    .pagination-container >>>.el-input__inner{
        font-family: "Microsoft YaHei";
        text-align: center;
        min-width: 20px;
        height: 26px;
        color: #666666;
    }
    .pagination-container .totalShow{
        font-family: "Microsoft YaHei";
        font-weight: normal;
        color: #666666;
        font-size: 14px;
        height: 14px;
    }
    .pagination-container >>> .el-pagination__jump{
        font-family: "Microsoft YaHei";
        font-weight: normal;
        color: #666666;
        margin-left: 0px;
    }
    .pagination-container >>> .el-pagination__sizes .el-input__inner{
        margin-left: 15px;
        width: 30px;
        border-radius:0
    }
    .pagination-container >>> .el-pagination__editor .el-input{
        width: 0px;
    }

    :deep(.el-input__suffix){
        right: 21px;
    }

    :deep(.el-pagination__editor){
        min-width: 50px;
    }

    :deep(.el-pagination .el-select .el-input){
        width: 120px;
    }

    :deep(.el-pagination__editor.el-input .el-input__inner){
        border-radius:0
    }

</style>
