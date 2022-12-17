function MinStack () { // 构造函数 类
    this.stack = []; // 数据存储 数组 
    this.stack2 = []; // 空间
     // 单调栈  打辅助  比当前栈顶元素小于等于的数才入栈
}
// JS 基于对象的面向对象 
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if (this.stack2.length === 0 || 
    this.stack2[this.stack2.length - 1] >= x) {
        this.stack2.push(x)
    }
}

MinStack.prototype.pop = function() {
    // ？stack 出栈的元素是否和stack2的栈顶元素是否一样，
    if (this.stack.pop() == this.stack2[this.stack2.length - 1]) {
        this.stack2.pop();
    }
}
MinStack.prototype.top = function() {
    if (!this.stack || !this.stack.length) {
        return;
    }
    return this.stack[this.stack.length - 1]
}
// 时间复杂度O(n) -> O(1) 常数
// 栈  单调栈  用空间换时间， 

MinStack.prototype.getMin = function() {
    // 栈里的最小值
    // js  
    // let minValue = Infinity; // 
    // // this.stack
    // const { stack } = this; // es6 
    // for (let i = 0; i < stack.length; i++) {
    //     if (stack[i] < minValue) {
    //         minValue = stack[i]
    //     }
    // }
    // return minValue
    return this.stack2[this.stack2.length - 1];
}