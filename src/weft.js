class Weft {

  constructor(sequence) {
    this._sequence = sequence;
  }


  get sequence() {
    return this._sequence;
  }

  set sequence(sequence) {
    this._sequence = sequence;
  }


  rhythm(rhythm, length, fillMode) {
    let transformedSequence  = new Array();
    let transformedSeqLength = length >= 1 ? length : this.calculateLength(rhythm);

    let processedStepIndex = 0;
    for (let i = 0; i < transformedSeqLength; i++) {
      let rhythmStep = rhythm[i % rhythm.length];
      if (rhythmStep == 0 || (processedStepIndex >= this._sequence.length && fillMode == "silence")) {
        transformedSequence.push(null);
      } else {
        transformedSequence.push(this._sequence[processedStepIndex % this._sequence.length]);
        processedStepIndex++;
      }
    }

    return transformedSequence;
  }


  calculateLength(rhythm) {
    let rhythmHits = 0;
    let seqLength  = this._sequence.length;
    for (let i = 0; i < rhythm.length; i++) {
      if (rhythm[i] != 0)
        rhythmHits += 1;
    }

    if (rhythmHits == 0) {
      return 0;
    } else {
      let stepHits = Math.ceil(this._sequence.length / rhythmHits);
      return rhythm.length * stepHits;
    }
  }
}


module.exports = Weft;
