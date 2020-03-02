import React from 'react';
import MovieTitle from './MovieTitle';
import MovieTrailer from './MovieTrailer';
import MovieOverview from './MovieOverview';

function MovieContainer({ movie }) {
  // It's best to remap the names when you pass the values
  // as props.  It helps to make the code easier to reason about
  // because we don't have to keep extra stuff in our brains
  // (like where did this come from?).  Also, in this case, the movie
  // is simply coming from props, so it will always rerender
  // but if this was a state value it would 'break the data flow',
  // so it's good to not do this arbitrarily.
  // Learn more about the concept of not stopping the data flow here:
  // https://overreacted.io/writing-resilient-components/#principle-1-dont-stop-the-data-flow
  // const movieTitle = movie.original_title;
  // const movieOverview = movie.overview;
  // const releaseDate = movie.release_date;

  return (
    <div className="MovieContainer">
      <MovieTrailer
        movieTitle={movie.original_title}
        bgImg={movie.backdrop_path}
      />
      <MovieTitle
        movieTitle={movie.original_title}
        releaseDate={movie.release_date}
      />
      <MovieOverview movieOverview={movie.overview} />
    </div>
  );
}

export default MovieContainer;
