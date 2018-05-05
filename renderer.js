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

setInterval(function(){ location.reload(); }, 60000);