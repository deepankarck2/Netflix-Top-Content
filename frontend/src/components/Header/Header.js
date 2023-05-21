import React from 'react';
import { Link } from 'react-router-dom';

function Header (){
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/top10movies">Top 10 Movies</Link></li>
                    <li><Link to="/top10tvshows">Top 10 TV Shows</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
