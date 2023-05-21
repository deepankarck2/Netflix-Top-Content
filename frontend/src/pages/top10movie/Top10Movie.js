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
        <div class="bg-fuchsia-200"> 
            <Header/>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8 text-center mt-10">Top 10 Movies</h1>
            <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
            <div class="flex flex-row flex-wrap	box-border m-5 justify-center">
            {movies.map(movie => (
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4" key={movie.index} >
                        <a href={`/movie/${movie.index}`}>
                            <img class="rounded-t-lg" src="https://todaysparent.mblycdn.com/uploads/tp/2018/04/best-kids-movies-us-netflix-sing.jpg" alt="" />
                        </a>
                        <div class="p-5">
                            <a href= {`/movie/${movie.index}`}>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.Movie}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ranking: {movie.index + 1} </p>
                            <a href= {`/movie/${movie.index}`}class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <Link to={`/movie/${movie.index}`}>View Details</Link>
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    );
}

export default Top10MoviesPage;



