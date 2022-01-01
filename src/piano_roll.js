const d3 = require("d3");
const noteData = require("./note_data.js");


class PianoRoll {

  static width = 1080;
  static octaveHeight = 180;
  static notesPerOctave = 12;
  static pianoRollPadding = 80;

  constructor(svgSelector) {
    this.svg = d3.select(svgSelector);
    this._sequence = [];
    this.activeNotes = [];
    this.extent = [-12, 12];
    this.keyHeight = PianoRoll.octaveHeight / PianoRoll.notesPerOctave;
  }

  get sequence() {
    return this._sequence;
  }

  set sequence(sequence) {
    this._sequence = sequence;
  }

  setNotes(sequence, playNote) {
    this._sequence = sequence;

    let xScale = d3.scaleLinear().domain([0, 16]).range([PianoRoll.pianoRollPadding, PianoRoll.width]),
        yScale = d3.scaleLinear().domain([this.extent[1] + 1, this.extent[0]]).range([0, this.keyHeight * this.activeNotes.length]);

    let noteWidth = (PianoRoll.width - PianoRoll.pianoRollPadding) / this._sequence.length;
    let activeNotes = this.roll.selectAll(".sequence-note")
         .data(this._sequence)
        .enter()
         .append("rect")
         .attr("class", "sequence-note")
         .attr("width", noteWidth)
         .attr("height", this.keyHeight)
         .attr("x", (n, i) => xScale(i))
         .attr("y", n => yScale(n) - this.keyHeight)
         .attr("fill", "red")
         .on("click", (event, n) => playNote(n));
  }

  render(tonic, extent) {

    let steps     = 16;
    let stepWidth = (PianoRoll.width - PianoRoll.pianoRollPadding) / steps;

    let tonicIndex   = noteData.findIndex(n => n.note_full == tonic);
    this.extent      = extent;
    this.activeNotes = noteData.slice((tonicIndex + this.extent[0]), (tonicIndex + this.extent[1] + 1)).reverse();
    let octaves      = this.activeNotes.map(n => n.octave).filter(unique);

    d3.selectAll(".keys").remove();
    this.svg.attr("height", this.keyHeight * this.activeNotes.length);

    this.roll = this.svg.append("g")
                    .attr("class", "keys")
                    .attr("width", PianoRoll.width)
                    .attr("height", this.keyHeight * this.activeNotes.length).attr("stroke", "#aaa");

    let keys = this.roll.selectAll(".key")
                   .data(this.activeNotes)
                 .enter()
                   .append("rect")
                   .attr("class", "key")
                   .attr("width", PianoRoll.width - PianoRoll.pianoRollPadding)
                   .attr("height", this.keyHeight)
                   .attr("x", PianoRoll.pianoRollPadding)
                   .attr("y", (n, i) => i * this.keyHeight)
                   .attr("fill", n => n.note.charAt(n.note.length - 1) == "#" ? "#ccc" : "#fff");

    this.roll.selectAll(".note-label")
        .data(this.activeNotes)
      .enter()
        .append("text")
        .text(n => n.note)
        .attr("fill", "black")
        .attr("font-size", 12)
        .attr("x", PianoRoll.pianoRollPadding / 2)
        .attr("y", (n, i) => i * this.keyHeight + this.keyHeight - (this.keyHeight / 3));

    let cNotes = this.activeNotes.reduce((matches, note, i, arr) => {
      if (note.note == "C") matches.push({octave: note.octave, index: i});
      return matches;
    }, []);

    this.roll.selectAll(".octave-label")
        .data(cNotes)
      .enter()
        .append("text")
        .text(n => n.octave)
        .attr("fill", "black")
        .attr("font-size", 12)
        .attr("x", 20)
        .attr("y", (n) => n.index * this.keyHeight + this.keyHeight - (this.keyHeight / 3));

    this.roll.selectAll(".key-division")
        .data(cNotes)
      .enter()
        .append("line")
        .attr("class", "key-division")
        .attr("x1", 0)
        .attr("y1", (n) => n.index * this.keyHeight + this.keyHeight)
        .attr("x2", PianoRoll.width)
        .attr("y2", (n) => n.index * this.keyHeight + this.keyHeight)
        .attr("stroke", "#333");

    this.roll.selectAll(".step-division")
        .data(new Array(16).fill(0))
      .enter()
        .append("line")
        .attr("class", "step-division")
        .attr("x1", (s, i) => i * stepWidth + PianoRoll.pianoRollPadding)
        .attr("y1", 0)
        .attr("x2", (s, i) => i * stepWidth + PianoRoll.pianoRollPadding)
        .attr("y2", PianoRoll.octaveHeight * octaves.length)
        .attr("stroke", (s, i) => i % 4 == 0 ? "#333" : "#aaa");
  }
}


const unique = (value, index, self) => self.indexOf(value) === index;


module.exports = PianoRoll;
