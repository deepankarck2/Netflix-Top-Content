const { fetchtop10MovieController, fetchMovieDetailsController } = require('./movieController')
const { fetchTop10TvShowController, fetchTvShowDetailsController,fetchTvGptController } = require('./tvShowController')

module.exports = {
    fetchtop10MovieController,
    fetchMovieDetailsController,

    fetchTop10TvShowController,
    fetchTvShowDetailsController,
    fetchTvGptController,
}