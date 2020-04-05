import OemKey from '../model/oem_key';
import OemKeyView from '../view/oem_key_view';

class OemKeyComposer {
  constructor(code, keyStyle, longPressEnabled) {
    this.code = code;
    this.oemKey = new OemKey(keyStyle);
    this.longPressEnabled = longPressEnabled;
    this.oemKeyView = new OemKeyView(this.oemKey);

    // handle long mouse click and simple mouse click
    let longPressTimeout;

    this.keyUpHandler = () => {
      clearTimeout(longPressTimeout);
      console.log('oem key pressed');
      this.oemKeyView.setUnpressed();
    };

    this.keyDownHandler = (isMouseClick) => {
      this.oemKeyView.keyElement.addEventListener('mouseup', this.keyUpHandler);
      this.oemKeyView.setPressed();
      this.oemKeyView.setLongUnpressed();

      if (this.longPressEnabled && isMouseClick) {
        longPressTimeout = window.setTimeout(() => {
          console.log('oem key long pressed');
          clearTimeout(longPressTimeout);
          this.oemKeyView.keyElement.removeEventListener('mouseup', this.keyUpHandler);
          this.oemKeyView.setUnpressed();
          this.oemKeyView.setLongPressed();
        }, 1000);
      }
    };

    this.oemKeyView.keyElement.addEventListener('mousedown', this.keyDownHandler);

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

export default OemKeyComposer;
