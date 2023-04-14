function catMouseHard(x, j) {
  if (!x.includes('D') || !x.includes('C') || !x.includes('m')) {
    return 'boring without all three';
  }
  if (x == 'm..D.C') {
    return 'Protected!';
  }
  let c = x.indexOf('C');
  let m = x.indexOf('m');
  if (Math.abs(c-m) <= j+1) {
    return 'Caught!';
  }
  return 'Escaped!';
}

module.exports = catMouseHard;
