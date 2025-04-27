<style scoped>
.loader {
  --this-cell-size: var(--cell-size, 52px);
  --this-cell-spacing: var(--cell-spacing, 1px);
  --this-cells: var(--cells, 3);
  --this-total-size: calc(
    var(--this-cells) * (var(--this-cell-size) + 2 * var(--this-cell-spacing))
  );
  display: flex;
  flex-wrap: wrap;
  width: var(--this-total-size);
  height: var(--this-total-size);
}

.cell {
  flex: 0 0 var(--this-cell-size);
  margin: var(--this-cell-spacing);
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 4px;
  animation: 1.5s ripple ease infinite;
}

.cell.d-1 {
  animation-delay: 100ms;
}

.cell.d-2 {
  animation-delay: 200ms;
}

.cell.d-3 {
  animation-delay: 300ms;
}

.cell.d-4 {
  animation-delay: 400ms;
}

.cell:nth-child(1) {
  --cell-color: #00ff87;
}

.cell:nth-child(2) {
  --cell-color: #0cfd95;
}

.cell:nth-child(3) {
  --cell-color: #17fba2;
}

.cell:nth-child(4) {
  --cell-color: #23f9b2;
}

.cell:nth-child(5) {
  --cell-color: #30f7c3;
}

.cell:nth-child(6) {
  --cell-color: #3df5d4;
}

.cell:nth-child(7) {
  --cell-color: #45f4de;
}

.cell:nth-child(8) {
  --cell-color: #53f1f0;
}

.cell:nth-child(9) {
  --cell-color: #60efff;
}

/*Animation*/
@keyframes ripple {
  0% {
    background-color: transparent;
  }

  30% {
    background-color: var(--cell-color);
  }

  60% {
    background-color: transparent;
  }

  100% {
    background-color: transparent;
  }
}
</style>

<template>
  <div class="loader">
    <div class="cell d-0"></div>
    <div class="cell d-1"></div>
    <div class="cell d-2"></div>

    <div class="cell d-1"></div>
    <div class="cell d-2"></div>

    <div class="cell d-2"></div>
    <div class="cell d-3"></div>

    <div class="cell d-3"></div>
    <div class="cell d-4"></div>
  </div>
</template>

<script lang="ts">
export const meta = {
  type: "loading",
  theme: "dark",
  cssVars: [
    { name: "--cell-size", description: "单元格大小", default: "52px" },
    { name: "--cell-spacing", description: "单元格间距", default: "1px" },
    { name: "--cells", description: "单元格数量", default: "3" },
  ],
};
</script>
