const  Top10TvShow = require('../model/Top10TvShow')

async function fetchTop10TvShowController(req, res){
    const allTvShows = await Top10TvShow.findAll();
    res.json(allTvShows);
}

module.exports = {
    fetchTop10TvShowController,
}