<template>
  <button class="frutiger-button">
    <div class="inner">
      <div class="top-white"></div>
      <span class="text"><slot>Frutiger Button</slot></span>
    </div>
  </button>
</template>

<script>
export default {
  name: "ar-button-1",
};

// 文档绑定
// 你在打包 Web Components 时，读取这个属性就能生成文档
export const meta = {
  name: "ar-button-1",
  type: "button",
  theme: "dark",
  slot: "Frutiger Button",
  variables: [
    { name: "--padding", description: "按钮整体内边距", default: "2px" },
    { name: "--border-radius", description: "按钮圆角大小", default: "6px" },
    { name: "--width", description: "按钮宽度", default: "auto" },
    { name: "--height", description: "按钮高度", default: "auto" },
    {
      name: "--text-shadow",
      description: "文字阴影",
      default: "1px 1px #000a",
    },
    {
      name: "--bg",
      description: "按钮背景渐变",
      default: "linear-gradient(#006caa, #00c3ff)",
    },
    {
      name: "--shadow",
      description: "默认阴影",
      default: "0px 4px 6px 0px #0008",
    },
    {
      name: "--hover-shadow",
      description: "悬浮时阴影",
      default: "0px 6px 12px 0px #0009",
    },
    {
      name: "--active-shadow",
      description: "按下时阴影",
      default: "0px 0px 0px 0px #0000",
    },
    { name: "--inner-padding", description: "内部容器内边距", default: "1em" },
    { name: "--inner-radius", description: "内部容器圆角", default: "4px" },
    {
      name: "--inner-bg",
      description: "内部容器背景",
      default:
        "radial-gradient(circle at 50% 100%, #30f8f8 10%, #30f8f800 55%), linear-gradient(#00526a, #009dcd)",
    },
    {
      name: "--shine-gradient",
      description: "高光动画渐变",
      default: "linear-gradient(-65deg, #0000 40%, #fff7 50%, #0000 70%)",
    },
    {
      name: "--highlight-bg",
      description: "顶部白色高光背景",
      default:
        "radial-gradient(circle at 50% -270%, #fff 45%, #fff6 60%, #fff0 60%)",
    },
    {
      name: "--inner-shadow",
      description: "内部 inset 阴影",
      default: "inset 0px 2px 8px -2px #0000",
    },
    {
      name: "--inner-shadow-active",
      description: "按下时的 inset 阴影",
      default: "inset 0px 2px 8px -2px #000a",
    },
    { name: "--text-color", description: "文字颜色", default: "white" },
    { name: "--font-weight", description: "文字粗细", default: "550" },
    { name: "--transition", description: "过渡动画效果", default: "0.3s all" },
  ],
};
</script>

<style scoped>
.frutiger-button {
  cursor: pointer;
  position: relative;
  padding: var(--padding, 2px);
  border-radius: var(--border-radius, 6px);
  border: 0;
  text-shadow: var(--text-shadow, 1px 1px #000a);
  background: var(--bg, linear-gradient(#006caa, #00c3ff));
  box-shadow: var(--shadow, 0px 4px 6px 0px #0008);
  transition: var(--transition, 0.3s all);
  width: var(--width, auto);
  height: var(--height, auto);
}

.frutiger-button:hover {
  box-shadow: var(--hover-shadow, 0px 6px 12px 0px #0009);
}

.frutiger-button:active {
  box-shadow: var(--active-shadow, 0px 0px 0px 0px #0000);
}

.inner {
  position: relative;
  inset: 0px;
  padding: var(--inner-padding, 1em);
  border-radius: var(--inner-radius, 4px);
  background: var(
    --inner-bg,
    radial-gradient(circle at 50% 100%, #30f8f8 10%, #30f8f800 55%),
    linear-gradient(#00526a, #009dcd)
  );
  overflow: hidden;
  transition: inherit;
}

.inner::before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(
    --shine-gradient,
    linear-gradient(-65deg, #0000 40%, #fff7 50%, #0000 70%)
  );
  background-size: 200% 100%;
  background-repeat: no-repeat;
  animation: thing 3s ease infinite;
}

@keyframes thing {
  0% {
    background-position: 130%;
    opacity: 1;
  }
  to {
    background-position: -166%;
    opacity: 0;
  }
}

.top-white {
  position: absolute;
  border-radius: inherit;
  inset: 0 -8em;
  background: var(
    --highlight-bg,
    radial-gradient(circle at 50% -270%, #fff 45%, #fff6 60%, #fff0 60%)
  );
  transition: inherit;
}

.inner::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  transition: inherit;
  box-shadow: var(--inner-shadow, inset 0px 2px 8px -2px #0000);
}

.frutiger-button:active .inner::after {
  box-shadow: var(--inner-shadow-active, inset 0px 2px 8px -2px #000a);
}

.text {
  position: relative;
  z-index: 1;
  color: var(--text-color, white);
  font-weight: var(--font-weight, 550);
  transition: inherit;
}
</style>
