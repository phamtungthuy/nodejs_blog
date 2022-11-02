const express = require('express');
const router = express.Router();

const newsSite = require('../app/controllers/NewsSite.js');

//newsController.index

router.get('/', newsSite.index);
router.get('/buynow', newsSite.buynow);
router.get('/contactus', newsSite.contactus);
router.get('/teaFactsCssDesign1', newsSite.teaFactsCssDesign1);
router.get('/teaFactsCssDesign2', newsSite.teaFactsCssDesign2);
router.get('/teamanufacturers', newsSite.teamanufacturers);
router.get('/typesoftea', newsSite.typesoftea);
module.exports = router;