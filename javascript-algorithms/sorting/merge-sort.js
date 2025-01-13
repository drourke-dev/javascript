// Problem - Given an array of integars, sort the array.

// const arr = [-6, 20, 8, -2, 4]
// mergeSort(arr) => Should return [-6, -2, 4, 8, 20]

function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergesort(leftArr), mergesort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  const resultArr = [...sortedArr, ...leftArr, ...rightArr];
  return resultArr;
}

const arr = [-6, 20, 8, -2, 4];

console.log(arr); // [-6, 20, 8, -2, 4]
console.log(mergeSort(arr)); // [-6, -2, 4, 8, 20]

// Big O = O(nlogn) → Log-Linear Time Complexity
