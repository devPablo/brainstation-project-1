document.addEventListener('DOMContentLoaded', e => {
  var counter = 0;

  window.setInterval(() => {
    const jsIntroTitle = document.getElementById('js-intro-title');
    const introTitles = [
      'An adventure.',
      'A family.',
      'A meaning.',
      'A vision.',
      'An opportunity.',
      'An experience.',
      'A quest.',
      'An inspiration.',
      'A journey.',
    ];

    if (counter >= introTitles.length) counter = 0;
    jsIntroTitle.textContent = introTitles[counter];
    counter++;
  }, 2000);
});
