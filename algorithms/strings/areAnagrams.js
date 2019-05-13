// checking whether strings of an array are anagrams of one another
const areAnagrams = (s = []) => s.length <= 1 || !s.every(e => e.length === s[0].length)
  ? false
  : s.map(e => e.split('').map(c => c.charCodeAt(0)).reduce((a, b) => a + b))
    .every((e, i, a) => e === a[0]);

const strings = ['apple', 'aplpe', 'pplae'];
console.log(areAnagrams(strings));
const st = ['donald trump', 'podman truld'];
console.log(areAnagrams(st));