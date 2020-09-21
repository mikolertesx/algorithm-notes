function sort(list) {
  // There's nothing to sort.
  if (list.length < 2) {
    return list;
  }
  // Ternary sort if there's only two.
  if (list.length === 2) {
    return list[0] > list[1] ? [list[1], list[0]] : list;
  }
  // Length will not be always dividable over 2.
  const middle = Math.floor(list.length / 2);
  // From the start to the middle.
  const leftList = list.slice(0, middle);
  // From the middle to the end.
  const rightList = list.slice(middle);

  // Recursive calls.
  const leftSortedList = sort(leftList);
  const rightSortedList = sort(rightList);

  const mergedList = [];
  let leftListIndex = 0;
  let rightListIndex = 0;

  // As long as there's items either on the left list or right list.
  while (
    leftListIndex < leftSortedList.length ||
    rightListIndex < rightSortedList.leftList
  ) {
    if (
      leftListIndex >= leftSortedList.length ||
      leftSortedList[leftListIndex] > rightSortedList[rightListIndex]
    ) {
      mergedList.push(rightSortedList[rightListIndex]);
      rightListIndex++;
    } else {
      mergedList.push(leftSortedList[leftListIndex]);
      leftListIndex++;
    }
  }

  return mergedList;
}

// Recursive time complexity: 0(n^logb(a)) => 0(n^log2(2)) => 0(n^1) => 0(n)
// Outside of recursion time complexity: 0(n)
// Total time complexity: 0(n^logb(a) * log n) => 0(n * log n)

// Where a is two.
// Where b is two.

// Best case: 0(n * log n)
// Worst case: 0(n * log n)
// Average case: 0(n * log n)

const sortedArray = sort([-10, 33, 5, 10, 3, -19, -99, 100]);
console.log(sortedArray);
