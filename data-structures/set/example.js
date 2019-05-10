const Set = require('./Set');

const set = new Set();

set.add(12);
set.add(12);
set.add(34);
set.add(43);

console.log(set.toString());
console.log(set.size());
set.delete(43);
console.log(set.toString());
console.log(set.size());
console.log(set.has(43));
console.log(set.has(12));
console.log(set.toString());
set.clear();
console.log(set.toString());
console.log(set.size());
console.log(set.isEmpty());

