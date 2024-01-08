const fs = require('fs');
const path =  require('path');
const Movie = require('../DataBase/videos');
const { VIDEO_DIR } = require('../constants');

async function ListAPI(req,res) {
    Movie.find()
    .then(response=>{
        res.status(200).json({message:"List fetched Successfully", List:response})
    })
    .catch(err => res.status(500).json({Error : err}));
};

async function DetailsAPI(req,res) {
    const {video_id} = req.params;
    Movie.findById(video_id)
    .then(response =>{
        res.status(200).json({message:"Details Found", Details:response});    
    })
    .catch(err => res.status(500).json({Error : err}));
};

async function StreamAPI(req,res) {
    const Chunk_Size = 10 ** 6;
    let range = req.headers.range;
    console.log(JSON.stringify(req.headers));

    if(!range){
        range = 'bytes=0-'
    }
    const {video_id} = req.params;
    const movie = await Movie.findById(video_id);
    const videoPath = path.join(VIDEO_DIR, movie.path);
    const videoSize = fs.statSync(videoPath).size;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + Chunk_Size, videoSize - 1);
    const contentLength = end - start + 1;

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }

    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end});
    videoStream.pipe(res);
}

module.exports = {
    ListAPI,DetailsAPI,StreamAPI
}
