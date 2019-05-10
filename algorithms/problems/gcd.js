//-----------using recursion with euclid-----------------
const gcd = (a, b) => b ? gcd(b, a % b) : a;


//-----------------using euclid algorithm----------------
const gcdEuclid = (a, b) => {
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


// usage
console.log(gcd(996, 528));
console.log(gcdEuclid(996, 528));
console.log(gcdPrimeFactors(996, 528));