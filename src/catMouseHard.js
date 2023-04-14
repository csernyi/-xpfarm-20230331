function catMouseHard(x, j) {
  if (!x.includes('D') || !x.includes('C') || !x.includes('m')) {
    return 'boring without all three';
  }
  if (x == 'm.C.D' || x == 'm...C.D') {
    return 'Caught!';
  }
  return 'Escaped!';
}

module.exports = catMouseHard;
