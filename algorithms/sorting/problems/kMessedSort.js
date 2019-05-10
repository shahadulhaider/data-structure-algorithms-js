function sortKMessedArray(array, k) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    let temp = array[i];
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array;
}

// Usage
const array = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
console.log(`Before sorting: ${array}`);
console.log(`After sorting: ${sortKMessedArray(array, 2)}`);