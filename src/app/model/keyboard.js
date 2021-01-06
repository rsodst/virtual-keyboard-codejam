import KeyboardHandler from '../handlers/keyboard_handler';
import KeyboardTemplate from '../templates/keyboard_template';
import LocaleManager from '../locales/localeManager';

class Keyboard {
  constructor(layoutNumber) {
    this.layouts = ['en_US', 'ru_RU'];
    this.currentLayout = parseInt(layoutNumber, 10) || 0;
    this.localeManager = new LocaleManager();
    this.keyRows = KeyboardHandler.buildKeyboardRows(KeyboardTemplate, this);
    this.localeManager.updateLocale(this.keyRows, this.layouts[this.currentLayout]);
  }

  changeLayout() {
    this.currentLayout = (this.currentLayout + 1) % this.layouts.length;

    this.localeManager.updateLocale(this.keyRows, this.layouts[this.currentLayout]);

    localStorage.setItem('currentLayout', this.currentLayout);
  }
}

export default Keyboard;
