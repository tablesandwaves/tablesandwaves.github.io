const Tone = require("tone");


class Snare {

  constructor() {
    this.tom   = new Tone.MembraneSynth();
    this.snare = new Tone.NoiseSynth({
      noise:    { type: "brown" },
      envelope: { attack: 0.005, decay: 0.1, sustain: 0.02 }
    });

    let feedbackDelay = new Tone.FeedbackDelay({ delayTime: "32n", feedback : 0.25 });
    let gate          = new Tone.Gate(-33)
    let compressor    = new Tone.MidSideCompressor();
    let gain          = new Tone.Gain();

    this.snare.chain(gate, compressor, gain);
    this.tom.chain(gate, compressor, gain);
    gain.chain(Tone.Destination);
  }

  hit(time) {
    this.snare.triggerAttackRelease("16n", time);
    this.tom.triggerAttackRelease("C2","16n", time);
  }
}


module.exports = Snare;
