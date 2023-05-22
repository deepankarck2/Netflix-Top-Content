const  Top10TvShow = require('../model/Top10TvShow')
const TvShowDetails = require('../model/TvShowDetails')

async function fetchTop10TvShowController(req, res){
    const allTvShows = await Top10TvShow.findAll();
    res.json(allTvShows);
}

async function fetchTvShowDetailsController(req, res){
    const id = req.params.id;
    const tvShowDetails = await TvShowDetails.findOne({ where: { id: id }});

    res.json(tvShowDetails);
}

module.exports = {
    fetchTop10TvShowController,
    fetchTvShowDetailsController,
}