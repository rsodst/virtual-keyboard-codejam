import Keyboard from '../model/keyboard';
import KeyboardView from '../view/keyboard_view';

class KeyboardComponent {
  constructor() {
    this.keyboard = new Keyboard();
    this.keyboardView = new KeyboardView(this.keyboard);
  }
}

export default KeyboardComponent;