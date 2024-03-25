<template>
    <div class="common-layout" height="100%">
    <el-container>
      <el-aside width="auto">
        <common-aside/>
      </el-aside>
      <el-container>
        <el-header>
          <commonHeaderVue></commonHeaderVue>
        </el-header>
        <common-tag />
        <el-main class="home" ref="scrollbox">
          <router-view/>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
  
  </template>
  
  <script lang="ts" setup>
  import commonHeaderVue from '@/components/common-header/Common-header.vue'
  import CommonAside from '@/components/common-aside/Common-aside.vue'
  import CommonTag from '@/components/common-tag/Common-tag.vue'
  
  
  </script>
  
  <style lang="less">
  
  @import '@styles/global.less';
  @import '@styles/global.css';
  html,
  body {
  padding: 0;
  margin: 0;
  }
  .home{
    overflow: hidden;
  }
  #app {
  height: 100vh;
  overflow: hidden;
  width: 100%;
  }
  .el-header {
  background-color:#F5FFFA;
  color: white;
  text-align: center;
  line-height: 60px;
  border-bottom: black 2px solid;
  }
  .el-footer{
  color: #333;
  text-align: center;
  line-height: 60px;
  border-top: black 2px solid;
  }
  
  .el-aside {
  height: 100vh;
  color: black;
  text-align: center;
    overflow: hidden;
  }
  
  .el-main {
  height:80vh;
  color: black;
    overflow: auto;
  
  }
  
  body>.el-container {
  margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
  line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
  line-height: 320px;
  }
  </style>
  
