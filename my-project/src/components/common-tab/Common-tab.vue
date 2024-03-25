<template>
    <div class="common-table">
        <div class="el_top_button">
            <!--            <el-button  type="primary" @click="toggleSelection()">取消选择</el-button>-->
            <el-button type="primary" @click="exportRow()">导出当前所选行</el-button>
            <el-button type="primary" @click="exportRowALl()">导出全部数据</el-button>
        </div>
        <!--        <el-table :data="tableData" height="90%" :table-layout="tableLayout"  ref="multipleTable"  @selection-change="handleSelectionChange">-->
        <!--            <el-table-column type="selection" width="55" color="black" />-->
        <!--            <slot name="imgColumn">-->
        <!--            </slot>-->
        <!--            <el-table-column show-overflow-tooltip v-for="item in tableLabel" :key="item.prop" :label="item.label"-->
        <!--                             :width="item.width ? item.width :''">-->
        <!--                <template #default="scope">-->
        <!--                    <span style="margin-left:10px">{{ scope.row[item.prop] }}</span>-->
        <!--                </template>-->
        <!--            </el-table-column>-->
        <!--        </el-table>-->
        <!--        <el-pagination layout="prev,pager,next" :total="localConfig.total" v-model:current-page="localConfig.page"-->
        <!--                       @current-change="changePage" :page-size="localConfig.size"></el-pagination>-->
        <slot name="operation">
        </slot>
        <slot name="imgColumnOperate">
        </slot>
    </div>
</template>


<script setup name="Common-tab.vue">
    import {ref,getCurrentInstance} from 'vue'
    const instance = getCurrentInstance();

    const exportRow =()=>{
       instance.emit("exportRow", "ceshishuju")
    };
    const exportRowALl =()=>{
    };
    const delUser =()=>{
    };
    const editUser =()=>{
    };
    const getList =()=>{
    };


</script>
<style scoped lang=less>
    .common-table {
        height: calc(100% - 10px);
        background-color: #fff;
        position: relative;

        .pager {
            position: absolute;
            bottom: 0;
            right: 20px;
        }

        .el_top_button {
            padding-top: 30px;
            padding-left: 20px;
            padding-bottom: 10px;
            display: flex;
            justify-content: left;
        }
    }
</style>