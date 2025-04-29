# 在 html 中使用

## 使用

<ar-button-3 @click="count++" style="margin-bottom:20px">点击 {{ count }} 次</ar-button-3>

<script setup>
  import { ref } from 'vue'

  const count = ref(0)
</script>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <ar-button-3>点击0次</ar-button-3>

    <script type="module">
      import ArtoUI from "https://unpkg.com/arto-ui";

      new ArtoUI();
    </script>

    <script>
      const button = document.querySelector("ar-button-3");

      let count = 0;

      button.onclick = () => {
        count++;
        button.textContent = `点击${count}次`;
      };
    </script>
  </body>
</html>
```
