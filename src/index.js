import * as Tone from "tone";
const d3 = require("d3");

const PianoRoll      = require("./piano_roll");
const DrumGrid       = require("./drum_grid");
const Weft           = require("./weft");
const Kick           = require("./kick")
const Snare          = require("./snare")
const HiHat          = require("./hihat")
const infinitySeries = require("./infinity_series");
const noteData       = require("./note_data");


// const bassDrumSynth = new Tone.MembraneSynth().toDestination();
const kick  = new Kick();
const snare = new Snare();
const hihat = new HiHat();
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
    sequencerBeat = sequencerBeat == noteSequence.length - 1 ? 0 : sequencerBeat += 1;
    currentNote = noteSequence[sequencerBeat];
    if (currentNote != "REST") synth.triggerAttackRelease(currentNote, "16n", time);

    d3.selectAll("svg .transport .step").attr("fill", "#999");
    d3.select(`svg .transport .step-${sequencerBeat}`).attr("fill", "yellow");
  }

}, "16n");
const stepRateModuloMap = {"4N": 4, "8N": 2, "16N": 1};
const hitIndexMap       = {"Kick": 0, "Snare": 1, "Hat": 2};


let toneStarted = false, beat = -1, sequencerBeat = -1, stepDivisor = 2,
    currentNote, pianoRoll, drumGrid, sequence, midiSequence, noteSequence, seed, size, tonic, activeBeat, steps;


let drumBeat = [
  [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
  [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
  [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0],
  [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]
];

const renderInfinitySeries = () => {
  document.querySelector("#infinity-series .sequence").textContent = sequence.join(" ");
  pianoRoll.render();
  pianoRoll.setNotes(midiSequence, playNote);

  d3.select("#play-pause").property("disabled", false);
  d3.select("#bpm").property("disabled", false);
  d3.select("#step-rate").property("disabled", false);
}


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


const infinitySeriesSequence = () => {
  tonic    = document.getElementById("tonic").value;
  seed     = parseInt(document.getElementById("seed-distance").value);
  size     = parseInt(document.getElementById("series-length").value);
  sequence = infinitySeries(size, seed, 0);

  let tonicIndex   = noteData.findIndex(n => n.note_full == tonic);
  midiSequence     = sequence.map(n => n + tonicIndex);

  if (document.getElementById("apply-rhythm").checked) {
    let rhythm   = Array.from(document.querySelectorAll("#rhythm button:enabled"))
                        .map(b => b.classList.contains("active") ? 1 : 0);
    midiSequence = new Weft(midiSequence).rhythm(rhythm, "wrap");
  }

  noteSequence     = midiSequence.map(midiNum => midiNum == null ? "REST" : noteData[midiNum].note_full);
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

  drumGrid = new DrumGrid("#drum-machine");
  drumGrid.render(updateDrumBeat);
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
  document.getElementById("bpm").addEventListener("input", updateBpm);
  document.getElementById("step-rate").addEventListener("input", updateStepRate);
  document.getElementById("rhythm-step-count").addEventListener("change", enableDisableRhythmSteps);
  document.getElementById("apply-rhythm").addEventListener("change", toggleRhythmDisplay);
  // document.querySelectorAll("button.hit").foreach(b => b.addEventListener("click", toggleHit));
}


document.addEventListener("DOMContentLoaded", ready);
