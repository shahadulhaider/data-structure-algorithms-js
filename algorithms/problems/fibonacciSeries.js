const fibonacciSeries = n => {
  let fibo = [];
  fibo.push(0, 1);
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
    if (fibo[i] > n) {
      fibo.pop();
      break;
    }
  }
  return fibo;
};

//-------------- using generator -----------------
function* fibonacciGenerator() {
  let a = 1,
    b = 0;
  while (true) {
    yield b;
    [a, b] = [b, a + b];
  }
}

const fibonacciGenSeries = n => {
  const gen = fibonacciGenerator();
  const fibo = [];
  for (let i = 0; i < n; i++) {
    const f = gen.next().value;
    if (f < n) fibo.push(f);
  }
  return fibo;
};

//-------------- using reduce -----------------
const fibonacciReduce = n => {
  return [...Array(n)]
    .fill(0)
    .reduce((a) => ([a[0], a[1]] = [a[1], a[0] + a[1]], a), [0, 1])[0];
};

const fiboncciReduceSeries = n => {
  const fibo = [];
  for (let i = 0; i < n; i++) {
    const f = fibonacciReduce(i);
    if (f < n) fibo.push(f);
  }
  return fibo;

};

// usage
console.log(fibonacciGenSeries(1000));
console.log(fibonacciSeries(1000));
console.log(fiboncciReduceSeries(1000));