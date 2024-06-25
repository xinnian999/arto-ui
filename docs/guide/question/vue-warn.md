# Vue对WebComponents的警告

默认情况下，Vue 会将任何非原生的 HTML 标签优先当作 Vue 组件处理，而将“渲染一个自定义元素”作为后备选项。这会在开发时导致 Vue 抛出一个“解析组件失败”的警告。要让 Vue 知晓特定元素应该被视为自定义元素并跳过组件解析，我们可以指定 compilerOptions.isCustomElement 这个选项。



## Vite 示例配置

```ts
// vite.config.js
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 将所有以 ar- 开头的标签都视为自定义元素
          isCustomElement: (tag) => tag.includes('ar-')
        }
      }
    })
  ]
}
```

## Vue CLI 示例配置

```js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // 将所有以 ar- 开头的标签都视为自定义元素
          isCustomElement: tag => tag.startsWith('ar-')
        }
      }))
  }
}
```