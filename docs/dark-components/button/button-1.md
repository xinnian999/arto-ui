# 星星按钮 1

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

<style>
  .demo2 {
    --color:rgb(79, 200, 204);
  }
</style>

<div class="darkBox">
  <ar-button-1 class="demo2">按钮</ar-button-1>
</div>

::: details 查看代码

```html
<style>
  .demo2 {
    --color: rgb(79, 200, 204);
  }
</style>

<div class="darkBox">
  <ar-button-1 class="demo2">按钮</ar-button-1>
</div>
```

:::

## Demo3

<style>
  .demo3{
    --width:300px;
    --color:rgb(50, 233, 120);
  }
</style>

<div class="darkBox">
  <ar-button-1 class="demo3">按钮</ar-button-1>
</div>

::: details 查看代码

```html
<style>
  .demo3 {
    --width: 300px;
    --color: rgb(50, 233, 120);
  }
</style>

<div class="darkBox">
  <ar-button-1 class="demo3">Demo3</ar-button-1>
</div>
```

:::

## CSS 变量

| 属性名   | 说明   | 默认值    |
| -------- | ------ | --------- |
| --width  | 宽     | `auto`    |
| --height | 高     | `auto`    |
| --color  | 主题色 | `#fec195` |
