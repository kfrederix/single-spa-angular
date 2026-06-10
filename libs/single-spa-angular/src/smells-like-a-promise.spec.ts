import { smellsLikeAPromise } from './smells-like-a-promise';

describe('smellsLikeAPromise', () => {
  it('returns true for native promises', () => {
    expect(smellsLikeAPromise(Promise.resolve())).toBe(true);
  });

  it('returns true for thenables from another realm', () => {
    const foreignPromise = {
      then: Promise.prototype.then.bind(Promise.resolve()),
      catch: Promise.prototype.catch.bind(Promise.resolve()),
    };

    expect(smellsLikeAPromise(foreignPromise)).toBe(true);
  });

  it('returns false for plain objects', () => {
    expect(smellsLikeAPromise({})).toBe(false);
  });

  it('returns false for thenables without catch', () => {
    expect(smellsLikeAPromise({ then: () => {} })).toBe(false);
  });

  it('returns false for nullish values', () => {
    expect(smellsLikeAPromise(null)).toBe(false);
    expect(smellsLikeAPromise(undefined)).toBe(false);
  });
});
