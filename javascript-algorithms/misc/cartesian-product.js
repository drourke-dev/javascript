// Problem - Given two finite non-empty sets, find their Cartesian Product.

// In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted AxB,
// is the set of all ordered pairs (a, b) where a is in A and b is in B.

function cartesianProduct(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1, arr2)); // [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]

// Big O = O(mn) → Bilinear Time Complexity
