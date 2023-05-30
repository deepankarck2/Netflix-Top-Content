const { fetchtop10MovieController, fetchMovieDetailsController, fetchMovieGptController} = require('./movieController')
const { fetchTop10TvShowController, fetchTvShowDetailsController, fetchTvGptController } = require('./tvShowController')

module.exports = {
    fetchtop10MovieController,
    fetchMovieDetailsController,
    fetchMovieGptController,

    fetchTop10TvShowController,
    fetchTvShowDetailsController,
    fetchTvGptController,
}