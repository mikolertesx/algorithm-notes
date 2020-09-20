function findElement(list, element) {
  let startIndex = 0;
  let endIndex = list.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (element === list[middleIndex]) {
      return middleIndex;
    }
    if (list[middleIndex] < element) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
}

// Test case.
// Best case: 0(1)
// Average case: 0(log n)
// Worst case: 0(log n)
const arr = [1, 5, 9, 13, 99, 100];

console.log(findElement(arr, 99));
