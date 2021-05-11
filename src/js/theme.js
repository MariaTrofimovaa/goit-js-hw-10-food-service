const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// ************ 1 вариант ************ //

const checkbox = document.querySelector('.theme-switch__toggle');

checkbox.addEventListener('click', changeTheme);

function changeTheme() {
  if (document.body.classList.contains(Theme.LIGHT)) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else document.body.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  checkbox.checked = true;
} else document.body.classList.add(Theme.LIGHT);

// ************ 2 вариант ************ //
// const checkbox = document.querySelector('.theme-switch__toggle');
// checkbox.addEventListener('change', changeTheme);

// function changeTheme(event) {
//   if (event.currentTarget.checked) {
//     document.body.classList.replace(Theme.LIGHT, Theme.DARK);
//     localStorage.setItem('theme', JSON.stringify(Theme.DARK));
//   } else {
//     document.body.classList.replace(Theme.DARK, Theme.LIGHT);
//     localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
//   }
// }

// const currentTheme = localStorage.getItem('theme');
// if (currentTheme === Theme.DARK) {
//   const parsedTheme = JSON.parse(currentTheme);
//   document.body.classList.add(parsedTheme);
//   checkbox.checked = true;
// } else document.body.classList.add(Theme.LIGHT);
