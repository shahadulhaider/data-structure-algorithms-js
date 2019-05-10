function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  arr2.forEach(element => {
    let match = false;
    arr1.forEach(current => {
      if (element[1] === current[1]) {
        current[0] += element[0];
        match = true;
      }
    });
    if (!match) {
      arr1.push(element);
    }
  });
  return arr1.sort((a, b) => {
    return a[1] < b[1] ? -1 : 1;
  });
}

// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
];

console.log(updateInventory(curInv, newInv));