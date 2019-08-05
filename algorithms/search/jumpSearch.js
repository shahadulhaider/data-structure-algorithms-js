const jumpSearch = (sortedArray, seekElement) => {
  const { length } = sortedArray;

  if (!length) return -1;

  const jumpSize = Math.floor(Math.sqrt(length));

  let blockStart = 0;
  let blockEnd = jumpSize;

  while (seekElement > sortedArray[Math.min(blockEnd, length) - 1]) {
    blockStart = blockEnd;
    blockEnd += jumpSize;

    if (blockStart > length) return -1;
  }

  let currentIndex = blockStart;

  while (currentIndex < Math.min(blockEnd, length)) {
    if (seekElement === sortedArray[currentIndex]) return currentIndex;
    currentIndex++;
  }

  return -1;
};

// test
const array = [...Array(40)].map(() => ~~(Math.random() * 40)).sort((a, b) => a - b);
console.log(array.join(' '));
console.log(jumpSearch(array, 18));