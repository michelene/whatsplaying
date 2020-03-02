import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
// import { waitForDomChange } from '@testing-library/react';

function MovieTrailer({ movieTitle, bgImg }) {
  const searchOpts = {
    yt_APIKey: process.env.REACT_APP_YT_API,
    yt_baseURL: 'https://www.googleapis.com/youtube/v3/search'
  };

  // Technically, according to the terms of the YT iFrame embeds,
  // "Embedded players must have a viewport that is at least 200px by 200px."
  // https://developers.google.com/youtube/iframe_api_reference#Requirements
  // This is an accessibility issue also, so let's use the default sizes here
  // and make the player responsive.  With some tweaks to your CSS, you can make
  // sure that the cards are never too small or too big, more on that in the CSS
  // file comments.
  const opts = {
    // height: '113',
    // width: '200',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  const [videoID, setVideoID] = useState('');

  // useEffect(() => {
  //   getVideoID(movieTitle);
  // }, []);

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const getVideoID = movieTitle => {
    const searchStr = `${movieTitle} official trailer`;
    // NOTE: encodeURIComponent() will incorrectly encode foreign language titles, so just encode spaces
    // Might need to strip out special characters e.g. '(', ')', etc.
    // Although, looks like the search which included parens returned the correct trailer...so maybe not
    const regexp = / /g;
    const encStr = searchStr.replace(regexp, '%20');
    const url = `${searchOpts.yt_baseURL}?key=${searchOpts.yt_APIKey}&part=snippet&q=${encStr}`;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const topVidID = res.items[0].id.videoId;
        setVideoID(topVidID);
      })
      .catch(console.error);
  };

  // TODO: Video loading seems slow; the API takes a while to return.
  // Can it be optimized?
  // YES! Don't load it until the user wants to watch a video.
  // Here's the thing, it may look cool that there are a bunch of videos
  // when the page finally loads, but:
  // 1. It causes the user to have to wait for all of the YT API calls
  //    before displaying the results for them.
  // 2. It uses the user's valuable bandwidth for the resources related
  //    to each video that YT sends (and the user may not watch it).
  // 3. You're also using the YT API alot and run the risk of being
  //    shutdown due to exceeding your daily/monthly/user thresholds.
  // So, load and image instead and then swap in video when a user
  // clicks it
  return (
    <>
      {!videoID && (
        <img
          src={'https://image.tmdb.org/t/p/w500' + bgImg}
          alt={movieTitle}
          style={{ width: '100%' }}
          onClick={() => getVideoID(movieTitle)}
        />
      )}
      {videoID && (
        // Added the containerClassName prop.  See details in App.css
        <YouTube
          containerClassName="responsive-video"
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
