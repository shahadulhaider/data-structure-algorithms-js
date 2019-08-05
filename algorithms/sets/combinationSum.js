function combinationSum(candidates, target) {
  return combinationSumRecursive(candidates, target);
}

function combinationSumRecursive(
  candidates,
  remainingSum,
  finalCombinations = [],
  currentCombination = [],
  startFrom = 0
) {
  if (remainingSum < 0) {
    return finalCombinations;
  }

  if (remainingSum === 0) {
    finalCombinations.push(currentCombination.slice());
    return finalCombinations;
  }

  for (let i = startFrom; i < candidates.length; i++) {
    const currentCandidate = candidates[i];
    currentCombination.push(currentCandidate);

    combinationSumRecursive(
      candidates,
      remainingSum - currentCandidate,
      finalCombinations,
      currentCombination,
      i
    );

    currentCombination.pop();
  }
  return finalCombinations;
}

console.log(combinationSum([2, 4, 5, 7], 9));