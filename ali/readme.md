# 阿里巴巴双十一界面开发
- 设计稿
  1. 数据 
    750px   像素  一种尺寸   移动页面 width
     iphone 的小尺寸375pt retina 屏幕 设计的标准

- 前端使命
  一像素不差的还原设计稿
  htnl+css+js 实现

  - 交互
  - css带来视觉效果  静态、动态
  - 设计稿是静态，我们要动态
  - 兼容性 高兼容


- css reset 
 1. 抹平不同浏览器的预设样式，从零出发，这样可以在所有浏览器中表现一致
 2. 利用css inherit的继承属性可以在body里把fong-size font-family。。。
    默认16px； 浏览器默认字体大小



- rem单位
 1. 在移动端，为了兼容 少用甚至不用px
 2. 先给html标签设置一个font-size
    等比例 1/10   方便去做系统布局
     如何在不同的设备上让 1rem=设备宽度/10
 3. html的font-size要动态设置
    window.innerWidth 拿到设备宽度
    document.documentElement.style.fontSize=+"px"
   