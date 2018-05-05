const getRandomNum = () => {
  return Math.floor(Math.random() * 1);
}

const cubes = document.getElementsByClassName('cube');

for (let item of cubes) {
  const bgImage = `url('https://source.unsplash.com/random/1920x1080${getRandomNum()}')`;
  item.style.backgroundImage = `${bgImage}`;
  item.style.opacity = 1;
}


setInterval(function(){ location.reload(); }, 60000);