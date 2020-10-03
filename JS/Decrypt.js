class DecrypttionInterface extends TranscryptionInterface {
  constructor() {
    super();
    this.messageDecryption = document.querySelector(".inputDecryption");
    this.btnDecrypt = document.querySelector(".decrypt-button");
    this.btnDecryptKeyboard = document.querySelector(".decrypt-button");
    this.btnDecryptClear = document.querySelector(".decrypt-clear");
    this.containerDecrypted = document.querySelector(".containerDecryption");
    this.messageDecryption.addEventListener(
      "input",
      this.textTypedDecryption.bind(this)
    );
    this.btnDecrypt.addEventListener(
      "click",
      this.cesarCipherReverse.bind(this)
    );
    this.btnDecryptKeyboard.addEventListener(
      "keydown",
      this.keyboardCesarCipherReverse.bind(this)
    );
    this.btnDecryptClear.addEventListener(
      "click",
      this.clearDecrypted.bind(this)
    );

    this.ShiftNumberToEncrypt = this.alphabet.length - this.shiftNumber;
    this.resultDecrypt = [];
  }

  textTypedDecryption = (ed) => {
    ed.preventDefault();
    this.inputDecryption = ed.target.value;
    console.log(ed.target.value);
  };

  cesarCipherReverse(e) {
    e.preventDefault();
    this.inputDecryption = [...this.inputDecryption];

    // TUUU
    this.checkIfString(this.inputDecryption);
    this.resultDecrypt = this.inputDecryption.map((el) => {
      if (el === " " || /\d/.test(el)) return el;
      if (/[A-Z]/.test(el)) {
        const index = this.alphabetCapitalLetters.indexOf(el);
        const newIndex = (index + ShiftNumberToEncrypt) % alphabet.length;
        return alphabetCapitalLetters[newIndex];
      } else if (/[a-z]/.test(el)) {
        const index = this.alphabet.indexOf(el);
        const newIndex =
          (index + this.ShiftNumberToEncrypt) % this.alphabet.length;
        return this.alphabet[newIndex];
      } else return "Use only alphabetical characters";
    });
    console.log(this.resultDecrypt.join(""));
    this.addMessageToHTMLdecrypted();
    this.inputDecryption = "";
    return this.resultDecrypt.join("");
  }

  addMessageToHTMLdecrypted() {
    const decryptedMessage = document.createElement("p");
    decryptedMessage.textContent = this.resultDecrypt.join("");
    this.containerDecrypted.appendChild(decryptedMessage);
    this.messageDecryption.value = "";
  }
  clearDecrypted = (e) => {
    e.preventDefault();
    console.log("klik");
    this.containerDecrypted.textContent = "";
    this.inputDecryption = "";
  };

  keyboardCesarCipherReverse = (e) => {
    if (13 == e.keyCode) {
      console.log("dziala");
    }
  };
}
