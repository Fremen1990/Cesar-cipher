const messageInput = document.querySelector(".input");
const btnTranscrypt = document.querySelector(".transcrypt-button");
const container = document.querySelector(".container");

let input = "";

const textTyped = (e) => {
  input = e.target.value;
  console.log(e.target.value);
};

let alphabet = "abcdefghijklmnoprstuvwxyz";
const alphabetCapitalLetters = alphabet.toUpperCase();
let shiftNumber = 13;
let ShiftNumberToEncrypt = alphabet.length - shiftNumber;
let result = [];

function cesarCipher() {
  if (typeof input !== "string") return "Enteret text need to be string format";

  if (input == "") return "Please enter text";

  input = [...input];

  result = input.map((el) => {
    if (el === " " || /\d/.test(el)) return el;
    if (/[A-Z]/.test(el)) {
      const index = alphabetCapitalLetters.indexOf(el);
      const newIndex = (index + shiftNumber) % alphabet.length;
      return alphabetCapitalLetters[newIndex];
    } else {
      const index = alphabet.indexOf(el);
      const newIndex = (index + shiftNumber) % alphabet.length;
      return alphabet[newIndex];
    }
  });
  console.log(result.join(""));
  return result.join("");
}

function cesarCipherReverse(input) {
  if (typeof input !== "string") return "Plese enter text in string format";

  if (input == "") return "Please enter text what you want to encrypt";

  input = [...input];

  result = input.map((el) => {
    if (el === " " || /\d/.test(el)) {
      const index = alphabetCapitalLetters.indexOf(el);
      const newIndex = (index + ShiftNumberToEncrypt) % alphabet.length;
      return alphabetCapitalLetters[newIndex];
    } else {
      const index = alphabet.indexOf(el);
      const newIndex = (index + ShiftNumberToEncrypt) % alphabet.length;
      return alphabet[newIndex];
    }
  });
  console.log(result.join(""));
  return result.join("");
}

const addMessageToHTML = () => {
  const transcryptedMessage = document.createElement("p");
  transcryptedMessage.textContent = result.join("");
  container.appendChild(transcryptedMessage);
};

messageInput.addEventListener("input", textTyped);
btnTranscrypt.addEventListener("click", cesarCipher);
btnTranscrypt.addEventListener("click", addMessageToHTML);
