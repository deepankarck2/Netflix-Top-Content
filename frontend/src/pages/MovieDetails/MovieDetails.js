import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../utils/api';


function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getMovieDetails(id).then(response => {
            setMovie(response.data);
        });
    }, [id]);

    return movie ? (
        <div>
            <h1>Title: {movie.Movie}</h1>
            <p>Summary: {movie.summary}</p>
            <p>Rating: {movie.rating}</p>
            <img src={movie.imgUrl} alt={movie.name} />
        </div>
    ) : (
        <p>Loading...</p>
    );
}

export default MovieDetailsPage;
