const functions = require('firebase-functions');
const { 
  addImage, 
  getImages, 
  updateImage, 
  deleteImage, 
  filterImages 
} = require('./api/image');

module.exports = {
  getImages: functions.https.onRequest(getImages),
  addImage: functions.https.onRequest(addImage),
  updateImage: functions.https.onRequest(updateImage),
  deleteImage: functions.https.onRequest(deleteImage),
  filterImages: functions.https.onRequest(filterImages)
}