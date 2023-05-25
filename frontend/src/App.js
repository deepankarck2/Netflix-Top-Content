import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top10MoviesPage from './pages/top10movie/Top10Movie'
import MovieDetailsPage from './pages/MovieDetails/MovieDetails';
import Top10TvShowsPage from './pages/Top10Shows/Top10Shows';
import TvShowDetailsPage from './pages/TvShowDetails/TvShowDetails';
import DrawerExample from './pages/draw';

import Home from './pages/Home/Home';
import Error404 from './pages/ErrorPage/404Error';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/top10movies" element={<Top10MoviesPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/top10tvshows" element={<Top10TvShowsPage />} />
          <Route path="/tvshow/:id" element={< TvShowDetailsPage />}/>
          <Route path="/draw" element={<DrawerExample/>} />
          <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
