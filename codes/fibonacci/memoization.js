const memo = {};

function fib(number, memoizated = {}) {
  if (memoizated[number]) {
    return memoizated[number];
  }
  let result;
  if (number === 0 || number === 1) {
    result = 1;
  } else {
    result = fib(number - 1, memoizated) + fib(number - 2, memoizated);
    memoizated[number] = result;
  }

  return result;
}

// Test case
console.log(fib(8, memo));
console.log(fib(12, memo));
console.log(fib(32, memo));
