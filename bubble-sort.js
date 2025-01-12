// Problem - Given an array of integars, sort the array.

// const arr = [-6, 20, 8, -2, 4]
// bubbleSort(arr) => Should return [-6, -2, 4, 8, 20]

const arr = [-6, 20, 8, -2, 4];

function bubbleSort(arr) {
  let swapped;

  // A while loop checks its condition before executing, whereas a do-while loop executes at least once before checking its condition.

  do {
    swapped = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

console.log(arr); // [-6, 20, 8, -2, 4]
bubbleSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]

// Big O = O(n^2) → Quadratic Time Complexity
