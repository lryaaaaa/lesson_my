# 网站的核心
    1. 内容
        超链接a

- 传统的网站开发
  - 使用MVVM代替DOM编程
     数据驱动 组件化 思想
  - 多个页面+a  Multiple Page Application
     1. 每个页面都是重复的完整html结构
     2. 用户体验不太好，需要优化
       每个页面的请求过程都是一次HTTP请求响应的过程
       完整的html  请求响应需要一个过程，页面加载慢
       SPA可以用来优化
       Single Page Application
       单页面应用开发思维
       ajax 技术 不跳转页面
        获取新的内容
        - SPA
        - ajax js 动态的更新内容，后台去向服务器通信，获取新的内容
          不用单纯的借助URL的切换，HTTP向服务器重新请求整个页面 