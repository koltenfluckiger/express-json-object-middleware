# JSON Express Middleware

<h1>Features</h1>
<ul>
<li>Allows to convert axios params back into Objects</li>
<li>Easy to use</li>
<li>Helps with mongoose requests such as find, update, delete etc. which require objects</li>
</ul>
<br>
<h1>How to use with Express</h1>
<br>
<pre><code>
npm i --save express-json-object-middleware
</pre></code>

# Project Router

```javascript
const Express = require("express");
const Router = Express.Router();
const JSONMiddleware= require("express-json-object-middleware");

const ProjectsController = require("../controllers/projects-controller");

Router.get("/", JSONMiddleware.parse, ProjectsController.editByQuery);

Router.delete("/", JSONMiddleware.parse, ProjectsController.removeByQuery);

module.exports = Router;
```

# Routes

```javascript
const Express = require("express");
const Router = Express.Router();

const ProjectRouter = require("./project");

Router.use("/projects", ProjectRouter);
Express().use("/", Router);

```
#
```javascript

const axios = require("axios").default;


try {
 const results = await axios.get("/projects", {filter: {_id: 1}});
 console.log(results);
} catch(err) {
  console.log(err)
}
```
# JSON Middleware
```javascript

parse(req, res, next){
  // req.query = {filter: '{_id: 1}'}
  // console.log(typeof(req.query.filter))
  // prints String
  
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
      // console.log(JSONObject)
      // prints {filter: {_id: 1}}
      // console.log(typeof(JSONObject.filter))
      // prints Object
      // Edits the query after converting it to a Object
      return next();
    }
  }

```
