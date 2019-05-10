const Stack = require('./Stack');

function decimanToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log(decimanToBinary(233));
console.log(decimanToBinary(100));
console.log(decimanToBinary(7));
console.log(decimanToBinary(12154));
console.log(decimanToBinary(145));