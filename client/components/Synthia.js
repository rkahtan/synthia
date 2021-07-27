import React from 'react';
import * as Tone from 'tone';

export default class Synthia extends React.Component {
  constructor(props) {
    super(props);
    this.callClick = this.callClick.bind(this);
    this.beepClick = this.beepClick.bind(this);
    this.anotherClick = this.anotherClick.bind(this)
  }
  callClick() {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttack('C4', now);
    synth.triggerRelease(now + 1);
  }
  beepClick() {
    const dist = new Tone.Distortion(0.8).toDestination();
    const fm = new Tone.FMSynth().connect(dist);
    fm.triggerAttackRelease("A1", "8n");
    fm.triggerAttackRelease('C1', '4n')
    
  }
  anotherClick() {
    const oscillator = new Tone.Oscillator().toDestination().start();
    const freqEnv = new Tone.FrequencyEnvelope({
	    attack: 0.2,
	    baseFrequency: "C2",
	    octaves: 2
    });
    freqEnv.connect(oscillator.frequency);
    freqEnv.triggerAttack();
    const now = Tone.now();
    freqEnv.triggerRelease(now+3);

   
  }
  render() {
    return (
      <div>
        <div id='buttons'>
          <button type='button' onClick={this.callClick}>
            CALL ME
          </button>
          <button type='button' onClick={this.beepClick}>
            BEEP ME
          </button>
          <button type='button' onClick={this.anotherClick}>
            ANOTHER ONE
          </button>
        </div>
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
