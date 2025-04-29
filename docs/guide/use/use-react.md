# 在react中使用

## 安装

```xml
npm install arto-ui
```

## 引入

::: code-group

```tsx [完整引入]
//index.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ArtoUI from  'arto-ui'

new ArtoUI()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```


```tsx [按需加载]
//index.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ArButton1, ArButton2, ArButton3, ... } from 'arto-ui'

new ArButton1()
new ArButton2()
new ArButton3()
...

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

:::

## 使用

根据注册的组件名，驼峰转为小写分割

<script setup>
import {ref} from 'vue';

const count=ref(0)
</script>

<ar-button-3 @click="count++" style="margin-bottom:20px">点击 {{count}} 次</ar-button-3>

```tsx
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ar-button-3 onClick={()=>setCount(count+1)}>点击 {count} 次</ar-button-3>
  )
}

export default App

```
