const cors = require('cors')({ origin: true });




const getWorks = (req, res) => {
  return cors(req,res,() => {
    if(req.method !== 'GET') {
      return res.status(401).json({
        message: 'Not allowed'
      });
    };
    res.send("GET request: getWorks");
  })
}



module.exports = {
  getWorks
}