import React from 'react';
import MovieTrailer from './MovieTrailer';
import MovieOverview from './MovieOverview';

function MovieContainer({ movie }) {
  const movieTitle = movie.original_title;
  const movieOverview = movie.overview;
  return (
    <div className="MovieContainer">
      <h2>{movieTitle}</h2>
      <MovieTrailer />
      <MovieOverview movieOverview={movieOverview} />
    </div>
  );
}

export default MovieContainer;
