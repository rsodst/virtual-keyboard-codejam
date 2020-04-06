const KeyboardTemplate = [
  // tilda,1..9,0,backsapce
  [
    {
      type: 'char',
      code: 192,
    },
    {
      type: 'char',
      code: 49,
    },
    {
      type: 'char',
      code: 50,
    },
    {
      type: 'char',
      code: 51,
    },
    {
      type: 'char',
      code: 52,
    },
    {
      type: 'char',
      code: 53,
    },
    {
      type: 'char',
      code: 54,
    },
    {
      type: 'char',
      code: 55,
    },
    {
      type: 'char',
      code: 56,
    },
    {
      type: 'char',
      code: 57,
    },
    {
      type: 'char',
      code: 48,
    },
    { //-
      type: 'char',
      code: 189,
    },
    { //+
      type: 'char',
      code: 187,
    },
    {
      type: 'oem',
      code: 8,
      style: 'key_style_backspace',
    },
  ],
  // tab,qwertyuiop[]\
  [
    {
      type: 'oem',
      code: 9,
      style: 'key_style_tab',
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
      style: 'key_style_caps',
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
      style: 'key_style_enter',
    },
  ],
  // shift,zxcvbnm,./
  [
    {
      type: 'oem',
      code: 16,
      style: 'key_style_shift',
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
      style: 'key_style_top',
    },
    {
      type: 'char',
      code: 191,
    },
    {
      type: 'oem',
      code: 36,
      style: 'key_style_home',
    },
  ],
  // ctrl,win,alt,space
  [
    {
      type: 'oem',
      code: 17,
      style: 'key_style_ctrl',
    },
    {
      type: 'oem',
      code: 46,
      style: 'key_style_del',
    },
    {
      type: 'oem',
      code: 18,
      style: 'key_style_alt',
    },
    {
      type: 'oem',
      code: 32,
      style: 'key_style_space',
    },
    { // left
      type: 'oem',
      code: 37,
      style: 'key_style_left',
    },
    { // bottom
      type: 'oem',
      code: 40,
      style: 'key_style_bottom',
    },
    { // right
      type: 'oem',
      code: 39,
      style: 'key_style_right',
    },
    {
      type: 'oem',
      code: 35,
      style: 'key_style_end',
    },
  ],
];

export default KeyboardTemplate;
