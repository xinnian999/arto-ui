<template>
  <div class="components-container">
    <div class="components-list">
      <div class="component-item" v-for="meta in metas" :key="meta.name">
        <div :class="`${meta.theme}Box`">
          <component :is="meta.name" />
        </div>

        <div class="footer">
          <div class="name">{{ meta.name }}</div>

          <div class="actions">
            <el-button> 查看CSS变量 </el-button>

            <el-button type="primary" @click="copyCode(meta)"> 复制 </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { metas } from "arto-ui/dev";
import { ElMessage } from "element-plus";

const copyCode = async (meta: any) => {
  const textArea = document.createElement("textarea");
  textArea.value = `
  <${meta.name}>${meta.slot}</${meta.name}>
  `;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  ElMessage.success("复制成功");
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

.components-container {
  padding: 20px;
  background-color: #eee;
  height: 100%;
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
</style>
