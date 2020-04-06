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

    this.keyboardView.onmousedown = (event) => {
      this.dragFunction(event);
    };

    this.keyboardView.ondragstart = function () {
      return false;
    };

    this.dragFunction = (event) => {
      const shiftX = event.clientX - this.keyboardView.getBoundingClientRect().left;
      const shiftY = event.clientY - this.keyboardView.getBoundingClientRect().top;

      const moveAt = (pageX, pageY) => {
        this.keyboardView.style.left = `${pageX - shiftX}px`;
        this.keyboardView.style.top = `${pageY - shiftY}px`;
      };

      moveAt(event.pageX, event.pageY);

      const onMouseMove = (evnt) => {
        moveAt(evnt.pageX, evnt.pageY);
      };

      document.addEventListener('mousemove', onMouseMove);

      this.keyboardView.onmouseup = () => {
        document.removeEventListener('mousemove', onMouseMove);
        this.keyboardView.onmouseup = null;
      };
    };
  }
}

export default KeyboardView;
