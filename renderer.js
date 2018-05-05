const unsplashApi = 'https://source.unsplash.com'
const source = ''
const resolution = '1920x1080'
const query = '?nature'
const cubes = document.getElementsByClassName('cube');

for (let item of cubes) {
  	const bgImage = `url('${unsplashApi}/${source}/${resolution}/${query}')`;
  	item.style.backgroundImage = `${bgImage}`;
  	item.style.opacity = 1;
}

function fadeIn(el, time) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

var el = document.getElementById("grid");
fadeIn(el, 3000);



setInterval(function(){ location.reload(); }, 60000);