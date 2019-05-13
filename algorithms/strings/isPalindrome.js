const isPalindrome = str => str.length < 1
  ? false : str.split('').map((e, i, arr) => {
    if (e === arr[arr.length - 1 - i]) return true;
    return false;
  }).every(e => e);

const str = 'racecar';
console.log(isPalindrome(str));