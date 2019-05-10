const Stack = require('./Stack');

function baseConverter(decNumber, base) {
  const remStack = new Stack();
  let number = decNumber;
  let digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let rem;
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(233, 8));
console.log(baseConverter(100, 8));
console.log(baseConverter(7, 2));
console.log(baseConverter(12154, 36));
console.log(baseConverter(145, 16));
console.log(baseConverter(12450, 10));
console.log(baseConverter(1236, 16));
console.log(baseConverter(3659874521, 36));