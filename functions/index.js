const functions = require('firebase-functions');

const { 
  getImages,
  addImage,
  addImages,
  updateImage,
  deleteImage
} = require('./api/crud');

const {
  filterOne,
  filterMultiple
} = require('./api/filter');

module.exports = {
  getImages: functions.https.onRequest(getImages),
  addImage: functions.https.onRequest(addImage),
  addImages: functions.https.onRequest(addImages),
  updateImage: functions.https.onRequest(updateImage),
  deleteImage: functions.https.onRequest(deleteImage),
  filterOne: functions.https.onRequest(filterOne),
  filterMultiple: functions.https.onRequest(filterMultiple)
}