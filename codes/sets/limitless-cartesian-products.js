function cartProduct(...sets) {
  function product(setA, setB) {
    const product = [];

    for (let setAEl of setA) {
      if (!Array.isArray(setAEl)) {
        setAEl = [setAEl];
      }

      for (const setBEl of setB) {
        product.push([...setAEl, setBEl]);
      }
    }
    return product;
  }

  let tempProduct = sets[0];

  for (let i = 1; i < sets.length; i++) {
    tempProduct = product(tempProduct, sets[i]);
  }

  return tempProduct;
}

// TEST CASE
const colors = ["blue", "red"];
const sizes = ["s", "m", "l"];
const styles = ["round neck", "v neck"];
console.log(cartProduct(colors, sizes, styles));
