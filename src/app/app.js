import '../style/style.scss';
import CharKeyComposer from './logic/char_key_composer';
import OemKeyComposer from './logic/oem_key_composer';

const key81 = new CharKeyComposer(81, 'Й', 'Q');
const key82 = new CharKeyComposer(87, 'Ц', 'W');
const keyCaps = new OemKeyComposer(20, 'key_style_caps', true);
const keySpace = new OemKeyComposer(32, 'key_style_space');
const keyTab = new OemKeyComposer(9, 'key_style_tab');

document.body.appendChild(key81.charKeyView.keyElement);
document.body.appendChild(key82.charKeyView.keyElement);
document.body.appendChild(keyCaps.oemKeyView.keyElement);
document.body.appendChild(keySpace.oemKeyView.keyElement);
document.body.appendChild(keyTab.oemKeyView.keyElement);
