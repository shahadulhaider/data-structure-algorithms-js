// Usage
const HashTable = require('./hashTableSeparateChaining');

const hash = new HashTable();

hash.put('messi', 'fc barcelona');
hash.put('neymar', 'psg');
hash.put('cristiano', 'juventus');
hash.put('hazard', 'chelsea');

console.log(hash.toString());
console.log(hash.hashCode('hazard'));
// console.log(hash.getTable());
console.log(hash.keys());
console.log(hash.values());
console.log(hash.size());

console.log(hash.hasKey('hazard'));
console.log(hash.hasKey('messi'));
console.log(hash.hasKey('dybala'));

console.log(hash.get('cristiano'));
console.log(hash.get('hazard'));
console.log(hash.get('james'));

hash.forEach((k, v) => console.log(`Key: ${k} , Value: ${v}`));

console.log(hash.remove('cristiano'));
console.log(hash.remove('mbappe'));
console.log(hash.isEmpty());



hash.clear();
console.log(hash.size());
console.log(hash.isEmpty());