export function toCamelCase(str: string) {
  return str
    .split('-') // 将字符串按 '-' 分割成数组
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // 将每个单词的首字母大写
    .join('') // 将数组重新合并成字符串
}
