// Usage
const HashTable = require('./hashTable');

const hash = new HashTable();

hash.put('richard', 'richard@crown.com');
hash.put('henry', 'henry@crown.com');
hash.put('edward', 'edward@crown.com');
hash.put('elizabeth', 'elizabeth@crown.com');

console.log(hash.toString());
console.log(hash.hashCode('elizabeth'));
console.log(hash.keyValues());
console.log(hash.keys());
console.log(hash.values());
console.log(hash.size());

console.log(hash.hasKey('henry'));
console.log(hash.hasKey('mary'));
console.log(hash.hasKey('edward'));

console.log(hash.get('richard'));
console.log(hash.get('elizabeth'));
console.log(hash.get('james'));

hash.forEach((k, v) => console.log(`Key: ${k} , Value: ${v}`));

console.log(hash.remove('richard'));
console.log(hash.remove('james'));
console.log(hash.isEmpty());



hash.clear();
console.log(hash.size());
console.log(hash.isEmpty());