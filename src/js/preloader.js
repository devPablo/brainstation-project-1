import ambienceSound from './../audio/ambience.mp3';

document.addEventListener('DOMContentLoaded', e => {
  const websiteContent = document.getElementById('js-website-content');
  const jsHeader = document.getElementById('js-header');
  const jsFooter = document.getElementById('js-footer');
  const jsPreloader = document.getElementById('js-preloader');
  const jsLaunchWebsiteButton = document.getElementById('js-launch-website');

  jsLaunchWebsiteButton.focus();
  websiteContent.style.display = 'none';
  jsHeader.style.display = 'none';
  jsFooter.style.display = 'none';
  // jsPreloader.style.display = 'none';

  jsLaunchWebsiteButton.addEventListener('click', e => {
    launchWebsitePreloader();
  });
});

const launchWebsitePreloader = () => {
  const jsPreloader = document.getElementById('js-preloader');
  const websiteContent = document.getElementById('js-website-content');
  const jsHeader = document.getElementById('js-header');
  const jsOpenMenu = document.getElementById('js-open-menu');
  const jsFooter = document.getElementById('js-footer');

  const jsLaunchWebsiteButton = document.getElementById('js-launch-website');
  jsLaunchWebsiteButton.setAttribute('tabindex', -1);

  jsPreloader.style.top = '-100vh';
  let audio = new Audio(ambienceSound);
  setTimeout(e => {
    audio.play();
    audio.volume = 0.35;
    audio.loop = true;
    jsPreloader.style.display = 'none';
    websiteContent.style.display = 'block';
    jsHeader.style.display = 'flex';
    jsFooter.style.display = 'block';

    jsOpenMenu.focus();
  }, 850);
};
