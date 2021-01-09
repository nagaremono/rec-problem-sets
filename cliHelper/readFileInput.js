const fs = require('fs');
const readline = require('readline');

async function readFileInput(filePath) {
  const file = fs.createReadStream(filePath);

  file.on('error', function (err) {
    console.log(err.message);
  });

  const rl = readline.createInterface({
    input: file,
    crlfDelay: Infinity,
  });

  let fileContentArray = [];

  for await (const line of rl) {
    fileContentArray.push(line.split(' '));
  }

  return fileContentArray;
}

module.exports = readFileInput;
