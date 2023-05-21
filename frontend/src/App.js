import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top10MoviesPage from './pages/top10movie/Top10Movie'
import MovieDetailsPage from './pages/MovieDetails/MovieDetails';
import Home from './pages/Home/Home';
import Error404 from './pages/ErrorPage/404Error';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/top10movies" element={<Top10MoviesPage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
