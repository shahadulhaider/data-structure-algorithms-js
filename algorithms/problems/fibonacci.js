const fibonacci = n => {
  return n < 2 ? n : fibonacci(n - 2) + fibonacci(n - 1);
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(15));
console.log(fibonacci(36));
console.log(fibonacci(23));
console.log(fibonacci(8));
console.log(fibonacci(12));