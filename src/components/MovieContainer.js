import React from 'react';
import MovieTitle from './MovieTitle';
import MovieTrailer from './MovieTrailer';
import MovieOverview from './MovieOverview';

function MovieContainer({ movie, searchOpts }) {
  const movieTitle = movie.original_title;
  const movieOverview = movie.overview;
  const releaseDate = movie.release_date;
  const videoID = '2g811Eo7K8U';

  console.log(movieTitle);

  return (
    <div className="MovieContainer">
      <MovieTitle movieTitle={movieTitle} releaseDate={releaseDate} />
      <MovieTrailer videoID={videoID} />
      <MovieOverview movieOverview={movieOverview} />
    </div>
  );
}

export default MovieContainer;
