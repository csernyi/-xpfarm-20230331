const catMouseHard = require('./catMouseHard');

describe('cat-mouse game', () => {
  it('is boring when a dog is missing', () => {
    expect(catMouseHard('m.C', 1)).toBe('boring without all three');
  });
});
