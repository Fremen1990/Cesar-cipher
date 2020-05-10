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

function cesarCipherReverse() {
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
