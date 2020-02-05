import React from 'react';
import YouTube from 'react-youtube';

class MovieTrailer extends React.Component {
  constructor(videoID) {
    super();
    this.videoID = '2g811Eo7K8U';
  }

  render() {
    const opts = {
      height: '113',
      width: '200',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <YouTube
        className="MovieTrailer"
        videoId={this.videoID}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default MovieTrailer;
