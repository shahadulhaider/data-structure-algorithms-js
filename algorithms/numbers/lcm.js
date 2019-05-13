//-----------using recursion with euclid-----------------
const gcd = (a, b) => b ? gcd(b, a % b) : a;

const lcm = (a, b) => ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / gcd(a, b);

//-----------------using euclid iterative algorithm----------------
const gcdIterative = (a, b) => {
  if (a === 0) return b;
  while (b !== 0) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
};

const lcmIterative = (a, b) => ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / gcdIterative(a, b);

//-----------------using prime factors-------------------
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

const gcdPrimeFactors = (a, b) => {
  const arr1 = primeFactors(a);
  const arr2 = primeFactors(b);
  const arr = [];
  arr1.forEach(v => {
    if (arr2.includes(v)) {
      arr.push(v);
      arr2.splice(arr2.indexOf(v), 1);
    }
  });
  return arr.length < 1 ? 1 : arr.reduce((a, b) => a * b, 1);
};

const lcmPrimeFactors = (a, b) => ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / gcdPrimeFactors(a, b);


// usage
console.log(gcd(72, 117));
console.log(lcm(72, 117));
console.log(gcdIterative(72, 117));
console.log(lcmIterative(72, 117));
console.log(gcdPrimeFactors(72, 117));
console.log(lcmPrimeFactors(72, 117));