# 第一章

::: tip 本章内容
关于 Vue Js 的一些概念和技术，快速的构建出一个 Vue Js 的应用
:::

## 1 Vue js 是什么

简单的核心，渐进式的技术栈，足以应付任何规模的应用

它也提供了开发中常见的高级功能：

- 解耦视图和数据
- 可复用的组件
- 前端路由
- 状态管理
- 虚拟 DOM (Virtual DOM)

```md
<body>
  <div id="app">
    <button v-if="showBtn" v-on:click="handleClick">Click Me</button>
  </div>
</body>

<script src="https://unpkg.com/vue@2.6.10/dist/vue.min.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      showBtn: true
    },
    methods: {
      handleClick: function (){
        console.log('Clicked')
      }
    }
  })
</script>
```

## 2 Vue js 的开发模式

- 直接 CDN 引入
- 在 html 中嵌套

**以上两种都不是实际开发中的模式，后续会介绍到实际开发中的使用**

嵌套在 html 中的示例如下：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Vue 示例</title>
</head>
<body>
  <div id="app">
    <ul>
      <li v-for="book in books">{{ book.name }}</li>
    </ul>
  </div>
</body>

<script src="https://unpkg.com/vue@2.6.10/dist/vue.min.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      books: [
        {name: ' 《Vue js 实战》'},
        {name: ' 《JavaScript 语言精粹》'},
        {name: ' 《JavaScript 高级程序设计》'},
      ]
    }
  })
</script>
</html>
```