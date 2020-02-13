class JSONMiddleware {
  parse(req, res, next) {
    if (req.query !== undefined) {
      const JSONQuery = {};
      Object.keys(req.query).map(key => {
        JSONQuery[key] = JSON.parse(req.query[key]);
      })
      req.query = JSONQuery;
      return next();
    }
  }
  else {
    return next();
  }
}
module.exports = new JSONMiddleware();
