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

  // Since this variable is just to make it easier to construct and read the code, it's fine to move it outside the useEffect.
  const url = `${searchOpts.tmdb_baseURL}?api_key=${searchOpts.tmdb_APIKey}&language=${searchOpts.language}&page=${searchOpts.page}`;

  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    // To get rid of the linter error for exhaustive depths,
    // you can move the getNowPlaying function inside the
    // useEffect function.  Since it'll be invoked by the
    // callback, you could make it an IIFE (not needed just
    // showing you a way to make it cleaner). Also, I wanted
    // to show you the pattern for using async/await with fetch
    // since you previously had incorporated it when you were
    // working with Peter. Using try/catch is how to handle errors
    // when using async/await.
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setNowPlaying(data.results);
      } catch (error) {
        // We should be doing something to tell the user to try again.
        // A console error should only be used during debugging.
        console.error(error);
      }
    })(url);
    // Now the url variable is the only one used in useEffect
    // so we can just pass this to the dependency array.
    // No more linter error and the useEffect will only run again
    // if the url variable changes.
  }, [url]);

  return (
    <div className="App">
      <Header />
      <MoviesContainer movies={nowPlaying} />
      <Footer />
    </div>
  );
}

export default App;
