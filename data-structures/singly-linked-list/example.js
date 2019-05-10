const SinglyLinkedList = require('./SinglyLinkedList');

const list = new SinglyLinkedList();

list.push('william');
list.push('albert');
list.push('george');
list.push('harry');
list.push('charles');

console.log(list.toString());
console.log(list.size());

console.log(list.indexOf('george'));
console.log(list.indexOf('charles'));
console.log(list.indexOf('harry'));
console.log(list.indexOf('william'));
console.log(list.indexOf('henry'));
console.log(list.indexOf('richard'));
console.log(list.indexOf('albert'));


list.push('richard');
list.push('edward');
console.log(list.toString());
console.log(list.size());

list.pop();
console.log(list.toString());
console.log(list.size());
console.log(list.isEmpty());

list.shift();
console.log(list.toString());
console.log(list.size());
console.log(list.isEmpty());

list.unshift('james');
list.unshift('john');
console.log(list.toString());
console.log(list.size());

console.log(list.get(4));
console.log(list.get(12));
console.log(list.set(0, 'philip'));
console.log(list.set(-2, 'harry'));

list.insert(3, 'Trump');
console.log(list.toString());
list.removeAt(3);
console.log(list.toString());
list.remove('philip');
console.log(list.toString());

list.clear();
console.log(list.toString());
console.log(list.size());
console.log(list.isEmpty());