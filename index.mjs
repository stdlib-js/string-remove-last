// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-prev-grapheme-cluster-break@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function i(i,n){var m;if(!r(i))throw new TypeError(s("0hQ3R",i));if(""===i)return"";if(arguments.length>1){if(!t(n))throw new TypeError(s("0hQ3k",n));if(0===n)return i;for(m=i.length-1;n>0;)m=e(i,m),n-=1;return i.substring(0,m+1)}return i.substring(0,e(i,i.length-1)+1)}export{i as default};
//# sourceMappingURL=index.mjs.map