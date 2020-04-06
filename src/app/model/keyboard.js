import KeyboardHandler from '../handlers/keyboard_handler';
import KeyboardTemplate from '../templates/keyboard_template';
import LocaleManager from '../locales/LocaleManager';

class Keyboard {
  constructor(layoutNumber) {
    this.layouts = ['en_US', 'ru_RU'];
    this.currentLayout = layoutNumber || 0;
    this.localeManager = new LocaleManager();
    this.keyRows = KeyboardHandler.buildKeyboardRows(KeyboardTemplate, this);
    this.localeManager.updateLocale(this.keyRows, this.layouts[this.currentLayout]);
  }

  changeLayout() {
    this.currentLayout = parseInt(this.currentLayout, 10);

    if (this.currentLayout === 1) {
      this.currentLayout = 0;
    } else {
      this.currentLayout = 1;
    }

    this.localeManager.updateLocale(this.keyRows, this.layouts[this.currentLayout]);

    localStorage.setItem('currentLayout', this.currentLayout);
  }
}

export default Keyboard;
