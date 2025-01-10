// Problem - Give an integar 'n', find the factorial of that integer.

// In mathematics, the factorial of a non-negative integer 'n', denoted by 'n!', is the product of all positive integars less than or equal to 'n'.

// recursiveFactorial(4) = 4 * 3 * 2 * 1 = 24
// recursiveFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120

// 5! = 5 * 4 * 3 * 2 * 1 | 5 * 4!
// 4! = 4 * 3 * 2 * 1 | 4 * 3!
// 3! = 3 * 2 * 1 | 3 * 2!
// 2! = 2 * 1 | 2 * 1!
// 1! = 1 * 1 | 1 * 0!
// 0! = 1

function recursiveFactorial(n) {
  // Base case
  if (n === 0) {
    return 1;
  }

  // Recursive case
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 120

// Big O = O(n) → Linear Time Complexity
