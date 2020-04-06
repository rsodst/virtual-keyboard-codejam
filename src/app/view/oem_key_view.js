class OemKeyView {
  constructor(oemKey) {
    this.initializeElement(oemKey.keyStyle);
    this.indicatorEnabled = false;
  }

  initializeElement(keyStyle) {
    this.keyElement = document.createElement('div');
    this.keyElement.classList.add('key');
    this.keyElement.classList.add('key_type_oem');
    this.keyElement.classList.add(keyStyle);

    this.keyCharElement = document.createElement('div');
    this.keyCharElement.classList.add('key__char');

    this.longPressIndicatorElement = document.createElement('div');
    this.longPressIndicatorElement.classList.add('key__longpress_indicator');

    this.keyElement.appendChild(this.keyCharElement);
    this.keyElement.appendChild(this.longPressIndicatorElement);
  }

  setPressed() {
    this.keyElement.classList.add('key_clicked');
  }

  setUnpressed() {
    this.keyElement.classList.remove('key_clicked');
  }

  setLongPressed() {
    this.longPressIndicatorElement.classList.add('key__longpress_indicator_enabled');
  }

  setLongUnpressed() {
    this.longPressIndicatorElement.classList.remove('key__longpress_indicator_enabled');
  }
}

export default OemKeyView;
