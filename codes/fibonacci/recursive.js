function fib(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  return fib(number - 1) + fib(number - 2);
}

// Test case.
// O(2^n)
console.log(fib(8));
console.log(fib(12));
console.log(fib(32));
