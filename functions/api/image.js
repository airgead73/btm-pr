const cors = require('cors')({ origin: true });
const DB = require('./admin');
const DB_IMAGES = DB.ref('/images');

// Helper Images

const retrieveImages = (res) => {
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
      message: `Something went wrong ${error.message}`
    });
  });
};

const filterImages = (res, selectedFilter, filterVal) => {
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

// GET Images

const getImages = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'Not allowed'
      });
    };
    retrieveImages(res);
  });
};

// POST Image

const addImage = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'POST') {
      return res.status(401).json({
        message: 'Not allowed'
      })
    };
    console.log(req.body);
    const image = req.body;
    DB_IMAGES.push( image );
    retrieveImages(res);
  });
};

// UPDATE Image 

const updateImage = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'PUT') {
      return res.status(401).json({
        message: 'Not allowed'
      })
    }
    const id = req.query.id;
    let imageToUpdate = DB.ref(`/images/${id}`);
    imageToUpdate.update(req.body);
    retrieveImages(res);
  });
};

// DELETE Image

const deleteImage = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'DELETE') {
      return res.status(401).json({
        message: 'Not allowed'
      })
    }
    const id = req.query.id;
    DB.ref(`/images/${id}`).remove();
    retrieveImages(res);
  });
};

module.exports = {
  addImage,
  getImages,
  updateImage,
  deleteImage,
  filterImages
}