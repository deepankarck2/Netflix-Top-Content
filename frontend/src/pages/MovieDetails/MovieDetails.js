import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../utils/api';
import Header from '../../components/Header/Header';
import Footer from '../../components/Header/Footer';
function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    const [similarmovies, setSimilarShows] = useState([]);

    useEffect(() => {
        getMovieDetails(id).then(response => {
            setMovie(response);
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
    }, [id]);

    useEffect(() => {
        if (movie && movie.similarMovies) {
            const similarmovies = movie.similarMovies.split(',');
            // Remove starting and ending brackets
            similarmovies[0] = similarmovies[0].slice(1);
            similarmovies[similarmovies.length - 1] = similarmovies[similarmovies.length - 1].slice(0, -1);
            setSimilarShows(similarmovies);
        } else {
            setSimilarShows([]);
        }
    }, [movie]);

    return movie ? (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header />
            <section className='flex-grow'>
                <div className="flex flex-row justify-center items-center h-full p-4">
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

                    <div p-4 bg-gray-800 rounded shadow-lg>
                        <h1 class="text-2xl font-extrabold"> GPT-3 Details </h1>
                        <p>User Opinion: {movie.userOpinion} </p>
                        <p>Type of Viewer: {movie.typeOfViewer} </p>
                        <p>Similar Movies: 
                            {similarmovies.map(similar_movie => 
                            <a href={'https://www.google.com/search?q=' + similar_movie} target="_blank" rel="noreferrer"><li>
                                {similar_movie}
                            </li></a>)}
                        </p>
                    </div>
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
