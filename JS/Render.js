class Render {
  constructor() {
    this.spnText = document.querySelector(".text");
    this.spnCursor = document.querySelector(".cursor");
    this.txt = [
      "In cryptography, a Caesar cipher, also known as Caesars cipher, the shift cipher, Caesars code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.",
    ];
    this.activeLetter = -15;
    this.activeText = 0;
    this.windowUrl = document.URL;
    this.load = addEventListener("load", this.addLetter.bind(this));
  }
  // Implementacja
  addLetter() {
    // this.spnText.textContent = this.txt;
  // w środku setTimeout
  if (this.activeLetter >= 0) {
    this.spnText.textContent += thistxt[this.activeText][this.activeLetter];
  }
  this.activeLetter++;
  if (this.activeLetter === this.txt[this.activeText].length) {
    this.activeText++;
    if (this.activeText === this.txt.length) return;

    return setTimeout(() => {
      this.activeLetter = -15;
      this.spnText.textContent = "";
      this.addLetter();
    }, 500);
  }
  setTimeout(this.addLetter, 50);
};

  }

