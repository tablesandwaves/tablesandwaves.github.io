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


  shift(shiftPattern) {
    let transformedSequence = new Array();

    for (let i = 0; i < this._sequence.length; i++)
      if (this._sequence[i] == null)
        transformedSequence.push(null);
      else
        transformedSequence.push(this._sequence[i] + shiftPattern[i % shiftPattern.length]);

    return transformedSequence;
  }


  rhythm(rhythm, fillMode) {
    let transformedSequence  = new Array();
    let transformedSeqLength = this.calculateLength(rhythm);

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
    let rhythmHits = rhythm.filter(step => step != 0).length;

    if (rhythmHits == 0) {
      return 0;
    } else {
      let stepHits = Math.ceil(this._sequence.length / rhythmHits);
      return rhythm.length * stepHits;
    }
  }
}


module.exports = Weft;
