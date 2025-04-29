<style scoped>
/* From Uiverse.io by Smit-Prajapati */
.input-container {
  display: flex;
  background: white;
  border-radius: 1rem;
  background: linear-gradient(173deg, #23272f 0%, #14161a 100%);
  box-shadow: 10px 10px 20px #0e1013, -10px -10px 40px #383e4b;
  padding: 0.3rem;
  gap: 0.3rem;
  width: var(--width, 300px);
}

.input-container input {
  border-radius: 0.8rem;
  background: #23272f;
  box-shadow: inset 5px 5px 10px #0e1013, inset -5px -5px 10px #383e4b,
    0px 0px 100px rgba(255, 212, 59, 0), 0px 0px 100px rgba(255, 102, 0, 0);
  width: 100%;
  flex-basis: 100%;
  padding: 1rem;
  border: none;
  border: 1px solid transparent;
  color: white;
  transition: all 0.2s ease-in-out;
}

.input-container input:focus {
  border: 1px solid rgba(255, 212, 59);
  outline: none;
  box-shadow: inset 0px 0px 10px rgba(255, 102, 0, 0.5),
    inset 0px 0px 10px rgba(255, 212, 59, 0.5),
    0px 0px 100px rgba(255, 212, 59, 0.5), 0px 0px 100px rgba(255, 102, 0, 0.5);
}

@media (max-width: 500px) {
  .input-container {
    flex-direction: column;
  }

  .input-container input {
    border-radius: 0.8rem;
  }
}
</style>

<template>
  <div class="input-container">
    <input :placeholder="placeholder" type="text" v-model="modelValue" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    label?: string;
    value: string;
    change: (e: any) => void;
    placeholder?: string;
  }>(),
  {
    label: "Name",
    value: "",
    change: () => {},
    placeholder: "Add Item",
  }
);

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
  ],
};
</script>
