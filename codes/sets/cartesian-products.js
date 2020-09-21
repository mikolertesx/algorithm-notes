function cartProduct(setA, setB) {
  const product = [];

  for (const setAEl of setA) {
    for (const setBEl of setB) {
      product.push([setAEl, setBEl]);
    }
  }
  return product;
}

// TEST CASE
const colors = ["blue", "red"];
const sizes = ["s", "m", "l"];
console.log(cartProduct(colors, sizes));

// Time complexity: O(n*m) => O(n^2)
// Space complexity: O(n*m) => O(n^2)
