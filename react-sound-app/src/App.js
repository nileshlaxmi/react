import React, { Component } from 'react';
import Sound from 'react-sound';
import windChime from '../src/assets/windChime.mp3';

export default class App extends Component {
  render() {
    return (
      <Sound
        url={windChime}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}