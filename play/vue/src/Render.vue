<template>
  <ar-input-3 class="input1" label="用户名" :value="value" :change="change" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref("2");

const change = (val: string) => {
  value.value = val;
};
</script>

<style>
.input1 {
  --width: 300px;
  --color: #c650b0;
}
</style>
