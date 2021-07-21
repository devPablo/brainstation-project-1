document.addEventListener('DOMContentLoaded', e => {
  const jsOpenMenu = document.getElementById('js-open-menu');
  const jsCloseMenu = document.getElementById('js-close-menu');
  const jsSliderMenu = document.getElementById('js-slider-menu');

  jsOpenMenu.focus();
  removeTabIndex();
  window.scrollTo(0, 0);

  jsOpenMenu.addEventListener('click', e => {
    openMenu();
    addTabIndex();
  });

  jsCloseMenu.addEventListener('click', e => {
    closeMenu();
    removeTabIndex();
  });
});

const openMenu = () => {
  const jsSliderMenu = document.getElementById('js-slider-menu');
  const jsCloseMenu = document.getElementById('js-close-menu');
  const jsOpenMenu = document.getElementById('js-open-menu');

  jsOpenMenu.setAttribute('tabindex', -1);
  jsSliderMenu.classList.add('slider-menu--active');
  jsCloseMenu.focus();
};

const closeMenu = () => {
  const jsSliderMenu = document.getElementById('js-slider-menu');
  const jsOpenMenu = document.getElementById('js-open-menu');

  const navLinks = document.getElementsByClassName('nav__link--spacing');

  jsOpenMenu.removeAttribute('tabindex');
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].removeAttribute('tabindex');
  }

  jsSliderMenu.classList.remove('slider-menu--active');
  jsOpenMenu.focus();
};

const addTabIndex = () => {
  const links = document.getElementsByClassName('slider-menu__list-link');
  const jsCloseMenu = document.getElementById('js-close-menu');
  const navLinks = document.getElementsByClassName('nav__link--spacing');

  
  jsCloseMenu.setAttribute('tabindex', 6);
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].setAttribute('tabindex', -1);
  }

  for (let i = 0; i < links.length; i++) {
    links[i].setAttribute('tabindex', i + 7);
  }
};

const removeTabIndex = () => {
  const links = document.getElementsByClassName('slider-menu__list-link');
  const jsCloseMenu = document.getElementById('js-close-menu');

  jsCloseMenu.setAttribute('tabindex', -1);

  for (let i = 0; i < links.length; i++) {
    links[i].setAttribute('tabindex', -1);
  }
};
