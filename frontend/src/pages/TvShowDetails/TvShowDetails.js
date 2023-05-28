import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTvShowDetails } from '../../utils/api';
import Header from '../../components/Header/Header';

function TvShowDetailsPage() {
    const [show, setshow] = useState(null);
    const { id } = useParams();
    const [similarShows, setSimilarShows] = useState([]);

    useEffect(() => {
        getTvShowDetails(id)
          .then(response => {
            console.log(response);
            setshow(response);
          })
          .catch(error => {
            console.error('Error occurred:', error);
            setshow(null);
          });
    }, [id]);

    useEffect(() => {
        if (show) {
            const similarShows = show.similarShows.split(',');
            // Remove trailing and ending brackets
            similarShows[0] = similarShows[0].slice(1);
            similarShows[similarShows.length - 1] = similarShows[similarShows.length - 1].slice(0, -1);
            setSimilarShows(similarShows);
        } else {
            setSimilarShows([]);
        }
    }, [show]);
      
    return show ? (
        <div> 
            <Header/>
            <div>
                <h1>Title: {show.TV} </h1>
                <p>Summary: {show.summary} </p>
                <p>Rating: {show.rating} </p>
                <p>Genres: {show.genres} </p>
                <br/>

                <h1 class="text-2xl font-extrabold"> GPT-3 Details </h1>
                <p>User Opinion: {show.userOpinion} </p>
                <p>Type of Viewer: {show.typeOfViewer} </p>
                <p>Similar Shows: 
                    {similarShows.map(similar_show => 
                    <li>
                        {similar_show}
                    </li>)}
                </p>
                <img src={show.imgUrl} alt={show.TV} />
            </div>
        </div>
    ) : (
        <>
            <Header/>
            <p>Loading...</p>
        </>
    );
}

export default TvShowDetailsPage;
