import IMC from '.';

describe('IMC', () => {
  it('is a class', () => {
    expect(IMC).toBeInstanceOf(Function);
  });

  it('can be instantiated', () => {
    const cache = new IMC();
    expect(cache).toEqual({});
  });
});
