import CharKey from '../model/char_key';
import CharKeyView from '../view/char_key_view';

class CharKeyComposer {
  constructor(code, baseChar, alterChar) {
    this.code = code;
    this.charKey = new CharKey(baseChar, alterChar);
    this.charKeyView = new CharKeyView(this.charKey);

    // handle long mouse click and simple mouse click
    let longPressTimeout;

    const mouseUpFunction = () => {
      clearTimeout(longPressTimeout);
      console.log(this.charKey.baseChar);
      this.charKeyView.setUnpressed();
    };

    this.charKeyView.keyElement.onmousedown = () => {
      this.charKeyView.keyElement.addEventListener('mouseup', mouseUpFunction);

      this.charKeyView.setPressed();

      longPressTimeout = window.setTimeout(() => {
        console.log('long press');
        clearTimeout(longPressTimeout);
        this.charKeyView.keyElement.removeEventListener('mouseup', mouseUpFunction);
        this.charKeyView.setUnpressed();
      }, 1000);
    };
  }
}

export default CharKeyComposer;
