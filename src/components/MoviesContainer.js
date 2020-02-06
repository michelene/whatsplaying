import React from 'react';
import MovieContainer from './MovieContainer';

// Call the themoviedb API to get a list of movies currently in theaters.
// Populate these into individual Trailer objects.
// Also obtain the descriptions for each movie
// Populate those into individual Description objects.

function MoviesContainer(props) {
  const { setNowPlaying, nowPlaying, searchOpts } = props;

  if (nowPlaying.length === 0) {
    return null;
  }

  // Append to each entry of nowPlaying
  // a videoId, retrieved from YT query
  let getVideoID = movie => {
    let searchStr = `${movie.original_title} official trailer`;
    // NOTE: encodeURIComponent() will incorrectly encode foreign language titles
    const regexp = / /g;
    let encStr = searchStr.replace(regexp, '%20');
    let url = `${searchOpts.yt_baseURL}?key=${searchOpts.yt_APIKey}&part=snippet&q=${encStr}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        let topVidID = res.items[0].id.videoId;
        return topVidID;
        // return '2g811Eo7K8U';
      })
      .catch(console.error);
  };
  // getVideoID('bad boys for life');
  // nowPlaying[0].videoID = 'jKCj3XuPG8M';

  let newArr = [];
  let videoIDs = nowPlaying.map(movie => {
    let newID = getVideoID(movie);
    console.log(newID);
  });

  return (
    <div className="MoviesContainer">
      {nowPlaying.map((item, idx) => (
        <MovieContainer key={idx} movie={item} videoID={'jKCj3XuPG8M'} />
      ))}
    </div>
  );
}

export default MoviesContainer;
