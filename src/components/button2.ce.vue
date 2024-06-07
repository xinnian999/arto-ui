<template>
  <button :style="styles"><slot /></button>
</template>

<script setup lang="ts">
import { getDarkerColor, getLighterColor } from '@/utils'

const props = withDefaults(defineProps<{ color: string }>(), { color: '#2c9caf' })

const styles = `
--primary-color:${props.color};
--outline-color:${getLighterColor(props.color, 10)};
--box-shadow-color:${getDarkerColor(props.color, 20)};
`
</script>

<style scoped lang="scss">
$primary-color: var(--primary-color, #2c9caf);
$outline-color: var(--outline-color, #70bdca);
$box-shadow-color: var(--box-shadow-color, #268391);

button {
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  cursor: pointer;
  color: $primary-color;
  transition: all 1000ms;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  outline: 2px solid $primary-color;
}

button:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid $outline-color;
  box-shadow: 4px 5px 17px -4px $box-shadow-color;
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
