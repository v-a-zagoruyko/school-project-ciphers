import { alphabet } from "./utils.js";

export const getParsedCeaserKey = (candidate) => {
    const key = parseInt(candidate) || 0;
    if (key < Number.MIN_SAFE_INTEGER || key > Number.MAX_SAFE_INTEGER) {
        return 0;
    }
    return key;
}

const getCharacterPosition = (pos, alphabet) => {
  if (pos < 0) {
    return alphabet.length - (Math.abs(pos) % alphabet.length);
  }
  return pos % alphabet.length;
};

const getCharacterAlphabet = (char) => {
  if (alphabet.en.lower.indexOf(char) !== -1) {
    return alphabet.en.lower;
  }
  if (alphabet.en.upper.indexOf(char) !== -1) {
    return alphabet.en.upper;
  }
  if (alphabet.ru.lower.indexOf(char) !== -1) {
    return alphabet.ru.lower;
  }
  if (alphabet.ru.upper.indexOf(char) !== -1) {
    return alphabet.ru.upper;
  }
  return null;
};

const getCharacter = (char, key) => {
  const alphabet = getCharacterAlphabet(char);
  if (alphabet === null) {
    return char;
  }
  return alphabet[getCharacterPosition(alphabet.indexOf(char) + key, alphabet)];
};

export const ceaserEncrypt = (text, key) =>
  text.split("").reduce((acc, char) => acc + getCharacter(char, key), "");
