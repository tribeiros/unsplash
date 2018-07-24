const unsplashApi = 'https://source.unsplash.com'
const source = 'random'
const resolution = '1920x1080'
const query = ''
const cubes = document.getElementsByClassName('cube');


for (let item of cubes) {
    const bgImage = `url('${unsplashApi}/${source}/${resolution}/${query}')`;
    item.style.backgroundImage = `${bgImage}`;
    item.style.opacity = 1;
}

setInterval(function(){
    window.location = location.href;
}, 10000);