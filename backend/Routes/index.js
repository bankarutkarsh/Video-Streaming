const express = require('express');
const videoController = require('../Controllers/video');

const route = express.Router();

route.get('/shows',videoController.ListAPI);
route.get('/shows/:video_id',videoController.DetailsAPI);

route.get('/stream/:video_id', videoController.StreamAPI);


module.exports = route;