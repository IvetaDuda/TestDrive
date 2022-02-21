const darkTheme = {
  accent: '#FFC700',
  main: '#fff',
  bgd: '#222527',
  modalBgd: 'rgba(255, 255, 255, 0.4)',
  btnText: '#060803',
};

const lightTheme = {
  accent: '#4B526A',
  main: '#15141D',
  bgd: '#EBEBEB',
  modalBgd: 'rgb(21 20 29 / 90%)',
  btnText: '#fff',
};

let currentTheme = 'dark';

const element = document.documentElement;

function switchTheme() {
  const aboutMeContainer = document.querySelector('.about');
  const factsContainer = document.querySelector('.codex');

  if (currentTheme === 'dark') {
    element.style.setProperty('--accent-dark', lightTheme.accent);
    element.style.setProperty('--main-color', lightTheme.main);
    element.style.setProperty('--bg-second', lightTheme.bgd);
    element.style.setProperty('--bg-modal', lightTheme.modalBgd);
    element.style.setProperty('--bg-main-dark', lightTheme.btnText);

    aboutMeContainer.classList.add('about--light');
    factsContainer.classList.add('codex--light');

    currentTheme = 'light';
  } else {
    element.style.setProperty('--accent-dark', darkTheme.accent);
    element.style.setProperty('--main-color', darkTheme.main);
    element.style.setProperty('--bg-second', darkTheme.bgd);
    element.style.setProperty('--bg-modal', darkTheme.modalBgd);
    element.style.setProperty('--bg-main-dark', darkTheme.btnText);

    aboutMeContainer.classList.remove('about--light');
    factsContainer.classList.remove('codex--light');

    currentTheme = 'dark';
  }
}

const themeSwitch = document.querySelector('#theme-switch');

themeSwitch.addEventListener('change', switchTheme);
