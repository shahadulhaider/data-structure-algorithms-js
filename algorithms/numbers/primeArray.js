const primeArray = n => {
  const primes = [];
  for (let i = 3; i <= n; i += 2) {
    if (primes.every((prime) => i % prime != 0)) {
      primes.push(i);
    }
  }
  primes.unshift(2);
  return primes;
};

console.log(primeArray(1000).join(' '));
