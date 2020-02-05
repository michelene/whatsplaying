import React from 'react';
import Trailer from './Trailer';
import Description from './Description';

// Call the themoviedb API to get a list of movies currently in theaters.
// Populate these into individual Trailer objects.
// Also obtain the descriptions for each movie
// Populate those into individual Description objects.

function TrailerContainer(props) {
  const { nowPlaying } = props;

  if (nowPlaying.length === 0) {
    return null;
  }
  return (
    <div className="TrailerContainer">
      TrailerContainer
      <div className="Trailer">
        <Trailer />
      </div>
      <div className="Description">
        <Description />
      </div>
    </div>
  );
}

export default TrailerContainer;
