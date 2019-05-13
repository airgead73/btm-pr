const functions = require('firebase-functions');
const DB = require('./admin');
const cors = require('cors')({ origin: true });

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("functions for btm pr");
});

//const DB = admin.database();
const DB_IMAGES = DB.ref('/images');

const getImagesFromDB = (res) => {
  let images = [];

  return DB_IMAGES.on('value', (snapshot) => {
    snapshot.forEach((image) => {
      images.push({
        id: image.key,
        title: image.val().img_title,
        work: image.val().work_title,
        modality: image.val().modality,
        medium: image.val().medium,
        category: image.val().category,
        src: image.val().img_src,
        alt: image.val().alt_text,
        width: image.val().img_width,
        height: image.val().img_height,
        file: image.val().file_name
      });
    });   
    res.status(200).json(images);
  }, (error) => {
    res.status(error.code).json({
      message: `Something went wrong. ${error.message}`
    });
  });
};

const getFilterResults = (res, selectedFilter, filterVal) => {
  let images = [];

  return DB_IMAGES.orderByChild(selectedFilter).equalTo(filterVal).on('value', (snapshot) => {
    snapshot.forEach((image) => {
      images.push({
        id: image.key,
        title: image.val().img_title,
        work: image.val().work_title,
        modality: image.val().modality,
        medium: image.val().medium,
        category: image.val().category,
        alt: image.val().alt_text,
        src: image.val().img_src,
        width: image.val().img_width,
        height: image.val().img_height,
        file: image.val().file_name
      });      

    });   
    images.length ? res.status(200).json(images) : res.status(200).json({ message: `No images for ${filterVal}`});
  }, (error) => {
    res.status(error.code).json({
      message: `Something went wrong. ${error.message}`
    });
  });
};

// Add Image to DB

exports.addImage = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'POST') {
      return res.status(401).json({
        message: 'Not allowed'
      })
    };
    console.log(req.body);
    const image = req.body;
    DB_IMAGES.push( image );
    getImagesFromDB(res)
  });
});

// Update Image 

exports.updateImage = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'PUT') {
      return res.status(401).json({
        message: 'Not allowed'
      })
    }
    const id = req.query.id;
    let imageToUpdate = DB.ref(`/images/${id}`);
    imageToUpdate.update(req.body);
    getImagesFromDB(res);
  });
});

// Delete Image

exports.deleteImage = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'DELETE') {
      return res.status(401).json({
        message: 'Not allowed'
      })
    }
    const id = req.query.id;
    DB.ref(`/images/${id}`).remove();
    getImagesFromDB(res);
  });
});

// Filter Images

exports.filterImages = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'Not allowed'
      });
    };
    const selectedFilter = req.query.selectedFilter;
    const filterVal = req.query.filterVal;
    getFilterResults(res, selectedFilter, filterVal);    
  });
});

// Get All Images

exports.getImages = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'Not allowed'
      });
    };
    getImagesFromDB(res);
  });
});

// callable function

