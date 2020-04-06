import CharKey from '../model/char_key';
import CharKeyView from '../view/char_key_view';

class CharKeyComponent {
  constructor(code, baseChar, alterChar, inputCallback) {
    this.code = code;
    this.key = new CharKey(baseChar, alterChar);
    this.keyView = new CharKeyView(this.key);

    this.keyUpHandler = () => {
      inputCallback(this.key);
      this.keyView.setUnpressed();
    };

    this.keyDownHandler = () => {
      this.keyView.keyElement.addEventListener('mouseup', this.keyUpHandler);
      this.keyView.setPressed();
    };

    this.keyView.keyElement.addEventListener('mousedown', this.keyDownHandler);

    document.addEventListener('keydown', (e) => {
      if (e.keyCode === this.code) {
        this.keyDownHandler();
      }
    });

    document.addEventListener('keyup', (e) => {
      if (e.keyCode === this.code) {
        this.keyUpHandler();
      }
    });
  }
}

export default CharKeyComponent;
