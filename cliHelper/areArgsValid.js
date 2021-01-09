const fs = require('fs');
const path = require('path');

function areArgsValid(currentDir) {
  if (process.argv.length < 3) {
    console.log('please provide input text file');

    return false;
  }

  const filePath = path.join(currentDir, process.argv[2]);

  if (fs.existsSync(filePath) === false) {
    console.log('cannot find such file');

    return false;
  }

  return true;
}

module.exports = areArgsValid;
