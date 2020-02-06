import React from 'react';
import MovieTitle from './MovieTitle';
import MovieTrailer from './MovieTrailer';
import MovieOverview from './MovieOverview';

function MovieContainer({ movie, videoID }) {
  const movieTitle = movie.original_title;
  const movieOverview = movie.overview;
  const releaseDate = movie.release_date;

  console.log('in MovieContainer, ', movie);
  console.log('in MovieContainer, ', videoID);

  return (
    <div className="MovieContainer">
      <MovieTitle movieTitle={movieTitle} releaseDate={releaseDate} />
      <MovieTrailer videoID={videoID} />
      <MovieOverview movieOverview={movieOverview} />
    </div>
  );
}

export default MovieContainer;
