function getChange(coins, amount) {
  const transformedCoins = {};
  let remainingAmount = amount;

  const calculatedChange = {
    selectedCoins: transformedCoins,
    numberOfCoins: 0,
  };

  for (const coin of coins) {
    if (coin > remainingAmount) {
      continue;
    }
    const count = Math.floor(remainingAmount / coin);
    calculatedChange.selectedCoins[coin] = count;
    calculatedChange.numberOfCoins += count;
    remainingAmount = remainingAmount - coin * count;
  }
  return calculatedChange;
}

const availableCoins = [100, 50, 20, 10, 5, 2, 1];

console.log(getChange(availableCoins, 129));
