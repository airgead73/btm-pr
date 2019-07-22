const cors = require('cors')({ origin: true });
const DB = require('./admin');

let imagesRef = DB.collection('images');

const BASE_URL = 'https://res.cloudinary.com/dpm/image/upload/w_750/l_text:Verdana_12_normal:%C2%A9%20Brian%20Moneypenny,g_south_east,y_8,x_8,co_rgb:FFFFFF/bmoneypenny/work/';

const filterOne = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'method not allowed'
      });
    };
    let filter = req.query.filterOne;
    let value = req.query.filterOneValue;
    let images = [];
    return DB.collection('images')
           .where(filter, "==", value)
           .get()
           .then((querySnapshot) => {
             querySnapshot.forEach((doc) => {
              let imgData = doc.data();
              let newImg = {};
              newImg.id = doc.id;
              newImg.title = imgData.title;
              newImg.src = BASE_URL + imgData.file;
              newImg.alt = imgData.alt;
              images.push(newImg);
             });
           })
           .then(() => {
             res.status(200).json(images);
           })
           .catch((err) => {
             res.status(err.status).json({
               message: err.message
             });
           });
  });

}

const filterMultiple = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'method not allowed'
      });
    };
    const { modality, category, medium } = req.query;
    let imgQuery;
    
    if(modality && category && medium ) {
      imgQuery = imagesRef.where('modality', '==', modality).where('category', '==', category).where('medium', '==', medium);
    } else if(modality && category && !medium) {
      imgQuery = imagesRef.where('modality', '==', modality).where('category', '==', category);
    } else if(modality && !category && !medium) {
      imgQuery = imagesRef.where('modality', '==', modality);
    }

    res.status(200).json({
      message: imgQuery;
    })

    // switch(queryTotal) {
    //   case "1":
    //       res.status(200).json({
    //         message: 'One query parameter'
    //       });
    //       break;
    //   case "2":
    //       res.status(200).json({
    //         message: 'Two query parameters'
    //       });
    //       break;
    //   case "3":
    //       res.status(200).json({
    //         message: 'Three query paraters'
    //       });
    //       break;      
    // }
    

  });

}

module.exports = {
  filterOne,
  filterMultiple
}