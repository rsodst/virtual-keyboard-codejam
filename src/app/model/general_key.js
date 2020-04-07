class GeneralKey {
  constructor(type) {
    this.type = type;
    this.keyPressed = false;
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
