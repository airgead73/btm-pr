const functions = require('firebase-functions');

const { 
  getImages,
  addImage,
  addImages,
  filterImages, 
  getMessage,
 } = require('./api/images');

exports.addPerson = functions.https.onCall((data, context) => {
  var firstName = data.firstName;
  var lastName = data.lastName;

  return {
    firstName: firstName,
    lastName: lastName,
    fullName: firstName + " " + lastName
  }
})


module.exports = {
  getImages: functions.https.onRequest(getImages),
  addImage: functions.https.onRequest(addImage),
  addImages: functions.https.onRequest(addImages),
  filterImages: functions.https.onRequest(filterImages),
  getMessage: functions.https.onRequest(getMessage)
}