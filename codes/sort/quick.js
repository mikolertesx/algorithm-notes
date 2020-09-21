function sort(list) {
  const copiedList = [...list];
  // Exit condition.
  if (copiedList.length <= 1) {
    return copiedList;
  }

  const pivotElement = copiedList.shift();
  const smallerElementsList = [];
  const biggerElementsList = [];
  const centerElementsArray = [pivotElement];

  // As long as length is not 0 or null.
  while (copiedList.length) {
    const currentElement = copiedList.shift();
    if (currentElement === pivotElement) {
      centerElementsArray.push(centerElementsArray);
    } else if (currentElement < pivotElement) {
      smallerElementsList.push(currentElement);
    } else {
      biggerElementsList.push(currentElement);
    }
  }
  const smallerElementsSortedList = sort(smallerElementsList);
  const biggerElementsSortedList = sort(biggerElementsList);
  return smallerElementsSortedList.concat(
    centerElementsArray,
    biggerElementsSortedList
  );
}

// Recursive Step Runtime: 0(n^logb(a)) => 0(n^log2(2)) => 0(n^1) => 0(n)
// Where a means It gets splitted twice (smaller elements, bigger elements).
// Where b: Is the size of the splitted algorithm which is random,
// but, for testing purposes will remain in 2.

// Outside of recursion Runtime: 0(n) => There's only 1 while loop inside of it.

// Total runtime: 0(n^logb(a) * log n) =>0(n * log n)
const sortedArray = sort([-3, 10, 1, 100, -10, 22, 15]);
console.log(sortedArray);
