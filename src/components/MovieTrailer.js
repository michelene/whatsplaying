import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

function MovieTrailer({ movieTitle }) {
  const searchOpts = {
    yt_APIKey: process.env.REACT_APP_YT_API,
    yt_baseURL: 'https://www.googleapis.com/youtube/v3/search'
  };

  const opts = {
    height: '113',
    width: '200',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  const [videoID, setVideoID] = useState('');

  useEffect(() => {
    getVideoID(movieTitle);
  }, []);

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  let getVideoID = movieTitle => {
    let searchStr = `${movieTitle} official trailer`;
    // NOTE: encodeURIComponent() will incorrectly encode foreign language titles, so just encode spaces
    // Might need to strip out special characters e.g. '(', ')', etc.
    // Although, looks like the search which included parens returned the correct trailer...so maybe not
    const regexp = / /g;
    let encStr = searchStr.replace(regexp, '%20');
    let url = `${searchOpts.yt_baseURL}?key=${searchOpts.yt_APIKey}&part=snippet&q=${encStr}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        let topVidID = res.items[0].id.videoId;
        setVideoID(topVidID);
      })
      .catch(console.error);
  };

  // TODO: Video loading seems slow; the API takes a while to return.
  // Can it be optimized?
  return (
    <>
      {{ videoID } && (
        <YouTube
          className="MovieTrailer"
          videoId={videoID}
          opts={opts}
          onReady={_onReady}
        />
      )}
    </>
  );
}

export default MovieTrailer;
