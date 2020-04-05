import GeneralKey from './general_key';

class CharKey extends GeneralKey {
  constructor(baseChar, alterChar) {
    super();
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
