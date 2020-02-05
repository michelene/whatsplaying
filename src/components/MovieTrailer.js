import React from 'react';
import YouTube from 'react-youtube';

function MovieTrailer({ videoID }) {
  const opts = {
    height: '113',
    width: '200',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0
    }
  };

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  // TODO: Display just the thumbnails, then when the thumbnail is clicked, load the video.
  // Video loading seems slow.
  return (
    <YouTube
      className="MovieTrailer"
      videoId={videoID}
      opts={opts}
      onReady={_onReady}
    />
  );
}

export default MovieTrailer;
