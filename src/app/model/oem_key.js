import GeneralKey from './general_key';

class OemKey extends GeneralKey {
  constructor(keyStyle) {
    super('oem');
    this.keyStyle = keyStyle;
  }
}

export default OemKey;
