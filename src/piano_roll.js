const noteData = require("./note_data.js");


class PianoRoll {

  static width = 1000;
  static octaveHeight = 180;
  static notesPerOctave = 12;
  static noteRulerWidth = 60;
  static transportPadding = 15;
  static minNoteSize = 15;

  constructor(svgSelectors, tonic, steps, extent, d3) {
    this.d3 = d3;
    this.pianoRollSvg = this.d3.select(svgSelectors[0]);
    this.noteRulerSvg = this.d3.select(svgSelectors[1]);
    this._sequence = [];
    this._tonicIndex  = noteData.findIndex(n => n.note_full == tonic);
    this.extent = extent;

    this.steps = steps;
    this.activeNotes = noteData.slice((this._tonicIndex + this.extent[0]), (this._tonicIndex + this.extent[1] + 1)).reverse();
    this.keyHeight = PianoRoll.octaveHeight / PianoRoll.notesPerOctave;

    this.stepWidth = (PianoRoll.width - PianoRoll.noteRulerWidth) / this.steps;
    this.stepWidth = PianoRoll.minNoteSize > this.stepWidth ? PianoRoll.minNoteSize : this.stepWidth;
    this.pianoRollWidth = this.stepWidth * this.steps;

    // Note that the domain reverses the extent values because when the piano roll render()s the note range
    // is reversed so that the lowest notes display on the bottom.
    this.xScale = this.d3.scaleLinear().domain([0, steps]).range([0, this.pianoRollWidth]);
    this.yScale = this.d3.scaleLinear()
                         .domain([this.extent[1] + this._tonicIndex + 1, this.extent[0] + this._tonicIndex])
                         .range([0, this.keyHeight * this.activeNotes.length]);
  }

  get sequence() {
    return this._sequence;
  }

  set sequence(sequence) {
    this._sequence = sequence;
  }

  get tonicIndex() {
    return this._tonicIndex;
  }

  set tonicIndex(tonicIndex) {
    this._tonicIndex = tonicIndex;
  }

  setNotes(sequence, playNote) {
    this._sequence = sequence;

    this.keys.selectAll(".sequence-note")
          .data(this._sequence.reduce((nonRests, note, i) => {
              if (note != null) nonRests.push({step: i, note: note});
              return nonRests;
            }, []))
        .enter()
         .append("rect")
         .attr("class", "sequence-note")
         .attr("width", this.stepWidth)
         .attr("height", this.keyHeight)
         .attr("x", n => this.xScale(n.step))
         .attr("y", n => this.yScale(n.note) - this.keyHeight)
         .attr("fill", "#09c")
         .on("click", (event, n) => playNote(n.note));
  }

  render() {
    let stepWidth = (PianoRoll.width - PianoRoll.noteRulerWidth) / this.steps;
    stepWidth = PianoRoll.minNoteSize > stepWidth ? PianoRoll.minNoteSize : stepWidth;

    this.d3.selectAll("svg .piano-roll").remove();
    this.d3.selectAll("svg .note-ruler").remove();

    this.noteRulerSvg.attr("height", this.keyHeight * this.activeNotes.length + PianoRoll.transportPadding);
    this.noteRulerSvg.attr("width", PianoRoll.noteRulerWidth);
    this.pianoRollSvg.attr("height", this.keyHeight * this.activeNotes.length + PianoRoll.transportPadding);
    this.pianoRollSvg.attr("width", stepWidth * this.steps);

    this.noteRuler = this.noteRulerSvg.append("g")
                    .attr("transform", `translate(0, ${PianoRoll.transportPadding})`)
                    .attr("class", "note-ruler")
                    .attr("width", PianoRoll.noteRulerWidth)
                    .attr("height", this.keyHeight * this.activeNotes.length);

    this.noteRuler.selectAll(".note-label")
                    .data(this.activeNotes)
                  .enter()
                    .append("text")
                    .text(n => n.note)
                    .attr("fill", "black")
                    .attr("font-size", 12)
                    .attr("x", PianoRoll.noteRulerWidth / 2)
                    .attr("y", (n, i) => i * this.keyHeight + this.keyHeight - (this.keyHeight / 3));

    let cNotes = this.activeNotes.reduce((matches, note, i) => {
      if (note.note == "C") matches.push({octave: note.octave, index: i});
      return matches;
    }, []);

    this.noteRuler.selectAll(".octave-label")
                    .data(cNotes)
                  .enter()
                    .append("text")
                    .text(n => n.octave)
                    .attr("fill", "black")
                    .attr("font-size", 12)
                    .attr("x", 10)
                    .attr("y", (n) => n.index * this.keyHeight + this.keyHeight - (this.keyHeight / 3));

    this.noteRuler.selectAll(".octave-division")
                    .data(cNotes)
                  .enter()
                    .append("line")
                    .attr("class", "octave-division")
                    .attr("x1", 0)
                    .attr("y1", (n) => n.index * this.keyHeight + this.keyHeight)
                    .attr("x2", PianoRoll.noteRulerWidth)
                    .attr("y2", (n) => n.index * this.keyHeight + this.keyHeight)
                    .attr("stroke", "#333");

    this.pianoRoll = this.pianoRollSvg.append("g")
                    .attr("class", "piano-roll");

    this.transport = this.pianoRoll.append("g")
                    .attr("class", "transport")
                    .attr("width", this.pianoRollWidth)
                    .attr("height", PianoRoll.transportPadding);

    this.transport.selectAll(".step")
                    .data([...Array(this.steps).keys()])
                  .enter()
                    .append("rect")
                    .attr("class", step => `step step-${step}`)
                    .attr("width", stepWidth)
                    .attr("height", PianoRoll.transportPadding)
                    .attr("x", step => this.xScale(step))
                    .attr("y", 0)
                    .attr("fill", "#999")
                    .attr("stroke", "#bbb");

    this.keys = this.pianoRoll.append("g")
                    .attr("transform", `translate(0, ${PianoRoll.transportPadding})`)
                    .attr("class", "keys")
                    .attr("width", this.pianoRollWidth)
                    .attr("height", this.keyHeight * this.activeNotes.length)
                    .attr("stroke", "#aaa");

    this.keys.selectAll(".key")
    this.keys.selectAll(".key")
                   .data(this.activeNotes)
                 .enter()
                   .append("rect")
                   .attr("class", "key")
                   .attr("width", this.pianoRollWidth)
                   .attr("height", this.keyHeight)
                   .attr("x", 0)
                   .attr("y", (n, i) => i * this.keyHeight)
                   .attr("fill", n => n.note.charAt(n.note.length - 1) == "#" ? "#ccc" : "#fff");

    this.keys.selectAll(".step-division")
                  .data(new Array(this.steps).fill(0))
                .enter()
                  .append("line")
                  .attr("class", "step-division")
                  .attr("x1", (s, i) => this.xScale(i))
                  .attr("y1", 0)
                  .attr("x2", (s, i) => this.xScale(i))
                  .attr("y2", this.activeNotes.length * this.keyHeight)
                  .attr("stroke", (s, i) => i % 4 == 0 ? "#333" : "#aaa");
  }
}


const unique = (value, index, self) => self.indexOf(value) === index;


module.exports = PianoRoll;
