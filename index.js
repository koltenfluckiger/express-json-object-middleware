class JSONMiddleware {
  parse(req, res, next) {
    if ((req.query === undefined) || (req.query.params === undefined)) {
      return next()
    };
    const JSONQuery = {};
    const query = typeof(req.query.params) === "string"
      ? JSON.parse(req.query.params)
      : req.query.params;
    Object.keys(query).map(key => {
      JSONQuery[key] = query[key];
    })
    req.query = JSONQuery;
    return next();
  }
}
module.exports = new JSONMiddleware();
