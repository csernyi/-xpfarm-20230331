function catMouseHard(x, j) {
  if (!x.includes('D') || !x.includes('C') || !x.includes('m')){
    return 'boring without all three';
  }
  return 'Caught!';
}

module.exports = catMouseHard;
