import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import TrailerContainer from './TrailerContainer';

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
        console.log('getNowPlaying res.results', res.results);
      })
      .catch(console.error);
  }

  return (
    <div className="App">
      <Header />
      <TrailerContainer nowPlaying={nowPlaying} />
    </div>
  );
}

export default App;
