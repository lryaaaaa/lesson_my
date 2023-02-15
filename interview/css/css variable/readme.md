- 你知道css变量
     属于css4  也叫css（next） 新功能
     可以复用变量，可以一处修改，所有相应都改
     - :root 跟选择器
     - -- blur 命名风格带--
     - var(--blur) 来使用变量
     -js 来修改  document.documentElement.style.setPtoperty('--blur','值')
- HTML5 考点
     1. 拖拽能力  
     2. 本地存储  localStorage
     3. 语义化   setion footer header article
     4. FORM的新控件
        使用更丰富的表单控件，通过type的设置，更加方便的收集用户信息
        input type="text|number|range|color" 

- 消息提醒组件的样式逻辑
    1. 数量为0（使用css变量来解决自身的样式逻辑），sup组件提示的数量隐藏，>0就显示
    2. sup宽度是变量
    3. 99+怎么做？

- 不依赖js css变量独自解决样式逻辑
  好处：性能得到优化
- .style.setProperty('var_name',value)
  可以创造更加丰富的界面特效 