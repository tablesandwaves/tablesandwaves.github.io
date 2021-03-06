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
const scaleHelper    = require("./scale_data");


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
    sequencerBeat += 1;
    currentStep = sequencerBeat % algorithm.noteSequence.length;
    currentNote = algorithm.noteSequence[currentStep];
    if (currentNote != "REST") synth.triggerAttackRelease(currentNote, "16n", time);

    d3.selectAll("svg .transport .step").attr("fill", "#999");
    d3.select(`svg .transport .step-${currentStep}`).attr("fill", "yellow");

    if (cycleRhythm && currentStep == algorithm.noteSequence.length - 1) {
      let currentCycleLength = parseInt(document.getElementById("rhythm-step-count").value);
      let maxCycleLength     = parseInt(document.getElementById("rhythm-cycle").value);
      let nextCycleLength    = currentCycleLength >= maxCycleLength ? 2 : currentCycleLength + 1;
      document.getElementById("rhythm-step-count").value = nextCycleLength;
      document.querySelectorAll(".rhythm-steps button").forEach((b, i) => {
        b.disabled = i >= nextCycleLength ? true : false;
      });
      generateSequence();
      renderPianoRoll();
      renderMidiSequence();
    }
  }
}, "16n");
const stepRateModuloMap = {"4N": 4, "8N": 2, "16N": 1};
const hitIndexMap       = {"Kick": 0, "Snare": 1, "Hat": 2};


let toneStarted = false, cycleRhythm = false, beat = -1, sequencerBeat = -1, stepDivisor = 2,
    pianoRoll, fixedPianoRollExtent, drumGrid, currentNote, currentStep,
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

  } else if (document.getElementById("self-similarity") !== null) {

    let noteList = Array.from(document.querySelectorAll(".input-note"))
                        .map(option => noteData.findIndex(n => n.note_full == option.value));
    // Tonic is being set here because it is neweded for rendering the piano roll.
    tonic     = noteData[noteList.slice(0).sort()[0]].note_full;
    rhythm    = getRhythm();
    algorithm = new RationalMelody(noteList, rhythm);
    algorithm.generate("xv");

  } else if (document.getElementById("scales-as-vectors") !== null) {

    rhythm        = getRhythm(true);
    tonic         = document.getElementById("tonic").value;
    let seqLength = document.getElementById("seq-length").value;
    let scale     = document.getElementById("scale").value;
    let tonicMidi = noteData.findIndex(n => n.note_full == tonic);
    let motif     = Array.from(document.querySelectorAll("#motif select"))
                         .filter(select => select.disabled == false)
                         .map(select => select.value == 0 ? null : parseInt(select.value));
    let shifts    = Array.from(document.querySelectorAll("#shifts select"))
                         .filter(select => select.disabled == false)
                         .map(select => parseInt(select.value));

    let motifWithRhythm = new Weft(motif).rhythm(rhythm);
    let motifWithShifts = new Weft(motifWithRhythm).shift(shifts);
    let sequence;
    if (motifWithShifts.length < seqLength)
      sequence = motifWithShifts.concat(new Array(seqLength - motifWithShifts.length).fill(null))
    else
      sequence = motifWithShifts.slice(0, seqLength);
    let midiSequence = sequence.map(scaleDeg => scaleDeg == null ? null : scaleHelper.degree2HalfSteps(scale, scaleDeg) + tonicMidi);
    let noteSequence = midiSequence.map(midiNote => midiNote == null ? "REST" : noteData[midiNote].note_full);

    fixedPianoRollExtent = [0, 24];
    algorithm = { "sequence": sequence, "midiSequence": midiSequence, "noteSequence": noteSequence }

  }
}


const getRhythm = (skipCheck) => {
  if (skipCheck != undefined || document.getElementById("apply-rhythm").checked) {
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

  let seedNotes;
  if (document.getElementById("scales-as-vectors") != undefined) {
    setupScaleVectorControls();
    seedNotes = [48];
  } else if (document.getElementById("self-similarity") != undefined) {
    document.getElementById("apply-rhythm").addEventListener("change", toggleRhythmDisplay);
    document.getElementById("ratio-index").addEventListener("change", highlightRatios);
    seedNotes = [60, 72, 63, 67, 67];
  } else if (document.getElementById("infinity-series") != undefined) {
    document.getElementById("apply-rhythm").addEventListener("change", toggleRhythmDisplay);
    seedNotes = [60];
  }

  d3.selectAll("#tonic, .input-note")
      .selectAll(".tonic-note")
      .data(noteData)
    .enter()
      .append("option")
      .attr("class", n => `note-${n.note_full}`)
      .attr("value", n => n.note_full)
      .text(n => n.note_full);

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
  // The vector melodies viz has the option to cycle thru a rhythm. The fixed extent keeps the piano roll height stable
  // for a state that changes without user input.
  let extent;
  if (fixedPianoRollExtent == undefined)
    extent = [sortedMidiNotes[0] - tonicMidiNote, sortedMidiNotes[sortedMidiNotes.length - 1] - tonicMidiNote];
  else
    extent = fixedPianoRollExtent;

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


const setupScaleVectorControls = () => {

  const scaleDegrees  = [1, 2, 3, 4, 5, 6, 7, 0];
  const shiftDegrees  = [0, 1, 2, 3, 4, 5, 6, 7];
  const defaultMotif  = [1, 5, 0,  5, 3, 0,  7, 0, 0,  4, 1, 0];
  const defaultShifts = [7, 7, 0,  0, 7, 0,  0, 0, 0,  0, 7, 0];
  ["#scale-degrees", "#shift-degrees"].forEach(selector => {
    d3.selectAll(selector).selectAll("select")
        .data(new Array(12).fill(1)) // the array element values does not matter
      .enter()
        .append("select")
        .selectAll(".scale-degree")
        .data(selector == "#scale-degrees" ? scaleDegrees : shiftDegrees)
      .enter()
        .append("option")
        .attr("class", "scale-degree")
        .attr("value", d => d)
        .text(d => selector == "#scale-degrees" && d == 0 ? "R" : d);
  });

  document.querySelectorAll("#scale-degrees select").forEach((select, i) => {
    let selectedScaleDegree = defaultMotif[i];
    select.querySelector(`option[value="${selectedScaleDegree}"]`).selected = "selected";
  });

  document.querySelectorAll("#shift-degrees select").forEach((select, i) => {
    let selectedScaleDegree = defaultShifts[i];
    select.querySelector(`option[value="${selectedScaleDegree}"]`).selected = "selected";
  });

  d3.select("#motif-length").on("change", event => {
    document.querySelectorAll("#scale-degrees select").forEach((s, i) => {
      s.disabled = i >= event.target.value ? true : false;
    });
  });

  d3.select("#shift-seq-length").on("change", event => {
    document.querySelectorAll("#shift-degrees select").forEach((s, i) => {
      s.disabled = i >= event.target.value ? true : false;
    });
  });

  document.getElementById("rhythm-step-count").addEventListener("change", event => {
    document.querySelectorAll(".rhythm-steps button").forEach((b, i) => {
      b.disabled = i >= event.target.value ? true : false;
    });
  });

  d3.select("#apply-cycle").on("change", event => cycleRhythm = event.target.checked);
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
}


document.addEventListener("DOMContentLoaded", ready);
