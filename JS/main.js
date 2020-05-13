const messageInput = document.querySelector(".input");
const messageDecryption = document.querySelector(".inputDecryption");
const btnTranscrypt = document.querySelector(".transcrypt-button");
const btnTranscryptKeyboard = document.querySelector(".transcrypt-button");
const btnDecrypt = document.querySelector(".decrypt-button");
const btnDecryptKeyboard = document.querySelector(".decrypt-button");
const btnTranscryptClear = document.querySelector(".transcrypt-clear");
const btnDecryptClear = document.querySelector(".decrypt-clear");
const containerTranscrypted = document.querySelector(".containerTranscription");
const containerDecrypted = document.querySelector(".containerDecryption");

const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");

const txt = [
  "In cryptography, a Caesar cipher, also known as Caesars cipher, the shift cipher, Caesars code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.",
];
let activeLetter = -15;
let activeText = 0;

// Implementacja
const addLetter = () => {
  // w środku setTimeout
  if (activeLetter >= 0) {
    spnText.textContent += txt[activeText][activeLetter];
  }
  activeLetter++;
  if (activeLetter === txt[activeText].length) {
    activeText++;
    if (activeText === txt.length) return;

    return setTimeout(() => {
      activeLetter = -15;
      spnText.textContent = "";
      addLetter();
    }, 500);
  }
  setTimeout(addLetter, 50);
};
addLetter(); //pierwsze wywołanie

// Animacja kursora
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);

// Opóźnione wejście sekcji

const delayedSection = () => {
  const transcryptArea = document.querySelector(".transcrypt");
  transcryptArea.style.opacity = "1";
  transcryptArea.style.transition = "5s linear";

  const decryptArea = document.querySelector(".decrypt");
  decryptArea.style.opacity = "1";
  decryptArea.style.transition = "5s linear";
};

setTimeout(delayedSection, 1000);

let input = "";
let inputDecryption = "";

const textTyped = (e) => {
  input = e.target.value;
  console.log(e.target.value);
};
const textTypedDecryption = (ed) => {
  inputDecryption = ed.target.value;
  console.log(ed.target.value);
};

let alphabet = "abcdefghijklmnoprstuvwxyz";
const alphabetCapitalLetters = alphabet.toUpperCase();
let shiftNumber = 13;
let ShiftNumberToEncrypt = alphabet.length - shiftNumber;
let resultTranscrypt = [];
let resultDecrypt = [];

function checkIfString(input) {
  input = [...input];
  if (input == "") return "Please enter text";
  if (typeof input !== "string") return "Input is not a string type";
}
function cesarCipher(e) {
  e.preventDefault();
  input = [...input];
  checkIfString(input);
  resultTranscrypt = input.map((el) => {
    if (el === " " || /\d/.test(el)) return el;
    if (/[A-Z]/.test(el)) {
      const index = alphabetCapitalLetters.indexOf(el);
      const newIndex = (index + shiftNumber) % alphabet.length;
      return alphabetCapitalLetters[newIndex];
    } else if (/[a-z]/.test(el)) {
      const index = alphabet.indexOf(el);
      const newIndex = (index + shiftNumber) % alphabet.length;
      return alphabet[newIndex];
    } else return "Use only alphabetical characters";
  });
  console.log(resultTranscrypt.join(""));
  addMessageToHTMLtranscrypted();
  return resultTranscrypt.join("");
}

function cesarCipherReverse(e) {
  e.preventDefault();
  inputDecryption = [...inputDecryption];
  checkIfString(inputDecryption);
  resultDecrypt = inputDecryption.map((el) => {
    if (el === " " || /\d/.test(el)) return el;
    if (/[A-Z]/.test(el)) {
      const index = alphabetCapitalLetters.indexOf(el);
      const newIndex = (index + ShiftNumberToEncrypt) % alphabet.length;
      return alphabetCapitalLetters[newIndex];
    } else if (/[a-z]/.test(el)) {
      const index = alphabet.indexOf(el);
      const newIndex = (index + ShiftNumberToEncrypt) % alphabet.length;
      return alphabet[newIndex];
    } else return "Use only alphabetical characters";
  });
  console.log(resultDecrypt.join(""));
  addMessageToHTMLdecrypted();
  return resultDecrypt.join("");
}

const addMessageToHTMLtranscrypted = () => {
  const transcryptedMessage = document.createElement("p");
  transcryptedMessage.textContent = resultTranscrypt.join("");
  containerTranscrypted.appendChild(transcryptedMessage);
  messageInput.value = "";
};

const addMessageToHTMLdecrypted = () => {
  const decryptedMessage = document.createElement("p");
  decryptedMessage.textContent = resultDecrypt.join("");
  containerDecrypted.appendChild(decryptedMessage);
  messageDecryption.value = "";
};

const clearTranscrypted = (e) => {
  e.preventDefault();
  console.log("klik");
  containerTranscrypted.textContent = "";
  input = "";
};

const clearDecrypted = (e) => {
  e.preventDefault();
  console.log("klik");
  containerDecrypted.textContent = "";
  input = "";
};

const keyboardCesarCipher = (e) => {
  if (13 == e.keyCode) {
    console.log("dziala");
  }
};

const keyboardCesarCipherReverse = (e) => {
  if (13 == e.keyCode) {
    console.log("dziala");
  }
};

messageInput.addEventListener("input", textTyped);
messageDecryption.addEventListener("input", textTypedDecryption);
btnTranscrypt.addEventListener("click", cesarCipher);
btnTranscryptKeyboard.addEventListener("keydown", keyboardCesarCipher);
btnDecrypt.addEventListener("click", cesarCipherReverse);
btnDecryptKeyboard.addEventListener("keydown", keyboardCesarCipherReverse);
btnTranscryptClear.addEventListener("click", clearTranscrypted);
btnDecryptClear.addEventListener("click", clearDecrypted);
