<template>
  <div :class="['main', activeTab]">
    <div class="tabs">
      <div
        :class="{ tab: true, active: activeTab === key }"
        v-for="{ label, key } in tabConfig"
        @click="onTabChange(key)"
      >
        {{ label }}
      </div>
    </div>
    <Render />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Render from "./Render.vue";

const activeTab = ref("light");

const tabConfig = [
  { label: "Light", key: "light" },
  { label: "Dark", key: "dark" },
];

const onTabChange = (key: string) => {
  activeTab.value = key;

  localStorage.setItem("theme", key);
};

onMounted(() => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    activeTab.value = theme;
  }
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
}

.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.tabs {
  position: absolute;
  left: 20px;
  top: 20px;
  display: flex;
  border-radius: 8px;
  background-color: #555;
  color: #fff;
  overflow: hidden;
}

.tab {
  padding: 15px;
  cursor: pointer;
}

.tab.active {
  background-color: #000;
}

.light {
  background-color: #f0f0f0;
}

.dark {
  background-color: #333;
}
</style>
