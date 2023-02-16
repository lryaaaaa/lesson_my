//手写浅拷贝
const shallowClone=(target)=>{//shallow 浅
    if(typeof target==='object' && target!==null){// null也是对象，要排除
        const cloneTarget=Array.isArray(target)?[]:{}//新的拷贝
        for(let prop in target){//无论是数组还是object，都可以用for in， 只是for in 不如计数循环
        if(target.hasOwnProperty(prop)){//自己的，不是原型链上
        cloneTarget[prop]=target[prop]
        }
        }
        return cloneTarget
    }else{
        //null 或简单数据类型
        return target
    }

}