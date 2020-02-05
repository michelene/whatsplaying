import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import MoviesContainer from './MoviesContainer';

function App() {
  const searchOpts = {
    tmdb_APIKey: process.env.REACT_APP_TMD_API,
    tmdb_baseURL: 'https://api.themoviedb.org/3/movie/now_playing',
    yt_APIKey: process.env.REACT_APP_YT_API,
    yt_baseURL: 'https://www.googleapis.com/youtube/v3/search',
    language: 'en-US',
    page: 1
  };

  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    getNowPlaying();
  }, []);

  function getNowPlaying() {
    const url = `${searchOpts.tmdb_baseURL}?api_key=${searchOpts.tmdb_APIKey}&language=${searchOpts.language}&page=${searchOpts.page}`;
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
        <MoviesContainer
          nowPlaying={nowPlaying}
          setNowPlaying={setNowPlaying}
          searchOpts={searchOpts}
        />
        {/* TODO: Add Footer component */}
      </div>
    </>
  );
}

export default App;
