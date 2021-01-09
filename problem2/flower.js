const areArgsValid = require('../cliHelper/areArgsValid');
const readFileInput = require('../cliHelper/readFileInput');
const path = require('path');

if (areArgsValid(__dirname) === false) {
  process.exit(1);
}

const filePath = path.join(__dirname, process.argv[2]);

readFileInput(filePath)
  .then((fileContent) => {
    const [flowerFriendsTuple, prices] = fileContent;

    const cost = calcMinimumCost(flowerFriendsTuple[1], prices);

    console.log(cost);
  })
  .catch((error) => console.log(error));

function calcMinimumCost(friends, prices) {
  let sortedPrices = sortNumArrayDesc(prices);

  let flowersPerFriend = new Array(parseInt(friends)).fill(0);

  let totalCost = 0;

  for (let [index, price] of sortedPrices.entries()) {
    let friendIndex = index % friends;

    totalCost += (flowersPerFriend[friendIndex] + 1) * price;

    flowersPerFriend[friendIndex]++;
  }

  return totalCost;
}

function sortNumArrayDesc(numArray) {
  return numArray.slice().sort((a, b) => (+a >= +b ? -1 : 1));
}
