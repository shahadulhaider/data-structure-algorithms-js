function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  return array;
}

// Usage
const numbers = [...Array(40)].map(() => Math.floor(Math.random() * 4000) - 2000);
console.log('before sorting:');
console.log(numbers.join(' '));
console.log('after sorting:');
console.log(selectionSort(numbers).join(' '));

const chars = [...Array(10)].map(() => String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97)));
console.log('before sorting:');
console.log(chars.join(' '));
console.log('after sorting:');
console.log(selectionSort(chars).join(' '));