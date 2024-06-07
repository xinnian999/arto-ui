import Color from 'color'

const getLighterColor = (color: string, percent: number): string => {
  // 使用 Color 库将颜色变浅
  return Color(color)
    .lighten(percent / 100)
    .hex()
    .toUpperCase()
}

export default getLighterColor
