// using set
const hasDuplicateCharacters = (s = null) => s === null ? null : (new Set(s)).size !== s.length;

// iterative method
const hasDuplicateCharactersIterative = (s = null) => {
  if (s === null) return null;
  const seen = {};

  for (let i = 0; i < s.length; i++){
    if (!seen[s[i]]) seen[s[i]] = 0;
    seen[s[i]]++;
  }

  for (let key in seen) {
    if (seen[key] > 1) return true;
  }
  return false;
};
console.log(hasDuplicateCharacters('apple'));
console.log(hasDuplicateCharactersIterative('Sylshet'));