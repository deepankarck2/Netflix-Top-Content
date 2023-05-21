import React, { useEffect, useState } from 'react';
import { getTop10Movies } from '../../utils/api';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';


function Top10MoviesPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTop10Movies().then(response => {
            setMovies(response.data);
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
    }, []);

    return (
        <div>
            <Header/>
            <h1>Top 10 Movies</h1>
            <hr></hr>
            {movies.map(movie => (
                <div key={movie.index}>
                    <h2> Ranking: {movie.index + 1}, Name: {movie.Movie}</h2>
                    <Link to={`/movie/${movie.index}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}

export default Top10MoviesPage;
