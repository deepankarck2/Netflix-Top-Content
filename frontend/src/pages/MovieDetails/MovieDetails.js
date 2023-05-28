import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../utils/api';
import Header from '../../components/Header/Header';
import Footer from '../../components/Header/Footer';
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
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header />
            <section className='flex-grow'>
                <div className="flex flex-row justify-center items-center h-full py-4">
                <div className="flex-none w-96 h-auto mr-8 ml-5">
                    <img className="rounded object-cover w-full h-full"  src={movie.imgUrl} alt={movie.name} />
                </div>
                <div className="flex-grow p-8 space-y-4 text-center">
                    <h1 className="text-3xl font-bold">Title: {movie.Movie}</h1>
                    <h2 className="text-2xl">Rank: {movie.rank}</h2>
                    <div className="p-4 bg-gray-800 rounded shadow-lg">
                        <p className="text-lg">Summary: {movie.summary}</p>
                    </div>
                    <p className="text-lg">Imdb Rating: {movie.imdb_rating}</p>
                    <p className="text-lg">Rotten Tomatoes Rating: {movie.tomatometer || movie.audience_score || 'Unavailable'}</p>
                    <p className="text-lg">Genres: {movie.genres}</p>
                </div>
                </div>
            </section>
            <Footer/>
        </div>
    ) : (
        <>
            <Header/>
            <p>Loading...</p>
        </>
    );
}

export default MovieDetailsPage;
