import '../style/style.scss';
import LocaleManager from './Locales/LocaleManager';
import KeyboardComponent from './components/keyboard_component';

let kbd = new KeyboardComponent();
let localeManager = new LocaleManager();
localeManager.updateLocale(kbd.keyboard.keyRows, 'en_US');

document.body.appendChild(kbd.keyboardView.keyboardView);