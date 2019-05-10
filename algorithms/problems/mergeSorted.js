const mergeSorted = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};

console.log(mergeSorted([2, 5, 6, 9], [1, 2, 3, 29]));