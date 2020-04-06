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
      this.dragFunction(this.keyboardView, event);
    };

    this.keyboardView.ondragstart = function () {
      return false;
    };
  }

  dragFunction(obj, event) {
    const shiftX = event.clientX - obj.getBoundingClientRect().left;
    const shiftY = event.clientY - obj.getBoundingClientRect().top;

    // переносит мяч на координаты (pageX, pageY),
    // дополнительно учитывая изначальный сдвиг относительно указателя мыши
    function moveAt(pageX, pageY) {
      obj.style.left = `${pageX - shiftX}px`;
      obj.style.top = `${pageY - shiftY}px`;
    }

    moveAt(event.pageX, event.pageY);

    function onMouseMove(evnt) {
      moveAt(evnt.pageX, evnt.pageY);
    }

    // передвигаем мяч при событии mousemove
    document.addEventListener('mousemove', onMouseMove);

    // отпустить мяч, удалить ненужные обработчики
    obj.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      obj.onmouseup = null;
    };
  }
}

export default KeyboardView;
