const express = require("express");
const router = express.Router();
const Demo = require('./model/demo');
const Top10Movie = require('./model/Top10Movie')
const MovieDetails = require('./model/MovieDetails')

router.get('/', (req,res) => res.json({"status" : "Netflix server ok"}));
router.get('/users', async(req, res) => {
    const Allusers = await Demo.findAll();
    res.json(Allusers);
})

router.get('/top10movies', async (req,res) => {
    const allMovies = await Top10Movie.findAll();
    res.json(allMovies);
})

router.get('/movie/:id', async(req, res) =>{
    const id = req.params.id;
    const movie = await MovieDetails.findOne({ where: { index: id }});
    res.json(movie);
})

module.exports = router