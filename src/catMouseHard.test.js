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
