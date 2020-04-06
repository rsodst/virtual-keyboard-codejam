class GeneralKey {
  constructor(type) {
    this.type = type;
    this.keyPressed = false;
    this.keyEvent = undefined;
  }

  get isPressed() {
    return this.keyPressed;
  }

  set isPressed(status) {
    this.keyPressed = status;
    this.keyEvent(status);
  }
}

export default GeneralKey;
