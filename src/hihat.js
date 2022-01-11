class HiHat {

  constructor(Tone) {
    this.noise = new Tone.NoiseSynth({
      noise:    { type: "pink" },
      envelope: { attack: 0.002, decay: 0.05, sustain: 0.03 }
    });

    let feedbackDelay = new Tone.FeedbackDelay({ delayTime: "32n", feedback : 0.15 });
    let gate          = new Tone.Gate(-25)
    let compressor    = new Tone.MidSideCompressor();
    let gain          = new Tone.Gain(0.3);

    this.noise.chain(gate, compressor, gain);
    gain.chain(Tone.Destination);
  }

  hit(time) {
    this.noise.triggerAttackRelease("32n", time);
  }
}


module.exports = HiHat;
