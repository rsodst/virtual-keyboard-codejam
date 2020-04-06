import CharKeyComponent from '../components/char_key_component';
import OemKeyComponent from '../components/oem_key_component';

class KeyboardBuilder {
  static buildKeyboardRows(template) {
    const keyboardRows = [];
    template.forEach((templateRow) => {
      keyboardRows.push(this.createKeyRow(templateRow));
    });

    return keyboardRows;
  }

  // eslint-disable-next-line class-methods-use-this
  static createKeyRow(templateRow) {
    const keysRow = [];
    templateRow.forEach((templateKey) => {
      let key;
      if (templateKey.type === 'oem') {
        if (templateKey.code === 20) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, (k, v) => {
            if (v.indicatorEnabled) {
              v.setLongUnpressed();
              v.indicatorEnabled = false;
            } else {
              v.setLongPressed();
              v.indicatorEnabled = true;
            }
          });
        } else {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {});
        }
      }

      if (templateKey.type === 'char') {
        key = new CharKeyComponent(templateKey.code, '', '', () => {});
      }

      keysRow.push(key);
    });

    return keysRow;
  }
}

export default KeyboardBuilder;
