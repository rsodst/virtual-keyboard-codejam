import GeneralKey from './general_key';

class OemKey extends GeneralKey {
  constructor(keyStyle) {
    super('oem');
    this.keyStyle = keyStyle;
    this.keyPressIndicatorEnabled = false;
    this.keyPressIndicatorEvent = undefined;
  }

  get isKeyPressIndicatorEnabled() {
    return this.keyPressIndicatorEnabled;
  }

  set isKeyPressIndicatorEnabled(status) {
    this.keyPressIndicatorEnabled = status;
    this.keyPressIndicatorEvent(status);
  }
}

export default OemKey;
