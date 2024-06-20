<template>
  <button><slot /></button>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { getDarkerColor } from '@/utils'

defineOptions({ inheritAttrs: false })

type Props = {
  color: string
  width: any
  height: any
}

const props = withDefaults(defineProps<Props>(), {
  color: '#7a00d9',
  width: 'auto',
  height: 'auto'
})

const { color, width, height } = toRefs(props)

const boxShadowColor = computed(() => getDarkerColor(color.value, 10))
</script>

<style scoped lang="scss">
button {
  width: v-bind(width);
  height: v-bind(height);
  padding: 17px 40px;
  border-radius: 50px;
  cursor: pointer;
  border: 0;
  background-color: #ffffff;
  box-shadow: #0000000d 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all 0.5s ease;
}

button:hover {
  letter-spacing: 3px;
  background-color: v-bind(color);
  color: #ffffff;
  box-shadow: v-bind(boxShadowColor) 0px 7px 29px 0px;
}

button:active {
  transform: translateY(10px);
  transition: 100ms;
}
</style>
