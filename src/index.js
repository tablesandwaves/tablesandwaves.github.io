import infinitySeries from "./infinity_series.js";
const PianoRoll = require("./piano_roll.js");


function defaultInfinitySeries() {
  const infinitySeriesP = document.querySelector("#infinity-series .default");
  document.querySelector("#infinity-series .default").textContent= infinitySeries().join(" ");
}


const ready = () => {
  defaultInfinitySeries();
  let pianoRoll = new PianoRoll("#infinity-series .piano-roll");
  pianoRoll.render();

  let sequence = infinitySeries();
  pianoRoll.setNotes(sequence);
}


if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll))
  ready();
else
  document.addEventListener("DOMContentLoaded", ready);
