import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../utils/api';
import Header from '../../components/Header/Header';

function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getMovieDetails(id).then(response => {
            setMovie(response.data);
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
    }, [id]);

    return movie ? (
        <div> 
            <Header/>
            <div>
                <h1>Title: {movie.Movie}</h1>
                <p>Summary: {movie.summary}</p>
                <p>Rating: {movie.rating}</p>
                <p>Genres: {movie.genres}</p>
                <img src={movie.imgUrl} alt={movie.name} />
            </div>
        </div>
    ) : (
        <>
            <Header/>
            <p>Loading...</p>
        </>
    );
}

export default MovieDetailsPage;
