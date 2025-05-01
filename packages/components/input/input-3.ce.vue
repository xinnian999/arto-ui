<style scoped>
.input-container {
  position: relative;
  margin: var(--margin, 0);
}

label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

.input[type="text"] {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  width: var(--width, 200px);
  outline: none;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  transition: width 0.3s;
}

.input[type="text"]:focus + .underline {
  width: 100%;
}

@keyframes floating-label {
  0% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(-25px);
    opacity: 0;
  }
}

.input[type="text"]:placeholder-shown + label {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 14px;
  color: #777;
  pointer-events: none;
  transition: transform 0.3s, font-size 0.3s, color 0.3s;
}

.input[type="text"]:focus:not(:placeholder-shown) + label {
  transform: translateY(-25px);
  font-size: 12px;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  animation: floating-label 0.3s forwards;
}
</style>

<template>
  <div class="input-container">
    <input
      placeholder="Enter your name"
      v-bind="$attrs"
      type="text"
      class="input"
      @input="onInput"
    />
    <div class="underline"></div>
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
  theme: "light",
  cssVars: [
    { name: "--width", description: "宽度", default: "auto" },
    { name: "--margin", description: "外边距", default: "0" },
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
