const isPrime = n => {
  if (n < 2) return false;
  if (n === 2 || n === 3) return true;
  if (n > 2 && n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};


const arr = [...Array(20)].map((_, i) => i + 1);
arr.forEach(i => {
  let result = isPrime(i) ? 'prime' : 'not prime';
  console.log(`${i} is ${result}`);
});
