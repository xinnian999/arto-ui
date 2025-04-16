<template>
  <div class="components-container">
    <div class="components-list">
      <div class="component-item" v-for="meta in metas" :key="meta.name">
        <div :class="`${meta.theme}Box`">
          <component :is="meta.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { metas } from "arto-ui/dev";
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
}
.components-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.component-item {
  flex: 1;
}
</style>
