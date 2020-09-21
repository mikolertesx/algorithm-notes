function getMin(numbers) {
  let min = numbers[0]; // 1
  for (const num of numbers) {
    // 1
    if (num < min) {
      // n
      min = num; // 0 (Best Case), 2 (Worst Case), 1 (Avg. Case)
    }
  }
  return min; // 1
}

// Best Case: [1, 2, 3] => 0(n)
// Worst Case: [3, 2, 1] => 0(n)
// Average Case: [2, 3, 1] => 0(n)

console.log(getMin([1, 2, 3]));
console.log(getMin([9, 8, 3, 5, 1]));
console.log(getMin([10, 3, 8, 6]));
