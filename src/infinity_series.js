function mapFunction(noteNumber) {
  return (Math.abs(noteNumber) % range) * (noteNumber >= 0 ? 1 : -1);
}


function wrapSequence(sequence, max) {
  // Add 1 because 0 is the center point.
  range = max + 1;
  wrappedSequence = sequence.map(mapFunction);

  return wrappedSequence;
}


function infinitySeries(size, seed, wrap) {
  if (size == undefined) size = 16;
  if (seed == undefined) seed = 1;
  if (wrap == undefined) wrap = 0;

  var sequence = [0, seed];
  var germinalIndex = 0;

  while (sequence.length < size) {
    germinalInterval = sequence.slice(germinalIndex, germinalIndex + 2);
    germinalIntDistance = germinalInterval[1] - germinalInterval[0];
    sequence = sequence.concat([
      (sequence[sequence.length - 2] + (-1 * germinalIntDistance)),
      (sequence[sequence.length - 1] + germinalIntDistance)
    ]);
    germinalIndex += 1;
  }

  return wrap > 0 ? wrapSequence(sequence, wrap) : sequence;
}


module.exports = infinitySeries;
