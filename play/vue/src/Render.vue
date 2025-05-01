<template>
  <ar-input-1 class="input1" :value="value" :change="onChange" @focus="onFocus" placeholder="用户名" />
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const value = ref("");

const onChange = (val: string) => {
  value.value = val;
};

const onFocus=()=>{
  console.log(value.value);
}

watchEffect(()=>{
  console.log(value.value);
  
})
</script>

<style>
.input1 {
  --width: 300px;
  --color: #c650b0;
}
</style>
