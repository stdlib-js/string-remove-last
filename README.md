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





<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->







<section class="cli">



<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/string-remove-last-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

## Usage

```text
Usage: remove-last [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --n                   Number of characters to remove. Default: 1.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
         --mode mode           Type of character to remove. Default: 'grapheme'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'beep\nboop' | remove-last --split /\r?\n/

    # Escaped...
    $ echo -n $'beep\nboop' | remove-last --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

```bash
$ remove-last beep
bee
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep\nboop' | remove-last --n 2
be
bo
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep\tboop' | remove-last --split '\t'
bee
boo
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

## See Also

-   <span class="package-name">[`@stdlib/string-remove-last`][@stdlib/string-remove-last]</span><span class="delimiter">: </span><span class="description">remove the last character(s) of a string.</span>
-   <span class="package-name">[`@stdlib/string-remove-first`][@stdlib/string/remove-first]</span><span class="delimiter">: </span><span class="description">remove the first character(s) of a string.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

### Community

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-remove-last-cli.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-remove-last-cli

[test-image]: https://github.com/stdlib-js/string-remove-last@v0.2.1/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/string-remove-last@v0.2.1/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-remove-last@v0.2.1/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-remove-last@v0.2.1?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-remove-last@v0.2.1.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-remove-last@v0.2.1/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-remove-last@v0.2.1#cli
[cli-url]: https://github.com/stdlib-js/string-remove-last@v0.2.1/tree/cli
[@stdlib/string-remove-last]: https://github.com/stdlib-js/string-remove-last@v0.2.1/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-remove-last@v0.2.1/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-remove-last@v0.2.1/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-remove-last@v0.2.1/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-remove-last@v0.2.1/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-remove-last@v0.2.1/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-remove-last@v0.2.1/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-remove-last@v0.2.1/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-remove-last@v0.2.1/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/remove-first]: https://github.com/stdlib-js/string-remove-first

<!-- </related-links> -->

</section>

<!-- /.links -->
