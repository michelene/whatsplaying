import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import MoviesContainer from './MoviesContainer';

function App() {
  const searchOptions = {
    key: process.env.REACT_APP_TMD_KEY,
    api: 'https://api.themoviedb.org/3/movie/now_playing',
    language: 'en-US',
    page: 1
  };

  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    getNowPlaying();
  }, []);

  function getNowPlaying() {
    const url = `${searchOptions.api}?api_key=${searchOptions.key}&language=${searchOptions.language}&page=${searchOptions.page}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // the API response contains an array named 'results'
        setNowPlaying(res.results);
      })
      .catch(console.error);
  }

  return (
    <>
      <div className="App">
        <Header />
        <MoviesContainer nowPlaying={nowPlaying} />
        {/* TODO: Add Footer component */}
      </div>
    </>
  );
}

export default App;
