<style scoped>
button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-family: inherit;
  font-size: var(--font-size, 15px);
  width: var(--width, auto);
  height: var(--height, auto);
}

button.learn-more {
  font-weight: 600;
  color: var(--text-color, #382b22);
  text-transform: uppercase;
  padding: var(--padding, 1.25em 2em);
  background: var(--color, #fff0f0);
  border: 2px solid #b18597;
  border-radius: var(--border-radius, 0.75em);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1),
    -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1),
    -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.learn-more::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f9c4d2;
  border-radius: inherit;
  -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
  box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
  -webkit-transform: translate3d(0, 0.75em, -1em);
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    box-shadow 150ms cubic-bezier(0, 0, 0.58, 1),
    -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1),
    -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.learn-more:hover {
  background: #ffe9e9;
  -webkit-transform: translate(0, 0.25em);
  transform: translate(0, 0.25em);
}

button.learn-more:hover::before {
  -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
  box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
  -webkit-transform: translate3d(0, 0.5em, -1em);
  transform: translate3d(0, 0.5em, -1em);
}

button.learn-more:active {
  background: #ffe9e9;
  -webkit-transform: translate(0em, 0.75em);
  transform: translate(0em, 0.75em);
}

button.learn-more:active::before {
  -webkit-box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
  box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
  -webkit-transform: translate3d(0, 0, -1em);
  transform: translate3d(0, 0, -1em);
}
</style>

<template>
  <button class="learn-more">
    <slot>Learn More</slot>
  </button>
</template>

<script>
export const meta = {
  type: "button",
  theme: "light",
  slot: "Learn More",
  cssVars: [
    { name: "--width", description: "按钮宽度", default: "auto" },
    { name: "--height", description: "按钮高度", default: "auto" },
    { name: "--font-size", description: "字体大小", default: "15px" },
    { name: "--text-color", description: "文字颜色", default: "#382b22" },
    { name: "--padding", description: "内边距", default: "1.25em 2em" },
    { name: "--border-radius", description: "圆角", default: "0.75em" },
  ],
};
</script>
