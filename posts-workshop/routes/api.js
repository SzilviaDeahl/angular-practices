var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/posts-workshop');
var Post = db.get('posts');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/posts', function (req, res, next) {
  Post.find({}, function (err, post) {
    console.log('hello');
    render.json(response);
  })
})

module.exports = router;
