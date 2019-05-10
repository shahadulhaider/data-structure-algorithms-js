const Set = require('./Set');

// Set operations
function union(setA, setB) {
  const unionAB = new Set();
  setA.values().forEach(value => unionAB.add(value));
  setB.values().forEach(value => unionAB.add(value));
  return unionAB;
}

function intersection(setA, setB) {
  const intersectionAB = new Set();
  setA.values().forEach(value => {
    if (setB.has(value)) {
      intersectionAB.add(value);
    }
  });
  return intersectionAB;
}

function difference(setA, setB) {
  const differenceAB = new Set();
  setA.values().forEach(value => {
    if (!setB.has(value)) {
      differenceAB.add(value);
    }
  });
  return differenceAB;
}

const setA = new Set();
const setB = new Set();

setA.add(85);
setA.add(12);
setA.add(14);
setA.add(21);

setB.add(12);
setB.add(20);
setB.add(25);
setB.add(21);

console.log('Set A: ' + setA.toString());
console.log('Set B: ' + setB.toString());
console.log('A ⋃ B: ' + union(setA, setB).toString());
console.log('A ⋂ B: ' + intersection(setA, setB).toString());
console.log('A - B: ' + difference(setA, setB).toString());