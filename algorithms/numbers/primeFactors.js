const primeFactors = n => {
  const factors = [];
  let i = 2;
  while (n >= 2) {
    if (n % i === 0) {
      factors.push(i);
      n = n / i;
    } else {
      i++;
    }
  }
  return factors;
};

console.log(primeFactors(15));
console.log(primeFactors(25));
console.log(primeFactors(989));
console.log(primeFactors(1547));