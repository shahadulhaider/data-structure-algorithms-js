function radixSort(array, radixBase = 10) {
  if (array.length < 2) return array;

  const min = Math.min(...array);
  const max = Math.max(...array);

  let significantDigit = 1;
  while ((max - min) / significantDigit >= 1) {
    array = countingSortRadix(array, radixBase, significantDigit, min);
    significantDigit *= radixBase;
  }

  return array;
}

function countingSortRadix(array, radixBase, significantDigit, min) {
  let bucketsIndex;
  const buckets = [];
  const aux = [];

  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0;
  }

  for (let i = 0; i < array.length; i++) {
    bucketsIndex = Math.floor(((array[i] - min) / significantDigit) % radixBase);
    buckets[bucketsIndex]++;
  }

  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    bucketsIndex = Math.floor(((array[i] - min) / significantDigit) % radixBase);
    aux[--buckets[bucketsIndex]] = array[i];
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i];
  }
  return array;
}

// Usage
const numbers = [...Array(20)].map(() => Math.floor(Math.random() * 40));
console.log('before sorting:');
console.log(numbers.join(' '));
console.log('after sorting:');
console.log(radixSort(numbers).join(' '));