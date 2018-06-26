var express = require('express');
var router = express.Router();
var rek = require('rekuire'),
    Rider = rek("Rider"),
    riderCtrl=rek('riderCtrl')(Rider); 

/* GET riderss listing. */
router.get('/getriders', riderCtrl.getRiders);

module.exports = router;
