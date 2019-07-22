const cors = require('cors')({ origin: true });
const DB = require('./admin');

const BASE_URL = 'https://res.cloudinary.com/dpm/image/upload/w_750/l_text:Verdana_12_normal:%C2%A9%20Brian%20Moneypenny,g_south_east,y_8,x_8,co_rgb:FFFFFF/bmoneypenny/work/'

const retrieveImages = (res) => {
  let images = [];
  return DB.collection('images')
         .get()
         .then((snapshot) => {
           snapshot.forEach((doc) => {
             let imgData = doc.data();
             let newImg = {};
             newImg.id = doc.id;
             newImg.title = imgData.title;
             newImg.src = BASE_URL + imgData.file;
             newImg.alt = imgData.alt;
             images.push(newImg);
           })
         })
         .then(() => {
           res.status(200).json(images);
         })
         .catch((err) => {
           res.status(err.status).json({
             message: err.message
           });
         })
}

const getImages = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'method not allowed'
      });
    };
    //res.status(202).send("get all images");
    retrieveImages(res);
  });
}

const addImages = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'POST') {
      return res.status(401).json({
        message: 'method not allowed'
      });
    };
    res.status(202).send("Add multiple images");
  });
}

const addImage = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'POST') {
      return res.status(401).json({
        message: 'method not allowed'
      });
    };
    res.status(202).send("Add single image");
  });
}

const updateImage = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'PUT') {
      return res.status(401).json({
        message: 'method not allowed'
      });
    };
    res.status(202).send("Update image");
  });
}

const deleteImage = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'DELETE') {
      return res.status(401).json({
        message: 'method not allowed'
      });
    };
    res.status(202).send("Delete image");
  });
}

module.exports = {
  getImages,
  addImage,
  addImages,
  updateImage,
  deleteImage
}