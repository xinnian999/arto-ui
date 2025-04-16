<template>
  <div class="components-container">
    <el-tabs
      tab-position="left"
      class="tabs"
      type="card"
    >
      <el-tab-pane label="按钮 Button">
        <List :data-source="metas.filter((item) => item.type === 'button')" />
      </el-tab-pane>
      <el-tab-pane label="开关 Switch">开关</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { metas } from "arto-ui/dev";
import List from "./List.vue";
</script>

<style lang="scss">
.components-container{
  padding:10px;
  background-color: #eee;
  min-height: 90vh;
}
.tabs{
  height: 100%;
}

.el-tabs__item {
  background-color: #fff;
}
</style>
