<style scoped>
.container{
  position: relative;
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  height: var(--size, 96px);
  width: var(--size, 96px);
  animation: rotate_3922 1.2s linear infinite;
  background-color: #5999b6;
  background-image: var(--gradient, linear-gradient(#9b59b6, #84cdfa, #5ad1cd));
}

.loading span {
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background-color: #5999b6;
  background-image: var(--gradient, linear-gradient(#9b59b6, #84cdfa, #5ad1cd));
}

.loading span:nth-of-type(1) {
  filter: blur(5px);
}

.loading span:nth-of-type(2) {
  filter: blur(10px);
}

.loading span:nth-of-type(3) {
  filter: blur(25px);
}

.loading span:nth-of-type(4) {
  filter: blur(50px);
}

.loading::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background-color: #fff;
  border: solid 5px #ffffff;
  border-radius: 50%;
}

@keyframes rotate_3922 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>

<template>
  <div class="container">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export const meta = {
  type: "loading",
  theme: "light",
  cssVars: [
    { name: "--size", description: "大小", default: "96px" },
    {
      name: "--gradient",
      description: "渐变",
      default: "linear-gradient(#9b59b6, #84cdfa, #5ad1cd)",
    },
  ],
};
</script>
