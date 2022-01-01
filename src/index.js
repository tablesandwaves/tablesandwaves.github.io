import * as Tone from "tone";
const d3 = require("d3");
const PianoRoll      = require("./piano_roll");
const infinitySeries = require("./infinity_series");
const noteData       = require("./note_data");


let synth, pianoRoll, sequence, seed, tonic;


const renderInfinitySeries = () => {
  document.querySelector("#infinity-series .sequence").textContent = sequence.join(" ");
  tonic = document.getElementById("tonic").value;
  pianoRoll.render(tonic, d3.extent(sequence));
  pianoRoll.setNotes(sequence, playNote);
}


const playNote = (note) => {
  synth.triggerAttackRelease(noteData[note + 48].note_full, "16n");
}


const infinitySeriesSequence = () => {
  seed = parseInt(document.getElementById("seed-distance").value);
  sequence = infinitySeries(16, seed, 0);
}


const setupSynth = (result) => synth = new Tone.Synth().toDestination();


const setupUi = (result) => {
  d3.select("#tonic")
      .selectAll(".tonic-note")
      .data(noteData)
    .enter()
      .append("option")
      .attr("class", ".tonic-note")
      .attr("id", n => `note-${n.note_full}`)
      .attr("value", n => n.note_full)
      .text(n => n.note_full);

  d3.select("#note-C4").property("selected", "selected");
}


const renderPianoRoll = (result) => {
  pianoRoll = new PianoRoll("#infinity-series .piano-roll");
  renderInfinitySeries();
}


const setupRejected = (err) => {
  throw new Error("Setup failed", { cause: err })
};


const ready = () => {
  setupUi();

  document.querySelector("button").addEventListener("click", () => {
    const initializeTone = new Promise( (resolve, reject) => {
      Tone.start();
      resolve();
      reject(new Error("Unable to start Tone"));
    });

    initializeTone
      .then(setupSynth, setupRejected)
      .then(infinitySeriesSequence, setupRejected)
      .then(renderPianoRoll, setupRejected)
      .catch(err => console.log(err));
  });
}


document.addEventListener("DOMContentLoaded", ready);
