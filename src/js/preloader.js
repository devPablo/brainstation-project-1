import ambienceSound from './../audio/ambience.mp3';

document.addEventListener('DOMContentLoaded', e => {
  const websiteContent = document.getElementById('js-website-content');
  const jsHeader = document.getElementById('js-header');
  const jsPreloader = document.getElementById('js-preloader');

  // websiteContent.style.display = 'none';
  // jsHeader.style.display = 'none';
  jsPreloader.style.display = 'none';

  document.getElementById('js-launch-website').addEventListener('click', e => {
    launchWebsitePreloader();
  });
});

const launchWebsitePreloader = () => {
  const jsPreloader = document.getElementById('js-preloader');
  const websiteContent = document.getElementById('js-website-content');
  const jsHeader = document.getElementById('js-header');
  const jsOpenMenu = document.getElementById('js-open-menu');
  
  jsOpenMenu.focus();
  jsPreloader.style.top = '-100vh';
  let audio = new Audio(ambienceSound);
  setTimeout(e => {
    audio.play();
    audio.volume = 0.35;
    audio.loop = true;
    jsPreloader.style.display = 'none';
    // websiteContent.style.display = 'block';
    // jsHeader.style.display = 'flex';
  }, 850);
};
