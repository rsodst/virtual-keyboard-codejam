import KeyboardBuilder from '../builders/keyboard_builder';
import KeyboardTemplate from '../templates/keyboard_template';

class Keyboard {
  constructor() {
    this.keyRows = KeyboardBuilder.buildKeyboardRows(KeyboardTemplate);
  }
}

export default Keyboard;
