import * as Tone from "tone";
const d3 = require("d3");
const PianoRoll      = require("./piano_roll");
const infinitySeries = require("./infinity_series");
const noteData       = require("./note_data");


let synth, pianoRoll, sequence, seed, tonic, loop,
    beat = 0,
    activeBeat;


const renderInfinitySeries = () => {
  document.querySelector("#infinity-series .sequence").textContent = sequence.join(" ");
  tonic = document.getElementById("tonic").value;
  pianoRoll.render(tonic, d3.extent(sequence));
  pianoRoll.setNotes(sequence, playNote);
}


const playPause = () => {
  if (Tone.Transport.state !== "started") {
    Tone.Transport.start();
    beat = 0;
    loop.start(0);
    document.getElementById("play-pause").textContent = "Pause";
  } else {
    Tone.Transport.stop();
    loop.stop();
    document.getElementById("play-pause").textContent = "Play";
  }
}


const step = (time) => {
  beat = beat == 16 ? 1 : beat += 1;
  d3.selectAll(".transport .step").attr("fill", "#999");
  d3.select(`.transport #step-${beat}`).attr("fill", "yellow");
}


const playNote = (note) => {
  synth.triggerAttackRelease(noteData[note].note_full, "16n");
}


const infinitySeriesSequence = () => {
  seed = parseInt(document.getElementById("seed-distance").value);
  sequence = infinitySeries(16, seed, 0);
}


const setupSynth = (result) => {
  synth = new Tone.Synth().toDestination();
  loop  = new Tone.Loop(step, "8n");
};


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

  // Due to browser permissions for enabling audio, Tone cannot be initialized fully until a user action
  // makes it happen. Using a promise to control order for potentially async operations.
  document.querySelector("button#generate").addEventListener("click", () => {
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

  document.querySelector("button#play-pause").addEventListener("click", playPause);
}


document.addEventListener("DOMContentLoaded", ready);
