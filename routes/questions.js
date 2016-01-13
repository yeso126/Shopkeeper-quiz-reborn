var express = require('express');
var router = express.Router();

router.get('/questions', function(req, res) {
  res.send('testasdfasdfe');
});

module.exports = router;
