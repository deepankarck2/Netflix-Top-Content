const Top10Movie = require('../model/Top10Movie')
const MovieDetails = require('../model/MovieDetails')

async function fetchtop10MovieController(req,res){
    const allMovies = await Top10Movie.findAll();
    res.json(allMovies);
}

async function fetchMovieDetailsController(req, res){
    const id = req.params.id;
    const movie = await MovieDetails.findOne({ where: { index: id }});
    res.json(movie);
}


module.exports = {
    fetchtop10MovieController,
    fetchMovieDetailsController,
}