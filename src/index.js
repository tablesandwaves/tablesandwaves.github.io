import {
  Synth, Loop, Transport, start, NoiseSynth, FeedbackDelay, Gate, MidSideCompressor,
  Gain, Destination, MembraneSynth
} from "tone";
const Tone = { Synth, Loop, Transport, start, NoiseSynth, FeedbackDelay, Gate,
               MidSideCompressor, Gain, Destination, MembraneSynth };

import { select, selectAll } from "d3-selection";
import { scaleLinear } from "d3-scale";
const d3 = { select, selectAll, scaleLinear };


const PianoRoll      = require("./piano_roll");
const DrumGrid       = require("./drum_grid");
const Weft           = require("./weft");
const Kick           = require("./kick")
const Snare          = require("./snare")
const HiHat          = require("./hihat")
const InfinitySeries = require("./infinity_series");
const RationalMelody = require("./rational_melody");
const noteData       = require("./note_data");


const kick  = new Kick(Tone);
const snare = new Snare(Tone);
const hihat = new HiHat(Tone);
const synth = new Tone.Synth().toDestination();
const loop  = new Tone.Loop((time) => {

  beat = beat == 15 ? 0 : beat += 1;
  d3.selectAll(".drum-step .transport").style("background-color", "#999");
  d3.select(`#drum-transport-${beat % 16}`).style("background-color", "yellow");
  if (drumBeat[beat][0] == 1) kick.hit(time);
  if (drumBeat[beat][1] == 1) snare.hit(time);
  if (drumBeat[beat][2] == 1) hihat.hit(time);

  if (beat % stepDivisor == 0) {
    // TODO: deal with changing the sequencer to a shorter length
    sequencerBeat = sequencerBeat == algorithm.noteSequence.length - 1 ? 0 : sequencerBeat += 1;
    currentNote = algorithm.noteSequence[sequencerBeat];
    if (currentNote != "REST") synth.triggerAttackRelease(currentNote, "16n", time);

    d3.selectAll("svg .transport .step").attr("fill", "#999");
    d3.select(`svg .transport .step-${sequencerBeat}`).attr("fill", "yellow");
  }

}, "16n");
const stepRateModuloMap = {"4N": 4, "8N": 2, "16N": 1};
const hitIndexMap       = {"Kick": 0, "Snare": 1, "Hat": 2};


let toneStarted = false, beat = -1, sequencerBeat = -1, stepDivisor = 2,
    pianoRoll, drumGrid, currentNote,
    algorithm, seed, size, tonic, rhythm;

let drumBeat = [
  [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
  [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
  [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
  [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]
];


const playPause = () => {
  if (Tone.Transport.state !== "started") {
    Tone.Transport.bpm.value = document.getElementById("bpm").value;
    loop.start(0);
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
    loop.stop();
    beat = -1;
    sequencerBeat = -1;
  }
}


const playNote = (midiNote) => {
  synth.triggerAttackRelease(noteData[midiNote].note_full, "16n");
}


const generateSequence = () => {
  if (document.getElementById("infinity-series") !== null) {

    tonic  = document.getElementById("tonic").value;
    seed   = parseInt(document.getElementById("seed-distance").value);
    size   = parseInt(document.getElementById("series-length").value);
    rhythm = getRhythm();
    algorithm = new InfinitySeries(size, seed, tonic, rhythm);
    document.querySelector("#infinity-series .sequence").textContent = algorithm.sequence.join(" ");

  } else if (document.getElementById("rational-melody") !== null) {

    let noteList = Array.from(document.querySelectorAll(".input-note"))
                        .map(option => noteData.findIndex(n => n.note_full == option.value));
    // Tonic is being set here because it is neweded for rendering the piano roll.
    tonic     = noteData[noteList.slice(0).sort()[0]].note_full;
    rhythm    = getRhythm();
    algorithm = new RationalMelody(noteList, rhythm);
    algorithm.generate("xv");

  }
}


const getRhythm = () => {
  if (document.getElementById("apply-rhythm").checked) {
    return Array.from(document.querySelectorAll("#rhythm button:enabled"))
                .map(b => b.classList.contains("active") ? 1 : 0);
  } else {
    return [];
  }
}


const toggleRhythm = (event) => {
  event.target.classList.toggle("active");
}


const updateDrumBeat = (event, step, hit) => {
  event.target.classList.toggle("active");
  drumBeat[step][hitIndexMap[hit]] = event.target.classList.contains("active") ? 1 : 0;
}


const toggleRhythmDisplay = (event) => {
  let checked = document.getElementById("apply-rhythm").checked;
  document.getElementById("rhythm").classList.toggle("active");
  document.querySelectorAll("#rhythm button").forEach(b => b.disabled = !checked);
  document.querySelectorAll("#rhythm input[type=number]").forEach(b => b.disabled = !checked);
}


const updateBpm = (event) => {
  document.getElementById("bpm-value").textContent = event.target.value;
  Tone.Transport.bpm.rampTo(event.target.value, 2);
}


const updateStepRate = (event) => {
  stepDivisor = stepRateModuloMap[event.target.value];
}


const enableDisableRhythmSteps = (event) => {
  document.querySelectorAll("#rhythm button").forEach((b, i) => {
    if (i >= event.target.value)
      b.disabled = true;
    else
      b.disabled = false;
  });
}


const setupUi = () => {

  d3.selectAll("#tonic, .input-note")
      .selectAll(".tonic-note")
      .data(noteData)
    .enter()
      .append("option")
      .attr("class", n => `note-${n.note_full}`)
      .attr("value", n => n.note_full)
      .text(n => n.note_full);

  let seedNotes = [60, 72, 63, 67, 67];
  document.querySelectorAll("#tonic, .input-note").forEach((selectList, i) => {
    let noteName = noteData[seedNotes[i]].note_full;
    selectList.querySelector(`option[value="${noteName}"]`).setAttribute("selected", "selected");
  });

  generateSequence();
  renderPianoRoll();

  drumGrid = new DrumGrid("#drum-machine", d3);
  drumGrid.render(updateDrumBeat);
}


const renderPianoRoll = () => {
  let tonicMidiNote   = noteData.findIndex(n => n.note_full == tonic);
  let sortedMidiNotes = algorithm.midiSequence.slice(0).sort().filter(n => n !== null);

  // The extent is the range of MIDI notes around the tonic. For the infinity series the tonic will be close to the center
  // of the MIDI note sequence. For other sequences the low number of the extent will be the sequence's lowest note.
  let extent = [sortedMidiNotes[0] - tonicMidiNote, sortedMidiNotes[sortedMidiNotes.length - 1] - tonicMidiNote];
  pianoRoll = new PianoRoll(".piano-roll", tonic, algorithm.midiSequence.length, extent, d3);
  pianoRoll.render();
}


const renderMidiSequence = () => {
  pianoRoll.setNotes(algorithm.midiSequence, playNote);

  d3.select("#play-pause").property("disabled", false);
  d3.select("#bpm").property("disabled", false);
  d3.select("#step-rate").property("disabled", false);
}


const highlightRatios = (event) => {
  let allCellSelector = "#self-replicating-melody td";
  let addedCellIndices = new Array();
  document.querySelectorAll(allCellSelector).forEach((cell, i) => {
    if (cell.textContent == event.target.value) {
      cell.classList.add("active");
      addedCellIndices.push(i);
    } else {
      cell.classList.remove("active");
    }
  });

  let addedNoteIndices = addedCellIndices.map(index => index % 15);
  let noteCellSelector = "#self-replicating-melody thead th:not(.first)";
  document.querySelectorAll(noteCellSelector).forEach((cell, i) => {
    if (addedNoteIndices.includes(i)) {
      cell.classList.add("active");
    } else {
      cell.classList.remove("active");
    }
  })
}


const ready = () => {
  setupUi();

  // Due to browser permissions for enabling audio, Tone cannot be initialized fully
  // until a user action makes it happen.
  document.querySelector("button#generate").addEventListener("click", () => {
    if (!toneStarted) {
      Tone.start();
      toneStarted = true;
    }
    generateSequence();
    renderPianoRoll();
    renderMidiSequence();
    document.getElementById("current-sequence").style.visibility = "visible";
  });

  document.querySelector("button#play-pause").addEventListener("click", playPause);
  document.querySelectorAll("#rhythm button").forEach(b => b.addEventListener("click", toggleRhythm));
  document.getElementById("bpm").addEventListener("input", updateBpm);
  document.getElementById("step-rate").addEventListener("input", updateStepRate);
  document.getElementById("rhythm-step-count").addEventListener("change", enableDisableRhythmSteps);
  document.getElementById("apply-rhythm").addEventListener("change", toggleRhythmDisplay);
  document.getElementById("ratio-index").addEventListener("change", highlightRatios)
}


document.addEventListener("DOMContentLoaded", ready);
