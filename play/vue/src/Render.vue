<template>
  <ar-switch-1
    class="ar-switch"
    :value="value"
    :change="change"
  ></ar-switch-1>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const value = ref(true);

watchEffect(() => {
  console.log('父组件',value.value);
});

const change = (val) => {
  value.value = val;
};
</script>

<style lang="scss">
.ar-switch::part(span-1) {
  background-color: aquamarine;
}
</style>
