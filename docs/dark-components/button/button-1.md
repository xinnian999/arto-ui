# 按钮 1

星星特效按钮，鼠标移入按钮会有星星飞出哦！

## Demo1

<div class="darkBox">
  <ar-button-1>按钮</ar-button-1>
</div>

::: details 查看代码

```html
<div class="darkBox">
  <ar-button-1>按钮</ar-button-1>
</div>
```

:::

## Demo2

变个文本颜色

<style>
  .demo2 {
    --text-color:#fff
  }
</style>

<div class="darkBox">
  <ar-button-1 class="demo2">Demo2</ar-button-1>
</div>

::: details 查看代码

```html
<style>
  .demo2 {
    --text-color: #fff;
  }
</style>

<div class="darkBox">
  <ar-button-1 class="demo2">Demo2</ar-button-1>
</div>
```

:::

## Demo3

绿色宽按钮！

<style>
  .demo3{
    --width:300px;
    --bg-color:rgb(50, 233, 120);
    --border-color:rgb(50, 233, 120);
  }
</style>

<div class="darkBox">
  <ar-button-1 class="demo3">Demo3</ar-button-1>
</div>

::: details 查看代码

```html
<style>
  .demo3 {
    --width: 300px;
    --bg-color: rgb(50, 233, 120);
    --border-color: rgb(50, 233, 120);
  }
</style>

<div class="darkBox">
  <ar-button-1 class="demo3">Demo3</ar-button-1>
</div>
```

:::

## CSS 变量

| 属性名                   | 说明             | 默认值      |
| ------------------------ | ---------------- | ----------- |
| --width                  | 宽               | `auto`      |
| --height                 | 高               | `auto`      |
| --text-color             | 文本颜色         | `#181818`   |
| --bg-color               | 背景颜色         | `#fec195`   |
| --border-color           | 边框色           | `#fec195`   |
| --box-shadow-color       | 阴影色           | `#fec195`   |
| --border-radius          | 圆角             | `8px`       |
| --padding                | 内间距           | `12px 35px` |
| --font-size              | 文本大小         | `17px`      |
| --hover-text-color       | hover 时文本颜色 | `#fec195`   |
| --hover-box-shadow-color | hover 时阴影颜色 | `#fec195`   |
