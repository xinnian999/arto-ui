<template>
  <div class="components-list">
    <div class="component-item" v-for="meta in dataSource" :key="meta.name">
      <div :class="`${meta.theme}Box`">
        <component :is="meta.name" />
      </div>

      <div class="footer">
        <div class="name">{{ meta.name }}</div>

        <div class="actions">
          <el-button size="small" @click="handleCustomize(meta)">
            定制
          </el-button>

          <el-button type="primary" @click="copyCode(meta)" size="small">
            复制
          </el-button>
        </div>
      </div>
    </div>

    <el-drawer
      v-if="activeMeta"
      v-model="drawer"
      :title="activeMeta.name"
      :size="700"
    >
      <div>
        <div class="drawer-title">CSS变量</div>
        <el-table :data="activeMeta.variables" :border="true">
          <el-table-column property="name" label="变量名" />
          <el-table-column property="description" width="180" label="描述" />
          <el-table-column property="default" width="180" label="默认值" />
        </el-table>
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { copyCode } from "./utils";

defineProps<{
  dataSource: any[];
}>();

const drawer = ref(false);

const activeMeta = ref<any>(null);

const handleCustomize = (meta: any) => {
  drawer.value = true;
  activeMeta.value = meta;
};
</script>

<style lang="scss">
.lightBox {
  height: 300px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.darkBox {
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.components-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.component-item {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .name {
      font-weight: bold;
    }
    .actions {
      display: flex;
    }
  }
}

.el-drawer__header {
  margin-bottom: 10px;
}

.drawer-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  border-left: 4px solid #409eff;
  padding-left: 10px;
}
</style>
