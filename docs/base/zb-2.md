# 第二章

::: tip 本章内容
关于数据绑定和 Vue 应用
:::

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Vue 示例</title>
</head>
<body>
  <div id="app">
    <input type="index" v-model='value' >
    <p>{{ value }}</p>
  </div>
</body>

<script src="https://unpkg.com/vue@2.6.10/dist/vue.min.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      value: 'Aresn'
    }
  })
</script>
</html>
```

<demo-1/>

## 1 Vue 实例

创建 Vue 实例的方式很简单，通过构造函数 Vue 就可以创造一个 Vue 的根实例，并启动 Vue

```js
// app 就代表了这个实例
var myData = {a: 1}
var app = new Vue({
  // 选项
  el: '#app', // 或者 document.getElementById('app')
  // 可以自己定义，也可以使用：data: myData 这种方式
  data: {
    // data 内容
  },
  methods: {

  },
  created: {

  }
  // ...
  // 剩下的后面深入学习
})

// 这里应该是在赋值data 的时候传入的是引用而不是直接的数据 [暂时还未论证]
app.a = 2
console.log(myData.a) // 2
myData.a = 2
console.log(app.a) // 2
```

## 2 基础概念

1. 生命周期

- created 实例创建完成后调用，此阶段完成了数据的观测等 [一般都会在初始化页面时，加载数据数据用]
- mounted el 挂载到实例上之后调用，一般我们的业务逻辑都会在这里开始
- beforeDestroy 实例销毁前执行的，主要是为了解绑一些使用 addEventListener 监听的事件等

2. 显示数据

- {{}} 这种格式显示需要解析的data 数据
- 如果想要输出一段 html : v-html
- 原样显示： v-pre
- Vue 是单个表达式，不支持流程控制 [可以使用三元运算符，但是不支持 if 判断]
- Vue 提供了管道符过滤功能

3. filter 过滤器

```html
<div id="app">
  {{ date | formatDate }}
</div>

<script>
  var padDate = function(value) {
    value < 10 ? 0+value : value
  }
  new Vue({
    el: '#app',
    data: {
      daate: new Date()
    },
    filters: {
      formatDate: function(value) {
        var date = new Date(value)
        var year = date.getFullYear()
        var month = padDate(date.getMonth() + 1)
        var day = padDate(date.getDate())
        var hour = padDate(date.getHours())
        var secends = padDate(date.getSecends())
        return `${year}-${month}-${day}-${hour}-${secends}`
      }
    }
  })
</script>
```