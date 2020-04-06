/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable indent */

import CharKeyComponent from '../components/char_key_component';
import OemKeyComponent from '../components/oem_key_component';

class KeyboardBuilder {
  static buildKeyboardRows(template, keyboard) {
    const keyboardRows = [];
    this.template = template;
    this.template.forEach((templateRow) => {
      keyboardRows.push(this.createKeyRow(templateRow, keyboard));
    });

    return keyboardRows;
  }

  // eslint-disable-next-line class-methods-use-this
  static createKeyRow(templateRow, keyboard) {
    const keysRow = [];
    templateRow.forEach((templateKey) => {
      let key;

      if (templateKey.type === 'oem') {
        if (templateKey.code === 20) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, (inputKey) => {
            inputKey.isKeyPressIndicatorEnabled = !inputKey.isKeyPressIndicatorEnabled;
          });
        }

        if (templateKey.code === 16) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            if (this.ctrlKey.key.isPressed) {
              keyboard.changeLayout();
            }
          });
        }

        if (templateKey.code === 17) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            if (this.shiftKey.key.isPressed) {
              keyboard.changeLayout();
            }
          });
        }

        if (key === undefined) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => { });
        }
      }

      if (templateKey.type === 'char') {
        key = new CharKeyComponent(templateKey.code, (pressedKey) => {
          if (this.shiftKey.key.isPressed || this.capsKey.key.keyPressIndicatorEnabled) {
            console.log(pressedKey.alterChar);
          } else {
            console.log(pressedKey.baseChar);
          }
        });
      }

      // save oem shift
      if (templateKey.code === 16) {
        this.shiftKey = key;
      }

      // save oem caps
      if (templateKey.code === 20) {
        this.capsKey = key;
      }

      // save oem ctrl
      if (templateKey.code === 17) {
        this.ctrlKey = key;
      }

      keysRow.push(key);
    });

    return keysRow;
  }
}

export default KeyboardBuilder;
