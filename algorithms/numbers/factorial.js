// recursive
const factorial = n => n < 0 ? undefined :
  n === 0 ? 1 : n * factorial(n - 1);

// iterative
const factorialIterative = n => {
  if (n < 0) return undefined;
  if (n === 0) return 1;

  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
};

console.log(factorial(4));
console.log(factorialIterative(4));