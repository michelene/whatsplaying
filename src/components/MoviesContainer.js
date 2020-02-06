import React, { useState, useEffect } from 'react';
import MovieContainer from './MovieContainer';

// We call useEffect in this component to wrap our YouTube API call

function MoviesContainer(props) {
  const { setNowPlaying, nowPlaying, searchOpts } = props;

  // const [videoIDs, setVideoIDs] = useState([]);

  let videoIDs = [];

  // Making the fetch await, and putting inside an async function, ensures
  // that when I populate the videoIDs array, the data is there.
  let awaitfetch = async url => {
    await fetch(url)
      .then(res => res.json())
      .then(res => {
        let topVidID = res.items[0].id.videoId;
        console.log('the correct topVidID is ', topVidID);
        videoIDs.push(topVidID);
      })
      .catch(console.error);
  };

  // Overwrite the 'id' field of each element in nowPlaying
  // with the YT videoId retrieved from YT query
  let getVideoIDs = movies => {
    movies.forEach((movie, index) => {
      let searchStr = `${movie.original_title} official trailer`;
      // NOTE: encodeURIComponent() will incorrectly encode foreign language titles, so just encode spaces
      const regexp = / /g;
      let encStr = searchStr.replace(regexp, '%20');
      let url = `${searchOpts.yt_baseURL}?key=${searchOpts.yt_APIKey}&part=snippet&q=${encStr}`;
      awaitfetch(url);
      movie.id = videoIDs[index];
    });
  };

  // getVideoIDs is wrapped in a React Effect
  // because it contains async (API) calls
  useEffect(() => {
    getVideoIDs(nowPlaying);
    console.log('in MoviesContainer, videoIDs', videoIDs);
  });

  return (
    <div className="MoviesContainer">
      {true &&
        nowPlaying.map((item, idx) => (
          <MovieContainer key={idx} movie={item} videoId={videoIDs[idx]} />
        ))}
    </div>
  );
}

export default MoviesContainer;
