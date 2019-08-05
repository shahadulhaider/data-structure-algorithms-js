const fisherYates = (sortedArray) => {
  const { length } = sortedArray;
  for (let i = length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * length);
    [sortedArray[i], sortedArray[randomIndex]] = [sortedArray[randomIndex], sortedArray[i]];
  }
  return sortedArray;
};

// test
const array = [...Array(10)].map((_, i) => i + 1);
console.log(array);
console.log(fisherYates(array));