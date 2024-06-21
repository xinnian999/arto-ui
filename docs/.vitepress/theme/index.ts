import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const { default: ArtoUI } = await import('@/release/index')
      new ArtoUI()
    }
  }
} satisfies Theme
