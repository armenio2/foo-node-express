var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  res.send('Hello World!')
});

router.post('/post', function (req, res) {
  res.send('Got a POST request')
})

module.exports = router;
