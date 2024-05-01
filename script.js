const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
const alphabetLower = alphabet.toLowerCase();

const ceaserCipher = (text, key) => {
    let encryptedResult = "";

    text.split('').forEach(char => {
        const charAlphabetPos = alphabet.indexOf(char);
        const charAlphabetLowerPos = alphabetLower.indexOf(char);

        if (charAlphabetPos !== -1) {
            encryptedResult += alphabet[(charAlphabetPos + key) % alphabet.length];
        } else if (charAlphabetLowerPos !== -1) {
            encryptedResult += alphabetLower[(charAlphabetLowerPos + key) % alphabetLower.length];
        } else {
            encryptedResult += char;
        }
    })

    return encryptedResult;
}

document.addEventListener("DOMContentLoaded", () => {
  const generalInput = document.getElementById("general");
  const encryptedInput = document.getElementById("encrypted");
  const cipherKeyInput = document.getElementById("cipher-key");

  generalInput.addEventListener("input", (event) => {
    let key = 1;
    let cipherKeyValue = parseInt(cipherKeyInput.value, 10);

    if (typeof cipherKeyValue === 'number' && isFinite(cipherKeyValue)) {
        key = cipherKeyValue;
    }
    encryptedInput.value = ceaserCipher(event.target.value, key);
  });

  cipherKeyInput.addEventListener("input", (event) => {
    let key = 1;
    let cipherKeyValue = parseInt(cipherKeyInput.value, 10);

    if (typeof cipherKeyValue === 'number' && isFinite(cipherKeyValue)) {
        key = cipherKeyValue;
    }
    encryptedInput.value = ceaserCipher(generalInput.value, key);
  });
});
