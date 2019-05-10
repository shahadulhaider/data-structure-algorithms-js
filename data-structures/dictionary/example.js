// Usage
const Dictionary = require('./Dictionary');

const dict = new Dictionary();

dict.set('richard', 'richard@crown.com');
dict.set('henry', 'henry@crown.com');
dict.set('edward', 'edward@crown.com');
dict.set('elizabeth', 'elizabeth@crown.com');

console.log(dict.toString());
console.log(dict.size());

console.log(dict.hasKey('henry'));
console.log(dict.hasKey('mary'));
console.log(dict.hasKey('edward'));

console.log(dict.get('richard'));
console.log(dict.get('elizabeth'));
console.log(dict.get('james'));

console.log(dict.keys());
console.log(dict.values());
console.log(dict.isEmpty());

dict.forEach((k, v) => console.log(`Key: ${k} , Value: ${v}`));

dict.clear();
console.log(dict.size());
console.log(dict.isEmpty());