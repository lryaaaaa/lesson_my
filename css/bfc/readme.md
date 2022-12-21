# css 必考题BFC
   Block Formating Context
      B 块级元素占一行
      Flex Formating Context FFC  不会换行
  - 我们看到的页面 哪些规则决定
    1. 文档流
         正常文档流
         脱离文档流   display:none;
                      position: (不为static)
                      float:（设置元素在一行上）right left
                      父元素拿不到子元素的高度
                       解法：设置父元素高度/
                             父元素设置display:flex;默认子元素在一行上显示
        
  - 在正常文档流中
       浮动会让元素离开文档流，父元素无法获得子元素的大小
       更严重的是：文档流出问题，下面排列的盒子会盖上去。
       一定要让父元素拿到高度
          在正常文档流中可以开始新的bfc，
          html是最大的bfc又浏览器自动给与，在bfc环境里，父元素会将浮动元素参与计算，得到父元素的高度
        - 创建bfc的方法
           overflew:hidden;
           display:inline-block;
           position:absolute fixed
           浮动
           flex
           display:table
        
        - 在同一个bfc里
           垂直方向的距离由margin决定
           相邻两个margin会重叠