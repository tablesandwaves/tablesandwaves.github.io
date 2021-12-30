const d3 = require("d3");
const noteData = require("./note_data.js");


class PianoRoll {

  static width = 1080;
  static octaveHeight = 180;
  static notesPerOctave = 12;
  static pianoRollPadding = 80;

  constructor(svgSelector) {
    this.roll = d3.select(svgSelector).append("g")
                  .attr("width", PianoRoll.width)
                  .attr("height", PianoRoll.octaveHeight).attr("stroke", "#aaa");
    this._sequence = [];
    this.keyHeight = PianoRoll.octaveHeight / PianoRoll.notesPerOctave;
  }

  get sequence() {
    return this._sequence;
  }

  set sequence(sequence) {
    this._sequence = sequence;
  }

  setNotes(sequence) {
    this._sequence = sequence;
    console.log("this._sequence", this._sequence)

    let xScale = d3.scaleLinear().domain([0, 16]).range([PianoRoll.pianoRollPadding, PianoRoll.width]),
        yScale = d3.scaleLinear().domain([12, -12]).range([0, 360]);

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
         .attr("fill", "red");
  }

  render() {

    let steps = 16,
        rootNote = 36;
    let stepWidth = (PianoRoll.width - PianoRoll.pianoRollPadding) / steps;

    let activeNotes = noteData.filter(n => {
      return n.midi >= rootNote && n.midi < (rootNote + 2 * PianoRoll.notesPerOctave);
    }).reverse();
    let octaves = activeNotes.map(n => n.octave).filter(unique);

    let keys = this.roll.selectAll(".key")
                   .data(activeNotes)
                 .enter()
                   .append("rect")
                   .attr("class", "key")
                   .attr("width", PianoRoll.width - PianoRoll.pianoRollPadding)
                   .attr("height", this.keyHeight)
                   .attr("x", PianoRoll.pianoRollPadding)
                   .attr("y", (n, i) => i * this.keyHeight)
                   .attr("fill", n => n.note.charAt(n.note.length - 1) == "#" ? "#bbb" : "#fff");

    this.roll.selectAll(".note-label")
        .data(activeNotes)
      .enter()
        .append("text")
        .text(n => n.note)
        .attr("fill", "black")
        .attr("font-size", 12)
        .attr("x", PianoRoll.pianoRollPadding / 2)
        .attr("y", (n, i) => i * this.keyHeight + this.keyHeight - (this.keyHeight / 3));

    this.roll.selectAll(".octave-label")
        .data(octaves)
      .enter()
        .append("text")
        .text(o => o)
        .attr("fill", "black")
        .attr("font-size", 12)
        .attr("x", 20)
        .attr("y", (n, i) => i * PianoRoll.octaveHeight + PianoRoll.octaveHeight - (this.keyHeight / 3));

    this.roll.selectAll(".key-division")
        .data(activeNotes)
      .enter()
        .append("line")
        .attr("class", "key-division")
        .attr("x1", n => n.note == "C" ? 0 : PianoRoll.pianoRollPadding)
        .attr("y1", (n, i) => i * this.keyHeight + this.keyHeight)
        .attr("x2", PianoRoll.width)
        .attr("y2", (n, i) => i * this.keyHeight + this.keyHeight)
        .attr("stroke", n => n.note == "C" ? "#333" : "#ddd");

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
