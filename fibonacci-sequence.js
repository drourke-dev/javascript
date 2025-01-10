// Problem - Give a number 'n', find the first 'n' elements of the Fibonacci sequence.

// In mathematics, the Fibonacci sequence is a sequence of numbers in which each number is the sum of the two preceding ones.

// The first two numbers in the sequence are 0 and 1.

function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(0)); // [ 0, 1 ]
console.log(fibonacci(1)); // [ 0, 1 ]
console.log(fibonacci(2)); // [ 0, 1 ]
console.log(fibonacci(3)); // [ 0, 1, 1 ]
console.log(fibonacci(5)); // [ 0, 1, 1, 2, 3 ]

// Big O = O(n) → Linear Time Complexity
