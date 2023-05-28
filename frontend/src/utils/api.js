import axios from 'axios';
// const path = require("path");
// require("dotenv").config({path: path.resolve(__dirname, "../.env") });

const BASE_URL = 'http://localhost:4000';


export function getTop10Movies() {
   return axios.get(`${BASE_URL}/top10movies`)
   .catch((err) =>{
    console.log(err);
   })
}

export function getMovieDetails(id) {
    return axios.get(`${BASE_URL}/movie/${id}`)
   .catch( (err) => {
        console.log(err); 
   })
}

export function getTop10TvShows() {
   return axios.get(`${BASE_URL}/top10tvshows`)
   .catch((err) =>{
      console.log(err);
   })
}

export function getTvShowDetails(id) {
   const tvShowPromise = axios.get(`${BASE_URL}/tvshow/${id}`);
   const gptDetailsPromise = axios.get(`${BASE_URL}/gpttv/${id}`);
   
   return Promise.all([tvShowPromise, gptDetailsPromise])
     .then(([tvShowResponse, gptDetailsResponse]) => {
       const tvShowData = tvShowResponse.data;
       const gptDetailsData = gptDetailsResponse.data;
       
       // Combine the data from both responses
       const combinedData = {
         ...tvShowData,
         ...gptDetailsData
       };
       
       return combinedData;
     })
     .catch((err) => {
       console.log(err);
     });
 }
 