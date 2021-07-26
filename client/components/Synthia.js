import React from 'react';
import * as Tone from 'tone';

export default class Synthia extends React.Component {
  constructor(props) {
    super(props);
    this.testClick = this.testClick.bind(this);
    this.playerClick = this.playerClick.bind(this);
  }
  testClick() {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttack('C4', now);
    synth.triggerRelease(now + 1);
  }
  playerClick() {
    const player = new Tone.GrainPlayer(
      'https://www.youtube.com/watch?v=vHQL71zQxiU'
    ).toDestination();
    player.autostart = true;
  }
  render() {
    return (
      <div>
        <button type='button' onClick={this.testClick}>
          TEST ME
        </button>
        <button type='button' onClick={this.playerClick}>
          PLAYER
        </button>
        <iframe
          src='https://www.youtube.com/embed/vHQL71zQxiU'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}
