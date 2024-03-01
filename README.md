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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# removeLast

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Remove the last character(s) of a string.



<section class="usage">

## Usage

To use in Observable,

```javascript
removeLast = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-last@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var removeLast = require( 'path/to/vendor/umd/string-remove-last/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-last@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.removeLast;
})();
</script>
```

#### removeLast( str\[, n]\[, options] )

Removes the last character(s) of an input string.

```javascript
var out = removeLast( 'last man standing' );
// returns 'last man standin'

out = removeLast( 'Hidden Treasures' );
// returns 'Hidden Treasure'
```

The function supports the following options:

-   **mode**: type of characters to remove. Must be one of the following:

    -   `'grapheme'`: grapheme clusters. Appropriate for strings containing visual characters which can span multiple Unicode code points (e.g., emoji).
    -   `'code_point'`: Unicode code points. Appropriate for strings containing visual characters which are comprised of more than one Unicode code unit (e.g., ideographic symbols and punctuation and mathematical alphanumerics).
    -   `'code_unit'`: UTF-16 code units. Appropriate for strings containing visual characters drawn from the basic multilingual plane (BMP) (e.g., common characters, such as those from the Latin, Greek, and Cyrillic alphabets).

    Default: `'grapheme'`.

By default, the function returns the last character. To return the last `n` characters, provide a second argument specifying the number of characters to return.

```javascript
var out = removeLast( 'foo bar', 4 );
// returns 'foo'

out = removeLast( 'foo bar', 0 );
// returns 'foo bar'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   By default, the function assumes the general case in which an input string may contain an arbitrary number of grapheme clusters. This assumption comes with a performance cost. Accordingly, if an input string is known to only contain visual characters of a particular type (e.g., only alphanumeric), one can achieve better performance by specifying the appropriate `mode` option.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/string-remove-last@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var str = removeLast( 'last man standing' );
// returns 'last man standin'

str = removeLast( 'presidential election' );
// returns 'presidential electio'

str = removeLast( 'javaScript' );
// returns 'javaScrip'

str = removeLast( 'Hidden Treasures' );
// returns 'Hidden Treasure'

str = removeLast( 'Lorem ipsum dolor sit amet', 4 );
// returns 'Lorem ipsum dolor sit '

str = removeLast( '🐮🐷🐸🐵', 2 );
// returns '🐮🐷'

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-remove-first`][@stdlib/string/remove-first]</span><span class="delimiter">: </span><span class="description">remove the first character(s) of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-remove-last.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-remove-last

[test-image]: https://github.com/stdlib-js/string-remove-last/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-remove-last/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-remove-last/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-remove-last?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-remove-last.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-remove-last/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-remove-last#cli
[cli-url]: https://github.com/stdlib-js/string-remove-last/tree/cli
[@stdlib/string-remove-last]: https://github.com/stdlib-js/string-remove-last/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-remove-last/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-remove-last/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-remove-last/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-remove-last/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-remove-last/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-remove-last/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-remove-last/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-remove-last/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/remove-first]: https://github.com/stdlib-js/string-remove-first/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
