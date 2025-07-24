// filepath: d:\MyBlog\blog\source\js\bgm-persist.js
document.addEventListener('pjax:send', function () {
  const bgm = document.querySelector('#bgm audio');
  if (bgm) {
    window._bgmCurrentTime = bgm.currentTime;
    window._bgmPaused = bgm.paused;
  }
});
document.addEventListener('pjax:complete', function () {
  const bgm = document.querySelector('#bgm audio');
  if (bgm && typeof window._bgmCurrentTime !== 'undefined') {
    bgm.currentTime = window._bgmCurrentTime;
    if (!window._bgmPaused) {
      bgm.play();
    }
  }
});