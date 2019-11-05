According to the song, Katy Perry "maxed our credit cards".

Define a function, lastFridayNight, takes an array of transactions.

lastFridayNight should return the total amount she spent last Friday night.

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
];

sumTransactions(transactions) // => 10512

// YOUR CODE BELOW
const lastFridayNight = (array) => {
  let totalNum = 0;
  for (let i = 0; i < array.length; i++) {
    totalNum += array[i].amount 
  }
  return totalNum;
}
