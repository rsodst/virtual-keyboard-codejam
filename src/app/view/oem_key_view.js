class OemKeyView {
  constructor(oemKey) {
    this.initializeElement(oemKey.keyStyle);
    this.indicatorEnabled = false;

    // subscribe to key handler
    // eslint-disable-next-line no-param-reassign
    oemKey.keyEvent = () => {
      if (oemKey.keyPressed) {
        this.keyElement.classList.add('key--clicked');
      } else {
        this.keyElement.classList.remove('key--clicked');
      }
    };

    // subscribe to indicator handler
    // eslint-disable-next-line no-param-reassign
    oemKey.keyPressIndicatorEvent = () => {
      if (oemKey.keyPressIndicatorEnabled) {
        this.longPressIndicatorElement.classList.add('key__longpress-indicator--enabled');
      } else {
        this.longPressIndicatorElement.classList.remove('key__longpress-indicator--enabled');
      }
    };
  }

  initializeElement(keyStyle) {
    this.keyElement = document.createElement('div');
    this.keyElement.classList.add('key');
    this.keyElement.classList.add('key--type-oem');
    this.keyElement.classList.add(keyStyle);

    this.keyCharElement = document.createElement('div');
    this.keyCharElement.classList.add('key__char');

    this.longPressIndicatorElement = document.createElement('div');
    this.longPressIndicatorElement.classList.add('key__longpress-indicator');

    this.keyElement.appendChild(this.keyCharElement);
    this.keyElement.appendChild(this.longPressIndicatorElement);
  }
}

export default OemKeyView;
