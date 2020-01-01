class JSONMiddleware {
  parse(req, res, next) {
    const JSONObject = {};
    Object.keys(req.query).map(key =>{
      JSONObject[key] = JSON.parse(req.query[key]);
    })
    req.query = JSONObject;
    return next();
  }
}
module.exports = new JSONMiddleware();
