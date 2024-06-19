<template>
  <button class="shadow__btn">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'

type Props = {
  color: string
  width: any
  height: any
}

const props = withDefaults(defineProps<Props>(), {
  color: 'rgb(0, 140, 255)',
  width: 'auto',
  height: 'auto'
})

const { color, width, height } = toRefs(props)
</script>

<style scoped lang="scss">
$primary-color: v-bind(color);

.shadow__btn {
  width: v-bind(width);
  height: v-bind(height);
  padding: 10px 20px;
  border: none;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  letter-spacing: 4px;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.5s;
  transition-property: box-shadow;
}

.shadow__btn {
  background: $primary-color;
  box-shadow: 0 0 25px $primary-color;
}

.shadow__btn:hover {
  box-shadow:
    0 0 5px $primary-color,
    0 0 25px $primary-color,
    0 0 50px $primary-color,
    0 0 100px $primary-color;
}
</style>
