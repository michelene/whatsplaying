import React from 'react';
import MovieContainer from './MovieContainer';

function MoviesContainer({ movies }) {
  return (
    <div className="MoviesContainer">
      {movies.map((item, idx) => (
        <MovieContainer key={idx} movie={item} />
      ))}
    </div>
  );
}

export default MoviesContainer;
