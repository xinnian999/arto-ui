<template>
  <button :style="styles"><slot /></button>
</template>

<script setup lang="ts">
import { getDarkerColor, getLighterColor } from '@/utils'
import { computed } from 'vue'

type Props = {
  color: string
  width: any
  height: any
}

const props = withDefaults(defineProps<Props>(), {
  color: '#2c9caf'
})

const styles = computed(() => {
  const { color, width, height } = props

  return {
    ['--width']: width,
    ['--height']: height,
    ['--primary-color']: color,
    ['--outline-color']: getLighterColor(color, 30),
    ['--box-shadow-color']: getDarkerColor(color, 30)
  }
})
</script>

<style scoped lang="scss">
$primary-color: var(--primary-color);

button {
  width: var(--width);
  height: var(--height);
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
  outline: 2px solid var(--outline-color);
  box-shadow: 4px 5px 17px -4px var(--box-shadow-color);
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
