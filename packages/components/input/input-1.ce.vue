<style scoped>
.wave-group {
  position: relative;
}

.wave-group .input {
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: var(--width, 200px);
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;
}

.wave-group .input:focus {
  outline: none;
}

.wave-group .label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  display: flex;
}

.wave-group .label-char {
  transition: 0.2s ease all;
  transition-delay: calc(var(--index) * 0.05s);
}

.wave-group .input:focus ~ label .label-char,
.wave-group .input:valid ~ label .label-char {
  transform: translateY(-25px);
  font-size: 14px;
  color: var(--color, #5264ae);
}

.wave-group .bar {
  position: relative;
  display: block;
  width: calc(var(--width, 200px) + 20px);
}

.wave-group .bar:before,
.wave-group .bar:after {
  content: "";
  height: 2px;
  width: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--color, #5264ae);
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.wave-group .input:focus ~ .bar:before,
.wave-group .input:focus ~ .bar:after {
  width: 100%;
}
</style>

<template>
  <div class="wave-group">
    <input
      v-bind="$attrs"
      required
      type="text"
      class="input"
      @input="onInput"
    />
    <span class="bar"></span>
    <label class="label">
      <span
        class="label-char"
        v-for="(char, index) in placeholder"
        :style="`--index: ${index}`"
        :key="index"
        >{{ char }}</span
      >
    </label>
  </div>
</template>

<script setup lang="ts">
const { placeholder = "Name", change = () => {} } = defineProps<{
  change: (e: any) => void;
  placeholder: string;
}>();

const onInput = (e: any) => {
  change(e.target.value);
};
</script>

<script lang="ts">
export const meta = {
  type: "input",
  theme: "light",
  cssVars: [
    { name: "--width", description: "宽度", default: "200px" },
    { name: "--color", description: "主题色", default: "#5264ae" },
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
