console.log("Tables & Waves");

import infinitySeries from "./infinity_series.js";


function defaultInfinitySeries() {
  const infinitySeriesP = document.querySelector("#infinity-series .default");
  console.log(infinitySeriesP);
  console.log(infinitySeries());

  document.querySelector("#infinity-series .default").textContent= infinitySeries().join(" ");
}


const ready = () => {
  defaultInfinitySeries();
}


if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll))
  ready();
else
  document.addEventListener("DOMContentLoaded", ready);
