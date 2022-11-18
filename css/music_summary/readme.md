# 大厂html5作品赏析
     


 - html5 标签
      audio 网易云音乐
      video 爱奇艺   b站
 - background-size 
    1. 在移动端rem，宽高多变  而pc端没有该问题
    2. 移动端retine 3倍retine
       40*40   80*80  120*120   3倍像素
       200*200
    3. background-size:cover  可以指定背景图片的大小
       等比例缩放背景图片，填满容器
       超出则剪裁
        contain不剪裁  完全放下图片
 - 库文件引入的位置
  1. css放到head里
        css应该尽早的参与网页的渲染 
  2. js放在body最下面
        js会阻塞页面渲染
 - swiper 滑动组件库的使用
  1. 引入swiper组件库
        js  css  
  2. 固定的html结构
       >.swiper-container(滑动的区域大小)
       > .swiper-wrapper
       >  .swiper-sline
  3. new Swiper(selector,{
       direction:''
        })        实例化

-  translate3d(-50%,0,0) 3d  启动3d加速器  GPU渲染
     translate(-50%,0) 2d
     效果一样
- 使用linear-gradient 生成背景图片 
 1. 颜色渐变的图片， #f8ddd1,#faece5 73%,#fad2c0
    coloeStop
 2. 性能优化，图片下载比较大
      css写的   不需要而外的下载
      img src 要下载+显示
 3. 下载越多，http并发数越多，卡