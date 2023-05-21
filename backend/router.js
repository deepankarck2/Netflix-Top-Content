const express = require("express");
const router = express.Router();
const Demo = require('./model/demo');
const controllers = require("./controllers")


router.get('/', (req,res) => res.json({"status" : "Backend server is ok"}));

router.get('/users', async(req, res) => {
    const Allusers = await Demo.findAll();
    res.json(Allusers);
})

// Movie Routes 
router.get('/top10movies', controllers.fetchtop10MovieController);
router.get('/movie/:id', controllers.fetchMovieDetailsController); 

// TV Show Soutes
router.get('/top10tvshows', controllers.fetchTop10TvShowController);
router.get('/tvshow/:id', controllers.fetchTvShowDetailsController);


module.exports = router; 