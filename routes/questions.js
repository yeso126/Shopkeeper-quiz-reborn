const express = require('express');
const router = express.Router();

router.get('/questions', (req, res) => {
  var x = {'test':'X',
            'a':'b',
            'x':'?'};
  res.send(x);
});

module.exports = router;
