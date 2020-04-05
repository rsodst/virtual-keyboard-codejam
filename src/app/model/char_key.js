class CharKey {
  constructor(baseChar, alterChar) {
    this.baseChar = baseChar;
    this.alterChar = alterChar;
  }

  updateChar(baseChar, alterChar) {
    this.baseChar = baseChar;
    this.alterChar = alterChar;
    this.onUpdate();
  }
}

export default CharKey;
