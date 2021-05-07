import './styles.css';
// console.log('ok');

import './js/test';

// ******** Варианты импортирования: ******** //

// ** 1 ** по дефорлту
import print from './js/test';
console.log(print);
print('Index JS'); // эту функция вызывается из test.js здесь

// ** 2 ** именованный импорт
// import { text, printText } from './js/test';
// console.log(text);
// printText('Param-pam');

// ** 3 ** именованный импорт
// import * as object from './js/test'; // * означает выбрать ВСЕ
// console.log(object.text); // достучаться до элемента через object.
// object.printText('Param-pam');
