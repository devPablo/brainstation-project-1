document.addEventListener('DOMContentLoaded', e => {
  window.addEventListener('scroll', e => {
    const nav = document.getElementById('js-nav');
    const menuIcon = document.getElementById('js-menu-icon');
    const navLinks = document.getElementsByClassName('nav__link');
    const navLinkWrapper = document.getElementsByClassName('nav__link-wrapper');

    const yCondition =
      window.innerWidth >= 1300 ? 1000 : 850;

    nav.classList.toggle('nav--active', window.scrollY > yCondition);
    menuIcon.classList.toggle(
      'nav__menu-icon--active',
      window.scrollY > yCondition
    );
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.toggle(
        'nav__link--active',
        window.scrollY > yCondition
      );
    }
    for (let i = 0; i < navLinkWrapper.length; i++) {
      navLinkWrapper[i].classList.toggle(
        'nav__link-wrapper--active',
        window.scrollY > yCondition
      );
    }
  });
});
