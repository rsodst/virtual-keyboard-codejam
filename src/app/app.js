import '../style/style.scss';
import KeyboardView from './view/keyboard_view';
import Keyboard from './model/keyboard';

let keyboard = new Keyboard();
let keyboardView = new KeyboardView(keyboard);

document.body.appendChild(keyboardView.keyboardView);