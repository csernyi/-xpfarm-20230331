const catMouseHard = require('./catMouseHard');

describe('cat-mouse game with not everyone presented', () => {
  it('is boring when a dog is missing', () => {
    expect(catMouseHard('m.C', 1)).toBe('boring without all three');
  });
  it('is boring when a cat is missing', () => {
    expect(catMouseHard('m.D', 1)).toBe('boring without all three');
  });
  it('is boring when a mouse is missing', () => {
    expect(catMouseHard('D.C', 1)).toBe('boring without all three');
  });
});
describe('cat-mouse game with the dog not in the way', () => {
  it('ends in the mouse being caught when cat jumps 1 and distance is 1', () => {
    expect(catMouseHard('m.C.D', 1)).toBe('Caught!');
  });
  it('ends in the mouse being escaped when cat jumps 1 and distance is 2', () => {
    expect(catMouseHard('m..C.D', 1)).toBe('Escaped!');
  });
  it('ends in the mouse being caught when cat jumps 3 and distance is 3', () => {
    expect(catMouseHard('m...C.D', 3)).toBe('Caught!');
  });
});
describe('cat-mouse game with the dog in the way', () => {
  it('ends in the mouse being escaped when cat jumps 3 and distance of the dog 2', () => {
    expect(catMouseHard('m..D.C', 3)).toBe('Protected!');
  });
});
