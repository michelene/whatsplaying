import React from 'react';
import MovieTitle from './MovieTitle';
import MovieTrailer from './MovieTrailer';
import MovieOverview from './MovieOverview';

function MovieContainer({ movie }) {
  const movieTitle = movie.original_title;
  const movieOverview = movie.overview;
  const releaseDate = movie.release_date;

  return (
    <div className="MovieContainer">
      <MovieTitle movieTitle={movieTitle} releaseDate={releaseDate} />
      <MovieTrailer movieTitle={movieTitle} />
      <MovieOverview movieOverview={movieOverview} />
    </div>
  );
}

export default MovieContainer;
