<style scoped>
.input-group {
  position: relative;
}

.input {
  border: solid 1.5px #9e9e9e;
  border-radius: 1rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: #f5f5f5;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--width, auto);
}

.user-label {
  position: absolute;
  left: 15px;
  color: #e8e8e8;
  pointer-events: none;
  transform: translateY(1rem);
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.input:focus,
input:valid {
  outline: none;
  border: 1.5px solid var(--color, #1a73e8);
}

.input:focus ~ label,
input:valid ~ label {
  transform: translateY(-50%) scale(0.8);
  background-color: var(--label-bg, #212121);
  padding: 0 0.2em;
  color: var(--color, #1a73e8);
}
</style>

<template>
  <div class="input-group">
    <input
      required
      v-bind="$attrs"
      type="text"
      autocomplete="off"
      class="input"
    />
    <label class="user-label">First Name</label>
  </div>
</template>

<script setup lang="ts">
const { change } = defineProps<{
  change: (e: any) => void;
}>();

const onInput = (e: any) => {
  change(e.target.value);
};
</script>

<script lang="ts">
export const meta = {
  type: "input",
  theme: "dark",
  cssVars: [
    { name: "--width", description: "宽度", default: "auto" },
    { name: "--color", description: "主题色", default: "#1a73e8" },
    { name: "--label-bg", description: "标签背景色", default: "#212121" },
  ],
  props: [
    {
      label: "value",
      type: "string",
      default: "",
      description: "输入框的值",
    },
    {
      label: "change",
      type: "(val: string) => void",
      default: "() => {}",
      description: "输入框的值改变事件",
    },
    {
      label: "...",
      type: "",
      default: "",
      description: "其他参数和事件与原生Input一致",
    },
  ],
};
</script>
