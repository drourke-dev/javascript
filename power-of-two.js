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

// Big O = O(logn)  -> Logarithmic Time Complexity

// A number that is a power of 2 has exactly one 1 in its binary form:
// 1 = 0001
// 2 = 0010
// 4 = 0100
// 8 = 1000

// Subtracting 1 flips all the bits to the right of the rightmost 1, and the rightmost 1 itself becomes 0.

// 1 - 1 = 0 → 0001 - 1 = 0000
// 2 - 1 = 1 → 0010 - 1 = 0001
// 4 - 1 = 3 → 0100 - 1 = 0011
// 8 - 1 = 7 → 1000 - 1 = 0111

// The bitwise AND (&) operator compares each corresponding bit of two numbers. It returns 1 only if both bits are 1; otherwise, it returns 0.

// 0010 (2) &  0001 (1) === 0 (true)
// 0101 (5) &  0100 (4) === 0 (false)

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true
console.log(isPowerOfTwoBitWise(5)); // false

// Big O = O(1)  -> Constant Time Complexity
