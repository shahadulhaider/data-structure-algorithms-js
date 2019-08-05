function quickSort(array) {
  return quick(array, 0, array.length - 1);
}

function quick(array, left, right) {
  if (array.length > 1) {
    let index = partition(array, left, right);
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
  return array;
}

function partition(array, left, right) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  return i;
}

module.exports = quickSort;

// Usage
// const numbers = [...Array(8)].map(() => Math.floor(Math.random() * 4000) - 2000);
// console.log('before sorting:');
// console.log(numbers.join(' '));
// console.log('after sorting:');
// console.log(quickSort(numbers).join(' '));

// const chars = [...Array(16)].map(() => String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97)));
// console.log('before sorting:');
// console.log(chars.join(' '));
// console.log('after sorting:');
// console.log(quickSort(chars).join(' '));