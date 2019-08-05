const linearSearch = (array, seekElement) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === seekElement) return i;
  }
  return -1;
};

//test
console.log(linearSearch([1, 3, 5, 7, 9], 5));
console.log(linearSearch([1, 3, 5, 7, 9], 6));
console.log(linearSearch([1, 3, 5, 7, 9], 1));