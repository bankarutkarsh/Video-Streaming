const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title : {
        type: String
    },
    title_img: {
        type: String
    },
    synopsis: {
        type: String
    },
    banner: {
        type: String
    },
    rating: {
        type: String
    },
    path: {
        type: String
    }
});

module.exports = mongoose.model('sample1', videoSchema, 'videos');