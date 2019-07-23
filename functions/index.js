const functions = require('firebase-functions');

const { 
  getImages,
  addImage,
  addImages,
  updateImage,
  deleteImage
} = require('./api/crud');

const {
  filterSingle
} = require('./api/filter');

module.exports = {
  getImages: functions.https.onRequest(getImages),
  addImage: functions.https.onRequest(addImage),
  addImages: functions.https.onRequest(addImages),
  updateImage: functions.https.onRequest(updateImage),
  deleteImage: functions.https.onRequest(deleteImage),
  filterSingle: functions.https.onRequest(filterSingle)
}