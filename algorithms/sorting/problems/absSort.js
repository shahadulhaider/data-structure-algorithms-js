// custom sort function
// function absSort(arr) {
//   return arr.sort((a, b) => {
//     return Math.abs(a) < Math.abs(b) ? -1
//       : Math.abs(a) > Math.abs(b) ? 1
//         : a < b ? -1
//           : a > b ? 1
//             : 0;
//   });
// }

function absSmaller(a, b) {
  if (Math.abs(a) < Math.abs(b)) return true;
  if (Math.abs(a) > Math.abs(b)) return false;
  return a < b;
}

// Using selection sort
/*
function absSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (absSmaller(arr[j], arr[min])) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

*/
// Comparator unction

// Using quicksort
function absSort(arr) {
  return quick(arr, 0, arr.length - 1);
}

function quick(array, left, right) {
  if (array.length > 1) {
    let index = partition(array, left, right);
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
  return array;
}

function partition(array, left, right) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (absSmaller(array[i], pivot)) {
      i++;
    }
    while (absSmaller(pivot, array[j])) {
      j--;
    }
    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  return i;
}

// Usage
const numbers = [...Array(10)].map(() => Math.floor(Math.random() * 20) - 10);
console.log('before sorting:');
console.log(numbers.join(' '));
console.log('after sorting:');
console.log(absSort(numbers).join(' '));

const arr = [2, -7, -2, -2, 0];
console.log('before sorting:');
console.log(arr.join(' '));
console.log('after sorting:');
console.log(absSort(arr).join(' '));