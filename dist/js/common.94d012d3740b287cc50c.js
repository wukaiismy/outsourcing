!function(e){function n(n){for(var o,i,c=n[0],l=n[1],a=n[2],p=0,s=[];p<c.length;p++)i=c[p],r[i]&&s.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(f&&f(n);s.length;)s.shift()();return u.push.apply(u,a||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],o=!0,c=1;c<t.length;c++){var l=t[c];0!==r[l]&&(o=!1)}o&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},r={4:0},u=[];function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="./";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var a=0;a<c.length;a++)n(c[a]);var f=l;u.push([1,0]),t()}({1:function(e,n,t){"use strict";(function(e){t(16),t(4),e(function(){e("#carouselMenu").carousel({interval:5e3,wrap:!0}),e(".footAbouts").click(function(){location.href="./applycooperation.html"}),e(".login").click(function(){window.open("//www.ifepay.com/admin")}),e(".footAbout").click(function(){location.href="./aboutus.html"}),e(".navItem").each(function(n,t){e(this).on("click",function(){e(".navItem").removeClass("selected").eq(n).addClass("selected")})})})}).call(this,t(0))},16:function(e,n){}});