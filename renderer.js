// modules
const fs      = require('fs');
const request = require('request');

// config
const unsplashApi = 'https://source.unsplash.com'
const source = 'random'
const resolution = '1920x1080'
const query = '?nature'

// vanila css
const cube = document.getElementsByClassName('cube');

// main function
function main(){
  
  // getting jpg image from api and saving to bg.jpg on disk
  function getImage(){
    request.get({url: `${unsplashApi}/${source}/${resolution}/${query}`, encoding: 'binary'}, function (err, response, body) {
      fs.writeFile('bg.jpg', body, 'binary', function(err) {
        if(err)
          console.log(err);
        else
          console.log("The file was saved!");
      });
    });
  }

  // getting base64 from bg.jpg file on disk and apply value on background image 
  function bgImage(){
    for (let item of cube) {
      const base64Data = fs.readFileSync('bg.jpg', { encoding: 'base64' });
      const img = "url('data:image/png;base64, "+base64Data + "')"; 
      item.style.backgroundImage = img;
//      item.style.opacity = 1;
    }
  }

  function getClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    minute = minute > 9 ? minute : '0' + minute;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
  }

  //execution and loop
  getClock();
  getImage();
  bgImage();  
  setTimeout(main, 60000);
}


// call
main();
