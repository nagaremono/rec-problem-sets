const areArgsValid = require('../cliHelper/areArgsValid');
const readFileInput = require('../cliHelper/readFileInput');
const path = require('path');

if (areArgsValid(__dirname) === false) {
  process.exit(1);
}

const filePath = path.join(__dirname, process.argv[2]);

readFileInput(filePath)
  .then((fileContent) => {
    const [_, string, key] = fileContent;

    const encrypted = encrpyt(string.join(' '), key[0]);

    console.log(encrypted);
  })
  .catch((error) => console.log(error));

function encrpyt(string, key) {
  return string
    .split('')
    .map((char) => {
      if (/[^A-Z]/i.test(char)) {
        return char;
      }

      let shiftOffset = isUpper(char) ? 65 : 97;

      return String.fromCodePoint(
        ((char.codePointAt(0) - shiftOffset + parseInt(key)) % 26) + shiftOffset
      );
    })
    .join('');
}

function isUpper(char) {
  let charUnicode = char.codePointAt(0);

  return charUnicode >= 65 && charUnicode <= 90;
}
