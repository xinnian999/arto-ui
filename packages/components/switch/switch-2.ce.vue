<style scoped>
.checkbox {
  display: none;
}

.slider {
  width: var(--width, 60px);
  height: var(--height, 30px);
  background-color: lightgray;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border: 4px solid transparent;
  transition: 0.3s;
  box-shadow: 0 0 10px 0 rgb(0, 0, 0, 0.25) inset;
  cursor: pointer;
}

.slider::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transform: translateX(-30px);
  border-radius: 20px;
  transition: 0.3s;
  box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
}

.checkbox:checked ~ .slider::before {
  transform: translateX(30px);
  box-shadow: 0 0 10px 3px rgb(0, 0, 0, 0.25);
}

.checkbox:checked ~ .slider {
  background-color: var(--color, #2196f3);
}

.checkbox:active ~ .slider::before {
  transform: translate(0);
}
</style>

<template>
  <label class="switch">
    <input type="checkbox" class="checkbox" v-model="modelValue" />
    <div class="slider"></div>
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  value: boolean;
  change: (e: any) => void;
}>();

const modelValue = computed({
  get() {
    return props.value;
  },
  set(val: boolean) {
    props.change?.(val);
  },
});
</script>

<script lang="ts">
export const meta = {
  type: "switch",
  theme: "light",
  cssVars: [
    { name: "--width", description: "宽度", default: "60px" },
    { name: "--height", description: "高度", default: "30px" },
    { name: "--color", description: "主题色", default: "#2196f3" },
  ],
  props: [
    {
      label: "value",
      type: "boolean",
      default: false,
      description: "开关状态",
    },
    {
      label: "change",
      type: "(val: boolean) => void",
      default: "() => {}",
      description: "开关状态改变事件",
    },
  ],
};
</script>
