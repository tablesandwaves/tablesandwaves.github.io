console.log("Tables & Waves");

// import * as d3 from "d3";
import {select, selectAll} from "d3-selection";

import infinitySeries from "./infinity_series.js";
import noteData       from "./note_data.js";


const width            = 1080,
      octaveHeight     = 240,
      notesPerOctave   = 12,
      pianoRollPadding = 40;


function defaultInfinitySeries() {
  const infinitySeriesP = document.querySelector("#infinity-series .default");
  document.querySelector("#infinity-series .default").textContent= infinitySeries().join(" ");
}


const infinitySeriesPianoRoll = () => {
  let svg   = select("#infinity-series .piano-roll").append("g");
  let steps = 16,
      octaves = 2,
      rootNote = 36,
      keyHeight = octaveHeight / notesPerOctave;
  let stepWidth = (width - pianoRollPadding) / steps;

  let activeNotes = noteData.filter(n => {
    return n.midi >= rootNote && n.midi < (rootNote + octaves * notesPerOctave);
  }).reverse();

  let roll = svg.append("g").attr("width", width).attr("height", octaveHeight).attr("stroke", "#aaa");
  let keys = roll.selectAll(".key")
                 .data(activeNotes)
               .enter()
                 .append("rect")
                 .attr("class", "key")
                 .attr("width", width - pianoRollPadding)
                 .attr("height", keyHeight)
                 .attr("x", pianoRollPadding)
                 .attr("y", (n, i) => i * keyHeight)
                 .attr("fill", n => n.note.charAt(n.note.length - 1) == "#" ? "#ccc" : "#fff");

  roll.selectAll(".note-label")
      .data(activeNotes)
    .enter()
      .append("text")
      .text(n => n.note_full)
      .attr("fill", "black")
      .attr("font-size", 12)
      .attr("x", 10)
      .attr("y", (n, i) => i * keyHeight + keyHeight - (keyHeight / 3));

  roll.selectAll(".key-division")
      .data(activeNotes)
    .enter()
      .append("line")
      .attr("class", "key-division")
      .attr("x1", pianoRollPadding)
      .attr("y1", (n, i) => i * keyHeight)
      .attr("x2", width)
      .attr("y2", (n, i) => i * keyHeight)
      .attr("stroke", "#aaa");

  roll.selectAll(".step-division")
      .data(new Array(16).fill(0))
    .enter()
      .append("line")
      .attr("class", "step-division")
      .attr("x1", (s, i) => i * stepWidth + pianoRollPadding)
      .attr("y1", 0)
      .attr("x2", (s, i) => i * stepWidth + pianoRollPadding)
      .attr("y2", octaveHeight * octaves)
      .attr("stroke", "#aaa");
}


const ready = () => {
  defaultInfinitySeries();
  infinitySeriesPianoRoll();
}


if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll))
  ready();
else
  document.addEventListener("DOMContentLoaded", ready);
