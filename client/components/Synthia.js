import React from 'react';
import * as Tone from 'tone';

export default class Synthia extends React.Component {
  constructor(props) {
    super(props);
    this.noteDown = this.noteDown.bind(this);
  }
  noteDown(elem, event) {
    //const synth = new Tone.PolySynth().toDestination()
    const note = elem.dataset.note;
    //is the issue that ele, isn't defined? what is elem?
    synth.triggerAttackRelease(note, '16n');
    event.stopPropagation();
  }
  testClick() {
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    // trigger the attack immediately
    synth.triggerAttack('C4', now);
    // wait one second before triggering the release
    synth.triggerRelease(now + 1);
  }
  render() {
    const synth = new Tone.PolySynth().toDestination();
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    return (
      <div>
        <button type='button' onClick={this.testClick}>
          TEST ME
        </button>
        {notes.forEach((note) => {
          let hasSharp = true;
          if (note === 'E' || note === 'B') hasSharp = false;
          if (hasSharp) {
            return (
              <div
                className='note'
                onClick={this.noteDown}
                data-note={note + '4'}
              >
                <div
                  className='sharp'
                  onClick={this.noteDown}
                  data-note={note + '#4'}
                ></div>
              </div>
            );
          } else {
            return (
              <div
                className='note'
                onClick={(event) => this.noteDown(event)}
                data-note={note + '4'}
              ></div>
            );
          }
        })}
      </div>
    );
  }
}
