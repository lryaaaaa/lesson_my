# Vue的世界
  1. 组件思想（小程序也是）
     wxml+wxss+js,可复用的组件
     页面由组件构成，比标签更高级
  2. 路由
     - 小程序/page 下+app.json tabbar   目录下就是页面路由

      wx.navigator({
        url:''
      })//Vue如何实现？
      先安装vue-router

  3. wx:for  指令  v-for （小程序）
  4. 数据驱动页面  不需要找DOM，setData()自动更新

-  现代的web App单页应用开发 SPA single page application 
   vue 框架的加载 https://unpkg.com/vue@next
    1. 根节点 启动我们的web app


- Vue
   1. 现代当红的前端框架。好学，简单
   2. 组件化思想，数据驱动页面
   3. Vue是命名空间 所有功能都在Vue.之上
   4. Vue.version vue 最新版Vue3
   5. 对照小程序，迁移学习
     - template   wxml
        模板{{}}组件 指令  。。。


-  v-on:click=""  可用@click  代替
   this.counter  可用  this.$data.counter（this可直接引用data里的数据）
     vue比react 更友好，好学
       vue牛逼在于API设计人性化

- Vue的底层
   1. data{}如何被监听，重新编译模板  es6的Proxy
   2. Vue的世界为什么要杜绝DOM编程，只有一个#app?
         DOM编程很慢。。


- 占位符与数据绑定
  1. 一般的html里输出的占位符{{}}
  2. 标签的属性或组件的props 里，数据绑定
    - v-bind:value 可简写为 :value 单向数据绑定
    - v-on:input 绑定事件      简写为@input
    - 单向数据绑定？v-bind:value  v-on:input  出现在表单元素
    - 双向数据绑定  v-model   =v-bind:value + v-on:input(vue 特色，更友好)

     <my-title :title="title" v-if="showTitle"/> if为false ，组件直接卸载
    <my-title :title="title" v-show="showTitle"/>show为false，组件任然挂载，只是隐藏了

- 生命周期  MVVM
   Model  View 
   - create  创建阶段，在内存之中
      创建之前，会先监听事件和生命周期钩子函数 beforeCreate
      数据的绑定和响应式 get set defineProperty  created
   - mount  从内存中去到真实的DOM上，
       template编译成DOM能够挂载的string beforeMount
       dom string 交给了这个App要挂载的节点，vm  mounted
   - update(组件不是静态，事件和数据请求counter)
      this.$data.counter    beforeUpdate
      new dom string   dom 上显示新的数据即完成数据更新  update
   - unmount
       命令组件卸载 之前 有个beforeUnmount
       unmounted  已经卸载，执行DOM removeChild


- Vue中，数据模型除了data 还有props
   data 为私有数据
   props 外界传参数据
   computed 计算属性


- 父子组件间的生命周期
     子组件会在父组件开始挂载在页面上时开始创建，
     父组件在所有子组件挂载完毕之后才会挂载完毕，
     父组件改变子组件绑定的数据也会使子组件完成数据的更新阶段
 

