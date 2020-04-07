import CharKeyComponent from '../components/char_key_component';
import OemKeyComponent from '../components/oem_key_component';
import KEYBOARD_BUTTONS from './keyboard_buttons';

class KeyboardBuilder {
  static buildKeyboardRows(template, keyboard) {
    const keyboardRows = [];
    this.template = template;
    this.template.forEach((templateRow) => {
      keyboardRows.push(this.createKeyRow(templateRow, keyboard));
    });

    return keyboardRows;
  }

  static createKeyRow(templateRow, keyboard) {
    this.textArea = document.getElementById('text-area');

    this.textArea.onblur = () => {
      this.textArea.focus();
    };

    const setPositionCursor = (position) => {
      this.textArea.focus();
      this.textArea.selectionStart = position;
      this.textArea.selectionEnd = position;
    };

    const writeText = (text) => {
      const { value: val, selectionStart: start, selectionEnd: end } = this.textArea;
      this.textArea.value = `${val.substring(0, start)}${text}${val.substring(end)}`;
      setPositionCursor(start + 1);
    };


    const keysRow = [];
    templateRow.forEach((templateKey) => {
      let key;

      if (templateKey.type === 'oem') {
        if (templateKey.code === KEYBOARD_BUTTONS.caps) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, (inputKey) => {
            if (inputKey.keyPressIndicatorEnabled) {
              inputKey.setKeyPressIndicatorEnabled(false);
            } else {
              inputKey.setKeyPressIndicatorEnabled(true);
            }
          });
        }

        if (templateKey.code === KEYBOARD_BUTTONS.shift) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            if (this.ctrlKey.key.isPressed) {
              keyboard.changeLayout();
            }
          }, true);
        }

        if (templateKey.code === KEYBOARD_BUTTONS.ctrl) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            if (this.shiftKey.key.isPressed) {
              keyboard.changeLayout();
            }
          }, true);
        }

        if (templateKey.code === KEYBOARD_BUTTONS.space) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            const { value: val, selectionStart: start, selectionEnd: end } = this.textArea;
            this.textArea.value = `${val.substring(0, start)} ${val.substring(end)}`;
            setPositionCursor(start + 1);
          });
        }

        if (templateKey.code === KEYBOARD_BUTTONS.enter) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            const { value: val, selectionStart: start, selectionEnd: end } = this.textArea;
            this.textArea.value = `${val.substring(0, start)}\n${val.substring(end)}`;
            setPositionCursor(start + 1);
          });
        }

        if (templateKey.code === KEYBOARD_BUTTONS.backspace) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            const { value: val, selectionStart: start, selectionEnd: end } = this.textArea;
            if (start !== end) {
              this.textArea.value = `${val.slice(0, start)}${val.slice(end)}`;
              setPositionCursor(start);
            } else if (start !== 0) {
              this.textArea.value = `${val.slice(0, start - 1)}${val.slice(start)}`;
              setPositionCursor(start - 1);
            } else {
              setPositionCursor(start);
            }
          });
        }

        if (templateKey.code === KEYBOARD_BUTTONS.tab) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            const textArea = document.getElementById('text-area');
            const { value: val, selectionStart: start, selectionEnd: end } = textArea;
            textArea.value = `${val.substring(0, start)}\t${val.substring(end)}`;
            setPositionCursor(start + 1);
          });
        }

        if (templateKey.code === KEYBOARD_BUTTONS.left) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            setPositionCursor(this.textArea.selectionStart - 1);
          }, false, false, true);
        }

        if (templateKey.code === KEYBOARD_BUTTONS.right) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            setPositionCursor(this.textArea.selectionStart + 1);
          }, false, false, true);
        }

        if (templateKey.code === KEYBOARD_BUTTONS.up) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            setPositionCursor(0);
          }, false, false, true);
        }

        if (templateKey.code === KEYBOARD_BUTTONS.down) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            setPositionCursor(this.textArea.value.length);
          }, false, false, true);
        }

        if (templateKey.code === KEYBOARD_BUTTONS.home) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            setPositionCursor(0);
          }, false, false);
        }

        if (templateKey.code === KEYBOARD_BUTTONS.end) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            setPositionCursor(this.textArea.value.length);
          }, false, false);
        }

        if (templateKey.code === KEYBOARD_BUTTONS.delete) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            const { value: val, selectionStart: start, selectionEnd: end } = this.textArea;
            if (start !== end) {
              this.textArea.value = `${val.slice(0, start)}${val.slice(end)}`;
            } else if (end !== val.length) {
              this.textArea.value = `${val.slice(0, start)}${val.slice(start + 1)}`;
            }
            setPositionCursor(start);
          }, false, false, true);
        }

        if (!key) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => { });
        }
      }

      if (templateKey.type === 'char') {
        key = new CharKeyComponent(templateKey.code, (pressedKey) => {
          if (this.shiftKey.key.isPressed || this.capsKey.key.keyPressIndicatorEnabled) {
            writeText(pressedKey.alterChar);
          } else {
            writeText(pressedKey.baseChar);
          }
        });
      }

      if (templateKey.code === KEYBOARD_BUTTONS.shift) {
        this.shiftKey = key;
      }

      if (templateKey.code === KEYBOARD_BUTTONS.caps) {
        this.capsKey = key;
      }

      if (templateKey.code === KEYBOARD_BUTTONS.ctrl) {
        this.ctrlKey = key;
      }

      keysRow.push(key);
    });

    return keysRow;
  }
}

export default KeyboardBuilder;
