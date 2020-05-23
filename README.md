# IMC

[![NPM](https://nodei.co/npm/imc.png)](https://nodei.co/npm/imc/)

[![NPM version](https://img.shields.io/npm/v/imc.svg)](https://www.npmjs.com/package/imc)
[![Build Status](https://travis-ci.org/remarkablemark/imc.svg?branch=master)](https://travis-ci.org/remarkablemark/imc)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/imc/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/imc?branch=master)

**IMC** is an **I**n-**M**emory **C**ache key-value store.

```js
import cache from 'imc';
cache.set('key', 'value');
cache.get('key'); // 'value'
```

[Repl.it](https://repl.it/@remarkablemark/imc) | [JSFiddle](https://jsfiddle.net/remarkablemark/z4s5qcf6/)

## Installation

[NPM](https://www.npmjs.com/package/imc):

```sh
$ npm install imc --save
```

[Yarn](https://yarnpkg.com/package/imc):

```sh
$ yarn add imc
```

[CDN](https://unpkg.com/imc/):

```html
<script src="https://unpkg.com/imc@latest/umd/imc.min.js"></script>
<script>
  var cache = window.IMC.cache;
  var Cache = window.IMC.Cache;
</script>
```

## Usage

### Import Module

```js
// CommonJS
const { Cache, cache } = require('imc');

// ES Modules
import cache, { Cache } from 'imc';
```

### Global Cache

You can either use the global cache store:

```js
// cache is also a default export
import { cache } from 'imc';
```

### Local Cache

Or create a local cache store:

```js
import { Cache } from 'imc';
const cache = new Cache();
```

When instantiating a new cache store, the initial state can be set:

```js
const cache = new Cache({ key: 'value' });
```

### Set

Set key-value:

```js
cache.set('key', 'value');
```

Set key-value using object:

```js
cache.set({ key: 'value' });
```

Set multiple keys and values, which are merged to the store object:

```js
cache.set({
  key: 'value',
  answer: 42,
});
```

### Get

Get value from key:

```js
cache.get('key'); // 'value'
```

If key-value does not exist, it will return `undefined`:

```js
cache.get('invalid'); // undefined
```

To differentiate from a key-value that hasn't be set, you can use `null`:

```js
cache.set('invalid', null);
```

### Delete

Delete key-value from store:

```js
cache.delete('key');
```

### Clear

Clear store:

```js
cache.clear();
```

This means the store becomes an empty object:

```js
cache.get(); // {}
```

## Testing

Run tests with coverage:

```sh
$ npm test
```

Run tests in watch mode:

```sh
$ npm run test:watch
```

Lint files:

```sh
$ npm run lint
```

Fix lint errors:

```sh
$ npm run lint:fix
```

## Release

Only collaborators with credentials can release and publish:

```sh
$ npm run release
$ git push --follow-tags && npm publish
```

## License

[MIT](https://github.com/remarkablemark/imc/blob/master/LICENSE)
