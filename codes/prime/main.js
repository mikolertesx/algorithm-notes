// Check if a number is prime or not of something.
// Prime meaning: Not divisible by other than 1 or itself.
function isPrime(number) {
  let count = 0;
  for (let i = 2; i < number; i++) {
    // 1
    count++;
    if (number % i === 0) {
      // n
      console.log(count);
      return false; // 1
    }
  }
  console.log(count);
  return true; // 1
}

// Best Case: number = 1 OR number = 2 => 0(1)
// Average Case: 0(n)
// Worst Case: number = 27,277 => 0(n) => Linear complexity.

console.log(isPrime(27277));
