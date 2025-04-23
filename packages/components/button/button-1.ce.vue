<style scoped>
button {
  position: relative;
  padding: var(--padding, 12px 35px);
  background: var(--color, #fec195);
  font-size: var(--font-size, 17px);
  font-weight: 500;
  color: var(--text-color, #181818);
  border: 3px solid var(--color, #fec195);
  border-radius: var(--border-radius, 8px);
  box-shadow: 0 0 0 var(--color, #fec1958c);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  width: var(--width, auto);
  height: var(--height, auto);
}

.star-1 {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
}

.star-2 {
  position: absolute;
  top: 45%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-3 {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-4 {
  position: absolute;
  top: 20%;
  left: 40%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-5 {
  position: absolute;
  top: 25%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-6 {
  position: absolute;
  top: 5%;
  left: 50%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.8s ease;
}

button:hover {
  background: transparent;
  color: var(--color, #fec195);
  box-shadow: 0 0 25px var(--color, #fec1958c);
}

button:hover .star-1 {
  position: absolute;
  top: -80%;
  left: -30%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-2 {
  position: absolute;
  top: -25%;
  left: 10%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-3 {
  position: absolute;
  top: 55%;
  left: 25%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-4 {
  position: absolute;
  top: 30%;
  left: 80%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-5 {
  position: absolute;
  top: 25%;
  left: 115%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:hover .star-6 {
  position: absolute;
  top: 5%;
  left: 60%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

button:active {
  transform: scale(0.95);
}

.fil0 {
  fill: #fffdef;
}
</style>

<template>
  <button v-part>
    <slot>Button</slot>
    <div class="star-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        version="1.1"
        style="
          shape-rendering: geometricPrecision;
          text-rendering: geometricPrecision;
          image-rendering: optimizeQuality;
          fill-rule: evenodd;
          clip-rule: evenodd;
        "
        viewBox="0 0 784.11 815.53"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            class="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="star-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        version="1.1"
        style="
          shape-rendering: geometricPrecision;
          text-rendering: geometricPrecision;
          image-rendering: optimizeQuality;
          fill-rule: evenodd;
          clip-rule: evenodd;
        "
        viewBox="0 0 784.11 815.53"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            class="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="star-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        version="1.1"
        style="
          shape-rendering: geometricPrecision;
          text-rendering: geometricPrecision;
          image-rendering: optimizeQuality;
          fill-rule: evenodd;
          clip-rule: evenodd;
        "
        viewBox="0 0 784.11 815.53"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            class="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="star-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        version="1.1"
        style="
          shape-rendering: geometricPrecision;
          text-rendering: geometricPrecision;
          image-rendering: optimizeQuality;
          fill-rule: evenodd;
          clip-rule: evenodd;
        "
        viewBox="0 0 784.11 815.53"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            class="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="star-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        version="1.1"
        style="
          shape-rendering: geometricPrecision;
          text-rendering: geometricPrecision;
          image-rendering: optimizeQuality;
          fill-rule: evenodd;
          clip-rule: evenodd;
        "
        viewBox="0 0 784.11 815.53"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            class="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="star-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        version="1.1"
        style="
          shape-rendering: geometricPrecision;
          text-rendering: geometricPrecision;
          image-rendering: optimizeQuality;
          fill-rule: evenodd;
          clip-rule: evenodd;
        "
        viewBox="0 0 784.11 815.53"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs></defs>
        <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"></metadata>
          <path
            class="fil0"
            d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
          ></path>
        </g>
      </svg>
    </div>
  </button>
</template>

<script>
export const meta = {
  type: "button",
  theme: "dark",
  slot: "Button",
  variables: [
    { name: "--width", description: "宽度", default: "auto" },
    { name: "--height", description: "高度", default: "auto" },
    { name: "--color", description: "主题色", default: "#fec195" },
    { name: "--padding", description: "内边距", default: "12px 35px" },
    { name: "--font-size", description: "字体大小", default: "17px" },
    { name: "--border-radius", description: "圆角", default: "8px" },
    { name: "--text-color", description: "文字颜色", default: "#181818" },
  ],
};
</script>
