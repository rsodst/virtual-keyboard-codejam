import '../style/style.scss';
import CharKeyComposer from './logic/char_key_composer';

const key192 = new CharKeyComposer(192, 'A', 'Ф');

document.addEventListener('keydown', () => {
  key192.charKeyView.keyElement.onmousedown();
});



document.body.appendChild(key192.charKeyView.keyElement);
