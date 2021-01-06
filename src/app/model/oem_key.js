import GeneralKey from './general_key';

class OemKey extends GeneralKey {
  constructor(keyStyle) {
    super('oem');
    this.keyStyle = keyStyle;
    this.keyPressIndicatorEnabled = false;
  }

  setKeyPressIndicatorEnabled(status) {
    this.keyPressIndicatorEnabled = status;
    this.keyPressIndicatorEvent(status);
  }
}

export default OemKey;
