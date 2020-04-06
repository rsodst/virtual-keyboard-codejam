import '../style/style.scss';

import KeyboardComponent from './components/keyboard_component';

let kbd = new KeyboardComponent();

document.body.appendChild(kbd.keyboardView.keyboardView);