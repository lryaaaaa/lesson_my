# 小程序云开发

## 现代开发方式
  1. 小程序 界面直接手机打开  4s店做一款试驾应用 
  2. 选择一个技术方案
     Andiod  IOS
     小程序 
  3. 数据库不需要安装 （数据云端）
  4. 不需要部署  一键发布到腾讯



## 小程序开发知识点
 1.开发一个个的page  
 pages  结构
    wxml    wxss                        js
    结构    样式                        逻辑
    动态模板 vw适配所有手机 vh
            绝对居中（）
            page 每个页面隐藏  标签选择
            .container{} 类选择器 (优先级高)

            page 相对定位  relative    100vw   100vh
            container absolute
             t 50%   l 50%  中心点
             transform:translate(-50%,-50%)   中心重合
             





    page({
       data:{// 可以绑定的数据
       title:'',
       car:''
       }
    }) 