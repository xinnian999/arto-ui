import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import FancyUI from '@/release/index'

new FancyUI()

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {}
} satisfies Theme
