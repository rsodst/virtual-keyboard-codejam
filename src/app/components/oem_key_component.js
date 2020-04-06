import OemKey from '../model/oem_key';
import OemKeyView from '../view/oem_key_view';

class OemKeyComponent {
  constructor(code, keyStyle, inputCallback, longPressEnabled) {
    this.code = code;
    this.key = new OemKey(keyStyle);
    this.longPressEnabled = longPressEnabled;
    this.keyView = new OemKeyView(this.key);

    // handle long mouse click and simple mouse click
    let longPressTimeout;

    this.keyUpHandler = () => {
      clearTimeout(longPressTimeout);

      if (inputCallback) {
        inputCallback(this.key, this.keyView);
      }

      this.key.isPressed = false;
    };

    this.keyDownHandler = (isMouseClick) => {
      this.keyView.keyElement.addEventListener('mouseup', this.keyUpHandler);
      this.key.isPressed = true;

      if (this.longPressEnabled && isMouseClick) {
        longPressTimeout = window.setTimeout(() => {
          clearTimeout(longPressTimeout);
          this.keyView.keyElement.removeEventListener('mouseup', this.keyUpHandler);
        }, 1000);
      }
    };

    this.keyView.keyElement.addEventListener('mousedown', this.keyDownHandler);

    document.addEventListener('keydown', (e) => {
      if (e.keyCode === this.code) {
        this.keyDownHandler();
        e.preventDefault();
      }
    });

    document.addEventListener('keyup', (e) => {
      if (e.keyCode === this.code) {
        this.keyUpHandler();
        e.preventDefault();
      }
    });
  }
}

export default OemKeyComponent;
