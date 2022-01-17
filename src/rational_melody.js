const noteData = require("./note_data");
const Weft     = require("./weft")


class RationalMelody {

  static xvStepLength = 15;

  constructor(noteList, rhythm) {
    this.noteList = noteList;
    this.rhythm   = rhythm == undefined ? [] : rhythm;

    this.sequence     = [];
    this.midiSequence = [];
    this.noteSequence = [];
  }


  generate(melodyNumber) {
    if (melodyNumber == "xv") {
      this.#xv();
    }
  }


  #xv() {

    this.sequence    = new Array(RationalMelody.xvStepLength).fill(-1);
    this.sequence[0] = this.noteList[0];
    this.sequence[1] = this.noteList[1];

    let contiguousSequence, currentNote, stepAmount, nextNote;
    let nextEmpty = this.sequence.findIndex(note => note == -1),
        count = 2;

    // Build a self replicating melody by powers of 2 until all notes are filled.
    do {
      contiguousSequence = this.sequence.slice(0, nextEmpty);

      for (let noteIndex = 0; noteIndex < contiguousSequence.length; noteIndex++) {
        // For each note in the contiguous sequence...
        currentNote = contiguousSequence[noteIndex];

        // Determine the self replicating step amounts by computing the powers of 2 for
        // non-redundant step amounts based on the target length
        for (let power = 1; power <= Math.log2(RationalMelody.xvStepLength); power++) {
          stepAmount = 2**power;

          // Fill in the melody's future step indices with the current replicating note.
          this.sequence[(noteIndex * stepAmount) % RationalMelody.xvStepLength] = currentNote;
        }
      }

      // If the sequence still has empty spots, find the first one and fill it with the next
      // note in the input note list.
      nextNote  = this.noteList[count % this.noteList.length];
      nextEmpty = this.sequence.findIndex(note => note == -1);
      if (nextEmpty != -1) this.sequence[nextEmpty] = nextNote;
      count++;
    } while (nextEmpty != -1);

    // For this algorithm, the sequence is already based on MIDI note numbers.
    this.midiSequence = this.rhythm.length == 0 ? this.sequence : new Weft(this.sequence).rhythm(this.rhythm, "wrap");
    this.noteSequence = this.midiSequence.map(midiNum => midiNum == null ? "REST" : noteData[midiNum].note_full);
  }
}


module.exports = RationalMelody;
