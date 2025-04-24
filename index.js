function isArmstrong(num) {
    let digits = num.toString().split('');
    let power = digits.length;
    let sum = digits.reduce((acc, d) => acc +  d**power, 0);
    return sum === num;
  }
  console.log(isArmstrong(163));
  function isPrime(n) {
    if (n < 2)
         return false;
    for (let i = 2; i<=n/2; i++) {
      if (n % i === 0)
         return false;
    }
    return true;
  }
  console.log(isPrime(7));
  