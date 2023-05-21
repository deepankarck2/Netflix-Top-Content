import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTvShowDetails } from '../../utils/api';
import Header from '../../components/Header/Header';

function TvShowDetailsPage() {
    const [show, setshow] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getTvShowDetails(id).then(response => {
            setshow(response.data);
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
    }, [id]);

    return show ? (
        <div> 
            <Header/>
            <div>
                <h1>Title: {show.TV} </h1>
                <p>Summary: {show.summary} </p>
                <p>Rating: {show.rating} </p>
                <p>Genres: {show.genres} </p>
                { console.log(show.imgUrl) }
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
