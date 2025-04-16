<template>
  <button>
    <span>
      <slot>Hover</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "ar-button-2"
};

// 文档绑定，在打包 Web Components 时读取此属性以生成文档
export const meta = {
  name: "ar-button-2",
  type: "button",
  theme: "dark",
  slot: "Hover",
  variables: [
    { name: "--width", description: "组件宽度", default: "160px" },
    { name: "--height", description: "组件高度", default: "55px" },
    { name: "--font-size", description: "字体大小", default: "15px" },
    { name: "--line-height", description: "行高", default: "48px" },
    { name: "--letter-spacing", description: "字间距", default: "5px" },
    { name: "--font-weight", description: "字体粗细", default: "bold" },
    { name: "--text-transform", description: "文字转换格式", default: "uppercase" },
    { name: "--box-reflect", description: "镜像效果", default: "bottom 1px linear-gradient(transparent, #0004)" },
    { name: "--span-offset-top", description: "按钮内边距顶部", default: "4px" },
    { name: "--span-offset-right", description: "按钮内边距右侧", default: "4px" },
    { name: "--span-offset-bottom", description: "按钮内边距底部", default: "4px" },
    { name: "--span-offset-left", description: "按钮内边距左侧", default: "4px" },
    { name: "--span-bg", description: "按钮内部背景色", default: "#2e2e2e" },
    { name: "--text-color", description: "按钮文字颜色", default: "rgba(255, 255, 255, 0.781)" },
    { name: "--hover-text-color", description: "按钮悬停时文字颜色", default: "rgba(255, 255, 255, 1)" },
    { name: "--transition", description: "过渡动画效果", default: "0.5s" },
    { name: "--before-bg-size", description: "前置伪元素背景大小", default: "400%" },
    { name: "--before-opacity", description: "前置伪元素初始透明度", default: "0" },
    { name: "--before-bg", description: "前置伪元素背景渐变", default: "linear-gradient(45deg, #91155d, #525296, #0f0, #ff0, #fb0094, #00f, #0f0, #ff0)" },
    { name: "--after-bg-size", description: "后置伪元素背景大小", default: "400%" },
    { name: "--after-filter", description: "后置伪元素滤镜效果", default: "blur(20px)" },
    { name: "--after-bg", description: "后置伪元素背景渐变", default: "linear-gradient(45deg, #91155d, #525296, #0f0, #ff0, #fb0094, #00f, #0f0, #ff0)" },
    { name: "--hover-opacity", description: "悬停时伪元素透明度", default: "1" },
    { name: "--animation", description: "伪元素动画设置", default: "animate123 20% linear infinite" },
    { name: "--span-before-height", description: "按钮文字前伪元素高度", default: "50%" },
    { name: "--span-before-bg", description: "按钮文字前伪元素背景色", default: "rgba(255, 255, 255, 0.1)" }
  ]
};
</script>

<style scoped>
button {
  position: relative;
  text-decoration: none;
  font-size: var(--font-size, 15px);
  text-transform: var(--text-transform, uppercase);
  letter-spacing: var(--letter-spacing, 5px);
  line-height: var(--line-height, 48px);
  width: var(--width, 160px);
  height: var(--height, 55px);
  cursor: pointer;
  font-weight: var(--font-weight, bold);
  -webkit-box-reflect: var(--box-reflect, bottom 1px linear-gradient(transparent, #0004));
}

button span {
  position: absolute;
  display: flex;
  justify-content: center;
  top: var(--span-offset-top, 4px);
  right: var(--span-offset-right, 4px);
  bottom: var(--span-offset-bottom, 4px);
  left: var(--span-offset-left, 4px);
  text-align: center;
  background: var(--span-bg, #2e2e2e);
  color: var(--text-color, rgba(255, 255, 255, 0.781));
  transition: var(--transition, 0.5s);
  z-index: 1;
}

button:hover span {
  color: var(--hover-text-color, rgba(255, 255, 255, 1));
}

button::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: var(--before-bg-size, 400%);
  opacity: var(--before-opacity, 0);
  transition: var(--transition, 0.5s);
  background: var(--before-bg, linear-gradient(45deg, #91155d, #525296, #0f0, #ff0, #fb0094, #00f, #0f0, #ff0));
  animation: var(--animation, animate123 20% linear infinite);
}

button::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: var(--after-bg-size, 400%);
  filter: var(--after-filter, blur(20px));
  transition: var(--transition, 0.5s);
  background: var(--after-bg, linear-gradient(45deg, #91155d, #525296, #0f0, #ff0, #fb0094, #00f, #0f0, #ff0));
  animation: var(--animation, animate123 20% linear infinite);
}

button:hover::before,
button:hover::after {
  opacity: var(--hover-opacity, 1);
}

@keyframes animate123 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 300% 0;
  }
  100% {
    background-position: 0 0;
  }
}

button span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--span-before-height, 50%);
  background: var(--span-before-bg, rgba(255, 255, 255, 0.1));
}
</style>
