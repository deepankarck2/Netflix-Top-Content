const  Top10TvShow = require('../model/Top10TvShow')
const TvShowDetails = require('../model/TvShowDetails')
const GptTvShowDetails = require('../model/gptTVDetails')
const RottenTomatosTV = require('../model/RottenTomatosTV')

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
    //rename rating to imdb_rating and delete rating
    tvShowDetails.dataValues.imdb_rating = tvShowDetails.dataValues.rating;
    delete tvShowDetails.dataValues.rating;
    const rottenTomatosTvDetails = await RottenTomatosTV.findOne({ where: { fk_id: id }});

    const combinedDetails = {
        ...tvShowDetails.dataValues,
        ...rottenTomatosTvDetails.dataValues
    }
    console.log(combinedDetails)
    res.json(combinedDetails);
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