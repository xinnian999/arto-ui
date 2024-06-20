# 在react中使用

## 安装

```xml
npm install fancy-ui
```

## 完整引入

这将会引入所有组件，后续就无需再关注导入问题，很方便，但打包体积会稍微变大

```tsx
//main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import FancyUI from  'fancy-ui'

new FancyUI()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## 按需加载

轻量级使用，用哪个组件就注册哪个

```tsx
//main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FaLightButton1, FaLightButton1 } from 'fancy-ui'

new FaLightButton1()

new FaLightButton1()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## 使用

根据注册的组件名，驼峰转为小写分割

<script setup>
import {ref} from 'vue';

const count=ref(0)
</script>

<fa-light-button-1 @click="count++">点击 {{count}} 次</fa-light-button-1>

```tsx
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <fa-light-button-1 onClick={()=>setCount(count+1)}>点击 {count} 次</fa-light-button-1>
  )
}

export default App

```
