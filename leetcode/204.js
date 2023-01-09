var countPrimes = function(n) {
  // 判断是否为质数
  const isPrime = (n) => {
      let temp = Math.sqrt(n);//返回一个数的平方根 性能优化吧
      for(let i = 2; i <= temp; i++) {
          if(n % i === 0) {
              return false;
          }
      }
      return true;
  }
  let count = 0;
  for(let i = 2; i < n; i++) {
      if(isPrime(i)) {
          count++;
      }
  }
  return count;
};
console.log(countPrimes(3))