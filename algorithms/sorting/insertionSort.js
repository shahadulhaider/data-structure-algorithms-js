function insertionSort(array) {
  let temp;
  for (let i = 1; i < array.length; i++) {
    let j = i;
    temp = array[i];
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array;
}

// Usage
const numbers = [...Array(40)].map(() => Math.floor(Math.random() * 4000) - 2000);
console.log(`Before sorting: ${numbers}`);
console.log(`After sorting: ${insertionSort(numbers)}`);

const chars = [...Array(10)].map(() => String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97)));
console.log(`Before sorting: ${chars}`);
console.log(`After sorting: ${insertionSort(chars)}`);