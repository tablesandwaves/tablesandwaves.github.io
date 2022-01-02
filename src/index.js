import * as Tone from "tone";
const d3 = require("d3");

const PianoRoll      = require("./piano_roll");
const Weft           = require("./weft");
const infinitySeries = require("./infinity_series");
const noteData       = require("./note_data");


const synth = new Tone.Synth().toDestination();
const loop  = new Tone.Loop((time) => {
  beat = beat == midiSequence.length ? 1 : beat += 1;

  currentNote = noteSequence[beat - 1];
  if (currentNote != "REST") synth.triggerAttackRelease(currentNote, "16n", time);

  d3.selectAll(".transport .step").attr("fill", "#999");
  d3.select(`.transport #step-${beat}`).attr("fill", "yellow");
}, "8n");


let toneStarted = false, beat = 0, currentNote,
    pianoRoll, sequence, midiSequence, noteSequence, seed, tonic, activeBeat, steps;


const renderInfinitySeries = () => {
  document.querySelector("#infinity-series .sequence").textContent = sequence.join(" ");
  pianoRoll.render();
  pianoRoll.setNotes(midiSequence, playNote);
}


const playPause = () => {
  if (Tone.Transport.state !== "started") {
    Tone.Transport.bpm.value = document.getElementById("bpm").value;
    loop.interval = document.getElementById("step-rate").value;
    loop.start(0);
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
    loop.stop();
    beat = 0;
  }
}


const playNote = (midiNote) => {
  synth.triggerAttackRelease(noteData[midiNote].note_full, "16n");
}


const infinitySeriesSequence = () => {
  tonic    = document.getElementById("tonic").value;
  steps    = document.getElementById("step-count").value;
  seed     = parseInt(document.getElementById("seed-distance").value);
  sequence = infinitySeries(16, seed, 0);

  let applyRhythm  = document.getElementById("apply-rhythm").checked;
  let rhythm       = Array.from(document.querySelectorAll("#rhythm button"))
                          .map(b => b.classList.contains("active") ? 1 : 0);
  let tonicIndex   = noteData.findIndex(n => n.note_full == tonic);
  midiSequence     = sequence.map(n => n + tonicIndex);
  midiSequence     = applyRhythm ? new Weft(midiSequence).rhythm(rhythm, steps, "wrap") : midiSequence;
  noteSequence     = midiSequence.map(midiNum => midiNum == null ? "REST" : noteData[midiNum].note_full);
}


const toggleRhythm = (event) => {
  event.target.classList.toggle("active");
}


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

  d3.select("#note-C3").property("selected", "selected");
}


const renderPianoRoll = (result) => {
  pianoRoll = new PianoRoll("#infinity-series .piano-roll", tonic, midiSequence.length, d3.extent(sequence));
}


const setupRejected = (err) => {
  console.log(err);
  throw new Error("Setup failed", { cause: err });
};


const ready = () => {
  setupUi();

  // Due to browser permissions for enabling audio, Tone cannot be initialized fully
  // until a user action makes it happen.
  document.querySelector("button#generate").addEventListener("click", () => {
    if (!toneStarted) {
      Tone.start();
      toneStarted = true;
    }
    infinitySeriesSequence();
    renderPianoRoll();
    renderInfinitySeries();
    document.getElementById("current-sequence").style.visibility = "visible";
  });

  document.querySelector("button#play-pause").addEventListener("click", playPause);
  document.querySelectorAll("#rhythm button").forEach(b => b.addEventListener("click", toggleRhythm));
}


document.addEventListener("DOMContentLoaded", ready);
