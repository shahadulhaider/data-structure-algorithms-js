// Usage
const DoublyLinkedList = require('./DoublyLinkedList');

const dll = new DoublyLinkedList();
dll.push('messi');
dll.push('oscar');
dll.push('dybala');
dll.push('luiz');
console.log(dll.toString());
dll.pop();
dll.shift();
console.log(dll.toString());
dll.unshift('messi');
console.log(dll.toString());
// console.log(dll.get(1));
console.log(dll.set(2, 'willian'));
dll.push('higuain');
console.log(dll.toString());

dll.insert(2, 'luiz');
dll.insert(4, 'dybala');
console.log(dll.toString());
console.log(dll.size());

dll.removeAt(3);
console.log(dll.toString());
console.log(dll.size());

dll.remove('willian');
console.log(dll.toString());
console.log(dll.size());

dll.remove('messi');
console.log(dll.toString());
console.log(dll.size());

console.log(dll.indexOf('messi'));
console.log(dll.indexOf('oscar'));
console.log(dll.indexOf('dybala'));
console.log(dll.indexOf('willian'));
console.log(dll.indexOf('higuain'));
console.log(dll.indexOf('luiz'));
console.log(dll.indexOf('pele'));

for (let i = 0; i < dll.count; i++) {
  console.log(`Index: ${i} --> Value: ${dll.get(i).element}`);
}

console.log(dll.size());
console.log(dll.isEmpty());
console.log(dll.toString());

dll.clear();
console.log(dll.size());
console.log(dll.isEmpty());
console.log(dll.toString());
