const getDarkerColor = (color: string, percent: number): string => {
  const num: number = parseInt(color.slice(1), 16)
  const amt: number = Math.round(2.55 * percent)
  const R: number = (num >> 16) - amt
  const G: number = ((num >> 8) & 0x00ff) - amt
  const B: number = (num & 0x0000ff) - amt

  const clamp = (value: number): number => {
    return value < 0 ? 0 : value > 255 ? 255 : value
  }

  return (
    '#' +
    (0x1000000 + clamp(R) * 0x10000 + clamp(G) * 0x100 + clamp(B))
      .toString(16)
      .slice(1)
      .toUpperCase()
  )
}

export default getDarkerColor
