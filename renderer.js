const unsplashApi = 'https://source.unsplash.com'
const source = ''
const resolution = '1920x1080'
const search = '?nature'
const cubes = document.getElementsByClassName('cube');

for (let item of cubes) {
  const bgImage = `url('${unsplashApi}/${source}/${resolution}/${search}')`;
  item.style.backgroundImage = `linear-gradient(
    rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), ${bgImage}`;
  item.style.opacity = 1;
}

setInterval(function(){ location.reload(); }, 60000);