import cache, { Cache, cache as _cache } from '.';

const key = 'key';
const value = 'value';

describe('cache', () => {
  beforeEach(() => {
    cache.clear();
  });

  it('can be imported as default or member', () => {
    expect(cache).toBe(_cache);
  });

  it('is an instance of Cache', () => {
    expect(cache).toBeInstanceOf(Cache);
  });

  describe('set', () => {
    it('does not update store when key is not a string or object', () => {
      [0, 1, null, undefined, Date, Function].forEach((key) => {
        expect(cache.set(key as any, value)).toBe(undefined);
        expect(cache.get()).toEqual({});
      });
    });

    it('updates store with key and value', () => {
      expect(cache.set(key, value)).toBe(undefined);
      expect(cache.get(key)).toBe(value);
    });

    it('updates store with object', () => {
      const data = {
        string: 'text',
        number: 1,
        undefined: undefined,
        null: null,
        object: {},
        function: () => {},
        date: new Date(),
      };
      expect(cache.set(data)).toBe(undefined);
      expect(cache.get()).toEqual(data);
    });
  });

  describe('get', () => {
    it('returns store when key is undefined', () => {
      expect(cache.get()).toEqual({});
    });

    it('returns value given key', () => {
      cache.set(key, value);
      expect(cache.get(key)).toBe(value);
      expect(cache.get()).toEqual({ [key]: value });
    });
  });

  describe('delete', () => {
    it('removes key-value from store', () => {
      cache.set({
        [key]: value,
        answer: 42,
      });
      expect(cache.delete(key)).toBe(undefined);
      expect(cache.get(key)).toBe(undefined);
      expect(cache.get()).toEqual({ answer: 42 });
    });
  });

  describe('clear', () => {
    it('resets store', () => {
      cache.set({
        [key]: value,
        answer: 42,
      });
      expect(cache.clear()).toBe(undefined);
      expect(cache.get()).toEqual({});
    });
  });
});

describe('Cache', () => {
  it('is a class', () => {
    expect(Cache).toBeInstanceOf(Function);
  });

  it('can be instantiated', () => {
    const store = new Cache();
    expect(store).toEqual({ store: {} });
  });

  it('can be instantiated with data', () => {
    const data = {
      foo: 'bar',
      answer: 42,
      nil: null,
      arr: [],
      obj: {},
    };
    const cache = new Cache(data);
    expect(cache.get()).toEqual(data);
  });
});
