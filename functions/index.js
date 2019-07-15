const functions = require('firebase-functions');

const { 
  getImages,
  addImage,
  addImages,
  filterImages, 
  getMessage,
 } = require('./api/images');


module.exports = {
  getImages: functions.https.onRequest(getImages),
  addImage: functions.https.onRequest(addImage),
  addImages: functions.https.onRequest(addImages),
  filterImages: functions.https.onRequest(filterImages),
  getMessage: functions.https.onRequest(getMessage)
}