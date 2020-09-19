function isPrime(number) {
  let count = 0;
  for (let i = 2; i < Math.sqrt(number); i++) {
    count++;
    if (number % i === 0) {
      console.log(count);
      return false;
    }
  }
  console.log(count);
  return true;
}
// Improved version: 27275 iterations vs 164 iterations.
// Best case: Number = 1 or Number = 2 => 0(1)
// Average case: 0(sqrt(n))
// Worst case: 0(sqrt(n))
console.log(isPrime(27277));
