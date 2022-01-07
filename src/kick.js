const Tone = require("tone");


class Kick {

  constructor() {
    this.kick = new Tone.MembraneSynth();

    let gate          = new Tone.Gate(-50)
    let compressor    = new Tone.MidSideCompressor();
    let gain          = new Tone.Gain();

    this.kick.chain(gate, compressor, gain);
    gain.chain(Tone.Destination);
  }

  hit(time) {
    this.kick.triggerAttackRelease("C1","16n", time);
  }
}


module.exports = Kick;
