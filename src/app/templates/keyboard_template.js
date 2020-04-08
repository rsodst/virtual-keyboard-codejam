const KeyboardTemplate = [
  // tilda,1..9,0,backsapce
  [
    {
      type: 'char',
      code: 192,
      style: 'key--ignore-caps',
    },
    {
      type: 'char',
      code: 49,
      style: 'key--ignore-caps',
    },
    {
      type: 'char',
      code: 50,
      style: 'key--ignore-caps',
    },
    {
      type: 'char',
      code: 51,
      style: 'key--ignore-caps',
    },
    {
      type: 'char',
      code: 52,
      style: 'key--ignore-caps',
    },
    {
      type: 'char',
      code: 53,
      style: 'key--ignore-caps',
    },
    {
      type: 'char',
      code: 54,
      style: 'key--ignore-caps',
    },
    {
      type: 'char',
      code: 55,
      style: 'key--ignore-caps',
    },
    {
      type: 'char',
      code: 56,
      style: 'key--ignore-caps',
    },
    {
      type: 'char',
      code: 57,
      style: 'key--ignore-caps',
    },
    {
      type: 'char',
      code: 48,
      style: 'key--ignore-caps',
    },
    {
      type: 'char',
      code: 189,
      style: 'key--ignore-caps',
    },
    { //
      type: 'char',
      code: 187,
      style: 'key--ignore-caps',
    },
    {
      type: 'oem',
      code: 8,
      style: 'key--style-backspace',
    },
  ],
  // tab,qwertyuiop[]\
  [
    {
      type: 'oem',
      code: 9,
      style: 'key--style-tab',
    },
    {
      type: 'char',
      code: 81,
    },
    {
      type: 'char',
      code: 87,
    },
    {
      type: 'char',
      code: 69,
    },
    {
      type: 'char',
      code: 82,
    },
    {
      type: 'char',
      code: 84,
    },
    {
      type: 'char',
      code: 89,
    },
    {
      type: 'char',
      code: 85,
    },
    {
      type: 'char',
      code: 73,
    },
    {
      type: 'char',
      code: 79,
    },
    {
      type: 'char',
      code: 80,
    },
    {
      type: 'char',
      code: 219,
    },
    {
      type: 'char',
      code: 221,
    },
    {
      type: 'char',
      code: 220,
    },
  ],
  // caps,asdfghjkl;'enter
  [
    {
      type: 'oem',
      code: 20,
      style: 'key--style-caps',
    },
    {
      type: 'char',
      code: 65,
    },
    {
      type: 'char',
      code: 83,
    },
    {
      type: 'char',
      code: 68,
    },
    {
      type: 'char',
      code: 70,
    },
    {
      type: 'char',
      code: 71,
    },
    {
      type: 'char',
      code: 72,
    },
    {
      type: 'char',
      code: 74,
    },
    {
      type: 'char',
      code: 75,
    },
    {
      type: 'char',
      code: 76,
    },
    {
      type: 'char',
      code: 186,
    },
    {
      type: 'char',
      code: 222,
    },
    {
      type: 'oem',
      code: 13,
      style: 'key--style-enter',
    },
  ],
  // shift,zxcvbnm,./
  [
    {
      type: 'oem',
      code: 16,
      style: 'key--style-shift',
    },
    {
      type: 'char',
      code: 90,
    },
    {
      type: 'char',
      code: 88,
    },
    {
      type: 'char',
      code: 67,
    },
    {
      type: 'char',
      code: 86,
    },
    {
      type: 'char',
      code: 66,
    },
    {
      type: 'char',
      code: 78,
    },
    {
      type: 'char',
      code: 77,
    },
    {
      type: 'char',
      code: 188,
    },
    {
      type: 'char',
      code: 190,
    },
    {
      type: 'oem',
      code: 38,
      style: 'key--style-top',
    },
    {
      type: 'char',
      code: 191,
    },
    {
      type: 'oem',
      code: 36,
      style: 'key--style-home',
    },
  ],
  // ctrl,win,alt,space
  [
    {
      type: 'oem',
      code: 17,
      style: 'key--style-ctrl',
    },
    {
      type: 'oem',
      code: 46,
      style: 'key--style-del',
    },
    {
      type: 'oem',
      code: 18,
      style: 'key--style-alt',
    },
    {
      type: 'oem',
      code: 32,
      style: 'key--style-space',
    },
    { // left
      type: 'oem',
      code: 37,
      style: 'key--style-left',
    },
    { // bottom
      type: 'oem',
      code: 40,
      style: 'key--style-bottom',
    },
    { // right
      type: 'oem',
      code: 39,
      style: 'key--style-right',
    },
    {
      type: 'oem',
      code: 35,
      style: 'key--style-end',
    },
  ],
];

export default KeyboardTemplate;
