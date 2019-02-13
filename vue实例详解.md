


```html
<script src="https://unpkg.com/marked@0.3.6"></script>
<script src="https://unpkg.com/lodash@4.16.0"></script>

<div id="editor">
  <textarea :value="input" @input="update"></textarea>
  <div v-html="compiledMarkdown"></div>
</div>
```
这里的textarea就是输入界面,而div是右侧的输出界面

第一个 :value, 这里的 : 是 v-bind的缩写, 动态地绑定一个或多个特性，或一个组件 prop 到表达式。

这里绑定到input,就是一个典型的响应式,通过这种写法可以更加直观的操作DOM.这里的input可以看到在下面就有所定义,他就是输入值

而这个 @input,是监听事件 v-on 的缩写.

[v-bind绑定](https://cn.vuejs.org/v2/api/#v-bind)


这里的update是一个函数,没有括号仅仅说明它没有参数,这个函数在下方的Vue中,methods进行了定义.

这里的 _.debounce是一个防抖函数,似乎是vue 依赖的Lodash中的函数.

这个函数在这里使用的原因,当我们输入的时候,可能会对造成较大开销,当使用防抖函数的时候,它的开销明显下降.



computed,这是计算属性,近似于methods,但是有所不同的是他仅仅依赖于自变量的变化.

这里把compiledMarkdown写作computed而不是methods的好处就在于...


by the way, 这个marked是一个依赖的第三方库,其作用是

```js
new Vue({
  el: '#editor',
  data: {
    input: '# hello'
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
})
```

一吟双泪流