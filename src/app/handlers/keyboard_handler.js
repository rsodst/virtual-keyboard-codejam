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
    // text area controls

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
          }, true);
        }

        if (templateKey.code === 17) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            if (this.shiftKey.key.isPressed) {
              keyboard.changeLayout();
            }
          }, true);
        }

        // space
        if (templateKey.code === 32) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            const { value: val, selectionStart: start, selectionEnd: end } = this.textArea;
            this.textArea.value = `${val.substring(0, start)} ${val.substring(end)}`;
            setPositionCursor(start + 1);
          });
        }

        // enter
        if (templateKey.code === 13) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            const { value: val, selectionStart: start, selectionEnd: end } = this.textArea;
            this.textArea.value = `${val.substring(0, start)}\n${val.substring(end)}`;
            setPositionCursor(start + 1);
          });
        }

        // backspace
        if (templateKey.code === 8) {
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

        // tab
        if (templateKey.code === 9) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            const textArea = document.getElementById('text-area');
            const { value: val, selectionStart: start, selectionEnd: end } = textArea;
            textArea.value = `${val.substring(0, start)}\t${val.substring(end)}`;
            setPositionCursor(start + 1);
          });
        }

        // left
        if (templateKey.code === 37) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            setPositionCursor(this.textArea.selectionStart - 1);
          }, false, false);
        }

        // right
        if (templateKey.code === 39) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            setPositionCursor(this.textArea.selectionStart + 1);
          }, false, false);
        }

        // up
        if (templateKey.code === 38) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            setPositionCursor(0);
          }, false, false);
        }

        // down
        if (templateKey.code === 40) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            setPositionCursor(this.textArea.value.length);
          }, false, false);
        }

        // home
        if (templateKey.code === 36) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            setPositionCursor(0);
          }, false, false);
        }

        // end
        if (templateKey.code === 35) {
          key = new OemKeyComponent(templateKey.code, templateKey.style, () => {
            setPositionCursor(this.textArea.value.length);
          }, false, false);
        }

        if (key === undefined) {
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
