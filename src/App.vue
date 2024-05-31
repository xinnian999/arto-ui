<script setup lang="ts">
// import FaButton from '@/components/Button.ce.vue'
</script>

<template>
  <fa-button :style="{color: 'red'}" @click="console.log(222)">点我</fa-button>
  <fa-button style="color: red">点我</fa-button>
</template>

<style scoped>
.fa-button{
  color: aqua;
}

</style>
