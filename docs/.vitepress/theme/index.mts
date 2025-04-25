import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'element-plus/dist/index.css'

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const { default: ArtoUI } = await import('arto-ui/dev')
      const { default: ElementPlus } = await import('element-plus')

      new ArtoUI()
      app.use(ElementPlus)
    }
  }
} satisfies Theme