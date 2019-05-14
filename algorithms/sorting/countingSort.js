function countingSort(array) {
  if (array.length < 2) return array;

  const maxValue = Math.max(...array);

  const counts = new Array(maxValue + 1);

  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });

  let sortedIndex = 0;

  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i;
      count--;
    }
  });

  return array;
}


// Usage
const numbers = [...Array(20)].map(() => Math.floor(Math.random() * 40));
console.log('before sorting:');
console.log(numbers.join(' '));
console.log('after sorting:');
console.log(countingSort(numbers).join(' '));