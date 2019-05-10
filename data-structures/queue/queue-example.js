const Queue = require('./Queue');

const queue = new Queue();
queue.enqueue(30);
queue.enqueue(28);
queue.enqueue(12);
queue.enqueue(34);

console.log(queue.peek());
console.log(queue.front());
console.log(queue.size());
console.log(queue.toString());

queue.dequeue();
console.log(queue.peek());
console.log(queue.front());
console.log(queue.size());
console.log(queue.toString());

console.log(queue.isEmpty());
queue.clear();
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.toString());