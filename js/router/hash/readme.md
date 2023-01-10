# SPA优质的现代用户体验
  1. 不要通过a标签跳转页面（加载慢）
    click event.preventDefault()阻止行为
    html#/page1  page2   page3
    url hash 部分 不会刷新页面
    url会变，
  2. url的hash部分改变，请求新的内容
      并且不会刷新页面
  3. url分成以下几部分
    js   url 属于BOM中的location对象
    http://127.0.0.1:5555/lesson_my/router/hash/index.html#/page2
    location.protocal  拿到http
    location.host  拿到127.0.0.1:5555
      .hostname   .port
    location.pathname 拿到路径router/hash/index.html
    location.hash    拿到hash
    location.search  拿到搜索

    hash部分改变时，页面不会刷新
    