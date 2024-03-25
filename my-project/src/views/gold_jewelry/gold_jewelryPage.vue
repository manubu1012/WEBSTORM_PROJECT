<template>
    <el-table :data="userTableList" stripe
              style="width: 100%"
              @selection-change="handleSelectionChange"
              :row-key="(row)=>{return row.userId}"
              :height="isShow==true? 'calc(100vh - 805px)':'calc(100vh - 280px)'"
              :row-class-name="'myTableRowClassName'"
              :header-cell-style="{'text-align':'center' , 'border-right':'10px solid #152440'}"

    >
        <el-table-column type="selection" :reserve-selection="true" width="55" align="center"/>
        <el-table-column label="序号"  align="center"  width="60" >
            <template #default="scope">
                {{
                scope.$index +
                1+
                (queryParams.pageNum - 1) * queryParams.pageSize
                }}
            </template>
        </el-table-column>
        <el-table-column prop="picId" label="picId" width="380" />
        <el-table-column prop="picName" label="picName" width="180" />
        <el-table-column prop="picType" label="picType" width="180" />
        <el-table-column prop="createTime" label="createTime" width="280" />
        <el-table-column prop="updateTime" label="updateTime" width="280" />
        <el-table-column prop="picAddress" label="picAddress" width="680" />

    </el-table>
    <pagination
            v-show="total>0"
            :total="total"
            :page-sizes="[30, 60, 90]"
            v-model:page="queryParams.pageNum"
            v-model:limit="queryParams.pageSize"
            @pagination="getPicEntityByPage"
    />
</template>


<script setup name="gold_jewelryPage">
    import { ref ,reactive} from 'vue';
    import {picEntityByPage} from "@/api/pic/pic.js";

    const userTableList = ref([]);
    const userTableColumn = ref([]);
    const total = ref(500);//页面数据总条数
    const queryParams = reactive({
        pageNum : 1,
        pageSize: 30,
    })//请求分页数据
    const getPicEntityByPage = () => {
        picEntityByPage(queryParams).then(res => {
            userTableList.value=res.data.list
        })
    }
    const handleSelectionChange=()=>{

    }
    getPicEntityByPage();


</script>
<style lang="scss" scoped>
    // 修改头部背景
    :deep(.el-table__header th) {
        background: #f5fffa !important;
        height: 48px !important;
        border-top: 1px solid #2C61B3;

        .cell {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #102442;
            border-right: 1px solid #98a9b2;
        }
    }
</style>