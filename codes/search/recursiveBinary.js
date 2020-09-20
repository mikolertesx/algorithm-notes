function findElement(list, element, offset = 0) {
  let startIndex = 0;
  let endIndex = list.length - 1;

  const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

  if (element === list[middleIndex]) {
    return middleIndex + offset;
  }
  if (list[middleIndex] < element) {
    startIndex = middleIndex + 1;
    offset = offset + middleIndex + 1;
  } else {
    endIndex = middleIndex;
  }
  return findElement(list.slice(startIndex, endIndex + 1), element, offset);
}

// Test case.

// USING MASTER THEOREM
// a = 1
// b = 2
// 0(n^logb a) => 0(n^log2 1) => 0(n^0) => 0(1)
// Overall algorithm time complexity:
// 0(n^logb a * log n) => 0(1 * log n) => 0(log n)
const arr = [1, 5, 9, 13, 99, 100];
console.log(findElement(arr, 99));
