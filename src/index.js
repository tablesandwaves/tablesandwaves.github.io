import * as Tone from "tone";
const d3 = require("d3");
const PianoRoll      = require("./piano_roll");
const infinitySeries = require("./infinity_series");
const noteData       = require("./note_data");


let toneStarted = false,
    beat = 0,
    synth, pianoRoll, sequence, midiSequence, noteSequence, toneSequence, seed, tonic, activeBeat;


const renderInfinitySeries = () => {
  document.querySelector("#infinity-series .sequence").textContent = sequence.join(" ");
  pianoRoll.render();
  pianoRoll.setNotes(midiSequence, playNote);
}


const playPause = () => {
  if (Tone.Transport.state !== "started") {
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
    beat = 0;
  }
}


const playNote = (midiNote, time) => {
  synth.triggerAttackRelease(noteData[midiNote].note_full, "16n", time);
}


const infinitySeriesSequence = () => {
  tonic    = document.getElementById("tonic").value;
  seed     = parseInt(document.getElementById("seed-distance").value);
  sequence = infinitySeries(16, seed, 0);

  let tonicIndex = noteData.findIndex(n => n.note_full == tonic);
  midiSequence   = sequence.map(n => n + tonicIndex);
  noteSequence   = midiSequence.map(midiNum => noteData[midiNum].note_full);
  if (toneSequence === undefined) {
    toneSequence = new Tone.Sequence((time, note) => {
      synth.triggerAttackRelease(note, 0.1, time);
      beat = beat == 16 ? 1 : beat += 1;
      d3.selectAll(".transport .step").attr("fill", "#999");
      d3.select(`.transport #step-${beat}`).attr("fill", "yellow");
    }, noteSequence).start(Tone.now());
  } else {
    toneSequence.events = noteSequence;
  }
}


const setupSynth = (result) => {
  synth = new Tone.Synth().toDestination();
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

  d3.select("#note-C3").property("selected", "selected");
}


const renderPianoRoll = (result) => {
  pianoRoll = new PianoRoll("#infinity-series .piano-roll", tonic, d3.extent(sequence));
}


const setupRejected = (err) => {
  console.log(err);
  throw new Error("Setup failed", { cause: err });
};


const ready = () => {
  setupUi();

  // Due to browser permissions for enabling audio, Tone cannot be initialized fully until a user action
  // makes it happen. Using a promise to control order for potentially async operations.
  document.querySelector("button#generate").addEventListener("click", () => {
    if (!toneStarted) {
      const initializeTone = new Promise( (resolve, reject) => {
        Tone.start();
        toneStarted = true;
        resolve();
        reject(new Error("Unable to start Tone"));
      });

      initializeTone
        .then(setupSynth, setupRejected)
        .catch(err => console.log(err));
    }
    infinitySeriesSequence();
    renderPianoRoll();
    renderInfinitySeries();
  });

  document.querySelector("button#play-pause").addEventListener("click", playPause);
}


document.addEventListener("DOMContentLoaded", ready);
