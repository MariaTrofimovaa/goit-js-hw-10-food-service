import menu from '../menu.json';
console.log(menu);

// ********  дефолтный экспорт (!приоритетное использование)
// Сначала объявляем переменные, пишем функции и тд, затем экспортируем
const text = 'Hello, Webpack';
function printText(string) {
  console.log(string);
}
printText(text);

export default printText;

// ******** именованный экспорт ( 1 вариант)
// Экспортируем непосредственно перед объявлением переменных

// export const text = 'Hello, Webpack';
// export function printText(string) {
//   console.log(string);
// }
// printText(text);

// ********  2 вариант (тоже именованный)
// const text = 'Hello, Webpack';
// function printText(string) {
//   console.log(string);
// }

// export { text, printText };
