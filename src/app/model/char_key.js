import GeneralKey from './general_key';

class CharKey extends GeneralKey {
  constructor() {
    super('char');
    this.baseChar = '';
    this.alterChar = '';
  }

  updateChar(baseCharView, alterCharView, baseChar, alterChar) {
    this.baseCharView = baseCharView;
    this.alterCharView = alterCharView;
    this.baseChar = baseChar;
    this.alterChar = alterChar;
    this.onUpdate();
  }
}

export default CharKey;
