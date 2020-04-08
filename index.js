class JSONMiddleware {
    parse(req, res, next) {
        if ((req.query === undefined) && (req.query.params === undefined)) {
            return next()
        };
        const JSONQuery = {};
        Object.entries(req.query).forEach(([key, value]) => {
            if (typeof(value) === 'string') {
                const v = JSON.parse(value);
                JSONQuery[key] = v;
            } else {
                JSONQuery[key] = value;
            }
        })
        req.query = JSONQuery;
        return next();
    }
}
module.exports = new JSONMiddleware();
