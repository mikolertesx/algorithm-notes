function sort(list) {
  const resultList = [...list];

  for (let outer = 0; outer < resultList.length; outer++) {
    let outerElement = resultList[outer];
    for (let inner = outer + 1; inner < resultList.length; inner++) {
      let innerElement = resultList[inner];
      // Whether or not to swap the elements.
      if (outerElement > innerElement) {
        resultList[outer] = innerElement;
        resultList[inner] = outerElement;
        outerElement = resultList[outer];

        // This is really not necessary but I'll leave it because it's useful to keep in mind.
        // innerElement = resultList[innerElement];
      }
    }
  }

  return resultList;
}

// Time Complexity: 0(n^2) => Quadratic.

const sortedList = sort([5, 10, -3, -10, 1, 100, 99]);
console.log(sortedList);
