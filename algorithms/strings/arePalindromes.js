const arePalindromes = (s = []) => s.length < 1
  ? false : s.map(e => {
    for (let i = 0, j = e.length - 1; i < Math.floor(e.length / 2); i++ , j--) {
      if (e[i] !== e[j]) return false;
    }
    return true;
  }).every(e => e);

const strings = ['racecar', 'eye', 'mom', '10111101'];
console.log(arePalindromes(strings));