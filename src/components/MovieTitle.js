import React from 'react';

function MovieTitle({ movieTitle, releaseDate }) {
  // const movieTitle = movie.original_title;
  // const releaseDate = movie.release_date;
  return (
    <>
      <div className="MovieTitle">{movieTitle}</div>
      <div className="Released">Released: {releaseDate}</div>
    </>
  );
}

export default MovieTitle;
