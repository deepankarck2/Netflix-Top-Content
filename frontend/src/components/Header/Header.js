import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

function Header (){
    return (
        <header>
            <nav>
                <ul className='nav-list'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/top10movies">Top 10 Movies</Link></li>
                    <li><Link to="/top10tvshows">Top 10 TV Shows</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
