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
