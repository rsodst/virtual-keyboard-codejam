import '../style/style.scss';

import KeyboardComponent from './components/keyboard_component';

const container = document.createElement('div');
container.classList.add('container');

const textArea = document.createElement('textarea');
textArea.setAttribute('id', 'text-area');

textArea.value = 'Target Platform: Windows 10';
textArea.value += '\nTarget Browser: Chrome 80.0.3987.149';
textArea.value += '\nSwitch Layout: Ctrl+Shift';
textArea.value += '\nKeyboard has supported Drag\'n\'Drop';
textArea.value += '\nUse Mose to move keyboard panel\n';

container.appendChild(textArea);

document.body.appendChild(container);

const keyboard = new KeyboardComponent();

container.appendChild(keyboard.keyboardView.keyboardView);

textArea.focus();
