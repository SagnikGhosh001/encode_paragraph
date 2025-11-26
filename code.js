const randomNumberBetween = (upper, lower) => {
  return Math.round(Math.random() * (upper - lower) + lower);
};

const generateRandomChar = () => {
  //skip digit
  const range = Math.random() > 0.5
    ? { start: 33, end: 47 }
    : { start: 58, end: 126 };

  return String.fromCharCode(randomNumberBetween(range.start, range.end));
};

const generateRandomString = (length) => {
  const randomString = [];
  for (let term = 0; term <= length; term++) {
    randomString.push(generateRandomChar());
  }

  return randomString.join("");
};

const addPrefixAndSuffix = (text) => {
  const encodedElements = [];
  let index = 0;

  for (const string of [...text]) {
    const randomNumber = randomNumberBetween(0, string.length);
    const firstSegment = string.slice(0, randomNumber);
    encodedElements.push(`${index},${firstSegment}_`);
    index++;
    const secondSegment = string.slice(randomNumber);
    encodedElements.push(`${index},${secondSegment}_`);
    index++;
  }

  return encodedElements;
};

const parseInput = (input) => {
  const text = input.split(" ");
  return addPrefixAndSuffix(text);
};

const encodeData = (text) => {
  const suffeldText = text.sort(() => Math.random() - 0.5);
  const encodedText = [];
  for (const text of suffeldText) {
    const randomLength = randomNumberBetween(0, 20);
    const randomString = generateRandomString(randomLength);
    encodedText.push(randomString.concat(" ", text));
  }

  return encodedText.join("");
};

const main = () => {
  const input = Deno.readTextFileSync("./input.txt");
  const parsedInput = parseInput(input);
  const encodedData = encodeData(parsedInput);

  Deno.writeTextFileSync("./encoded_output.txt", encodedData);
};

main();
