import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
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

  let getNowPlaying = () => {
    const url = `${searchOpts.tmdb_baseURL}?api_key=${searchOpts.tmdb_APIKey}&language=${searchOpts.language}&page=${searchOpts.page}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // The API response contains an array named 'results'
        // THE REAL CODE:
        // setNowPlaying(res.results);
        //
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
    <div className="App">
      <Header />
      <MoviesContainer movies={nowPlaying} />
      <Footer />
    </div>
  );
}

export default App;
