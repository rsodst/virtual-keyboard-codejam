class KeyboardView {
  constructor(keyboard) {
    this.keyboard = keyboard;
    this.initializeElement();
  }

  initializeElement() {
    this.keyboardView = document.createElement('div');
    this.keyboardView.classList.add('keyboard');

    this.keyboard.keyRows.forEach((keysRow) => {
      const keyRowView = document.createElement('div');
      keyRowView.classList.add('row');

      keysRow.forEach((key) => {
        keyRowView.appendChild(key.keyView.keyElement);
      });

      this.keyboardView.appendChild(keyRowView);
    });
  }
}

export default KeyboardView;
