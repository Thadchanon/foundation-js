const prices = [20, 15, 30, 40, 55];

/* prices.forEach((price, index) => {
  console.log(index, price);
}); */

const multipliedPrices = prices.map((value) => {
  return value * 1.5;
});

// console.log(multipliedPrices);

const cheapPrices = prices.filter((value) => {
  return value <= 30;
});

// console.log(cheapPrices);

const sumPrices = prices.reduce((previousPrice, currentPrice) => {
  return previousPrice + currentPrice;
}, 165);

// console.log(sumPrices);

const haveEvenPrices = prices.some((value) => {
  return value % 2 === 0;
});

// console.log(haveEvenPrices);

const allEvenPrices = prices.every((value) => {
  return value % 2 === 0;
});

// console.log(allEvenPrices);
