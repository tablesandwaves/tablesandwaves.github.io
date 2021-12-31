import * as Tone from "tone";
const PianoRoll      = require("./piano_roll");
const infinitySeries = require("./infinity_series");
const noteData       = require("./note_data");


let synth, pianoRoll;


function defaultInfinitySeries() {
  const infinitySeriesP = document.querySelector("#infinity-series .default");
  document.querySelector("#infinity-series .default").textContent= infinitySeries().join(" ");
}


const renderInfinitySeries = () => {
  defaultInfinitySeries();
  pianoRoll.render();

  let sequence = infinitySeries();
  pianoRoll.setNotes(sequence, playNote);
}


const playNote = (note) => {
  synth.triggerAttackRelease(noteData[note + 48].note_full, "16n");
}


const setupSynth = (result) =>  synth = new Tone.Synth().toDestination();

const renderPianoRoll = (result) => {
  pianoRoll = new PianoRoll("#infinity-series .piano-roll");
  renderInfinitySeries();
}

const setupRejected = (err) => {
  throw new Error("Setup failed", { cause: err })
};


const ready = () => {
  document.querySelector("button").addEventListener("click", () => {
    const initializeTone = new Promise( (resolve, reject) => {
      Tone.start();
      resolve();
      reject(new Error("Unable to start Tone"));
    });

    initializeTone
      .then(setupSynth, setupRejected)
      .then(renderPianoRoll, setupRejected)
      .catch(err => console.log(err));
  });
}


document.addEventListener("DOMContentLoaded", ready);
