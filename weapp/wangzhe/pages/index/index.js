// index.js
// 获取应用实例
const app = getApp()

Page({
  //页面上的数据  驱动模板显示
  data: {
    nav:[],
    heroList:[]
  },
  
  //生命周期时间
  onLoad() {
   //如何从客户端去到服务器端取得数据
   //js主动的向api发送请求，把数据请求到本地来
   //小程序的上一级为wx
   wx.showLoading({
     title: '加载中...',
   })
   wx.request({//api
    //第一个参数 为服务器数据url
     url: 'https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue/hero',
     //成功请求后
     success:(res)=> {
          //  console.log(res)
          wx.hideLoading();
          //http statusCode(状态码)200 表示服务器端没有任何错误
          // if(res.statusCode= 200){
            if(res.errMsg="request:ok"){
          //解析res数据
          // let nav=res.data.nav;
          // let heroList=res.data.heroList;
          //把数据付给data;

          let data=res.data;//es6 语法结构
          let{ nav,heroList}=data  //data是json
          // console.log(nav,heroList);
          // console.log(this);
          //如何设置我们的数据  this指向Page对象
          //  setData 方法设置data的值
          this.setData({//api设置   同时自动重新渲染模板
            nav:nav,
            heroList:heroList
          })

        }
     },
     //失败后的回调
     fail:()=>{    //es6  箭头函数  函数的新写法
       console.log('error');
     }
   })
  }
})
