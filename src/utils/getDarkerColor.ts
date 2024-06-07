import Color from 'color'

const getDarkerColor = (color: string, percent: number): string => {
  return Color(color)
    .darken(percent / 100)
    .hex()
    .toUpperCase()
}

export default getDarkerColor
