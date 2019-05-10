const SinglyLinkedList = require('./SinglyLinkedList');

class StackLinkedList {
  constructor() {
    this.items = new SinglyLinkedList();
  }

  push(element) {
    return this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items.get(this.items.size() - 1).element;
  }

  clear() {
    return this.items.clear();
  }

  size() {
    return this.items.size();
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString() {
    return this.items.toString();
  }
}

module.exports = StackLinkedList;

// =============================
//             USAGE
// =============================
const stack = new StackLinkedList();
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