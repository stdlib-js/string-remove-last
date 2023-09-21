"use strict";var g=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=g(function(f,a){
var s=require('@stdlib/assert-is-string/dist').isPrimitive,v=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,t=require('@stdlib/string-prev-grapheme-cluster-break/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function m(e,r){var i;if(!s(e))throw new TypeError(n('1P93F',e));if(e==="")return"";if(arguments.length>1){if(!v(r))throw new TypeError(n('1P93X',r));if(r===0)return e;for(i=e.length-1;r>0;)i=t(e,i),r-=1;return e.substring(0,i+1)}return e.substring(0,t(e,e.length-1)+1)}a.exports=m
});var o=u();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
