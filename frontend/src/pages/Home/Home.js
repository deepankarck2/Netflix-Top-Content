import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div>
            <h1>Welcome to our home page!</h1>
            <p>This is a simple React home page.</p>
            <p>This is a simple React home page.</p>
            <p>This is a simple React home page.</p>
            <Link to='/top10movies'> Go to top 10 movies!</Link>
        </div>
    );
}

export default Home;