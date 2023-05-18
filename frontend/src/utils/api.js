import axios from 'axios';
// const path = require("path");
// require("dotenv").config({path: path.resolve(__dirname, "../.env") });

const BASE_URL = 'http://localhost:4000';


export function getTop10Movies() {
    return axios.get(`${BASE_URL}/top10movies`);
}

export function getMovieDetails(id) {
    return axios.get(`${BASE_URL}/movie/${id}`);
}
