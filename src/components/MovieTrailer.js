import React from 'react';
import YouTube from 'react-youtube';

// function MovieTrailer({ movie }) {
//   return <div className="MovieTrailer">MovieTrailer</div>;
// }

class MovieTrailer extends React.Component {
  constructor(videoID) {
    super();
    this.videoID = videoID;
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
        // videoId={this.videoID}
        videoId="2g811Eo7K8U"
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
