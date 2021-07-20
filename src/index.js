import './styles/main.scss';
import ambienceSound from './audio/ambience.mp3';

document.addEventListener('DOMContentLoaded', e => {
  document.getElementById('js-launch-website').addEventListener('click', e => {
    launchWebsitePreloader();
  });
});

const launchWebsitePreloader = () => {
  document.querySelector('#js-preloader').style.top = '-100vh';
  let audio = new Audio(ambienceSound);
  setTimeout(e => {
    audio.play();
    audio.volume = 0.35;
    audio.loop = true;
  }, 850);
};
