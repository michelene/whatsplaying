import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import MoviesContainer from './MoviesContainer';

function App() {
  // Putting searchOptVals into global state so that I can access it from a
  // subcomponent 2 levels down:
  const searchOptVals = {
    tmdb_APIKey: process.env.REACT_APP_TMD_API,
    tmdb_baseURL: 'https://api.themoviedb.org/3/movie/now_playing',
    yt_APIKey: process.env.REACT_APP_YT_API,
    yt_baseURL: 'https://www.googleapis.com/youtube/v3/search',
    language: 'en-US',
    page: 1
  };

  const [nowPlaying, setNowPlaying] = useState([]);
  const [searchOpts, setSearchOpts] = useState(searchOptVals);

  let getNowPlaying = () => {
    const url = `${searchOpts.tmdb_baseURL}?api_key=${searchOpts.tmdb_APIKey}&language=${searchOpts.language}&page=${searchOpts.page}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // the API response contains an array named 'results'
        // THE REAL CODE:
        // setNowPlaying(res.results);
        // THE TESTING ONLY CODE: Return an array of just 2 element
        // let myArr = res.results.slice(0, 2);
        let myArr = res.results.slice(0, 2);
        setNowPlaying(myArr);
      })
      .catch(console.error);
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

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
