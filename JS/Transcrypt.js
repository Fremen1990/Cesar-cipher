class TranscryptionInterface {
  constructor() {
    this.messageInput = document.querySelector(".input");
    this.btnTranscrypt = document.querySelector(".transcrypt-button");
    this.btnTranscryptKeyboard = document.querySelector(".transcrypt-button");
    this.btnTranscryptClear = document.querySelector(".transcrypt-clear");
    this.containerTranscrypted = document.querySelector(
      ".containerTranscription"
    );
    this.messageInput.addEventListener("input", this.textTyped.bind(this));
    this.btnTranscrypt.addEventListener("click", this.cesarCipher.bind(this));
    this.btnTranscryptKeyboard.addEventListener(
      "keydown",
      this.keyboardCesarCipher.bind(this)
    );
    this.btnTranscryptClear.addEventListener(
      "click",
      this.clearTranscrypted.bind(this)
    );

    this.alphabet = "abcdefghijklmnoprstuvwxyz";
    this.alphabetCapitalLetters = this.alphabet.toUpperCase();
    this.shiftNumber = 13;
    this.resultTranscrypt = [];
  }

  textTyped(event) {
    event.preventDefault();
    this.input = event.target.value;
    console.log(event.target.value);
  }

  checkIfString(input) {
    input = [...input];
    if (input == "") return "Please enter text";
    if (typeof input !== "string") return "Input is not a string type";
  }
  cesarCipher(event) {
    event.preventDefault();
    this.input = [...this.input];
    this.checkIfString(this.input);
    this.resultTranscrypt = this.input.map((el) => {
      if (el === " " || /\d/.test(el)) return el;
      if (/[A-Z]/.test(el)) {
        const index = this.alphabetCapitalLetters.indexOf(el);
        const newIndex = (index + this.shiftNumber) % this.alphabet.length;
        return this.alphabetCapitalLetters[newIndex];
      } else if (/[a-z]/.test(el)) {
        const index = this.alphabet.indexOf(el);
        const newIndex = (index + this.shiftNumber) % this.alphabet.length;
        return this.alphabet[newIndex];
      } else return "Use only alphabetical characters";
    });
    console.log(this.resultTranscrypt.join(""));
    this.addMessageToHTMLtranscrypted();
    this.input = "";
    return this.resultTranscrypt.join("");
  }
  addMessageToHTMLtranscrypted = () => {
    this.transcryptedMessage = document.createElement("p");
    this.transcryptedMessage.textContent = this.resultTranscrypt.join("");
    this.containerTranscrypted.appendChild(this.transcryptedMessage);
    this.messageInput.value = "";
  };

  clearTranscrypted = (event) => {
    event.preventDefault();
    console.log("clear");
    this.containerTranscrypted.textContent = "";
    this.input = "";
  };
  keyboardCesarCipher = (e) => {
    if (13 == e.keyCode) {
      console.log("dziala");
    }
  };
}
