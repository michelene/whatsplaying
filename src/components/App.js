import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MoviesContainer from './MoviesContainer';

function App() {
  const searchOpts = {
    tmdb_APIKey: process.env.REACT_APP_TMD_API,
    tmdb_baseURL: 'https://api.themoviedb.org/3/movie/now_playing',
    language: 'en-US',
    page: 1
  };

  const [nowPlaying, setNowPlaying] = useState([]);

  let getNowPlaying = () => {
    const url = `${searchOpts.tmdb_baseURL}?api_key=${searchOpts.tmdb_APIKey}&language=${searchOpts.language}&page=${searchOpts.page}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setNowPlaying(res.results);
      })
      .catch(console.error);
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  return (
    <div className="App">
      <Header />
      <MoviesContainer movies={nowPlaying} />
      <Footer />
    </div>
  );
}

export default App;
