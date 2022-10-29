export const languages = ['En', 'Ru'];
export const prefixes = ['default', 'shift'];

export const keyboardConfig = {
  debug: false,
  disableButtonHold: true,
  layout: {
    defaultEn: [
      '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
      '{tab} q w e r t y u i o p [ ] \\',
      "{lock} a s d f g h j k l ; ' {enter}",
      '{shift} z x c v b n m , . / {shift}',
      '.com {space}',
    ],
    shiftEn: [
      '~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}',
      '{tab} Q W E R T Y U I O P { } |',
      '{lock} A S D F G H J K L : " {enter}',
      '{shift} Z X C V B N M &lt; &gt; ? {shift}',
      '.com {space}',
    ],
    defaultRu: [
      '\u0451 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
      '{tab} \u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u0449 \u0437 \u0445 \u044a \\',
      '{lock} \u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d {enter}',
      '{shift} / \u044f \u0447 \u0441 \u043c \u0438 \u0442 \u044c \u0431 \u044e . {shift}',
      '{space}',
    ],
    shiftRu: [
      '\u0401 ! " \u2116 ; % : ? * ( ) _ + {bksp}',
      '{tab} \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u0429 \u0417 \u0425 \u042a /',
      '{lock} \u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d {enter}',
      '{shift} | \u042f \u0427 \u0421 \u041c \u0418 \u0422 \u042c \u0411 \u042e , {shift}',
      '{space}',
    ],
  },
  excludeFromLayout: {
    defaultEn: ['.com'],
    shiftEn: ['.com'],
  },
  layoutName: 'defaultEn',
  tabCharOnTab: false,
  mergeDisplay: true,
  display: {
    '{tab}': 'ru',
    '{bksp}': 'backspace',
    '{enter}': 'enter',
    '{space}': ' ',
  },
};
