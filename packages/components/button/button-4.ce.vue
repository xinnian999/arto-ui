<style scoped>
button {
  --border-width: 4px;
  appearance: none;
  position: relative;
  padding: var(--padding, 1em 2em);
  border: 0;
  background-color: #212121;
  font-family: "Roboto", Arial, "Segoe UI", sans-serif;
  font-size: var(--font-size, 18px);
  font-weight: 500;
  color: var(--color, #fff);
  z-index: 2;
  border-radius: var(--border-radius, 15px);
  cursor: pointer;
  width: var(--width, auto);
  height: var(--height, auto);
}

button::after {
  --m-i: linear-gradient(#000, #000);
  --m-o: content-box, padding-box;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: var(--border-width);
  border-radius: var(--border-radius, 15px);
  background-image: conic-gradient(
    #488cfb,
    #29dbbc,
    #ddf505,
    #ff9f0e,
    #e440bb,
    #655adc,
    #488cfb
  );
  -webkit-mask-image: var(--m-i), var(--m-i);
  mask-image: var(--m-i), var(--m-i);
  -webkit-mask-origin: var(--m-o);
  mask-origin: var(--m-o);
  -webkit-mask-clip: var(--m-o);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
  filter: hue-rotate(0);
  animation: rotate-hue linear 500ms infinite;
  animation-play-state: paused;
}

button:hover::after {
  animation-play-state: running;
}

@keyframes rotate-hue {
  to {
    filter: hue-rotate(1turn);
  }
}

button,
button::after {
  box-sizing: border-box;
}

button:active {
  --border-width: 5px;
}
</style>

<template>
  <button><slot>Hover me!</slot></button>
</template>

<script>
export const meta = {
  type: "button",
  theme: "dark",
  slot: "Hover me!",
  cssVars: [
    { name: "--width", description: "按钮宽度", default: "auto" },
    { name: "--height", description: "按钮高度", default: "auto" },
    { name: "--padding", description: "按钮内边距", default: "1em 2em" },
    { name: "--font-size", description: "按钮字体大小", default: "18px" },
    { name: "--color", description: "按钮文字颜色", default: "#fff" },
    { name: "--border-radius", description: "按钮圆角", default: "15px" },
  ],
};
</script>
