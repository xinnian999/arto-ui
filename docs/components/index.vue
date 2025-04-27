<template>
  <div class="components-container">
    <el-tabs tab-position="left" class="tabs" type="card" v-model="activeTab">
      <el-tab-pane
        v-for="item in dataSources"
        :key="item.value"
        :label="item.label"
        :name="item.value"
      >
        <List :data-source="item.items" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { metas } from "arto-ui/dev";
import { ref, watch } from "vue";
import List from "./List.vue";

const query = new URLSearchParams(location.search);

const activeTab = ref(query.get("type") || "button");

console.log(metas);

const dataSources = [
  {
    label: "按钮 Button",
    value: "button",
    items: metas.filter((item) => item.type === "button"),
  },
  {
    label: "开关 Switch",
    value: "switch",
    items: metas.filter((item) => item.type === "switch"),
  },
  {
    label: "加载 Loading",
    value: "loading",
    items: metas.filter((item) => item.type === "loading"),
  },
];

watch(activeTab, (val) => {
  // 拼接参数并且不刷新页面
  history.pushState(null, "", `?type=${val}`);
});
</script>

<style lang="scss">
.components-container {
  padding: 10px;
  background-color: #eee;
  min-height: calc(100vh - 65px);
}
.tabs {
  height: 100%;
}

.el-tabs__item {
  background-color: #fff;
}
</style>
