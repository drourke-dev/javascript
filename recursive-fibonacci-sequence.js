// Problem - Give a number 'n', find the nth element of the Fibonacci sequence.

// In mathematics, the Fibonacci sequence is a sequence of numbers in which each number is the sum of the two preceding ones.

// The first two numbers in the sequence are 0 and 1. (0, 1, 1, 2, 3, 5, 8...)

// recursiveFibonacci(0) = 0
// recursiveFibonacci(1) = 1
// recursiveFibonacci(6) = 8

// Fn = Fn-1 + Fn-2

// F0 = 0;
// F1 = 1;
// F2 = 1(F1 + F0);
// F3 = 2(F2 + F1);
// F4 = 3(F3 + F2);
// F5 = 5(F4 + F3);
// F6 = 8(F5 + F4);

function recursiveFibonacci(n) {
  // Base case
  if (n < 2) {
    return n;
  }
  // Recursive case
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

// Big O = O(2^n) → Exponential Time Complexity
