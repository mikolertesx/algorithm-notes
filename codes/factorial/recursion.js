function fact(number) {
  if (number === 1) {
    return 1;
  }
  return number * fact(number - 1);
}

// In every function call => 0(1)
// T = n * 0(1) => 0(n)

// Test case.
console.log(fact(3));
console.log(fact(4));
console.log(fact(5));
