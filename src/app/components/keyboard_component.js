import Keyboard from '../model/keyboard';
import KeyboardView from '../view/keyboard_view';

class KeyboardComponent {
  constructor() {
    const currentLayoutNumber = localStorage.getItem('currentLayout');
    this.keyboard = new Keyboard(currentLayoutNumber);
    this.keyboardView = new KeyboardView(this.keyboard);
  }
}

export default KeyboardComponent;
