const messageInput = document.querySelector(".input");
const btnTranscrypt = document.querySelector(".transcrypt-button");
const container = document.querySelector(".container");

const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");

const txt = [
  "In cryptography, a Caesar cipher, also known as Caesars cipher, the shift cipher, Caesars code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.",
];
let activeLetter = -15;
let activeText = 0;

// Implementacja
const addLetter = () => {
  // Użyj w środku setTimeout
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

//Opóźnione wejście sekcji

const delayedSection = () => {
  const userInput = document.querySelector(".user-input");
  const transcryptedInput = document.querySelector(".transcrypted-input");
  userInput.style.opacity = "1";
  userInput.style.transition = "4s";
  transcryptedInput.style.opacity = "1";
  transcryptedInput.style.transition = "4s";
};

setTimeout(delayedSection, 18000);

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
