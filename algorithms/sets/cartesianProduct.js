function cartesianProduct(setA = [], setB = []) {
  if (!setA || !setB || !setA.length || !setB.length) return null;
  const product = [];

  for (let indexA = 0; indexA < setA.length; indexA++) {
    for (let indexB = 0; indexB < setB.length; indexB++) {
      product.push([setA[indexA], setB[indexB]]);
    }
  }
  return product;
}

const setA = [3, 4, 5];
const setB = [1, 2];
console.log(cartesianProduct(setA, setB));