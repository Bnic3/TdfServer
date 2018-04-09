var express = require('express');
var router = express.Router();
var rek = require('rekuire'),
Rider = rek("Rider");
var dbSeedCtl= rek('dbseedCtl')(Rider);

/* GET home page. */
router.get('/seed',dbSeedCtl.riderJson);

module.exports = router;
