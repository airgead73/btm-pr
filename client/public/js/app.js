console.log("app reloaded");


var makeIMG = function(src, title) {
  var img = document.createElement('img');
  img.setAttribute('src', src);
  img.setAttribute('alt', title);
  img.setAttribute('title', title);
  
  return img;

}

fetch('../../db/data.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('The request failed');
  });