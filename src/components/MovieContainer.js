import React from 'react';
import MovieTrailer from './MovieTrailer';
import MovieDescription from './MovieDescription';

function MovieContainer({ movie }) {
  const movieTitle = movie.original_title;
  return (
    <div className="MovieContainer">
      {movieTitle}
      <MovieTrailer />
      <MovieDescription />
    </div>
  );
}

export default MovieContainer;
