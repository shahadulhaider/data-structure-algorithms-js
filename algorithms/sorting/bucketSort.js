function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) return array;

  const buckets = createBuckets(array, bucketSize);
  return sortBuckets(buckets);
}

function createBuckets(array, bucketSize) {
  let min = array[0];
  let max = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }

  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = [];

  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - min) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }

  return buckets;
}

function sortBuckets(buckets) {
  const sorted = [];

  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i]);
      sorted.push(...buckets[i]);
    }
  }

  return sorted;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  return array;
}

// Usage
const numbers = [...Array(20)].map(() => Math.floor(Math.random() * 40));
console.log('before sorting:');
console.log(numbers.join(' '));
console.log('after sorting:');
console.log(bucketSort(numbers).join(' '));