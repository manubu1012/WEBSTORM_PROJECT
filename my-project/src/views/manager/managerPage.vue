<template>
    <commonTabVue
                  :tableLabel="tableLabel" :config="config" @changePage="getList()"
                  @edit="editUser" @del="delUser" @exportRow="exportRow"  @exportRowALl="exportRowALl"/>
</template>


<script setup name="managerPage">
    import { ref} from 'vue'
    import commonTabVue from '@/components/common-tab/Common-tab.vue';
    const tableLabel=ref([])
    const config=ref({})
    const getList=()=>{
        console.log("getList")
        console.log("getList")
        console.log("getList")
        console.log("getList")
    }
    const delUser=()=>{
        console.log("delUser")
        console.log("delUser")
        console.log("delUser")
        console.log("delUser")
    }
    const editUser=()=>{
        console.log("editUser")
        console.log("editUser")
        console.log("editUser")
        console.log("editUser")
    }
    const exportRow=()=>{
        console.log("exportRow")
        console.log("exportRow")
        console.log("exportRow")
        console.log("exportRow")

    }
    const exportRowALl=()=>{
        console.log("exportRowALl")
        console.log("exportRowALl")
        console.log("exportRowALl")
        console.log("exportRowALl")
    }
</script>
<style scoped lang=less>

</style>