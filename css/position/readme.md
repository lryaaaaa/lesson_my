- position 有哪几个值，用法
 relative 告诉他的内部元素相对于父元素进行定位
  在元素以声明relative时再写top/left等，意思是相较于他自身原有的位置进行偏移（本身未脱离文档流）
 absolute 绝对定位，脱离文档流
        相对于离他最近的position：relative|absolute  （找不到 就body）
        相对于离他最近的position属性不为static的元素定位
    static可以取消一个元素的定位，回归正常的文档流

    fixed 相对于窗口进行定位，他会定位在窗口的某个固定位置 van-sticky