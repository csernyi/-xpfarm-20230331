function catMouseHard(x, j) {
  if (!x.includes('D') || !x.includes('C') || !x.includes('m')) {
    return 'boring without all three';
  }
  let c = x.indexOf('C');
  let m = x.indexOf('m');
  let d = x.indexOf('D');
  if (Math.abs(c-m) <= j+1) {
    return 'Caught!';
  }
  if ((c > d && c > m && d > m) || (c < d && c < m && d < m)) {
    return 'Protected!';
  }
  return 'Escaped!';
}

module.exports = catMouseHard;
