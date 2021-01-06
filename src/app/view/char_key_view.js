class CharKeyView {
  constructor(charKey) {
    this.initializeElement();

    this.updateView(charKey.baseCharView, charKey.alterCharView);

    // subscribe to model update event
    // eslint-disable-next-line no-param-reassign
    charKey.onUpdate = () => {
      this.updateView(charKey.baseCharView, charKey.alterCharView);
    };

    // subscribe to key handler
    // eslint-disable-next-line no-param-reassign
    charKey.keyEvent = () => {
      if (charKey.keyPressed) {
        this.keyElement.classList.add('key--clicked');
      } else {
        this.keyElement.classList.remove('key--clicked');
      }
    };
  }

  updateView(baseCharView, alterCharView) {
    this.baseKeyCharElement.innerText = baseCharView;
    this.alterKeyCharElement.innerText = alterCharView;
  }

  initializeElement() {
    this.keyElement = document.createElement('div');
    this.keyElement.classList.add('key');
    this.keyElement.classList.add('key--type-char');

    this.baseKeyCharElement = document.createElement('div');
    this.baseKeyCharElement.classList.add('key__char');
    this.baseKeyCharElement.classList.add('key__char--position-br');

    this.alterKeyCharElement = document.createElement('div');
    this.alterKeyCharElement.classList.add('key__char');
    this.alterKeyCharElement.classList.add('key__char--position-tl');

    this.keyElement.appendChild(this.baseKeyCharElement);
    this.keyElement.appendChild(this.alterKeyCharElement);
  }
}

export default CharKeyView;
