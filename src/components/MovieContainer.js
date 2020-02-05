import React from 'react';
import MovieTrailer from './MovieTrailer';
import MovieDescription from './MovieDescription';

function MovieContainer(props) {
  return (
    <>
      <div className="MovieContainer">
        MovieContainer
        <MovieTrailer />
        <MovieDescription />
      </div>
      ;
    </>
  );
}

export default MovieContainer;
