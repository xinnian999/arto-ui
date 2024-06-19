# 在vue中使用

## 安装

```xml
npm install fancy-ui
```

## 完整引入

这将会引入所有组件，后续就无需再关注导入问题，很方便，但打包体积会稍微变大

```ts
//main.ts
import { createApp } from 'vue'
import App from './App.vue'
import FancyUI from 'fancy-ui'

new FancyUI()

createApp(App).mount('#app')
```

## 按需加载

轻量级使用，用哪个组件就注册哪个

```ts
//main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { FaLightButton1, FaLightButton1 } from 'fancy-ui'

new FaLightButton1()

new FaLightButton1()

createApp(App).mount('#app')
```

## 使用

根据注册的组件名，驼峰转为小写分割

<fa-light-button-1>按钮</fa-light-button-1>

```vue
<template>
  <fa-light-button-1>按钮</fa-light-button-1>
</template>

```