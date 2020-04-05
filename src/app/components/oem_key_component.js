import OemKey from '../model/oem_key';
import OemKeyView from '../view/oem_key_view';

class OemKeyComponent {
  constructor(code, keyStyle, inputCallback, longPressEnabled) {
    this.code = code;
    this.oemKey = new OemKey(keyStyle);
    this.longPressEnabled = longPressEnabled;
    this.keyView = new OemKeyView(this.oemKey);

    // handle long mouse click and simple mouse click
    let longPressTimeout;

    this.keyUpHandler = () => {
      clearTimeout(longPressTimeout);
      inputCallback(this.oemKey);
      this.keyView.setUnpressed();
    };

    this.keyDownHandler = (isMouseClick) => {
      this.keyView.keyElement.addEventListener('mouseup', this.keyUpHandler);
      this.keyView.setPressed();
      this.keyView.setLongUnpressed();

      if (this.longPressEnabled && isMouseClick) {
        longPressTimeout = window.setTimeout(() => {
          console.log('oem key long pressed');
          clearTimeout(longPressTimeout);
          this.keyView.keyElement.removeEventListener('mouseup', this.keyUpHandler);
          this.keyView.setUnpressed();
          this.keyView.setLongPressed();
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
