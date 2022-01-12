const noteData = require("./note_data");
const Weft     = require("./weft");


class InfinitySeries {

  constructor(size, seed, tonic, rhythm) {
    this.size   = size   == undefined ?   16 : size;
    this.seed   = seed   == undefined ?    1 : seed;
    this.tonic  = tonic  == undefined ? "C4" : tonic;
    this.rhythm = rhythm == undefined ?   [] : rhythm;

    this.sequence     = [];
    this.midiSequence = [];
    this.noteSequence = [];
    this.#generateInfinitySeries();
    this.#generateMidiSequence();
    this.#generateNoteSequence();
  }


  #generateInfinitySeries() {
    this.sequence      = [0, this.seed];
    let germinalInterval, germinalIntDistance, germinalIndex = 0;

    while (this.sequence.length < this.size) {
      germinalInterval    = this.sequence.slice(germinalIndex, germinalIndex + 2);
      germinalIntDistance = germinalInterval[1] - germinalInterval[0];
      this.sequence = this.sequence.concat([
        (this.sequence[this.sequence.length - 2] + (-1 * germinalIntDistance)),
        (this.sequence[this.sequence.length - 1] + germinalIntDistance)
      ]);
      germinalIndex += 1;
    }
  }


  #generateMidiSequence() {
    let tonicIndex    = noteData.findIndex(n => n.note_full == this.tonic);
    this.midiSequence = this.sequence.map(n => n + tonicIndex);
    if (this.rhythm.length > 0) this.midiSequence = new Weft(this.midiSequence).rhythm(this.rhythm, "wrap");
  }


  #generateNoteSequence() {
    this.noteSequence = this.midiSequence.map(midiNum => midiNum == null ? "REST" : noteData[midiNum].note_full);
  }
}


module.exports = InfinitySeries;
