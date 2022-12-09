# 同学列表
   前后端分离
      前端table 
      后端负责数据
     
    get 方式请求数据 http method
    url； /student
    返回json 数据
  

- npm init -y 项目变成一个后段项目
      npm install json-server
      package.json   "dev":"json-server --watch student.json"     
      npm run dev

- http请求 分为GET POST  FORM 表单的动作
   get 表示获取列表   post表示添加新数据
  fatch(url,{
    method:'POST',
    body:JSON.stringify(student),
    headers:{
      'Content-Type':'application/json'
    }
  })
  