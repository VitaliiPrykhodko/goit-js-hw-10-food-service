import menu from './menu/menu.json';
import template from './template/template.hbs';

const listMenu = document.querySelector('.js-menu')
const body = document.querySelector('body')

const markup = template(menu);
listMenu.insertAdjacentHTML('beforeend', markup)

const onInput = document.querySelector('#theme-switch-toggle')

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

body.classList.add(localStorage.getItem('Theme'));

   if (body.classList.contains('dark-theme')) {
    onInput.setAttribute('checked', 'true');
}

else if (body.classList.contains('light-theme')) {
    onInput.removeAttribute('checked');
}

   onInput.addEventListener('change', changeTheme)

function changeTheme(event) {
     if (event.target.checked) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('Theme', 'dark-theme');
        return;
    }

    else {
        body.classList.remove(Theme.DARK)
        body.classList.add(Theme.LIGHT)
        localStorage.setItem('Theme', 'light-theme')
        return;
    };
}