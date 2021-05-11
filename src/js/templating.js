import makeMarkupTpl from '../templates/menu-items.hbs';
import menu from '../menu.json';

const menuRef = document.querySelector('.js-menu');

const markup = makeMarkupTpl(menu);
menuRef.insertAdjacentHTML('beforeend', markup);
// menuRef.innerHTML = markup; // - ⬆️ the same record⬆️
