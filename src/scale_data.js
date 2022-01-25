const scales = {
  "major": {
    name: "Major",
    mode: "Ionian",
    steps: [0, 2, 2, 1, 2, 2, 2, 1]
  },
  "minor": {
    name: "Minor",
    mode: "Aeolian",
    steps: [0, 2, 1, 2, 2, 1, 2, 2]
  }
}


const degree2HalfSteps = (scale, scaleDegree) => {
  let octaveIndex = Math.ceil(scaleDegree / scales[scale].steps.slice(1).length);

  let steps = scales[scale].steps.slice();
  for (let i = 0; i < octaveIndex - 1; i++) {
    steps = steps.concat(scales[scale].steps.slice(1));
  }

  return steps.slice(0, scaleDegree).reduce((sum, current) => sum + current, 0);
}



module.exports = {
  scales: scales,
  degree2HalfSteps: degree2HalfSteps
};
