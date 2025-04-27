<style scoped>
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: var(--width, 3.5em);
  height: var(--height, 2em);
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border: 1px solid #adb5bd;
  transition: 0.4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.27em;
  bottom: 0.25em;
  background-color: #adb5bd;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--color, #007bff);
  border: 1px solid var(--color, #007bff);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--color, #007bff);
}

input:checked + .slider:before {
  transform: translateX(1.4em);
  background-color: #fff;
}
</style>

<template>
  <label class="switch">
    <input type="checkbox" v-model="modelValue" />
    <span class="slider"></span>
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
    { name: "--width", description: "宽度", default: "3.5em" },
    { name: "--height", description: "高度", default: "2em" },
    { name: "--color", description: "主题色", default: "#007bff" },
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
