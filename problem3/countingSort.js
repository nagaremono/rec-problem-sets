const areArgsValid = require('../cliHelper/areArgsValid');
const readFileInput = require('../cliHelper/readFileInput');
const path = require('path');

if (areArgsValid(__dirname) === false) {
  process.exit(1);
}

const filePath = path.join(__dirname, process.argv[2]);

readFileInput(filePath)
  .then((fileContent) => {
    const [_, ...intStrPairList] = fileContent;

    const sortedStringArray = countingSort(intStrPairList);

    console.log(sortedStringArray.join(' '));
  })
  .catch((error) => console.log(error));

function countingSort(intStrPairArray) {
  let modifiedArr = replaceFirstHalf(intStrPairArray, '-');

  let sortedStrings = new Array(intStrPairArray.length);

  for (let [intIdx, string] of modifiedArr) {
    if (sortedStrings[intIdx]) {
      sortedStrings[intIdx] = `${sortedStrings[intIdx]} ${string}`;
    } else {
      sortedStrings[intIdx] = string;
    }
  }

  return sortedStrings;
}

function replaceFirstHalf(intStrTupleArray, string) {
  return intStrTupleArray.map(([int, str], index) => {
    if (index < intStrTupleArray.length / 2) {
      return [int, string];
    }

    return [int, str];
  });
}
