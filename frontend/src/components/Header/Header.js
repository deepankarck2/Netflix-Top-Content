import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-[#E50914] text-white shadow-md">
            <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span className="ml-3 text-xl">MyApp</span>
                </Link>
                <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/top10movies" className="mr-5 hover:text-white">Top 10 Movies</Link>
                    <Link to="/top10tvshows" className="mr-5 hover:text-white">Top 10 TV Shows</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
