function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    array.forEach((current, i) => {
      if (current > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    });
  } while (swapped);

  return array;
}

// Usage
const numbers = [...Array(40)].map(() => Math.floor(Math.random() * 4000) - 2000);
console.log('before sorting:');
console.log(numbers.join(' '));
console.log('after sorting:');
console.log(bubbleSort(numbers).join(' '));

const chars = [...Array(10)].map(() => String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97)));
console.log('before sorting:');
console.log(chars.join(' '));
console.log('after sorting:');
console.log(bubbleSort(chars).join(' '));