/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var prevGraphemeClusterBreak = require( '@stdlib/string-prev-grapheme-cluster-break' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Removes the last character(s) of a string.
*
* @param {string} str - input string
* @param {NonNegativeInteger} [n=1] - number of character to remove
* @throws {TypeError} must provide a string primitive
* @throws {TypeError} second argument must be a nonnegative integer
* @returns {string} updated string
*
* @example
* var out = removeLast( 'last man standing' );
* // returns 'last man standin'
*
* @example
* var out = removeLast( 'presidential election' );
* // returns 'presidential electio'
*
* @example
* var out = removeLast( 'javaScript' );
* // returns 'javaScrip'
*
* @example
* var out = removeLast( 'Hidden Treasures' );
* // returns 'Hidden Treasure'
*
* @example
* var out = removeLast( 'leader', 2 );
* // returns 'lead'
*/
function removeLast( str, n ) {
	var i;

	if ( !isString( str ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a string. Value: `%s`.', str ) );
	}
	if ( str === '' ) {
		return '';
	}
	if ( arguments.length > 1 ) {
		if ( !isNonNegativeInteger( n ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a nonnegative integer. Value: `%s`.', n ) );
		}
		if ( n === 0 ) {
			return str;
		}
		i = str.length - 1;
		while ( n > 0 ) {
			i = prevGraphemeClusterBreak( str, i );
			n -= 1;
		}
		return str.substring( 0, i + 1 );
	}
	return str.substring( 0, prevGraphemeClusterBreak( str, str.length-1 ) + 1 ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = removeLast;
