import React from 'react';
import MovieContainer from './MovieContainer';

// Call the themoviedb API to get a list of movies currently in theaters.
// Populate these into individual Trailer objects.
// Also obtain the descriptions for each movie
// Populate those into individual Description objects.

function MoviesContainer(props) {
  const { setNowPlaying, nowPlaying } = props;
  console.log('MoviesContainer', nowPlaying);

  if (nowPlaying.length === 0) {
    return null;
  }
  return (
    <div className="MoviesContainer">
      {nowPlaying.map((item, idx) => (
        <MovieContainer key={idx} movie={item} />
      ))}
    </div>
  );
}

export default MoviesContainer;
