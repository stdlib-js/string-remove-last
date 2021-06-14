<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# removeLast

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Remove the last character of a string.

<section class="installation">

## Installation

```bash
npm install @stdlib/string-remove-last
```

</section>

<section class="usage">

## Usage

```javascript
var removeLast = require( '@stdlib/string-remove-last' );
```

#### removeLast( str )

Removes the last character of a `string`.

```javascript
var out = removeLast( 'last man standing' );
// returns 'last man standin'

out = removeLast( 'Hidden Treasures' );
// returns 'Hidden Treasure'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var removeLast = require( '@stdlib/string-remove-last' );

var str = removeLast( 'last man standing' );
// returns 'last man standin'

str = removeLast( 'presidential election' );
// returns 'presidential electio'

str = removeLast( 'javaScript' );
// returns 'javaScrip'

str = removeLast( 'Hidden Treasures' );
// returns 'Hidden Treasure'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-remove-last
```

</section>

<section class="usage">

### Usage

```text
Usage: remove-last [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ remove-last beep
bee
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep' | remove-last
bee
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-remove-last.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-remove-last

[test-image]: https://github.com/stdlib-js/string-remove-last/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/string-remove-last/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-remove-last/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-remove-last?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-remove-last
[dependencies-url]: https://david-dm.org/stdlib-js/string-remove-last/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-remove-last/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
