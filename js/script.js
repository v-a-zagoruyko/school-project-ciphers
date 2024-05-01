import { ceaserEncrypt, getParsedCeaserKey } from "./ceaser.js";

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("input[name='ciphers-radio-input']")
    .forEach((input) => {
      input.addEventListener("change", (e) => {
        const formsContainers = Array.from(document.getElementsByClassName(
          "form-group-container"
        ));
        formsContainers.forEach((container) => (container.hidden = true));
        const containerId = e.target.dataset.formTarget;
        if (!containerId) {
          return null;
        }
        document.getElementById(containerId).hidden = false;
      });
    });

  const ceaserKeyCaption = document.getElementById("ceaser-cipher-key-caption");
  const ceaserKeyInput = document.getElementById("ceaser-cipher-key");
  const ceaserTextInput = document.getElementById("ceaser-cipher-text");
  const ceaserEncryptedInput = document.getElementById(
    "ceaser-cipher-encrypted"
  );

  ceaserKeyCaption.innerText = `Максимальное значение ключа ${Number.MAX_SAFE_INTEGER}, а минимальное ${Number.MIN_SAFE_INTEGER}.`;

  ceaserTextInput.addEventListener("input", (e) => {
    ceaserEncryptedInput.value = ceaserEncrypt(
      e.target.value,
      getParsedCeaserKey(ceaserKeyInput.value)
    );
  });

  ceaserEncryptedInput.addEventListener("input", (e) => {
    ceaserTextInput.value = ceaserEncrypt(
      e.target.value,
      getParsedCeaserKey(ceaserKeyInput.value) * -1
    );
  });

  ceaserKeyInput.addEventListener("input", (e) => {
    ceaserEncryptedInput.value = ceaserEncrypt(
      ceaserTextInput.value,
      getParsedCeaserKey(e.target.value)
    );
  });

  ceaserKeyInput.addEventListener("input", (e) => {
    e.target.value = e.target.value
      .replace(/[^0-9.-]/g, "")
      .replace(/(\..*?)\..*/g, "$1")
      .replace(/^(-)|-+/g, "$1")
      .replace(/^0[^]/, "0");
  });
});
