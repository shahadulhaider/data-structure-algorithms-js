const binarySearch = (sortedArray, seekElement) => {
  let low = 0;
  let high = sortedArray.length - 1;

  return binarySearchRecursive(sortedArray, seekElement, low, high);
};

const binarySearchRecursive = (array, seekElement, low, high) => {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];

    if (element < seekElement) {
      return binarySearchRecursive(array, seekElement, mid + 1, high);
    } else if (element > seekElement) {
      return binarySearchRecursive(array, seekElement, low, mid - 1);
    } else {
      return mid;
    }
  }
  return -1;
};

//test
console.log(binarySearch([1, 4, 7, 9, 11, 13, 23, 29, 35, 40], 13));
console.log(binarySearch([1, 4, 7, 9, 11, 13, 23, 29, 35, 40], 30));