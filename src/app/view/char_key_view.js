class CharKeyView {
  constructor(charKey) {
    this.initializeElement();

    this.updateView(charKey.baseChar, charKey.alterChar);

    // subscribe to model update event
    // eslint-disable-next-line no-param-reassign
    charKey.onUpdate = () => {
      this.updateView(charKey.baseChar, charKey.alterChar);
    };
  }

  updateView(baseChar, alterChar) {
    this.baseKeyCharElement.innerText = baseChar;
    this.alterKeyCharElement.innerText = alterChar;
  }

  initializeElement() {
    this.keyElement = document.createElement('div');
    this.keyElement.classList.add('key');

    this.baseKeyCharElement = document.createElement('div');
    this.baseKeyCharElement.classList.add('key__char');
    this.baseKeyCharElement.classList.add('key__char_position_br');

    this.alterKeyCharElement = document.createElement('div');
    this.alterKeyCharElement.classList.add('key__char');
    this.alterKeyCharElement.classList.add('key__char_position_tl');

    this.keyElement.appendChild(this.baseKeyCharElement);
    this.keyElement.appendChild(this.alterKeyCharElement);
  }

  setPressed() {
    this.keyElement.classList.add('key_clicked');
  }

  setUnpressed() {
    this.keyElement.classList.remove('key_clicked');
  }
}

export default CharKeyView;
