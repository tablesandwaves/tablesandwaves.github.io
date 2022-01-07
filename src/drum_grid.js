const d3 = require("d3");


class DrumGrid {

  static steps = 16;
  static drumHits = ["Transport", "Kick", "Snare", "Hat"];

  constructor(containerSelector) {
    this.wrapper = d3.select(containerSelector);

  }


  render(updateDrumBeat) {
    let labels     = [""]
    labels.push(...DrumGrid.drumHits)
    let drumLabels = this.wrapper.append("div")
                    .attr("id", "drum-labels")
                    .selectAll(".drum-label")
                    .data(DrumGrid.drumHits)
                  .enter()
                    .append("div")
                    .attr("class", "drum-label")
                    .text(d => d == "Transport" ? "" : d);

    let steps = this.wrapper.selectAll(".drum-step")
                    .data([...Array(DrumGrid.steps).keys()])
                  .enter()
                    .append("div")
                    .attr("class", "drum-step")
                    .attr("id", d => `drum-step-${d}`);

    steps.selectAll(".hit")
         .data(d => DrumGrid.drumHits.map(hit => {return {step: d, hit: hit};}))
       .enter()
         .append("button")
         .attr("class", d => d.hit == "Transport" ? "transport" : "hit")
         .attr("id", d => `drum-transport-${d.step}`)
         .property("disabled", d => d.hit == "Transport" ? true : false)
         .on("click", (event, beat) => updateDrumBeat(event, beat.step, beat.hit));
  }
}


module.exports = DrumGrid;
