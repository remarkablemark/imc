export class Cache {
  private store: Record<string, any>;

  constructor(store = {}) {
    this.store = store;
  }

  set(key: string | object, value?: any) {
    if (typeof key === 'string') {
      this.store[key] = value;
    } else if (key instanceof Object && Object.keys(key).length) {
      this.store = {
        ...key,
        ...this.store,
      };
    }
  }

  get(key?: string) {
    return key ? this.store[key] : this.store;
  }

  delete(key: string) {
    delete this.store[key];
  }

  clear() {
    this.store = {};
  }
}

export const cache = new Cache();

export default cache;
