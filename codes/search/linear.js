function findElement(list, element) {
  let index = 0;
  for (const item of list) {
    if (item === element) {
      return index;
    }
    index++;
  }
}

// Test case.
// Best case: 0(1)
// Average case: 0(n)
// Worst case: 0(n)

const arr = [5, 3, 10, -10, 33, 51];

console.log(findElement(arr, 10));
console.log(findElement(arr, 33));
