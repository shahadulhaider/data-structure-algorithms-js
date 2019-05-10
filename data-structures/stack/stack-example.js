const Stack = require('./Stack');

const stack = new Stack();
stack.push(30);
stack.push(28);
stack.push(12);
stack.push(34);

console.log(stack.items);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.toString());

console.log(stack.isEmpty());
stack.clear();
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.toString());