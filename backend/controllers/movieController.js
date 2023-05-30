const Top10Movie = require('../model/Top10Movie')
const MovieDetails = require('../model/MovieDetails')
const GptMovieDetails = require('../model/GptMovieDetails')
const RottenTomatosMovie = require('../model/RottenTomatosMovie')

async function fetchtop10MovieController(req,res){
    const allMovies = await Top10Movie.findAll({
        include: [{
            model: MovieDetails,
            as: 'moviedetails', // using the alias defined in the association
            required: true,
        }]
    });
    res.json(allMovies);
}

async function fetchMovieDetailsController(req, res){
    const id = req.params.id;
    const movieDetails = await MovieDetails.findOne({ where: { id: id }});

    //rename rating to imdb_rating and delete rating
    movieDetails.dataValues.imdb_rating = movieDetails.dataValues.rating;
    delete movieDetails.dataValues.rating;
    const rottenTomatosMovieDetails = await RottenTomatosMovie.findOne({ where: { fk_id: id }});

    const combinedDetails = {
        ...movieDetails.dataValues,
        ...rottenTomatosMovieDetails.dataValues
    }
    console.log(combinedDetails)
    res.json(combinedDetails);
}

async function fetchMovieGptController(req, res){
    const id = req.params.id;
    const movieGptDetails = await GptMovieDetails.findOne({ where: { rank: id }});

    res.json(movieGptDetails);
}


module.exports = {
    fetchtop10MovieController,
    fetchMovieDetailsController,
    fetchMovieGptController,
}