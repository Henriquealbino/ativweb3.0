var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET home page. */
router.get('/cool', function(req, res, next) {
  res.send('you are so cool');
});
/* GET home page. */
router.get('/beach/cool', function(req, res, next) {
  res.send('beach is so cool');
});
/* GET home page. */
router.get('/ifc', function(req, res, next) {
  res.send('ifc is very hard');
});
module.exports = router;
