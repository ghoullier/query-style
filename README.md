# queryStyle

[![NPM version][npm-version-image]][npm-url]
[![Gitter][gitter-image]][gitter-url]
[![Dependency Status][dependency-status-image]][dependency-status-url]

Lightweight computed style query engine.

## Install

```
$ npm install query-style
```

## Require

```js
const queryStyle = require("query-style");
```

## Documentation

- [CHANGELOG](./CHANGELOG.md)

## Examples

All float: left nodes

```js
const matches = queryStyle({
  float: 'left'
});
```

All float: left div

```js
const matches = queryStyle({
  float: 'left'
}, document.querySelectorAll('div'));
```

Using function as criteria

All elements with a zIndex higher than 1000

```js
const matches = queryStyle({
  zIndex: (value) => value > 1000
});
```

[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/ghoullier/query-style

[dependency-status-image]: http://img.shields.io/gemnasium/ghoullier/query-style.svg?style=flat
[dependency-status-url]: https://gemnasium.com/ghoullier/query-style

[npm-version-image]: http://img.shields.io/npm/v/query-style.svg?style=flat-square
[npm-url]: https://npmjs.org/package/query-style
