const cors = require('cors')({ origin: true });
const DB = require('./admin');

const retrieveImages = (res) => {
  let images = [];
  return DB.collection('images').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      images.push(doc.data())
    });
  })
  .then(() => {
    res.status(200).json(images)
  })
  .catch((err) => {
    console.log('Error getting documents', err)
  });
}

const getImages = (req, res) => {
  return cors(req,res,() => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'Not allowed'
      });
    };
    //res.send("GET request: getImages");
    retrieveImages(res);
  })
}

const addImage = (req, res) => {
  return cors(req,res,() => {
    if(req.method !== 'POST') {
      return res.status(401).json({
        message: 'Not allowed'
      });
    };
    const image = req.body;
    DB.collection('images').add(image)
    .then(ref => {
      console.log(`Image added: ${ref.id}`);
    })
    .catch((err) => {
      res.send("ERROR", err.message);
    });    
  });
}

const addImages = (req, res) => {
  return cors(req,res,() => {
    if(req.method !== 'POST') {
      return res.status(401).json({
        message: 'Not allowed'
      });
    };
    const images = req.body;
    const batch = DB.batch();
    images.forEach((image) => {
      var imageRef = DB.collection('images').doc();
      batch.set(imageRef, image);
    });
    batch.commit();
    res.send("images added");
  });
}

const getMessage = (req, res) => {
  return cors(req,res,() => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'Not allowed'
      });
    };
    res.send("Hello from Firebase");
  })
}

module.exports = {
  getImages,
  addImage,
  addImages,
  getMessage
}