import CharKey from '../model/char_key';
import CharKeyView from '../view/char_key_view';

class CharKeyComposer {
  constructor(code, baseChar, alterChar) {
    this.code = code;
    this.charKey = new CharKey(baseChar, alterChar);
    this.charKeyView = new CharKeyView(this.charKey);

    this.keyUpHandler = () => {
      console.log(this.charKey.baseChar);
      this.charKeyView.setUnpressed();
    };

    this.keyDownHandler = () => {
      this.charKeyView.keyElement.addEventListener('mouseup', this.keyUpHandler);
      this.charKeyView.setPressed();
    };

    this.charKeyView.keyElement.addEventListener('mousedown', this.keyDownHandler);

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

export default CharKeyComposer;
