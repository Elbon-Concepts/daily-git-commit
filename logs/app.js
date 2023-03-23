const fs = require('fs');

function generateRandomWord() {
  const possibleChars = '0123456789abcdef';
  let word = '';

  for (let i = 0; i < 32; i++) {
    const randomIndex = Math.floor(Math.random() * possibleChars.length);
    const randomChar = possibleChars[randomIndex];
    word += randomChar;
  }

  return word;
}

const randomWord = generateRandomWord();

const baseFileName = randomWord;
const extension = '.log';

// Generate a new GUID
const guid = generateRandomWord();

// Concatenate the GUID and the base file name to create the new file name
const newFileName = `${guid}${extension}`;

// Create a new file with the generated name
fs.writeFile(newFileName, '', (err) => {
  if (err) throw err;
  console.log(`File ${newFileName} has been created`);
});
