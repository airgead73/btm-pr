console.log("app is loaded");

fetch('../db/data.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('The request failed');
  });