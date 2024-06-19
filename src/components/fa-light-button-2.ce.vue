<template>
  <button><slot /></button>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { getDarkerColor, getLighterColor } from '@/utils'

defineOptions({ inheritAttrs: false })

type Props = {
  color: string
  width: any
  height: any
}

const props = withDefaults(defineProps<Props>(), {
  color: '#2c9caf',
  width: 'auto',
  height: 'auto'
})

const { color, width, height } = toRefs(props)

const outlineColor = computed(() => getLighterColor(color.value, 30))
const boxShadowColor = computed(() => getDarkerColor(color.value, 30))
</script>

<style scoped lang="scss">
$primary-color: v-bind(color);

button {
  width: v-bind(width);
  height: v-bind(height);
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  cursor: pointer;
  color: $primary-color;
  transition: all 1s;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  outline: 2px solid $primary-color;
}

button:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid v-bind(outlineColor);
  box-shadow: 4px 5px 17px -4px v-bind(boxShadowColor);
}

button:active {
  transform: scale(0.95);
}

button::before {
  content: '';
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: $primary-color;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}

button:hover::before {
  width: 250%;
}
</style>
