# 在vue中使用

## 安装

```xml
npm install arto-ui
```

## 引入

::: code-group

```ts [完整引入]
//main.ts
import { createApp } from 'vue'
import App from './App.vue'
import ArtoUI from 'arto-ui'

new ArtoUI()

createApp(App).mount('#app')
```

```ts [按需加载]
//main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { ArButton1, ArButton2, ArButton3,... } from 'arto-ui'

new ArButton1()
new ArButton2()
new ArButton3()
...

createApp(App).mount('#app')
```

:::


## 使用

根据注册的组件名，驼峰转为小写分割

<ar-button-3 @click="count++"  style="margin-bottom:20px">点击 {{ count }} 次</ar-button-3>

<script setup>
  import { ref } from 'vue'

  const count = ref(0)
</script>


```vue
<template>
  <ar-button-3 @click="count++">点击 {{ count }} 次</ar-button-3>
</template>

<script setup>
  import { ref } from 'vue'

  const count = ref(0)
</script>
```