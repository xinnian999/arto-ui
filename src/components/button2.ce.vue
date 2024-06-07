<template>
  <button><slot /></button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps<{ color: string }>()

const getLighterColor = (color, percent) => {
  const num = parseInt(color.slice(1), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
      .toUpperCase()
  )
}

onMounted(() => {})
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
