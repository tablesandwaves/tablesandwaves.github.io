const noteData = require("./note_data.js");


class PianoRoll {

  static width = 940;
  static keyHeight = 15;
  static noteRulerWidth = 60;
  static transportPadding = 15;
  static minNoteSize = 15;

  constructor(svgSelectors, midiSequence, d3) {
    this.d3 = d3;
    this.pianoRollSvg = this.d3.select(svgSelectors[0]);
    this.noteRulerSvg = this.d3.select(svgSelectors[1]);
    this.midiSequence = midiSequence;

    const sortedMidiNotes = this.midiSequence.slice(0).sort().filter(n => n !== null);
    this.extent           = [sortedMidiNotes[0], sortedMidiNotes[sortedMidiNotes.length - 1]];
    this.activeNotes      = [...Array(this.extent[1] + 1 - this.extent[0]).keys()]
                               .map(midiNote => noteData[midiNote + this.extent[0]])
                               .reverse();

    this.stepWidth = PianoRoll.width / this.midiSequence.length;
    this.stepWidth = PianoRoll.minNoteSize > this.stepWidth ? PianoRoll.minNoteSize : this.stepWidth;
    this.pianoRollWidth = this.stepWidth * this.midiSequence.length;

    // Note that the domain reverses the extent values because when the piano roll render()s the note range
    // is reversed so that the lowest notes display on the bottom.
    this.xScale = this.d3.scaleLinear().domain([0, this.midiSequence.length]).range([0, this.pianoRollWidth]);
    this.yScale = this.d3.scaleLinear()
                         .domain([this.extent[1] + 1, this.extent[0]])
                         .range([0, PianoRoll.keyHeight * this.activeNotes.length]);
  }

  get sequence() {
    return this._sequence;
  }

  set sequence(sequence) {
    this._sequence = sequence;
  }

  setNotes(playNote) {
    this.keys.selectAll(".sequence-note")
          .data(this.midiSequence.reduce((nonRests, note, i) => {
              if (note != null) nonRests.push({step: i, note: note});
              return nonRests;
            }, []))
        .enter()
         .append("rect")
         .attr("class", "sequence-note")
         .attr("width", this.stepWidth)
         .attr("height", PianoRoll.keyHeight)
         .attr("x", n => this.xScale(n.step))
         .attr("y", n => this.yScale(n.note) - PianoRoll.keyHeight)
         .attr("fill", "#09c")
         .on("click", (event, n) => playNote(n.note));
  }

  render() {
    let stepWidth = PianoRoll.width / this.midiSequence.length;
    stepWidth = PianoRoll.minNoteSize > stepWidth ? PianoRoll.minNoteSize : stepWidth;

    this.pianoRollSvg.select("svg .piano-roll").remove();
    this.noteRulerSvg.select("svg .note-ruler").remove();

    this.noteRulerSvg.attr("height", PianoRoll.keyHeight * this.activeNotes.length + PianoRoll.transportPadding);
    this.noteRulerSvg.attr("width", PianoRoll.noteRulerWidth);
    this.pianoRollSvg.attr("height", PianoRoll.keyHeight * this.activeNotes.length + PianoRoll.transportPadding);
    this.pianoRollSvg.attr("width", stepWidth * this.midiSequence.length);

    this.noteRuler = this.noteRulerSvg.append("g")
                    .attr("transform", `translate(0, ${PianoRoll.transportPadding})`)
                    .attr("class", "note-ruler")
                    .attr("width", PianoRoll.noteRulerWidth)
                    .attr("height", PianoRoll.keyHeight * this.activeNotes.length);

    this.noteRuler.selectAll(".note-label")
                    .data(this.activeNotes)
                  .enter()
                    .append("text")
                    .text(n => n.note)
                    .attr("fill", "black")
                    .attr("font-size", 12)
                    .attr("x", PianoRoll.noteRulerWidth / 2)
                    .attr("y", (n, i) => i * PianoRoll.keyHeight + PianoRoll.keyHeight - (PianoRoll.keyHeight / 3));

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
                    .attr("y", (n) => n.index * PianoRoll.keyHeight + PianoRoll.keyHeight - (PianoRoll.keyHeight / 3));

    this.noteRuler.selectAll(".octave-division")
                    .data(cNotes)
                  .enter()
                    .append("line")
                    .attr("class", "octave-division")
                    .attr("x1", 0)
                    .attr("y1", (n) => n.index * PianoRoll.keyHeight + PianoRoll.keyHeight)
                    .attr("x2", PianoRoll.noteRulerWidth)
                    .attr("y2", (n) => n.index * PianoRoll.keyHeight + PianoRoll.keyHeight)
                    .attr("stroke", "#333");

    this.pianoRoll = this.pianoRollSvg.append("g")
                    .attr("class", "piano-roll");

    this.transport = this.pianoRoll.append("g")
                    .attr("class", "transport")
                    .attr("width", this.pianoRollWidth)
                    .attr("height", PianoRoll.transportPadding);

    this.transport.selectAll(".step")
                    .data([...Array(this.midiSequence.length).keys()])
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
                    .attr("height", PianoRoll.keyHeight * this.activeNotes.length)
                    .attr("stroke", "#aaa");

    this.keys.selectAll(".key")
                   .data(this.activeNotes)
                 .enter()
                   .append("rect")
                   .attr("class", "key")
                   .attr("width", this.pianoRollWidth)
                   .attr("height", PianoRoll.keyHeight)
                   .attr("x", 0)
                   .attr("y", (n, i) => i * PianoRoll.keyHeight)
                   .attr("fill", n => n.note.charAt(n.note.length - 1) == "#" ? "#ccc" : "#fff");

    this.keys.selectAll(".step-division")
                  .data(new Array(this.midiSequence.length).fill(0))
                .enter()
                  .append("line")
                  .attr("class", "step-division")
                  .attr("x1", (s, i) => this.xScale(i))
                  .attr("y1", 0)
                  .attr("x2", (s, i) => this.xScale(i))
                  .attr("y2", this.activeNotes.length * PianoRoll.keyHeight)
                  .attr("stroke", (s, i) => i % 4 == 0 ? "#333" : "#aaa");
  }
}


const unique = (value, index, self) => self.indexOf(value) === index;


module.exports = PianoRoll;
