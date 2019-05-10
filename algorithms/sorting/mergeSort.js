function mergeSort(array) {
  if (array.length > 1) {
    const middle = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));
    array = merge(left, right);
  }
  return array;
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++]);
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

// Usage
const numbers = [...Array(40)].map(() => Math.floor(Math.random() * 4000) - 2000);
console.log('before sorting:');
console.log(numbers.join(' '));
console.log('after sorting:');
console.log(mergeSort(numbers).join(' '));

const chars = [...Array(16)].map(() => String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97)));
console.log('before sorting:');
console.log(chars.join(' '));
console.log('after sorting:');
console.log(mergeSort(chars).join(' '));