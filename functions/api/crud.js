const cors = require('cors')({ origin: true });
const DB = require('./admin');

const getImages = (req, res) => {
  return cors(req, res, () => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'method not allowed'
      });
    };
    res.status(202).send("GET request");
  });
}

module.exports = {
  getImages
}