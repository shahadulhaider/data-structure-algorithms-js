const binarySearch = (sortedArray, seekElement) => {
  let low = 0;
  let high = sortedArray.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = sortedArray[mid];

    if (element < seekElement) {
      low = mid + 1;
    } else if (element > seekElement) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

//test
console.log(binarySearch([1, 4, 7, 9, 11, 13, 23, 29, 35, 40], 35));