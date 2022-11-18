function isPalindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '')
    const reversedStr = str.split('').reverse().join('');
    return reversedStr === str
}
//判断回文字符串