<template>

  <div class="button-container">
    <span>选中 {{ selectedCount }} 条</span>
    <div class="button-group">
      <el-button>删除</el-button>
      <el-button>导出</el-button>
      <el-button>导入</el-button>
      <el-button @click="handleAdd">新增</el-button>
    </div>
  </div>

  <el-table :data="billTableList" stripe
            style="width: 100%"
            @selection-change="handleSelectionChange"
            :row-key="(row)=>{return row.id}"
            :height="isShow==true? 'calc(100vh - 805px)':'calc(100vh - 280px)'"
            :row-class-name="'myTableRowClassName'"
            :header-cell-style="{'text-align':'center' , 'border-right':'10px solid #152440'}"

  >
    <el-table-column type="selection" :reserve-selection="true" width="55"
                     align="center"/>
    <el-table-column label="序号" align="center" width="60">
      <template #default="scope">
        {{
          scope.$index +
          1 +
          (queryParams.pageNum - 1) * queryParams.pageSize
        }}
      </template>
    </el-table-column>
    <el-table-column prop="a1" label="金" width="180" align="center"/>
    <el-table-column prop="a2" label="铂" width="180" align="center"/>
    <el-table-column prop="a3" label="银" width="180" align="center"/>
    <el-table-column prop="a4" label="铜" width="180" align="center"/>
    <el-table-column label="操作" width="180" align="center">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="mini" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
      :visible.sync="dialogVisible"
  title="对话框标题"
  width="30%">
  <p>这是对话框内容</p>
  <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
  </el-dialog>
  <pagination
      v-show="total>0"
      :total="total"
      :page-sizes="[30, 60, 90]"
      v-model:page="queryParams.pageNum"
      v-model:limit="queryParams.pageSize"
      @pagination="getBillManagement"
      class="custom-pagination"
  />

</template>


<script setup name="orderPage">
import {ref, reactive} from 'vue';
import {billManagementByPage} from "@/api/bill/bill.js";

// const billTableList = ref([]);
const billTableList = ref([]);
const total = ref(500);//页面数据总条数
const queryParams = reactive({
  pageNum: 1,
  pageSize: 30,
})//请求分页数据
const selectedCount = ref(0); // 选中数量
const dialogVisible = ref(true)

const getBillManagement = () => {
  billManagementByPage(queryParams).then(res => {
    billTableList.value = res.billManagementList;
  }).catch(error => {
    console.error("Error fetching bill management:", error);
  });
}
const handleSelectionChange = (selection) => {
  selectedCount.value = selection.length; // 更新选中数量
};

getBillManagement();

const handleAdd = () => {
  // 新增行逻辑
  // 打开模态框
  dialogVisible.value = true;
  console.log("dialogVisible",dialogVisible.value )
};
</script>

<style lang="scss" scoped>
:deep(.el-table__header th) {
  background-color: #f2f2f2 !important;
}

/* 自定义分页组件样式 */
.custom-pagination {
  font-size: 16px; /* 调整分页栏的字体大小 */
  margin-top: 20px; /* 调整分页栏与表格之间的间距 */
}

.button-group {
  margin-left: 20px; /* 增加按钮组与选中数量之间的左侧间距 */
  display: flex;
}

.button-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

/* 选中数量样式 */
.selected-info {
  margin-right: 20px; /* 调整选中数量与按钮组之间的右侧间距 */
}

/* 按钮组样式 */
</style>