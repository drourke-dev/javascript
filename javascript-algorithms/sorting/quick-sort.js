// Problem - Given an array of integars, sort the array.

// const arr = [-6, 20, 8, -2, 4]
// quickSort(arr) => Should return [-6, -2, 4, 8, 20]

const arr = [-6, 20, 8, -2, 4];

function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(arr); // [-6, 20, 8, -2, 4]
console.log(quickSort(arr)); // [-6, -2, 4, 8, 20]

// Worst case = O(n^2) → Quadratic Time Complexity
// Average case = O(nlogn) → Log-Linear Time Complexity
