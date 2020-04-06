import CharKey from '../model/char_key';
import CharKeyView from '../view/char_key_view';

class CharKeyComponent {
  constructor(code, inputCallback) {
    this.code = code;
    this.key = new CharKey();
    this.keyView = new CharKeyView(this.key);

    this.keyUpHandler = () => {
      this.key.isPressed = false;
    };

    this.keyDownHandler = () => {
      this.keyView.keyElement.addEventListener('mouseup', this.keyUpHandler);
      this.key.isPressed = true;

      inputCallback(this.key, this.keyView);
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

export default CharKeyComponent;
