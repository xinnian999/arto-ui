<style scoped>
button {
  padding: var(--padding, 18px 40px);
  font-size: var(--font-size, 16px);
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: var(--color, #000);
  background-color: #fff;
  border: none;
  border-radius: var(--border-radius, 45px);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  width: var(--width, auto);
  height: var(--height, auto);
}

button:hover {
  background-color: var(--color, #23c483);
  box-shadow: 0px 15px 20px
    color-mix(in srgb, var(--color, #23c483) 40%, transparent);
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}
</style>

<template>
  <button><slot>Button</slot></button>
</template>

<script>
export const meta = {
  type: "button",
  theme: "light",
  slot: "Button",
  cssVars: [
    { name: "--width", description: "宽度", default: "auto" },
    { name: "--height", description: "高度", default: "auto" },
    { name: "--color", description: "主题色", default: "#23c483" },
    { name: "--border-radius", description: "圆角", default: "45px" },
    { name: "--font-size", description: "字体大小", default: "16px" },
    { name: "--padding", description: "内边距", default: "18px 40px" },
  ],
};
</script>
