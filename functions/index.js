const functions = require('firebase-functions');

const { 
  getImages,
  addImage,
  addImages, 
  getMessage,
 } = require('./api/images');


module.exports = {
  getImages: functions.https.onRequest(getImages),
  addImage: functions.https.onRequest(addImage),
  addImages: functions.https.onRequest(addImages),
  getMessage: functions.https.onRequest(getMessage)
}