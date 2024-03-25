<template>
    <el-form  ref="formRef"  :model="form">
        <el-form-item label="性名" prop="name">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model="form.age" />
        </el-form-item>
        <el-form-item label="地址" prop="address">
            <el-input v-model="form.address" />
        </el-form-item>
        <el-form-item label="检索" prop="search">
            <el-input v-model="form.search" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit(formRef)">提交</el-button>
            <el-button type="primary" @click="onSearch(formRef)">检索</el-button>
            <el-button @click="resetForm(formRef)">重置表单</el-button>
        </el-form-item>
    </el-form>
</template>


<script lang="ts" setup>
    import { reactive, ref } from 'vue'
    import {trackEvent, trackSiteSearch} from "@/utils/js/matomo"
    import type ,{ FormInstance } from 'element-plus'
    const formRef = ref<FormInstance>()
    const form = reactive({
        name: '',
        age: '',
        date1: '',
        address: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        search: '',
    })
    const onSubmit=(formEl)=>{
        trackEvent("按钮","提交表单","提交个人信息")
        alert("提交成功！！！")
    }
    const onSearch=(formEl: FormInstance | undefined) => {
        trackSiteSearch(form.search,"表单检索","检索个人信息")
    }
    const resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) {
            return
        }else{
            formEl.resetFields()
        }
    }
</script>
<style scoped lang=less>

</style>