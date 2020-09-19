function fib(position) {
  const numbers = [1, 1]; // 1
  for (let i = 2; i < position + 1; i++) {
    // 1
    numbers.push(numbers[i - 1] + numbers[i - 2]); // n - 1
  }
  return numbers[position]; // 1
}

// Time = 1 + 1 + 1 - 1 + n
// Time = 2 + n

// => 0(n) Linear Time Complexity

console.log(fib(4));
console.log(fib(5));
