const fs      = require('fs');
const request = require('request');

const unsplashApi = 'https://source.unsplash.com'
const source = 'random'
const resolution = '1920x1080'
const query = '?nature'

request.get({url: `${unsplashApi}/${source}/${resolution}/${query}`, encoding: 'binary'}, function (err, response, body) {
  fs.writeFile('bg.jpg', body, 'binary', function(err) {
    if(err)
      console.log(err);
  });
});

