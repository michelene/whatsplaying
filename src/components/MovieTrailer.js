import React, { useEffect } from 'react';
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
  var videoID = '';

  // getVideoID is wrapped in a React Effect
  // because it contains async (API) calls
  useEffect(() => {
    videoID = getVideoID(movieTitle);
    console.log('in MovieTrailer, videoID', videoID);
  }, []);

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  // Making the fetch await, and putting inside an async function, ensures
  // that when I populate the videoIDs array, the data is there.
  // let awaitfetch = async url => {
  //   await fetch(url)
  //     .then(res => res.json())
  //     .then(res => {j
  //       let topVidID = res.items[0].id.videoId;
  //       console.log('the correct topVidID is ', topVidID);
  //       return topVidID;
  //     })
  //     .catch(console.error);
  // };

  let getVideoID = movieTitle => {
    let searchStr = `${movieTitle} official trailer`;
    // NOTE: encodeURIComponent() will incorrectly encode foreign language titles, so just encode spaces
    // Might need to strip out special characters e.g. '(', ')', etc.
    const regexp = / /g;
    let encStr = searchStr.replace(regexp, '%20');
    let url = `${searchOpts.yt_baseURL}?key=${searchOpts.yt_APIKey}&part=snippet&q=${encStr}`;
    console.log('in Trailer, url is ', url);
    // awaitfetch(url);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        // let topVidID = res.items[0].id.videoId;
        // return topVidID;
        // console.log('the correct topVidID is ', topVidID);
        let videoID = res.items[0].id.videoId;
        console.log('the correct videoID is ', videoID);
        return videoID;
      })
      .catch(console.error);
    return videoID;
  };

  // TODO: Display just the thumbnails, then when the thumbnail is clicked, load the video.
  // Video loading seems slow.
  return (
    <>
      {/* {videoID && ( */}
      <YouTube
        className="MovieTrailer"
        videoId={videoID}
        opts={opts}
        onReady={_onReady}
      />
      {/* )} */}
    </>
  );
}

export default MovieTrailer;
