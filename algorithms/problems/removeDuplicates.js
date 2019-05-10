const removeDuplicates = array => {
  const seen = {};
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!seen[element]) {
      arr.push(element);
      seen[element] = true;
    }
  }
  return arr;
};

//-----------------using set---------------------
const removeDupes = array => [...new Set(array)];

//-----------------using filter-------------------
// const removeDupes = array => array.filter((v, i) => array.indexOf(v) === i);


const dup = [...Array(20)].map(() => ~~(Math.random() * 20));
console.log(dup);
console.log(removeDuplicates(dup));
console.log(removeDupes(dup));