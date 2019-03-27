console.log("app reloaded");


var makeIMG = function(src, title) {
  var img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', title);
  img.setAttribute('title', title);
  
  return img;

}

const myKey = NASA_KEY;

fetch(`https://api.nasa.gov/planetary/apod?api_key=${myKey}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('The request failed');
  });