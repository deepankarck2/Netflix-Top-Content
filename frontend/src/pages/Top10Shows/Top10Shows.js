import React, { useEffect, useState } from 'react';
import { getTop10TvShows } from '../../utils/api';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';


function Top10TvShowsPage() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        getTop10TvShows().then(response => {
            setShows(response.data);
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
    }, []);

    return (
        <div>
            <Header/>
            <h1>Top 10 Shows</h1>
            <hr></hr>
            {shows.map(show => (
                <div key={show.index}>
                    <h2> Ranking: {show.index + 1}, Name: {show.TV}</h2>
                    <Link to={`/tvshow/${show.index}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}

export default Top10TvShowsPage;
