# 垂直居中
 1. 父子元素
    父元素 relative(不是必须的)
    子元素 absolute
 2. 先确定大小
   transform rotate |translate | scale
   变基

- 垂直居中方法？
 1. 定位 +margin 负值
     父元素一定要得到大小（不如transform）
 2. 定位+transform
      相对与自身移动
 3. calc 将父元素的一半减去子元素的一半
     缺点： 性能不好
 4. 弹性布局
    不用定位
    兼容性不行

    

 
 
    # css rule
   1. 盒子模型  content + padding+ border+ margin
   2. 背景颜色调试
   3. css布局方式的一种
      - 离他最近的position relative  元素定位
      - 若没有，一直往外查找 body
   4. block 块级元素 盒子能力  占一行， 可以设置宽高 把兄弟元素挤下去
      inlne 行内元素 没有盒子  自身内容支撑起来，不能设置宽高
      inling-block 既能设置宽高  又不会把兄弟元素挤下去
   5. display: flex; 弹性布局