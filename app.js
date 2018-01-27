const express = require('express');
const app = express();
const homesController = require('./controllers/homes_controller');
const postsController = require('./controllers/posts_controller');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  new homesController(req, res).show();
});

app.get('/posts/1', (req, res) => {
  new postsController(req, res).show();
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))