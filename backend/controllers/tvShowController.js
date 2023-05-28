const  Top10TvShow = require('../model/Top10TvShow')
const TvShowDetails = require('../model/TvShowDetails')
const GptTvShowDetails = require('../model/gptTVDetails')

async function fetchTop10TvShowController(req, res){
    const allTvShows = await Top10TvShow.findAll({
        include: [{
            model: TvShowDetails,
            as: 'tvshowdetails', // using the alias defined in the association
            required: true,
        }]
    });
    res.json(allTvShows);
}

async function fetchTvShowDetailsController(req, res){
    const id = req.params.id;
    const tvShowDetails = await TvShowDetails.findOne({ where: { id: id }});

    res.json(tvShowDetails);
}

async function fetchTvGptController(req, res){
    const id = req.params.id;
    const tvShowDetails = await GptTvShowDetails.findOne({ where: { rank: id }});

    res.json(tvShowDetails);
}

module.exports = {
    fetchTop10TvShowController,
    fetchTvShowDetailsController,
    fetchTvGptController,
}