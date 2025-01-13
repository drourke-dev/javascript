// Problem - Give a positive integar 'n', determine if the number is a power of 2 or not.

// An integar is a power of two if there exists an integer 'x' such that 'n' === 2ˣ.

// isPowerOfTwo(1) =  true (2⁰)
// isPowerOfTwo(2) =  true (2¹)
// isPowerOfTwo(5) =  false

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

// Big O = O(logn) → Logarithmic Time Complexity
