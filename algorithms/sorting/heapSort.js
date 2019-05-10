function heapSort(array) {
  let heapSize = array.length;

  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length);
  }

  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize);
  }

  return array;
}

function heapify(array, index, size) {
  let max = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < size && array[max] < array[left])
    max = left;

  if (right < size && array[max] < array[right])
    max = right;

  if (index !== max) {
    swap(array, index, max);
    heapify(array, max, size);
  }
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

// usage
const numbers = [...Array(15)].map(() => Math.floor(Math.random() * 50));
console.log('before sorting:');
console.log(numbers.join(' '));
console.log('after sorting:');
console.log(heapSort(numbers).join(' '));