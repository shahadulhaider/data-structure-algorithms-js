// permutation of strings with repeatation counted
const permutation = str => {
  const { length } = permuteString(str);
  return length;
};

const permuteString = str => {
  const results = [];

  if (str.length === 1) {
    results.push(str);
    return results;
  }

  for (let i = 0; i < str.length; i++) {
    let first = str[i];
    let rest = str.substring(0, i) + str.substring(i + 1);
    const inner = permuteString(rest);

    for (let j = 0; j < inner.length; j++) {
      let word = first + inner[j];

      if (!results.includes(word)) {
        results.push(word);
      }
    }
  }

  return results;
};

console.log(permuteString('cat'));
console.log(permuteString('ADAM'));

console.log(permutation('aaabb'));
console.log(permutation('cat'));
console.log(permutation('ADAM'));
console.log(permutation('eye'));