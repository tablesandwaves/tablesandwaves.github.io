const infinitySeries = (size, seed) => {
  if (size == undefined) size = 16;
  if (seed == undefined) seed = 1;

  let sequence      = [0, seed];
  let germinalIndex = 0;

  while (sequence.length < size) {
    germinalInterval    = sequence.slice(germinalIndex, germinalIndex + 2);
    germinalIntDistance = germinalInterval[1] - germinalInterval[0];
    sequence = sequence.concat([
      (sequence[sequence.length - 2] + (-1 * germinalIntDistance)),
      (sequence[sequence.length - 1] + germinalIntDistance)
    ]);
    germinalIndex += 1;
  }

  return sequence;
}


module.exports = infinitySeries;
