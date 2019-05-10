const hammingDistance = (a, b) => {
  if (a.length !== b.length) {
    throw new Error('Strings must be of the equal length.');
  }

  let distance = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      distance++;
    }
  }
  return distance;
};

console.log(hammingDistance('karolin', 'kathrin'));
console.log(hammingDistance('abahani', 'agamani'));
console.log(hammingDistance('commander', 'kommandar'));
console.log(hammingDistance('11010011', '10100010'));