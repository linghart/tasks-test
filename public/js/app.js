/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(A,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vueTagsInput=t():A.vueTagsInput=t()}(window,function(){return function(A){var t={};function e(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return A[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=A,e.c=t,e.d=function(A,t,n){e.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:n})},e.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},e.t=function(A,t){if(1&t&&(A=e(A)),8&t)return A;if(4&t&&"object"==typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var i in A)e.d(n,i,function(t){return A[t]}.bind(null,i));return n},e.n=function(A){var t=A&&A.__esModule?function(){return A.default}:function(){return A};return e.d(t,"a",t),t},e.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},e.p="/dist/",e(e.s=6)}([function(A,t,e){var n=e(8);"string"==typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);(0,e(4).default)("7ec05f6c",n,!1,{})},function(A,t,e){var n=e(10);"string"==typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);(0,e(4).default)("3453d19d",n,!1,{})},function(A,t,e){"use strict";A.exports=function(A){var t=[];return t.toString=function(){return this.map(function(t){var e=function(A,t){var e=A[1]||"",n=A[3];if(!n)return e;if(t&&"function"==typeof btoa){var i=(o=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=n.sources.map(function(A){return"/*# sourceURL="+n.sourceRoot+A+" */"});return[e].concat(a).concat([i]).join("\n")}var o;return[e].join("\n")}(t,A);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(A,e){"string"==typeof A&&(A=[[null,A,""]]);for(var n={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(n[a]=!0)}for(i=0;i<A.length;i++){var o=A[i];null!=o[0]&&n[o[0]]||(e&&!o[2]?o[2]=e:e&&(o[2]="("+o[2]+") and ("+e+")"),t.push(o))}},t}},function(A,t){A.exports="data:application/vnd.ms-fontobject;base64,aAUAAMQEAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAUdPJHwAAAAAAAAAAAAAAAAAAAAAAAA4AaQBjAG8AbQBvAG8AbgAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBpAGMAbwBtAG8AbwBuAAAAAAAAAQAAAAsAgAADADBPUy8yDxIFrAAAALwAAABgY21hcBdW0okAAAEcAAAAVGdhc3AAAAAQAAABcAAAAAhnbHlmpZ+jMAAAAXgAAAD8aGVhZA/FmAgAAAJ0AAAANmhoZWEHgAPIAAACrAAAACRobXR4EgABvgAAAtAAAAAcbG9jYQCSAOIAAALsAAAAEG1heHAACQAfAAAC/AAAACBuYW1lmUoJ+wAAAxwAAAGGcG9zdAADAAAAAASkAAAAIAADA4ABkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOkCA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABAA4AAAACgAIAAIAAgABACDpAv/9//8AAAAAACDpAP/9//8AAf/jFwQAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAVgEBA74CgQAcAAABMhceARcWFwcmJy4BJyYjIgYHFyERFzY3PgE3NgIWSkNDbykpF2QQIB9VMzQ5P3AtnP6AmB0iIkspKAJVFxhSODlCIDMrKz4REislmgGAmhkVFBwICAABANYAgQMqAtUACwAAAQcXBycHJzcnNxc3Ayru7jzu7jzu7jzu7gKZ7u487u487u487u4AAQCSAIEDgAK9AAUAACUBFwEnNwGAAcQ8/gDuPPkBxDz+AO48AAAAAAEAAAAAAAAfydNRXw889QALBAAAAAAA1nUqGwAAAADWdSobAAAAAAO+AtUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA74AAQAAAAAAAAAAAAAAAAAAAAcEAAAAAAAAAAAAAAACAAAABAAAVgQAANYEAACSAAAAAAAKABQAHgBQAGoAfgABAAAABwAdAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},function(A,t,e){"use strict";function n(A,t){for(var e=[],n={},i=0;i<t.length;i++){var a=t[i],o=a[0],r={id:A+":"+i,css:a[1],media:a[2],sourceMap:a[3]};n[o]?n[o].parts.push(r):e.push(n[o]={id:o,parts:[r]})}return e}e.r(t),e.d(t,"default",function(){return g});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=i&&(document.head||document.getElementsByTagName("head")[0]),r=null,s=0,u=!1,c=function(){},d=null,l="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(A,t,e,i){u=e,d=i||{};var o=n(A,t);return f(o),function(t){for(var e=[],i=0;i<o.length;i++){var r=o[i];(s=a[r.id]).refs--,e.push(s)}t?f(o=n(A,t)):o=[];for(i=0;i<e.length;i++){var s;if(0===(s=e[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete a[s.id]}}}}function f(A){for(var t=0;t<A.length;t++){var e=A[t],n=a[e.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](e.parts[i]);for(;i<e.parts.length;i++)n.parts.push(v(e.parts[i]));n.parts.length>e.parts.length&&(n.parts.length=e.parts.length)}else{var o=[];for(i=0;i<e.parts.length;i++)o.push(v(e.parts[i]));a[e.id]={id:e.id,refs:1,parts:o}}}}function B(){var A=document.createElement("style");return A.type="text/css",o.appendChild(A),A}function v(A){var t,e,n=document.querySelector("style["+l+'~="'+A.id+'"]');if(n){if(u)return c;n.parentNode.removeChild(n)}if(p){var i=s++;n=r||(r=B()),t=C.bind(null,n,i,!1),e=C.bind(null,n,i,!0)}else n=B(),t=function(A,t){var e=t.css,n=t.media,i=t.sourceMap;n&&A.setAttribute("media",n);d.ssrId&&A.setAttribute(l,t.id);i&&(e+="\n/*# sourceURL="+i.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(A.styleSheet)A.styleSheet.cssText=e;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(e))}}.bind(null,n),e=function(){n.parentNode.removeChild(n)};return t(A),function(n){if(n){if(n.css===A.css&&n.media===A.media&&n.sourceMap===A.sourceMap)return;t(A=n)}else e()}}var h,m=(h=[],function(A,t){return h[A]=t,h.filter(Boolean).join("\n")});function C(A,t,e,n){var i=e?"":n.css;if(A.styleSheet)A.styleSheet.cssText=m(t,i);else{var a=document.createTextNode(i),o=A.childNodes;o[t]&&A.removeChild(o[t]),o.length?A.insertBefore(a,o[t]):A.appendChild(a)}}},function(A,t,e){"use strict";var n=Array.isArray,i=Object.keys,a=Object.prototype.hasOwnProperty;A.exports=function A(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){var o,r,s,u=n(t),c=n(e);if(u&&c){if((r=t.length)!=e.length)return!1;for(o=r;0!=o--;)if(!A(t[o],e[o]))return!1;return!0}if(u!=c)return!1;var d=t instanceof Date,l=e instanceof Date;if(d!=l)return!1;if(d&&l)return t.getTime()==e.getTime();var p=t instanceof RegExp,g=e instanceof RegExp;if(p!=g)return!1;if(p&&g)return t.toString()==e.toString();var f=i(t);if((r=f.length)!==i(e).length)return!1;for(o=r;0!=o--;)if(!a.call(e,f[o]))return!1;for(o=r;0!=o--;)if(!A(t[s=f[o]],e[s]))return!1;return!0}return t!=t&&e!=e}},function(A,t,e){A.exports=e(14)},function(A,t,e){"use strict";var n=e(0);e.n(n).a},function(A,t,e){(A.exports=e(2)(!0)).push([A.i,".ti-tag-input[data-v-108f4f13] {\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  top: 0px;\n  position: absolute;\n  width: 100%;\n  line-height: inherit;\n}\n.ti-tag-input[data-v-108f4f13]::-ms-clear {\n  display: none;\n}\ninput[data-v-108f4f13]:focus {\n  outline: none;\n}\ninput[disabled][data-v-108f4f13] {\n  background-color: transparent;\n}\n","",{version:3,sources:["C:/Users/johan/dev/vue-tags-input/vue-tags-input/C:/Users/johan/dev/vue-tags-input/vue-tags-input/tag-input.vue"],names:[],mappings:"AAAA;EACE,8BAA8B;EAC9B,eAAe;EACf,aAAa;EACb,aAAa;EACb,YAAY;EACZ,cAAc;EACd,SAAS;EACT,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;CAAE;AAEzB;EACE,cAAc;CAAE;AAElB;EACE,cAAc;CAAE;AAElB;EACE,8BAA8B;CAAE",file:"tag-input.vue?vue&type=style&index=0&id=108f4f13&lang=css&scoped=true&",sourcesContent:[".ti-tag-input {\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  top: 0px;\n  position: absolute;\n  width: 100%;\n  line-height: inherit; }\n\n.ti-tag-input::-ms-clear {\n  display: none; }\n\ninput:focus {\n  outline: none; }\n\ninput[disabled] {\n  background-color: transparent; }\n"],sourceRoot:""}])},function(A,t,e){"use strict";var n=e(1);e.n(n).a},function(A,t,e){t=A.exports=e(2)(!0);var n=e(11),i=n(e(3)),a=n(e(3)+"#iefix"),o=n(e(12)),r=n(e(13));t.push([A.i,"@font-face {\n  font-family: 'icomoon';\n  src: url("+i+");\n  src: url("+a+') format("embedded-opentype"), url('+o+') format("truetype"), url('+r+') format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n[class^="ti-icon-"][data-v-61d92e31], [class*=" ti-icon-"][data-v-61d92e31] {\n  font-family: \'icomoon\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ti-icon-check[data-v-61d92e31]:before {\n  content: "\\e902";\n}\n.ti-icon-close[data-v-61d92e31]:before {\n  content: "\\e901";\n}\n.ti-icon-undo[data-v-61d92e31]:before {\n  content: "\\e900";\n}\nul[data-v-61d92e31] {\n  margin: 0px;\n  padding: 0px;\n  list-style-type: none;\n}\n*[data-v-61d92e31], *[data-v-61d92e31]:before, *[data-v-61d92e31]:after {\n  box-sizing: border-box;\n}\ninput[data-v-61d92e31]:focus {\n  outline: none;\n}\ninput[disabled][data-v-61d92e31] {\n  background-color: transparent;\n}\n.vue-tags-input[data-v-61d92e31] {\n  max-width: 450px;\n  position: relative;\n  background-color: #fff;\n}\ndiv.vue-tags-input.disabled[data-v-61d92e31] {\n  opacity: 0.5;\n}\ndiv.vue-tags-input.disabled *[data-v-61d92e31] {\n    cursor: default;\n}\n.ti-input[data-v-61d92e31] {\n  border: 1px solid #ccc;\n  display: flex;\n  padding: 4px;\n  flex-wrap: wrap;\n}\n.ti-tags[data-v-61d92e31] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  line-height: 1em;\n}\n.ti-tag[data-v-61d92e31] {\n  background-color: #5C6BC0;\n  color: #fff;\n  border-radius: 2px;\n  display: flex;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em;\n}\n.ti-tag[data-v-61d92e31]:focus {\n    outline: none;\n}\n.ti-tag .ti-content[data-v-61d92e31] {\n    display: flex;\n    align-items: center;\n}\n.ti-tag .ti-tag-center[data-v-61d92e31] {\n    position: relative;\n}\n.ti-tag span[data-v-61d92e31] {\n    line-height: .85em;\n}\n.ti-tag span.ti-hidden[data-v-61d92e31] {\n    padding-left: 14px;\n    visibility: hidden;\n    height: 0px;\n    white-space: pre;\n}\n.ti-tag .ti-actions[data-v-61d92e31] {\n    margin-left: 2px;\n    display: flex;\n    align-items: center;\n    font-size: 1.15em;\n}\n.ti-tag .ti-actions i[data-v-61d92e31] {\n      cursor: pointer;\n}\n.ti-tag[data-v-61d92e31]:last-child {\n    margin-right: 4px;\n}\n.ti-tag.ti-invalid[data-v-61d92e31], .ti-tag.ti-tag.ti-deletion-mark[data-v-61d92e31] {\n    background-color: #e54d42;\n}\n.ti-new-tag-input-wrapper[data-v-61d92e31] {\n  display: flex;\n  flex: 1 0 auto;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em;\n}\n.ti-new-tag-input-wrapper input[data-v-61d92e31] {\n    flex: 1 0 auto;\n    min-width: 100px;\n    border: none;\n    padding: 0px;\n    margin: 0px;\n}\n.ti-new-tag-input[data-v-61d92e31] {\n  line-height: initial;\n}\n.ti-autocomplete[data-v-61d92e31] {\n  border: 1px solid #ccc;\n  border-top: none;\n  position: absolute;\n  width: 100%;\n  background-color: #fff;\n  z-index: 20;\n}\n.ti-item > div[data-v-61d92e31] {\n  cursor: pointer;\n  padding: 3px 6px;\n  width: 100%;\n}\n.ti-selected-item[data-v-61d92e31] {\n  background-color: #5C6BC0;\n  color: #fff;\n}\n',"",{version:3,sources:["C:/Users/johan/dev/vue-tags-input/vue-tags-input/C:/Users/johan/dev/vue-tags-input/vue-tags-input/vue-tags-input.scss"],names:[],mappings:"AAAA;EACE,uBAAuB;EACvB,mCAA8C;EAC9C,+JAAuM;EACvM,oBAAoB;EACpB,mBAAmB;CAAE;AAEvB;EACE,kCAAkC;EAClC,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,oCAAoC;EACpC,mCAAmC;CAAE;AAEvC;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;CAAE;AAE1B;EACE,uBAAuB;CAAE;AAE3B;EACE,cAAc;CAAE;AAElB;EACE,8BAA8B;CAAE;AAElC;EACE,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;CAAE;AAE3B;EACE,aAAa;CAAE;AACf;IACE,gBAAgB;CAAE;AAEtB;EACE,uBAAuB;EACvB,cAAc;EACd,aAAa;EACb,gBAAgB;CAAE;AAEpB;EACE,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;CAAE;AAErB;EACE,0BAA0B;EAC1B,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAAE;AACnB;IACE,cAAc;CAAE;AAClB;IACE,cAAc;IACd,oBAAoB;CAAE;AACxB;IACE,mBAAmB;CAAE;AACvB;IACE,mBAAmB;CAAE;AACvB;IACE,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;CAAE;AACrB;IACE,iBAAiB;IACjB,cAAc;IACd,oBAAoB;IACpB,kBAAkB;CAAE;AACpB;MACE,gBAAgB;CAAE;AACtB;IACE,kBAAkB;CAAE;AACtB;IACE,0BAA0B;CAAE;AAEhC;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAAE;AACnB;IACE,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,YAAY;CAAE;AAElB;EACE,qBAAqB;CAAE;AAEzB;EACE,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,uBAAuB;EACvB,YAAY;CAAE;AAEhB;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;CAAE;AAEhB;EACE,0BAA0B;EAC1B,YAAY;CAAE",file:"vue-tags-input.scss?vue&type=style&index=0&id=61d92e31&lang=scss&scoped=true&",sourcesContent:['@font-face {\n  font-family: \'icomoon\';\n  src: url("./assets/fonts/icomoon.eot?7grlse");\n  src: url("./assets/fonts/icomoon.eot?7grlse#iefix") format("embedded-opentype"), url("./assets/fonts/icomoon.ttf?7grlse") format("truetype"), url("./assets/fonts/icomoon.woff?7grlse") format("woff");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^="ti-icon-"], [class*=" ti-icon-"] {\n  font-family: \'icomoon\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.ti-icon-check:before {\n  content: "\\e902"; }\n\n.ti-icon-close:before {\n  content: "\\e901"; }\n\n.ti-icon-undo:before {\n  content: "\\e900"; }\n\nul {\n  margin: 0px;\n  padding: 0px;\n  list-style-type: none; }\n\n*, *:before, *:after {\n  box-sizing: border-box; }\n\ninput:focus {\n  outline: none; }\n\ninput[disabled] {\n  background-color: transparent; }\n\n.vue-tags-input {\n  max-width: 450px;\n  position: relative;\n  background-color: #fff; }\n\ndiv.vue-tags-input.disabled {\n  opacity: 0.5; }\n  div.vue-tags-input.disabled * {\n    cursor: default; }\n\n.ti-input {\n  border: 1px solid #ccc;\n  display: flex;\n  padding: 4px;\n  flex-wrap: wrap; }\n\n.ti-tags {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  line-height: 1em; }\n\n.ti-tag {\n  background-color: #5C6BC0;\n  color: #fff;\n  border-radius: 2px;\n  display: flex;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em; }\n  .ti-tag:focus {\n    outline: none; }\n  .ti-tag .ti-content {\n    display: flex;\n    align-items: center; }\n  .ti-tag .ti-tag-center {\n    position: relative; }\n  .ti-tag span {\n    line-height: .85em; }\n  .ti-tag span.ti-hidden {\n    padding-left: 14px;\n    visibility: hidden;\n    height: 0px;\n    white-space: pre; }\n  .ti-tag .ti-actions {\n    margin-left: 2px;\n    display: flex;\n    align-items: center;\n    font-size: 1.15em; }\n    .ti-tag .ti-actions i {\n      cursor: pointer; }\n  .ti-tag:last-child {\n    margin-right: 4px; }\n  .ti-tag.ti-invalid, .ti-tag.ti-tag.ti-deletion-mark {\n    background-color: #e54d42; }\n\n.ti-new-tag-input-wrapper {\n  display: flex;\n  flex: 1 0 auto;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em; }\n  .ti-new-tag-input-wrapper input {\n    flex: 1 0 auto;\n    min-width: 100px;\n    border: none;\n    padding: 0px;\n    margin: 0px; }\n\n.ti-new-tag-input {\n  line-height: initial; }\n\n.ti-autocomplete {\n  border: 1px solid #ccc;\n  border-top: none;\n  position: absolute;\n  width: 100%;\n  background-color: #fff;\n  z-index: 20; }\n\n.ti-item > div {\n  cursor: pointer;\n  padding: 3px 6px;\n  width: 100%; }\n\n.ti-selected-item {\n  background-color: #5C6BC0;\n  color: #fff; }\n'],sourceRoot:""}])},function(A,t,e){"use strict";A.exports=function(A){return"string"!=typeof A?A:(/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),/["'() \t\n]/.test(A)?'"'+A.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':A)}},function(A,t){A.exports="data:font/ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SBawAAAC8AAAAYGNtYXAXVtKJAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZqWfozAAAAF4AAAA/GhlYWQPxZgIAAACdAAAADZoaGVhB4ADyAAAAqwAAAAkaG10eBIAAb4AAALQAAAAHGxvY2EAkgDiAAAC7AAAABBtYXhwAAkAHwAAAvwAAAAgbmFtZZlKCfsAAAMcAAABhnBvc3QAAwAAAAAEpAAAACAAAwOAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6QL//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAFYBAQO+AoEAHAAAATIXHgEXFhcHJicuAScmIyIGBxchERc2Nz4BNzYCFkpDQ28pKRdkECAfVTM0OT9wLZz+gJgdIiJLKSgCVRcYUjg5QiAzKys+ERIrJZoBgJoZFRQcCAgAAQDWAIEDKgLVAAsAAAEHFwcnByc3JzcXNwMq7u487u487u487u4Cme7uPO7uPO7uPO7uAAEAkgCBA4ACvQAFAAAlARcBJzcBgAHEPP4A7jz5AcQ8/gDuPAAAAAABAAAAAAAAH8nTUV8PPPUACwQAAAAAANZ1KhsAAAAA1nUqGwAAAAADvgLVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAO+AAEAAAAAAAAAAAAAAAAAAAAHBAAAAAAAAAAAAAAAAgAAAAQAAFYEAADWBAAAkgAAAAAACgAUAB4AUABqAH4AAQAAAAcAHQABAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},function(A,t){A.exports="data:font/woff;base64,d09GRgABAAAAAAUQAAsAAAAABMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIFrGNtYXAAAAFoAAAAVAAAAFQXVtKJZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAPwAAAD8pZ+jMGhlYWQAAALAAAAANgAAADYPxZgIaGhlYQAAAvgAAAAkAAAAJAeAA8hobXR4AAADHAAAABwAAAAcEgABvmxvY2EAAAM4AAAAEAAAABAAkgDibWF4cAAAA0gAAAAgAAAAIAAJAB9uYW1lAAADaAAAAYYAAAGGmUoJ+3Bvc3QAAATwAAAAIAAAACAAAwAAAAMDgAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QIDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkC//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQBWAQEDvgKBABwAAAEyFx4BFxYXByYnLgEnJiMiBgcXIREXNjc+ATc2AhZKQ0NvKSkXZBAgH1UzNDk/cC2c/oCYHSIiSykoAlUXGFI4OUIgMysrPhESKyWaAYCaGRUUHAgIAAEA1gCBAyoC1QALAAABBxcHJwcnNyc3FzcDKu7uPO7uPO7uPO7uApnu7jzu7jzu7jzu7gABAJIAgQOAAr0ABQAAJQEXASc3AYABxDz+AO48+QHEPP4A7jwAAAAAAQAAAAAAAB/J01FfDzz1AAsEAAAAAADWdSobAAAAANZ1KhsAAAAAA74C1QAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAADvgABAAAAAAAAAAAAAAAAAAAABwQAAAAAAAAAAAAAAAIAAAAEAABWBAAA1gQAAJIAAAAAAAoAFAAeAFAAagB+AAEAAAAHAB0AAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},function(A,t,e){"use strict";e.r(t);var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"vue-tags-input",class:[{"ti-disabled":A.disabled},{"ti-focus":A.focused}]},[e("div",{staticClass:"ti-input"},[A.tagsCopy?e("ul",{staticClass:"ti-tags"},[A._l(A.tagsCopy,function(t,n){return e("li",{key:n,staticClass:"ti-tag",class:[{"ti-editing":A.tagsEditStatus[n]},t.tiClasses,t.classes,{"ti-deletion-mark":A.isMarked(n)}],style:t.style,attrs:{tabindex:n+1},on:{click:function(e){A.$emit("tag-clicked",{tag:t,index:n})}}},[e("div",{staticClass:"ti-content"},[A.$scopedSlots["tag-left"]?e("div",{staticClass:"ti-tag-left"},[A._t("tag-left",null,{tag:t,index:n,edit:A.tagsEditStatus[n],performSaveEdit:A.performSaveTag,performDelete:A.performDeleteTag,performCancelEdit:A.cancelEdit,performOpenEdit:A.performEditTag,deletionMark:A.isMarked(n)})],2):A._e(),A._v(" "),e("div",{ref:"tagCenter",refInFor:!0,staticClass:"ti-tag-center"},[A.$scopedSlots["tag-center"]?A._e():e("span",{class:{"ti-hidden":A.tagsEditStatus[n]},on:{click:function(t){A.performEditTag(n)}}},[A._v(A._s(t.text))]),A._v(" "),A.$scopedSlots["tag-center"]?A._e():e("tag-input",{attrs:{scope:{edit:A.tagsEditStatus[n],maxlength:A.maxlength,tag:t,index:n,validateTag:A.createChangedTag,performCancelEdit:A.cancelEdit,performSaveEdit:A.performSaveTag}}}),A._v(" "),A._t("tag-center",null,{tag:t,index:n,maxlength:A.maxlength,edit:A.tagsEditStatus[n],performSaveEdit:A.performSaveTag,performDelete:A.performDeleteTag,performCancelEdit:A.cancelEdit,validateTag:A.createChangedTag,performOpenEdit:A.performEditTag,deletionMark:A.isMarked(n)})],2),A._v(" "),A.$scopedSlots["tag-right"]?e("div",{staticClass:"ti-tag-right"},[A._t("tag-right",null,{tag:t,index:n,edit:A.tagsEditStatus[n],performSaveEdit:A.performSaveTag,performDelete:A.performDeleteTag,performCancelEdit:A.cancelEdit,performOpenEdit:A.performEditTag,deletionMark:A.isMarked(n)})],2):A._e()]),A._v(" "),e("div",{staticClass:"ti-actions"},[A.$scopedSlots["tag-actions"]?A._e():e("i",{directives:[{name:"show",rawName:"v-show",value:A.tagsEditStatus[n],expression:"tagsEditStatus[index]"}],staticClass:"ti-icon-undo",on:{click:function(t){A.cancelEdit(n)}}}),A._v(" "),A.$scopedSlots["tag-actions"]?A._e():e("i",{directives:[{name:"show",rawName:"v-show",value:!A.tagsEditStatus[n],expression:"!tagsEditStatus[index]"}],staticClass:"ti-icon-close",on:{click:function(t){A.performDeleteTag(n)}}}),A._v(" "),A.$scopedSlots["tag-actions"]?A._t("tag-actions",null,{tag:t,index:n,edit:A.tagsEditStatus[n],performSaveEdit:A.performSaveTag,performDelete:A.performDeleteTag,performCancelEdit:A.cancelEdit,performOpenEdit:A.performEditTag,deletionMark:A.isMarked(n)}):A._e()],2)])}),A._v(" "),e("li",{staticClass:"ti-new-tag-input-wrapper"},[e("input",A._b({ref:"newTagInput",staticClass:"ti-new-tag-input",class:[A.createClasses(A.newTag,A.tags,A.validation,A.isDuplicate)],attrs:{placeholder:A.placeholder,maxlength:A.maxlength,disabled:A.disabled,type:"text",size:"1"},domProps:{value:A.newTag},on:{keydown:[function(t){A.performAddTags(A.filteredAutocompleteItems[A.selectedItem]||A.newTag,t)},function(t){return"button"in t||8===t.keyCode?A.invokeDelete(t):null},function(t){if(!("button"in t)&&38!==t.keyCode)return null;A.selectItem(t,"before")},function(t){if(!("button"in t)&&40!==t.keyCode)return null;A.selectItem(t,"after")}],paste:A.addTagsFromPaste,input:A.updateNewTag,blur:function(t){A.$emit("blur",t)},focus:function(t){A.focused=!0,A.$emit("focus",t)},click:function(t){!A.addOnlyFromAutocomplete&&(A.selectedItem=null)}}},"input",A.$attrs,!1))])],2):A._e()]),A._v(" "),A._t("between-elements"),A._v(" "),A.autocompleteOpen?e("div",{staticClass:"ti-autocomplete",on:{mouseout:function(t){A.selectedItem=null}}},[A._t("autocomplete-header"),A._v(" "),e("ul",A._l(A.filteredAutocompleteItems,function(t,n){return e("li",{key:n,staticClass:"ti-item",class:[t.tiClasses,t.classes,{"ti-selected-item":A.isSelected(n)}],style:t.style,on:{mouseover:function(t){!A.disabled&&(A.selectedItem=n)}}},[A.$scopedSlots["autocomplete-item"]?A._t("autocomplete-item",null,{item:t,index:n,performAdd:function(t){return A.performAddTags(t,void 0,"autocomplete")},selected:A.isSelected(n)}):e("div",{on:{click:function(e){A.performAddTags(t,void 0,"autocomplete")}}},[A._v("\n          "+A._s(t.text)+"\n        ")])],2)}),0),A._v(" "),A._t("autocomplete-footer")],2):A._e()],2)};n._withStripped=!0;var i=e(5),a=e.n(i),o=function(A){return JSON.parse(JSON.stringify(A))},r=function(A,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3?arguments[3]:void 0;void 0===A.text&&(A={text:A});var i=function(A,t){return t.filter(function(t){var e=A.text;return"string"==typeof t.rule?!new RegExp(t.rule).test(e):t.rule instanceof RegExp?!t.rule.test(e):"[object Function]"==={}.toString.call(t.rule)?t.rule(A):void 0}).map(function(A){return A.classes})}(A,e),a=function(A,t){for(var e=0;e<A.length;){if(t(A[e],e,A))return e;e++}return-1}(t,function(t){return t===A}),r=o(t),s=-1!==a?r.splice(a,1)[0]:o(A);return(n?n(r,s):-1!==r.map(function(A){return A.text}).indexOf(s.text))&&i.push("ti-duplicate"),0===i.length?i.push("ti-valid"):i.push("ti-invalid"),i},s=function(A){void 0===A.text&&(A={text:A});for(var t=o(A),e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t.tiClasses=r.apply(void 0,[A].concat(n)),t},u=function(A){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return A.map(function(t){return s.apply(void 0,[t,A].concat(e))})},c=function(){var A=this,t=A.$createElement,e=A._self._c||t;return A.scope.edit?e("input",{directives:[{name:"model",rawName:"v-model",value:A.scope.tag.text,expression:"scope.tag.text"}],staticClass:"ti-tag-input",attrs:{maxlength:A.scope.maxlength,type:"text",size:"1"},domProps:{value:A.scope.tag.text},on:{input:[function(t){t.target.composing||A.$set(A.scope.tag,"text",t.target.value)},function(t){A.scope.validateTag(A.scope.index,t)}],blur:function(t){A.scope.performCancelEdit(A.scope.index)},keydown:function(t){A.scope.performSaveEdit(A.scope.index,t)}}}):A._e()};c._withStripped=!0;var d={name:"TagInput",props:{scope:{type:Object}}};e(7);function l(A,t,e,n,i,a,o,r){var s,u="function"==typeof A?A.options:A;if(t&&(u.render=t,u.staticRenderFns=e,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(s=function(A){(A=A||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(A=__VUE_SSR_CONTEXT__),i&&i.call(this,A),A&&A._registeredComponents&&A._registeredComponents.add(o)},u._ssrRegister=s):i&&(s=r?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(u.functional){u._injectStyles=s;var c=u.render;u.render=function(A,t){return s.call(t),c(A,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,s):[s]}return{exports:A,options:u}}var p=l(d,c,[],!1,null,"108f4f13",null);p.options.__file="vue-tags-input/tag-input.vue";var g=p.exports,f=function(A){return!A.some(function(A){var t=!A.text;t&&console.warn('Missing property "text"',A);var e=!1;return A.classes&&(e="string"!=typeof A.classes),e&&console.warn('Property "classes" must be type of string',A),t||e})},B=function(A){return!A.some(function(A){if("number"==typeof A){var t=isFinite(A)&&Math.floor(A)===A;return t||console.warn("Only numerics are allowed for this prop. Found:",A),!t}if("string"==typeof A){var e=/\W|[a-z]|!\d/i.test(A);return e||console.warn("Only alpha strings are allowed for this prop. Found:",A),!e}return console.warn("Only numeric and string values are allowed. Found:",A),!1})},v={value:{type:String,default:"",required:!0},tags:{type:Array,default:function(){return[]},validator:f},autocompleteItems:{type:Array,default:function(){return[]},validator:f},allowEditTags:{type:Boolean,default:!1},autocompleteFilterDuplicates:{default:!0,type:Boolean},addOnlyFromAutocomplete:{type:Boolean,default:!1},autocompleteMinLength:{type:Number,default:1},autocompleteAlwaysOpen:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:"Add Tag"},addOnKey:{type:Array,default:function(){return[13]},validator:B},saveOnKey:{type:Array,default:function(){return[13]},validator:B},maxTags:{type:Number},maxlength:{type:Number},validation:{type:Array,default:function(){return[]},validator:function(A){return!A.some(function(A){var t=!A.rule;t&&console.warn('Property "rule" is missing',A);var e=A.rule&&("string"==typeof A.rule||A.rule instanceof RegExp||"[object Function]"==={}.toString.call(A.rule));e||console.warn("A rule must be type of string, RegExp or function. Found:",JSON.stringify(A.rule));var n=!A.classes;n&&console.warn('Property "classes" is missing',A);var i=A.type&&"string"!=typeof A.type;return i&&console.warn('Property "type" must be type of string. Found:',A),!e||t||n||i})}},separators:{type:Array,default:function(){return[";"]},validator:function(A){return!A.some(function(A){var t="string"!=typeof A;return t&&console.warn("Separators must be type of string. Found:",A),t})}},avoidAddingDuplicates:{type:Boolean,default:!0},addOnBlur:{type:Boolean,default:!0},isDuplicate:{type:Function,default:null},addFromPaste:{type:Boolean,default:!0},deleteOnBackspace:{default:!0,type:Boolean}};function h(A){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A})(A)}var m={name:"VueTagsInput",components:{TagInput:g},props:v,data:function(){return{newTag:null,tagsCopy:null,tagsEditStatus:null,deletionMark:null,deletionMarkTime:null,selectedItem:null,focused:null}},computed:{autocompleteOpen:function(){return!!this.autocompleteAlwaysOpen||null!==this.newTag&&this.newTag.length>=this.autocompleteMinLength&&this.filteredAutocompleteItems.length>0&&this.focused},filteredAutocompleteItems:function(){var A=this,t=this.autocompleteItems.map(function(t){return s(t,A.tags,A.validation,A.isDuplicate)});return this.autocompleteFilterDuplicates?t.filter(this.duplicateFilter):t}},methods:{createClasses:r,getSelectedIndex:function(A){var t=this.filteredAutocompleteItems,e=this.selectedItem,n=t.length-1;if(0!==t.length)return null===e?0:"before"===A&&0===e?n:"after"===A&&e===n?0:"after"===A?e+1:e-1},selectDefaultItem:function(){this.addOnlyFromAutocomplete&&this.filteredAutocompleteItems.length>0?this.selectedItem=0:this.selectedItem=null},selectItem:function(A,t){A.preventDefault(),this.selectedItem=this.getSelectedIndex(t)},isSelected:function(A){return this.selectedItem===A},isMarked:function(A){return this.deletionMark===A},invokeDelete:function(){var A=this;if(this.deleteOnBackspace&&!(this.newTag.length>0)){var t=this.tagsCopy.length-1;null===this.deletionMark?(this.deletionMarkTime=setTimeout(function(){return A.deletionMark=null},1e3),this.deletionMark=t):this.performDeleteTag(t)}},addTagsFromPaste:function(){var A=this;this.addFromPaste&&setTimeout(function(){return A.performAddTags(A.newTag)},10)},performEditTag:function(A){var t=this;this.allowEditTags&&(this._events["before-editing-tag"]||this.editTag(A),this.$emit("before-editing-tag",{index:A,tag:this.tagsCopy[A],editTag:function(){return t.editTag(A)}}))},editTag:function(A){this.allowEditTags&&(this.toggleEditMode(A),this.focus(A))},toggleEditMode:function(A){this.allowEditTags&&!this.disabled&&this.$set(this.tagsEditStatus,A,!this.tagsEditStatus[A])},createChangedTag:function(A,t){var e=this.tagsCopy[A];e.text=t?t.target.value:this.tagsCopy[A].text,this.$set(this.tagsCopy,A,s(e,this.tagsCopy,this.validation,this.isDuplicate))},focus:function(A){var t=this;this.$nextTick(function(){var e=t.$refs.tagCenter[A].querySelector("input.ti-tag-input");e&&e.focus()})},quote:function(A){return A.replace(/([()[{*+.$^\\|?])/g,"\\$1")},cancelEdit:function(A){this.tags[A]&&(this.tagsCopy[A]=o(s(this.tags[A],this.tags,this.validation,this.isDuplicate)),this.$set(this.tagsEditStatus,A,!1))},hasForbiddingAddRule:function(A){var t=this;return A.some(function(A){var e=t.validation.find(function(t){return A===t.classes});return!!e&&e.disableAdd})},createTagTexts:function(A){var t=this,e=new RegExp(this.separators.map(function(A){return t.quote(A)}).join("|"));return A.split(e).map(function(A){return{text:A}})},performDeleteTag:function(A){var t=this;this._events["before-deleting-tag"]||this.deleteTag(A),this.$emit("before-deleting-tag",{index:A,tag:this.tagsCopy[A],deleteTag:function(){return t.deleteTag(A)}})},deleteTag:function(A){this.disabled||(this.deletionMark=null,clearTimeout(this.deletionMarkTime),this.tagsCopy.splice(A,1),this._events["update:tags"]&&this.$emit("update:tags",this.tagsCopy),this.$emit("tags-changed",this.tagsCopy))},noTriggerKey:function(A,t){var e=-1!==this[t].indexOf(A.keyCode)||-1!==this[t].indexOf(A.key);return e&&A.preventDefault(),!e},performAddTags:function(A,t,e){var n=this;if(!(this.disabled||t&&this.noTriggerKey(t,"addOnKey"))){var i=[];"object"===h(A)&&(i=[A]),"string"==typeof A&&(i=this.createTagTexts(A)),(i=i.filter(function(A){return A.text.trim().length>0})).forEach(function(A){A=s(A,n.tags,n.validation,n.isDuplicate),n._events["before-adding-tag"]||n.addTag(A,e),n.$emit("before-adding-tag",{tag:A,addTag:function(){return n.addTag(A,e)}})})}},duplicateFilter:function(A){return this.isDuplicate?!this.isDuplicate(this.tagsCopy,A):!this.tagsCopy.find(function(t){return t.text===A.text})},addTag:function(A){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"new-tag-input",n=this.filteredAutocompleteItems.map(function(A){return A.text});this.addOnlyFromAutocomplete&&-1===n.indexOf(A.text)||this.$nextTick(function(){return t.maxTags&&t.maxTags<=t.tagsCopy.length?t.$emit("max-tags-reached",A):t.avoidAddingDuplicates&&!t.duplicateFilter(A)?t.$emit("adding-duplicate",A):void(t.hasForbiddingAddRule(A.tiClasses)||(t.$emit("input",""),t.tagsCopy.push(A),t._events["update:tags"]&&t.$emit("update:tags",t.tagsCopy),"autocomplete"===e&&t.$refs.newTagInput.focus(),t.$emit("tags-changed",t.tagsCopy)))})},performSaveTag:function(A,t){var e=this,n=this.tagsCopy[A];this.disabled||t&&this.noTriggerKey(t,"addOnKey")||0!==n.text.trim().length&&(this._events["before-saving-tag"]||this.saveTag(A,n),this.$emit("before-saving-tag",{index:A,tag:n,saveTag:function(){return e.saveTag(A,n)}}))},saveTag:function(A,t){if(this.avoidAddingDuplicates){var e=o(this.tagsCopy),n=e.splice(A,1)[0];if(this.isDuplicate?this.isDuplicate(e,n):-1!==e.map(function(A){return A.text}).indexOf(n.text))return this.$emit("saving-duplicate",t)}this.hasForbiddingAddRule(t.tiClasses)||(this.$set(this.tagsCopy,A,t),this.toggleEditMode(A),this._events["update:tags"]&&this.$emit("update:tags",this.tagsCopy),this.$emit("tags-changed",this.tagsCopy))},tagsEqual:function(){var A=this;return!this.tagsCopy.some(function(t,e){return!a()(t,A.tags[e])})},updateNewTag:function(A){var t=A.target.value;this.newTag=t,this.$emit("input",t)},initTags:function(){this.tagsCopy=u(this.tags,this.validation,this.isDuplicate),this.tagsEditStatus=o(this.tags).map(function(){return!1}),this._events["update:tags"]&&!this.tagsEqual()&&this.$emit("update:tags",this.tagsCopy)},blurred:function(A){this.$el.contains(A.target)||(this.addOnBlur&&this.focused&&this.performAddTags(this.newTag),this.focused=!1)}},watch:{value:function(A){this.addOnlyFromAutocomplete||(this.selectedItem=null),this.newTag=A},tags:{handler:function(){this.initTags()},deep:!0},autocompleteOpen:"selectDefaultItem"},created:function(){this.newTag=this.value,this.initTags()},mounted:function(){this.selectDefaultItem(),document.addEventListener("click",this.blurred)},destroyed:function(){document.removeEventListener("click",this.blurred)}},C=(e(9),l(m,n,[],!1,null,"61d92e31",null));C.options.__file="vue-tags-input/vue-tags-input.vue";var E=C.exports;e.d(t,"VueTagsInput",function(){return E}),e.d(t,"createClasses",function(){return r}),e.d(t,"createTag",function(){return s}),e.d(t,"createTags",function(){return u}),e.d(t,"TagInput",function(){return g}),E.install=function(A){return A.component(E.name,E)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(E);t.default=E}])});
//# sourceMappingURL=vue-tags-input.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(6)
/* template */
var __vue_template__ = __webpack_require__(19)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8142f38c", Component.options)
  } else {
    hotAPI.reload("data-v-8142f38c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function () {

    function setCookie(name, value, timeOffset) {
        var domain = this.options.cookieDomain(),
            expires = new Date(new Date().getTime() + timeOffset).toUTCString(),
            cookie = name + '=' + value + '; Expires=' + expires + ';';

        if (domain !== 'localhost') {
            cookie += ' Path=/; Domain=' + domain + ';';
        }

        document.cookie = cookie;
    }

    return {
        remember: function remember(rememberMe) {
            setCookie.call(this, 'rememberMe', rememberMe === true ? 'true' : 'false', rememberMe === true ? 12096e5 : undefined);
        },

        set: function set(name, value, expires) {
            if (value) {
                setCookie.call(this, name, value, 12096e5);
            }
        },

        get: function get(name) {
            var i,
                ii,
                cookie = document.cookie;

            cookie = cookie.replace(/;\s+/g, ';').split(';').map(function (s) {
                return s.replace(/\s+\=\s+/g, '=').split('=');
            });

            for (i = 0, ii = cookie.length; i < ii; i++) {
                if (cookie[i][0] && cookie[i][0] === name) {
                    return cookie[i][1];
                }
            }

            return null;
        },

        exists: function exists(name) {
            return document.cookie.match(/rememberMe/);
        },

        remove: function remove(name) {
            setCookie.call(this, name, '', -12096e5);
        }
    };
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(48);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_App_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_App_vue__);


// Router
Vue.router = new VueRouter({
    hashbang: false,
    linkActiveClass: 'active',
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        name: 'default',
        component: __webpack_require__(20)
    }, {
        path: '/login',
        name: 'login',
        component: __webpack_require__(29),
        meta: { auth: false }
    }, {
        path: '/register',
        name: 'register',
        component: __webpack_require__(32),
        meta: {
            auth: false
        }
    }, {
        path: '/404',
        name: 'error-404',
        component: __webpack_require__(35)
    }, {
        path: '/403',
        name: 'error-403',
        component: __webpack_require__(37)
    }, {
        path: '/502',
        name: 'error-502',
        component: __webpack_require__(39)
    }]
});

// import axios from 'axios';
// import VueAxios from 'vue-axios';
// Vue.use(VueAxios, axios);
// Vue.axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

// Http
Vue.http.options.root = 'http://127.0.0.1:8000/api';

// Vue Auth
Vue.use(__webpack_require__(41), {
    auth: __webpack_require__(45),
    http: __webpack_require__(46),
    // http: require('../drivers/http/axios.1.x.js'),
    router: __webpack_require__(47),
    rolesVar: 'role',
    facebookOauth2Data: {
        // clientId: '196729390739201'
    },
    googleOauth2Data: {
        // clientId: '547886745924-4vrbhl09fr3t771drtupacct6f788566.apps.googleusercontent.com'
    }
});

// Start
var component = __webpack_require__(2);

component.router = Vue.router;

new Vue(component).$mount('#app');
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdi_font_css_materialdesignicons_min_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdi_font_css_materialdesignicons_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdi_font_css_materialdesignicons_min_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            context: 'app context',
            loaded: false
        };
    },
    mounted: function mounted() {
        var _this = this;

        // Set up $auth.ready with other arbitrary loaders (ex: language file).
        setTimeout(function () {
            _this.loaded = true;
        }, 500);
    },
    created: function created() {
        var _this = this;

        this.$auth.ready(function () {
            console.log('ready ' + this.context);
        });

        // Vue.http.interceptors.push(function (req, next) {
        //     next(function (res) {
        //         if ( ! res.ok) {
        //             _this.$router.push({name: 'error-502'})
        //         }
        //     });
        // });
    },


    methods: {
        checkRoute: function checkRoute(val) {
            return this.$route.name === val ? 'active' : '';
        },
        logout: function logout() {
            this.$auth.logout({
                makeRequest: true,
                success: function success() {
                    console.log('success ' + this.context);
                },
                error: function error() {
                    console.log('error ' + this.context);
                }
            });
        },
        unimpersonate: function unimpersonate() {
            this.$auth.unimpersonate({
                success: function success() {
                    console.log('success ' + this.context);
                },
                error: function error() {
                    console.log('error ' + this.context);
                }
            });
        }
    }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(17)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!./materialdesignicons.min.css", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!./materialdesignicons.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(9);
exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "/* MaterialDesignIcons.com */@font-face{font-family:\"Material Design Icons\";src:url(" + escape(__webpack_require__(11)) + ");src:url(" + escape(__webpack_require__(12)) + "?#iefix&v=3.5.95) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(13)) + ") format(\"woff2\"),url(" + escape(__webpack_require__(14)) + ") format(\"woff\"),url(" + escape(__webpack_require__(15)) + ") format(\"truetype\"),url(" + escape(__webpack_require__(16)) + "#materialdesigniconsregular) format(\"svg\");font-weight:normal;font-style:normal}.mdi:before,.mdi-set{display:inline-block;font:normal normal normal 24px/1 \"Material Design Icons\";font-size:inherit;text-rendering:auto;line-height:inherit;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.mdi-access-point:before{content:\"\\F002\"}.mdi-access-point-network:before{content:\"\\F003\"}.mdi-access-point-network-off:before{content:\"\\FBBD\"}.mdi-account:before{content:\"\\F004\"}.mdi-account-alert:before{content:\"\\F005\"}.mdi-account-alert-outline:before{content:\"\\FB2C\"}.mdi-account-arrow-left:before{content:\"\\FB2D\"}.mdi-account-arrow-left-outline:before{content:\"\\FB2E\"}.mdi-account-arrow-right:before{content:\"\\FB2F\"}.mdi-account-arrow-right-outline:before{content:\"\\FB30\"}.mdi-account-badge:before{content:\"\\FD83\"}.mdi-account-badge-alert:before{content:\"\\FD84\"}.mdi-account-badge-alert-outline:before{content:\"\\FD85\"}.mdi-account-badge-outline:before{content:\"\\FD86\"}.mdi-account-box:before{content:\"\\F006\"}.mdi-account-box-multiple:before{content:\"\\F933\"}.mdi-account-box-outline:before{content:\"\\F007\"}.mdi-account-card-details:before{content:\"\\F5D2\"}.mdi-account-card-details-outline:before{content:\"\\FD87\"}.mdi-account-check:before{content:\"\\F008\"}.mdi-account-check-outline:before{content:\"\\FBBE\"}.mdi-account-child:before{content:\"\\FA88\"}.mdi-account-child-circle:before{content:\"\\FA89\"}.mdi-account-circle:before{content:\"\\F009\"}.mdi-account-circle-outline:before{content:\"\\FB31\"}.mdi-account-clock:before{content:\"\\FB32\"}.mdi-account-clock-outline:before{content:\"\\FB33\"}.mdi-account-convert:before{content:\"\\F00A\"}.mdi-account-details:before{content:\"\\F631\"}.mdi-account-edit:before{content:\"\\F6BB\"}.mdi-account-group:before{content:\"\\F848\"}.mdi-account-group-outline:before{content:\"\\FB34\"}.mdi-account-heart:before{content:\"\\F898\"}.mdi-account-heart-outline:before{content:\"\\FBBF\"}.mdi-account-key:before{content:\"\\F00B\"}.mdi-account-key-outline:before{content:\"\\FBC0\"}.mdi-account-minus:before{content:\"\\F00D\"}.mdi-account-minus-outline:before{content:\"\\FAEB\"}.mdi-account-multiple:before{content:\"\\F00E\"}.mdi-account-multiple-check:before{content:\"\\F8C4\"}.mdi-account-multiple-minus:before{content:\"\\F5D3\"}.mdi-account-multiple-minus-outline:before{content:\"\\FBC1\"}.mdi-account-multiple-outline:before{content:\"\\F00F\"}.mdi-account-multiple-plus:before{content:\"\\F010\"}.mdi-account-multiple-plus-outline:before{content:\"\\F7FF\"}.mdi-account-network:before{content:\"\\F011\"}.mdi-account-network-outline:before{content:\"\\FBC2\"}.mdi-account-off:before{content:\"\\F012\"}.mdi-account-off-outline:before{content:\"\\FBC3\"}.mdi-account-outline:before{content:\"\\F013\"}.mdi-account-plus:before{content:\"\\F014\"}.mdi-account-plus-outline:before{content:\"\\F800\"}.mdi-account-question:before{content:\"\\FB35\"}.mdi-account-question-outline:before{content:\"\\FB36\"}.mdi-account-remove:before{content:\"\\F015\"}.mdi-account-remove-outline:before{content:\"\\FAEC\"}.mdi-account-search:before{content:\"\\F016\"}.mdi-account-search-outline:before{content:\"\\F934\"}.mdi-account-settings:before{content:\"\\F630\"}.mdi-account-star:before{content:\"\\F017\"}.mdi-account-star-outline:before{content:\"\\FBC4\"}.mdi-account-supervisor:before{content:\"\\FA8A\"}.mdi-account-supervisor-circle:before{content:\"\\FA8B\"}.mdi-account-switch:before{content:\"\\F019\"}.mdi-account-tie:before{content:\"\\FCBF\"}.mdi-accusoft:before{content:\"\\F849\"}.mdi-adchoices:before{content:\"\\FD1E\"}.mdi-adjust:before{content:\"\\F01A\"}.mdi-adobe:before{content:\"\\F935\"}.mdi-air-conditioner:before{content:\"\\F01B\"}.mdi-air-filter:before{content:\"\\FD1F\"}.mdi-air-horn:before{content:\"\\FD88\"}.mdi-air-purifier:before{content:\"\\FD20\"}.mdi-airbag:before{content:\"\\FBC5\"}.mdi-airballoon:before{content:\"\\F01C\"}.mdi-airplane:before{content:\"\\F01D\"}.mdi-airplane-landing:before{content:\"\\F5D4\"}.mdi-airplane-off:before{content:\"\\F01E\"}.mdi-airplane-takeoff:before{content:\"\\F5D5\"}.mdi-airplay:before{content:\"\\F01F\"}.mdi-airport:before{content:\"\\F84A\"}.mdi-alarm:before{content:\"\\F020\"}.mdi-alarm-bell:before{content:\"\\F78D\"}.mdi-alarm-check:before{content:\"\\F021\"}.mdi-alarm-light:before{content:\"\\F78E\"}.mdi-alarm-light-outline:before{content:\"\\FBC6\"}.mdi-alarm-multiple:before{content:\"\\F022\"}.mdi-alarm-off:before{content:\"\\F023\"}.mdi-alarm-plus:before{content:\"\\F024\"}.mdi-alarm-snooze:before{content:\"\\F68D\"}.mdi-album:before{content:\"\\F025\"}.mdi-alert:before{content:\"\\F026\"}.mdi-alert-box:before{content:\"\\F027\"}.mdi-alert-box-outline:before{content:\"\\FCC0\"}.mdi-alert-circle:before{content:\"\\F028\"}.mdi-alert-circle-outline:before{content:\"\\F5D6\"}.mdi-alert-decagram:before{content:\"\\F6BC\"}.mdi-alert-decagram-outline:before{content:\"\\FCC1\"}.mdi-alert-octagon:before{content:\"\\F029\"}.mdi-alert-octagon-outline:before{content:\"\\FCC2\"}.mdi-alert-octagram:before{content:\"\\F766\"}.mdi-alert-octagram-outline:before{content:\"\\FCC3\"}.mdi-alert-outline:before{content:\"\\F02A\"}.mdi-alien:before{content:\"\\F899\"}.mdi-all-inclusive:before{content:\"\\F6BD\"}.mdi-alpha:before{content:\"\\F02B\"}.mdi-alpha-a:before{content:\"A\"}.mdi-alpha-a-box:before{content:\"\\FAED\"}.mdi-alpha-a-box-outline:before{content:\"\\FBC7\"}.mdi-alpha-a-circle:before{content:\"\\FBC8\"}.mdi-alpha-a-circle-outline:before{content:\"\\FBC9\"}.mdi-alpha-b:before{content:\"B\"}.mdi-alpha-b-box:before{content:\"\\FAEE\"}.mdi-alpha-b-box-outline:before{content:\"\\FBCA\"}.mdi-alpha-b-circle:before{content:\"\\FBCB\"}.mdi-alpha-b-circle-outline:before{content:\"\\FBCC\"}.mdi-alpha-c:before{content:\"C\"}.mdi-alpha-c-box:before{content:\"\\FAEF\"}.mdi-alpha-c-box-outline:before{content:\"\\FBCD\"}.mdi-alpha-c-circle:before{content:\"\\FBCE\"}.mdi-alpha-c-circle-outline:before{content:\"\\FBCF\"}.mdi-alpha-d:before{content:\"D\"}.mdi-alpha-d-box:before{content:\"\\FAF0\"}.mdi-alpha-d-box-outline:before{content:\"\\FBD0\"}.mdi-alpha-d-circle:before{content:\"\\FBD1\"}.mdi-alpha-d-circle-outline:before{content:\"\\FBD2\"}.mdi-alpha-e:before{content:\"E\"}.mdi-alpha-e-box:before{content:\"\\FAF1\"}.mdi-alpha-e-box-outline:before{content:\"\\FBD3\"}.mdi-alpha-e-circle:before{content:\"\\FBD4\"}.mdi-alpha-e-circle-outline:before{content:\"\\FBD5\"}.mdi-alpha-f:before{content:\"F\"}.mdi-alpha-f-box:before{content:\"\\FAF2\"}.mdi-alpha-f-box-outline:before{content:\"\\FBD6\"}.mdi-alpha-f-circle:before{content:\"\\FBD7\"}.mdi-alpha-f-circle-outline:before{content:\"\\FBD8\"}.mdi-alpha-g:before{content:\"G\"}.mdi-alpha-g-box:before{content:\"\\FAF3\"}.mdi-alpha-g-box-outline:before{content:\"\\FBD9\"}.mdi-alpha-g-circle:before{content:\"\\FBDA\"}.mdi-alpha-g-circle-outline:before{content:\"\\FBDB\"}.mdi-alpha-h:before{content:\"H\"}.mdi-alpha-h-box:before{content:\"\\FAF4\"}.mdi-alpha-h-box-outline:before{content:\"\\FBDC\"}.mdi-alpha-h-circle:before{content:\"\\FBDD\"}.mdi-alpha-h-circle-outline:before{content:\"\\FBDE\"}.mdi-alpha-i:before{content:\"I\"}.mdi-alpha-i-box:before{content:\"\\FAF5\"}.mdi-alpha-i-box-outline:before{content:\"\\FBDF\"}.mdi-alpha-i-circle:before{content:\"\\FBE0\"}.mdi-alpha-i-circle-outline:before{content:\"\\FBE1\"}.mdi-alpha-j:before{content:\"J\"}.mdi-alpha-j-box:before{content:\"\\FAF6\"}.mdi-alpha-j-box-outline:before{content:\"\\FBE2\"}.mdi-alpha-j-circle:before{content:\"\\FBE3\"}.mdi-alpha-j-circle-outline:before{content:\"\\FBE4\"}.mdi-alpha-k:before{content:\"K\"}.mdi-alpha-k-box:before{content:\"\\FAF7\"}.mdi-alpha-k-box-outline:before{content:\"\\FBE5\"}.mdi-alpha-k-circle:before{content:\"\\FBE6\"}.mdi-alpha-k-circle-outline:before{content:\"\\FBE7\"}.mdi-alpha-l:before{content:\"L\"}.mdi-alpha-l-box:before{content:\"\\FAF8\"}.mdi-alpha-l-box-outline:before{content:\"\\FBE8\"}.mdi-alpha-l-circle:before{content:\"\\FBE9\"}.mdi-alpha-l-circle-outline:before{content:\"\\FBEA\"}.mdi-alpha-m:before{content:\"M\"}.mdi-alpha-m-box:before{content:\"\\FAF9\"}.mdi-alpha-m-box-outline:before{content:\"\\FBEB\"}.mdi-alpha-m-circle:before{content:\"\\FBEC\"}.mdi-alpha-m-circle-outline:before{content:\"\\FBED\"}.mdi-alpha-n:before{content:\"N\"}.mdi-alpha-n-box:before{content:\"\\FAFA\"}.mdi-alpha-n-box-outline:before{content:\"\\FBEE\"}.mdi-alpha-n-circle:before{content:\"\\FBEF\"}.mdi-alpha-n-circle-outline:before{content:\"\\FBF0\"}.mdi-alpha-o:before{content:\"O\"}.mdi-alpha-o-box:before{content:\"\\FAFB\"}.mdi-alpha-o-box-outline:before{content:\"\\FBF1\"}.mdi-alpha-o-circle:before{content:\"\\FBF2\"}.mdi-alpha-o-circle-outline:before{content:\"\\FBF3\"}.mdi-alpha-p:before{content:\"P\"}.mdi-alpha-p-box:before{content:\"\\FAFC\"}.mdi-alpha-p-box-outline:before{content:\"\\FBF4\"}.mdi-alpha-p-circle:before{content:\"\\FBF5\"}.mdi-alpha-p-circle-outline:before{content:\"\\FBF6\"}.mdi-alpha-q:before{content:\"Q\"}.mdi-alpha-q-box:before{content:\"\\FAFD\"}.mdi-alpha-q-box-outline:before{content:\"\\FBF7\"}.mdi-alpha-q-circle:before{content:\"\\FBF8\"}.mdi-alpha-q-circle-outline:before{content:\"\\FBF9\"}.mdi-alpha-r:before{content:\"R\"}.mdi-alpha-r-box:before{content:\"\\FAFE\"}.mdi-alpha-r-box-outline:before{content:\"\\FBFA\"}.mdi-alpha-r-circle:before{content:\"\\FBFB\"}.mdi-alpha-r-circle-outline:before{content:\"\\FBFC\"}.mdi-alpha-s:before{content:\"S\"}.mdi-alpha-s-box:before{content:\"\\FAFF\"}.mdi-alpha-s-box-outline:before{content:\"\\FBFD\"}.mdi-alpha-s-circle:before{content:\"\\FBFE\"}.mdi-alpha-s-circle-outline:before{content:\"\\FBFF\"}.mdi-alpha-t:before{content:\"T\"}.mdi-alpha-t-box:before{content:\"\\FB00\"}.mdi-alpha-t-box-outline:before{content:\"\\FC00\"}.mdi-alpha-t-circle:before{content:\"\\FC01\"}.mdi-alpha-t-circle-outline:before{content:\"\\FC02\"}.mdi-alpha-u:before{content:\"U\"}.mdi-alpha-u-box:before{content:\"\\FB01\"}.mdi-alpha-u-box-outline:before{content:\"\\FC03\"}.mdi-alpha-u-circle:before{content:\"\\FC04\"}.mdi-alpha-u-circle-outline:before{content:\"\\FC05\"}.mdi-alpha-v:before{content:\"V\"}.mdi-alpha-v-box:before{content:\"\\FB02\"}.mdi-alpha-v-box-outline:before{content:\"\\FC06\"}.mdi-alpha-v-circle:before{content:\"\\FC07\"}.mdi-alpha-v-circle-outline:before{content:\"\\FC08\"}.mdi-alpha-w:before{content:\"W\"}.mdi-alpha-w-box:before{content:\"\\FB03\"}.mdi-alpha-w-box-outline:before{content:\"\\FC09\"}.mdi-alpha-w-circle:before{content:\"\\FC0A\"}.mdi-alpha-w-circle-outline:before{content:\"\\FC0B\"}.mdi-alpha-x:before{content:\"X\"}.mdi-alpha-x-box:before{content:\"\\FB04\"}.mdi-alpha-x-box-outline:before{content:\"\\FC0C\"}.mdi-alpha-x-circle:before{content:\"\\FC0D\"}.mdi-alpha-x-circle-outline:before{content:\"\\FC0E\"}.mdi-alpha-y:before{content:\"Y\"}.mdi-alpha-y-box:before{content:\"\\FB05\"}.mdi-alpha-y-box-outline:before{content:\"\\FC0F\"}.mdi-alpha-y-circle:before{content:\"\\FC10\"}.mdi-alpha-y-circle-outline:before{content:\"\\FC11\"}.mdi-alpha-z:before{content:\"Z\"}.mdi-alpha-z-box:before{content:\"\\FB06\"}.mdi-alpha-z-box-outline:before{content:\"\\FC12\"}.mdi-alpha-z-circle:before{content:\"\\FC13\"}.mdi-alpha-z-circle-outline:before{content:\"\\FC14\"}.mdi-alphabetical:before{content:\"\\F02C\"}.mdi-altimeter:before{content:\"\\F5D7\"}.mdi-amazon:before{content:\"\\F02D\"}.mdi-amazon-alexa:before{content:\"\\F8C5\"}.mdi-amazon-drive:before{content:\"\\F02E\"}.mdi-ambulance:before{content:\"\\F02F\"}.mdi-ammunition:before{content:\"\\FCC4\"}.mdi-ampersand:before{content:\"\\FA8C\"}.mdi-amplifier:before{content:\"\\F030\"}.mdi-anchor:before{content:\"\\F031\"}.mdi-android:before{content:\"\\F032\"}.mdi-android-auto:before{content:\"\\FA8D\"}.mdi-android-debug-bridge:before{content:\"\\F033\"}.mdi-android-head:before{content:\"\\F78F\"}.mdi-android-messages:before{content:\"\\FD21\"}.mdi-android-studio:before{content:\"\\F034\"}.mdi-angle-acute:before{content:\"\\F936\"}.mdi-angle-obtuse:before{content:\"\\F937\"}.mdi-angle-right:before{content:\"\\F938\"}.mdi-angular:before{content:\"\\F6B1\"}.mdi-angularjs:before{content:\"\\F6BE\"}.mdi-animation:before{content:\"\\F5D8\"}.mdi-animation-outline:before{content:\"\\FA8E\"}.mdi-animation-play:before{content:\"\\F939\"}.mdi-animation-play-outline:before{content:\"\\FA8F\"}.mdi-anvil:before{content:\"\\F89A\"}.mdi-apple:before{content:\"\\F035\"}.mdi-apple-finder:before{content:\"\\F036\"}.mdi-apple-icloud:before{content:\"\\F038\"}.mdi-apple-ios:before{content:\"\\F037\"}.mdi-apple-keyboard-caps:before{content:\"\\F632\"}.mdi-apple-keyboard-command:before{content:\"\\F633\"}.mdi-apple-keyboard-control:before{content:\"\\F634\"}.mdi-apple-keyboard-option:before{content:\"\\F635\"}.mdi-apple-keyboard-shift:before{content:\"\\F636\"}.mdi-apple-safari:before{content:\"\\F039\"}.mdi-application:before{content:\"\\F614\"}.mdi-application-export:before{content:\"\\FD89\"}.mdi-application-import:before{content:\"\\FD8A\"}.mdi-apps:before{content:\"\\F03B\"}.mdi-apps-box:before{content:\"\\FD22\"}.mdi-arch:before{content:\"\\F8C6\"}.mdi-archive:before{content:\"\\F03C\"}.mdi-arrange-bring-forward:before{content:\"\\F03D\"}.mdi-arrange-bring-to-front:before{content:\"\\F03E\"}.mdi-arrange-send-backward:before{content:\"\\F03F\"}.mdi-arrange-send-to-back:before{content:\"\\F040\"}.mdi-arrow-all:before{content:\"\\F041\"}.mdi-arrow-bottom-left:before{content:\"\\F042\"}.mdi-arrow-bottom-left-bold-outline:before{content:\"\\F9B6\"}.mdi-arrow-bottom-left-thick:before{content:\"\\F9B7\"}.mdi-arrow-bottom-right:before{content:\"\\F043\"}.mdi-arrow-bottom-right-bold-outline:before{content:\"\\F9B8\"}.mdi-arrow-bottom-right-thick:before{content:\"\\F9B9\"}.mdi-arrow-collapse:before{content:\"\\F615\"}.mdi-arrow-collapse-all:before{content:\"\\F044\"}.mdi-arrow-collapse-down:before{content:\"\\F791\"}.mdi-arrow-collapse-horizontal:before{content:\"\\F84B\"}.mdi-arrow-collapse-left:before{content:\"\\F792\"}.mdi-arrow-collapse-right:before{content:\"\\F793\"}.mdi-arrow-collapse-up:before{content:\"\\F794\"}.mdi-arrow-collapse-vertical:before{content:\"\\F84C\"}.mdi-arrow-decision:before{content:\"\\F9BA\"}.mdi-arrow-decision-auto:before{content:\"\\F9BB\"}.mdi-arrow-decision-auto-outline:before{content:\"\\F9BC\"}.mdi-arrow-decision-outline:before{content:\"\\F9BD\"}.mdi-arrow-down:before{content:\"\\F045\"}.mdi-arrow-down-bold:before{content:\"\\F72D\"}.mdi-arrow-down-bold-box:before{content:\"\\F72E\"}.mdi-arrow-down-bold-box-outline:before{content:\"\\F72F\"}.mdi-arrow-down-bold-circle:before{content:\"\\F047\"}.mdi-arrow-down-bold-circle-outline:before{content:\"\\F048\"}.mdi-arrow-down-bold-hexagon-outline:before{content:\"\\F049\"}.mdi-arrow-down-bold-outline:before{content:\"\\F9BE\"}.mdi-arrow-down-box:before{content:\"\\F6BF\"}.mdi-arrow-down-circle:before{content:\"\\FCB7\"}.mdi-arrow-down-circle-outline:before{content:\"\\FCB8\"}.mdi-arrow-down-drop-circle:before{content:\"\\F04A\"}.mdi-arrow-down-drop-circle-outline:before{content:\"\\F04B\"}.mdi-arrow-down-thick:before{content:\"\\F046\"}.mdi-arrow-expand:before{content:\"\\F616\"}.mdi-arrow-expand-all:before{content:\"\\F04C\"}.mdi-arrow-expand-down:before{content:\"\\F795\"}.mdi-arrow-expand-horizontal:before{content:\"\\F84D\"}.mdi-arrow-expand-left:before{content:\"\\F796\"}.mdi-arrow-expand-right:before{content:\"\\F797\"}.mdi-arrow-expand-up:before{content:\"\\F798\"}.mdi-arrow-expand-vertical:before{content:\"\\F84E\"}.mdi-arrow-left:before{content:\"\\F04D\"}.mdi-arrow-left-bold:before{content:\"\\F730\"}.mdi-arrow-left-bold-box:before{content:\"\\F731\"}.mdi-arrow-left-bold-box-outline:before{content:\"\\F732\"}.mdi-arrow-left-bold-circle:before{content:\"\\F04F\"}.mdi-arrow-left-bold-circle-outline:before{content:\"\\F050\"}.mdi-arrow-left-bold-hexagon-outline:before{content:\"\\F051\"}.mdi-arrow-left-bold-outline:before{content:\"\\F9BF\"}.mdi-arrow-left-box:before{content:\"\\F6C0\"}.mdi-arrow-left-circle:before{content:\"\\FCB9\"}.mdi-arrow-left-circle-outline:before{content:\"\\FCBA\"}.mdi-arrow-left-drop-circle:before{content:\"\\F052\"}.mdi-arrow-left-drop-circle-outline:before{content:\"\\F053\"}.mdi-arrow-left-right-bold-outline:before{content:\"\\F9C0\"}.mdi-arrow-left-thick:before{content:\"\\F04E\"}.mdi-arrow-right:before{content:\"\\F054\"}.mdi-arrow-right-bold:before{content:\"\\F733\"}.mdi-arrow-right-bold-box:before{content:\"\\F734\"}.mdi-arrow-right-bold-box-outline:before{content:\"\\F735\"}.mdi-arrow-right-bold-circle:before{content:\"\\F056\"}.mdi-arrow-right-bold-circle-outline:before{content:\"\\F057\"}.mdi-arrow-right-bold-hexagon-outline:before{content:\"\\F058\"}.mdi-arrow-right-bold-outline:before{content:\"\\F9C1\"}.mdi-arrow-right-box:before{content:\"\\F6C1\"}.mdi-arrow-right-circle:before{content:\"\\FCBB\"}.mdi-arrow-right-circle-outline:before{content:\"\\FCBC\"}.mdi-arrow-right-drop-circle:before{content:\"\\F059\"}.mdi-arrow-right-drop-circle-outline:before{content:\"\\F05A\"}.mdi-arrow-right-thick:before{content:\"\\F055\"}.mdi-arrow-split-horizontal:before{content:\"\\F93A\"}.mdi-arrow-split-vertical:before{content:\"\\F93B\"}.mdi-arrow-top-left:before{content:\"\\F05B\"}.mdi-arrow-top-left-bold-outline:before{content:\"\\F9C2\"}.mdi-arrow-top-left-thick:before{content:\"\\F9C3\"}.mdi-arrow-top-right:before{content:\"\\F05C\"}.mdi-arrow-top-right-bold-outline:before{content:\"\\F9C4\"}.mdi-arrow-top-right-thick:before{content:\"\\F9C5\"}.mdi-arrow-up:before{content:\"\\F05D\"}.mdi-arrow-up-bold:before{content:\"\\F736\"}.mdi-arrow-up-bold-box:before{content:\"\\F737\"}.mdi-arrow-up-bold-box-outline:before{content:\"\\F738\"}.mdi-arrow-up-bold-circle:before{content:\"\\F05F\"}.mdi-arrow-up-bold-circle-outline:before{content:\"\\F060\"}.mdi-arrow-up-bold-hexagon-outline:before{content:\"\\F061\"}.mdi-arrow-up-bold-outline:before{content:\"\\F9C6\"}.mdi-arrow-up-box:before{content:\"\\F6C2\"}.mdi-arrow-up-circle:before{content:\"\\FCBD\"}.mdi-arrow-up-circle-outline:before{content:\"\\FCBE\"}.mdi-arrow-up-down-bold-outline:before{content:\"\\F9C7\"}.mdi-arrow-up-drop-circle:before{content:\"\\F062\"}.mdi-arrow-up-drop-circle-outline:before{content:\"\\F063\"}.mdi-arrow-up-thick:before{content:\"\\F05E\"}.mdi-artist:before{content:\"\\F802\"}.mdi-artist-outline:before{content:\"\\FCC5\"}.mdi-artstation:before{content:\"\\FB37\"}.mdi-aspect-ratio:before{content:\"\\FA23\"}.mdi-assistant:before{content:\"\\F064\"}.mdi-asterisk:before{content:\"\\F6C3\"}.mdi-at:before{content:\"\\F065\"}.mdi-atlassian:before{content:\"\\F803\"}.mdi-atm:before{content:\"\\FD23\"}.mdi-atom:before{content:\"\\F767\"}.mdi-attachment:before{content:\"\\F066\"}.mdi-audio-video:before{content:\"\\F93C\"}.mdi-audiobook:before{content:\"\\F067\"}.mdi-augmented-reality:before{content:\"\\F84F\"}.mdi-auto-fix:before{content:\"\\F068\"}.mdi-auto-upload:before{content:\"\\F069\"}.mdi-autorenew:before{content:\"\\F06A\"}.mdi-av-timer:before{content:\"\\F06B\"}.mdi-axe:before{content:\"\\F8C7\"}.mdi-axis:before{content:\"\\FD24\"}.mdi-axis-arrow:before{content:\"\\FD25\"}.mdi-axis-arrow-lock:before{content:\"\\FD26\"}.mdi-axis-lock:before{content:\"\\FD27\"}.mdi-axis-x-arrow:before{content:\"\\FD28\"}.mdi-axis-x-arrow-lock:before{content:\"\\FD29\"}.mdi-axis-x-rotate-clockwise:before{content:\"\\FD2A\"}.mdi-axis-x-rotate-counterclockwise:before{content:\"\\FD2B\"}.mdi-axis-x-y-arrow-lock:before{content:\"\\FD2C\"}.mdi-axis-y-arrow:before{content:\"\\FD2D\"}.mdi-axis-y-arrow-lock:before{content:\"\\FD2E\"}.mdi-axis-y-rotate-clockwise:before{content:\"\\FD2F\"}.mdi-axis-y-rotate-counterclockwise:before{content:\"\\FD30\"}.mdi-axis-z-arrow:before{content:\"\\FD31\"}.mdi-axis-z-arrow-lock:before{content:\"\\FD32\"}.mdi-axis-z-rotate-clockwise:before{content:\"\\FD33\"}.mdi-axis-z-rotate-counterclockwise:before{content:\"\\FD34\"}.mdi-azure:before{content:\"\\F804\"}.mdi-babel:before{content:\"\\FA24\"}.mdi-baby:before{content:\"\\F06C\"}.mdi-baby-buggy:before{content:\"\\F68E\"}.mdi-backburger:before{content:\"\\F06D\"}.mdi-backspace:before{content:\"\\F06E\"}.mdi-backspace-outline:before{content:\"\\FB38\"}.mdi-backup-restore:before{content:\"\\F06F\"}.mdi-badminton:before{content:\"\\F850\"}.mdi-balloon:before{content:\"\\FA25\"}.mdi-ballot:before{content:\"\\F9C8\"}.mdi-ballot-outline:before{content:\"\\F9C9\"}.mdi-ballot-recount:before{content:\"\\FC15\"}.mdi-ballot-recount-outline:before{content:\"\\FC16\"}.mdi-bandage:before{content:\"\\FD8B\"}.mdi-bandcamp:before{content:\"\\F674\"}.mdi-bank:before{content:\"\\F070\"}.mdi-bank-minus:before{content:\"\\FD8C\"}.mdi-bank-plus:before{content:\"\\FD8D\"}.mdi-bank-remove:before{content:\"\\FD8E\"}.mdi-bank-transfer:before{content:\"\\FA26\"}.mdi-bank-transfer-in:before{content:\"\\FA27\"}.mdi-bank-transfer-out:before{content:\"\\FA28\"}.mdi-barcode:before{content:\"\\F071\"}.mdi-barcode-scan:before{content:\"\\F072\"}.mdi-barley:before{content:\"\\F073\"}.mdi-barley-off:before{content:\"\\FB39\"}.mdi-barn:before{content:\"\\FB3A\"}.mdi-barrel:before{content:\"\\F074\"}.mdi-baseball:before{content:\"\\F851\"}.mdi-baseball-bat:before{content:\"\\F852\"}.mdi-basecamp:before{content:\"\\F075\"}.mdi-basket:before{content:\"\\F076\"}.mdi-basket-fill:before{content:\"\\F077\"}.mdi-basket-unfill:before{content:\"\\F078\"}.mdi-basketball:before{content:\"\\F805\"}.mdi-basketball-hoop:before{content:\"\\FC17\"}.mdi-basketball-hoop-outline:before{content:\"\\FC18\"}.mdi-bat:before{content:\"\\FB3B\"}.mdi-battery:before{content:\"\\F079\"}.mdi-battery-10:before{content:\"\\F07A\"}.mdi-battery-10-bluetooth:before{content:\"\\F93D\"}.mdi-battery-20:before{content:\"\\F07B\"}.mdi-battery-20-bluetooth:before{content:\"\\F93E\"}.mdi-battery-30:before{content:\"\\F07C\"}.mdi-battery-30-bluetooth:before{content:\"\\F93F\"}.mdi-battery-40:before{content:\"\\F07D\"}.mdi-battery-40-bluetooth:before{content:\"\\F940\"}.mdi-battery-50:before{content:\"\\F07E\"}.mdi-battery-50-bluetooth:before{content:\"\\F941\"}.mdi-battery-60:before{content:\"\\F07F\"}.mdi-battery-60-bluetooth:before{content:\"\\F942\"}.mdi-battery-70:before{content:\"\\F080\"}.mdi-battery-70-bluetooth:before{content:\"\\F943\"}.mdi-battery-80:before{content:\"\\F081\"}.mdi-battery-80-bluetooth:before{content:\"\\F944\"}.mdi-battery-90:before{content:\"\\F082\"}.mdi-battery-90-bluetooth:before{content:\"\\F945\"}.mdi-battery-alert:before{content:\"\\F083\"}.mdi-battery-alert-bluetooth:before{content:\"\\F946\"}.mdi-battery-bluetooth:before{content:\"\\F947\"}.mdi-battery-bluetooth-variant:before{content:\"\\F948\"}.mdi-battery-charging:before{content:\"\\F084\"}.mdi-battery-charging-10:before{content:\"\\F89B\"}.mdi-battery-charging-100:before{content:\"\\F085\"}.mdi-battery-charging-20:before{content:\"\\F086\"}.mdi-battery-charging-30:before{content:\"\\F087\"}.mdi-battery-charging-40:before{content:\"\\F088\"}.mdi-battery-charging-50:before{content:\"\\F89C\"}.mdi-battery-charging-60:before{content:\"\\F089\"}.mdi-battery-charging-70:before{content:\"\\F89D\"}.mdi-battery-charging-80:before{content:\"\\F08A\"}.mdi-battery-charging-90:before{content:\"\\F08B\"}.mdi-battery-charging-outline:before{content:\"\\F89E\"}.mdi-battery-charging-wireless:before{content:\"\\F806\"}.mdi-battery-charging-wireless-10:before{content:\"\\F807\"}.mdi-battery-charging-wireless-20:before{content:\"\\F808\"}.mdi-battery-charging-wireless-30:before{content:\"\\F809\"}.mdi-battery-charging-wireless-40:before{content:\"\\F80A\"}.mdi-battery-charging-wireless-50:before{content:\"\\F80B\"}.mdi-battery-charging-wireless-60:before{content:\"\\F80C\"}.mdi-battery-charging-wireless-70:before{content:\"\\F80D\"}.mdi-battery-charging-wireless-80:before{content:\"\\F80E\"}.mdi-battery-charging-wireless-90:before{content:\"\\F80F\"}.mdi-battery-charging-wireless-alert:before{content:\"\\F810\"}.mdi-battery-charging-wireless-outline:before{content:\"\\F811\"}.mdi-battery-minus:before{content:\"\\F08C\"}.mdi-battery-negative:before{content:\"\\F08D\"}.mdi-battery-outline:before{content:\"\\F08E\"}.mdi-battery-plus:before{content:\"\\F08F\"}.mdi-battery-positive:before{content:\"\\F090\"}.mdi-battery-unknown:before{content:\"\\F091\"}.mdi-battery-unknown-bluetooth:before{content:\"\\F949\"}.mdi-battlenet:before{content:\"\\FB3C\"}.mdi-beach:before{content:\"\\F092\"}.mdi-beaker:before{content:\"\\FCC6\"}.mdi-beaker-outline:before{content:\"\\F68F\"}.mdi-beats:before{content:\"\\F097\"}.mdi-bed-empty:before{content:\"\\F89F\"}.mdi-beer:before{content:\"\\F098\"}.mdi-behance:before{content:\"\\F099\"}.mdi-bell:before{content:\"\\F09A\"}.mdi-bell-alert:before{content:\"\\FD35\"}.mdi-bell-circle:before{content:\"\\FD36\"}.mdi-bell-circle-outline:before{content:\"\\FD37\"}.mdi-bell-off:before{content:\"\\F09B\"}.mdi-bell-off-outline:before{content:\"\\FA90\"}.mdi-bell-outline:before{content:\"\\F09C\"}.mdi-bell-plus:before{content:\"\\F09D\"}.mdi-bell-plus-outline:before{content:\"\\FA91\"}.mdi-bell-ring:before{content:\"\\F09E\"}.mdi-bell-ring-outline:before{content:\"\\F09F\"}.mdi-bell-sleep:before{content:\"\\F0A0\"}.mdi-bell-sleep-outline:before{content:\"\\FA92\"}.mdi-beta:before{content:\"\\F0A1\"}.mdi-betamax:before{content:\"\\F9CA\"}.mdi-bible:before{content:\"\\F0A2\"}.mdi-bike:before{content:\"\\F0A3\"}.mdi-billiards:before{content:\"\\FB3D\"}.mdi-billiards-rack:before{content:\"\\FB3E\"}.mdi-bing:before{content:\"\\F0A4\"}.mdi-binoculars:before{content:\"\\F0A5\"}.mdi-bio:before{content:\"\\F0A6\"}.mdi-biohazard:before{content:\"\\F0A7\"}.mdi-bitbucket:before{content:\"\\F0A8\"}.mdi-bitcoin:before{content:\"\\F812\"}.mdi-black-mesa:before{content:\"\\F0A9\"}.mdi-blackberry:before{content:\"\\F0AA\"}.mdi-blender:before{content:\"\\FCC7\"}.mdi-blender-software:before{content:\"\\F0AB\"}.mdi-blinds:before{content:\"\\F0AC\"}.mdi-block-helper:before{content:\"\\F0AD\"}.mdi-blogger:before{content:\"\\F0AE\"}.mdi-blood-bag:before{content:\"\\FCC8\"}.mdi-bluetooth:before{content:\"\\F0AF\"}.mdi-bluetooth-audio:before{content:\"\\F0B0\"}.mdi-bluetooth-connect:before{content:\"\\F0B1\"}.mdi-bluetooth-off:before{content:\"\\F0B2\"}.mdi-bluetooth-settings:before{content:\"\\F0B3\"}.mdi-bluetooth-transfer:before{content:\"\\F0B4\"}.mdi-blur:before{content:\"\\F0B5\"}.mdi-blur-linear:before{content:\"\\F0B6\"}.mdi-blur-off:before{content:\"\\F0B7\"}.mdi-blur-radial:before{content:\"\\F0B8\"}.mdi-bolnisi-cross:before{content:\"\\FCC9\"}.mdi-bolt:before{content:\"\\FD8F\"}.mdi-bomb:before{content:\"\\F690\"}.mdi-bomb-off:before{content:\"\\F6C4\"}.mdi-bone:before{content:\"\\F0B9\"}.mdi-book:before{content:\"\\F0BA\"}.mdi-book-lock:before{content:\"\\F799\"}.mdi-book-lock-open:before{content:\"\\F79A\"}.mdi-book-minus:before{content:\"\\F5D9\"}.mdi-book-multiple:before{content:\"\\F0BB\"}.mdi-book-multiple-minus:before{content:\"\\FA93\"}.mdi-book-multiple-plus:before{content:\"\\FA94\"}.mdi-book-multiple-remove:before{content:\"\\FA95\"}.mdi-book-multiple-variant:before{content:\"\\F0BC\"}.mdi-book-open:before{content:\"\\F0BD\"}.mdi-book-open-outline:before{content:\"\\FB3F\"}.mdi-book-open-page-variant:before{content:\"\\F5DA\"}.mdi-book-open-variant:before{content:\"\\F0BE\"}.mdi-book-outline:before{content:\"\\FB40\"}.mdi-book-plus:before{content:\"\\F5DB\"}.mdi-book-remove:before{content:\"\\FA96\"}.mdi-book-variant:before{content:\"\\F0BF\"}.mdi-bookmark:before{content:\"\\F0C0\"}.mdi-bookmark-check:before{content:\"\\F0C1\"}.mdi-bookmark-minus:before{content:\"\\F9CB\"}.mdi-bookmark-minus-outline:before{content:\"\\F9CC\"}.mdi-bookmark-music:before{content:\"\\F0C2\"}.mdi-bookmark-off:before{content:\"\\F9CD\"}.mdi-bookmark-off-outline:before{content:\"\\F9CE\"}.mdi-bookmark-outline:before{content:\"\\F0C3\"}.mdi-bookmark-plus:before{content:\"\\F0C5\"}.mdi-bookmark-plus-outline:before{content:\"\\F0C4\"}.mdi-bookmark-remove:before{content:\"\\F0C6\"}.mdi-boombox:before{content:\"\\F5DC\"}.mdi-bootstrap:before{content:\"\\F6C5\"}.mdi-border-all:before{content:\"\\F0C7\"}.mdi-border-all-variant:before{content:\"\\F8A0\"}.mdi-border-bottom:before{content:\"\\F0C8\"}.mdi-border-bottom-variant:before{content:\"\\F8A1\"}.mdi-border-color:before{content:\"\\F0C9\"}.mdi-border-horizontal:before{content:\"\\F0CA\"}.mdi-border-inside:before{content:\"\\F0CB\"}.mdi-border-left:before{content:\"\\F0CC\"}.mdi-border-left-variant:before{content:\"\\F8A2\"}.mdi-border-none:before{content:\"\\F0CD\"}.mdi-border-none-variant:before{content:\"\\F8A3\"}.mdi-border-outside:before{content:\"\\F0CE\"}.mdi-border-right:before{content:\"\\F0CF\"}.mdi-border-right-variant:before{content:\"\\F8A4\"}.mdi-border-style:before{content:\"\\F0D0\"}.mdi-border-top:before{content:\"\\F0D1\"}.mdi-border-top-variant:before{content:\"\\F8A5\"}.mdi-border-vertical:before{content:\"\\F0D2\"}.mdi-bottle-wine:before{content:\"\\F853\"}.mdi-bow-tie:before{content:\"\\F677\"}.mdi-bowl:before{content:\"\\F617\"}.mdi-bowling:before{content:\"\\F0D3\"}.mdi-box:before{content:\"\\F0D4\"}.mdi-box-cutter:before{content:\"\\F0D5\"}.mdi-box-shadow:before{content:\"\\F637\"}.mdi-boxing-glove:before{content:\"\\FB41\"}.mdi-braille:before{content:\"\\F9CF\"}.mdi-brain:before{content:\"\\F9D0\"}.mdi-bread-slice:before{content:\"\\FCCA\"}.mdi-bread-slice-outline:before{content:\"\\FCCB\"}.mdi-bridge:before{content:\"\\F618\"}.mdi-briefcase:before{content:\"\\F0D6\"}.mdi-briefcase-account:before{content:\"\\FCCC\"}.mdi-briefcase-account-outline:before{content:\"\\FCCD\"}.mdi-briefcase-check:before{content:\"\\F0D7\"}.mdi-briefcase-download:before{content:\"\\F0D8\"}.mdi-briefcase-download-outline:before{content:\"\\FC19\"}.mdi-briefcase-edit:before{content:\"\\FA97\"}.mdi-briefcase-edit-outline:before{content:\"\\FC1A\"}.mdi-briefcase-minus:before{content:\"\\FA29\"}.mdi-briefcase-minus-outline:before{content:\"\\FC1B\"}.mdi-briefcase-outline:before{content:\"\\F813\"}.mdi-briefcase-plus:before{content:\"\\FA2A\"}.mdi-briefcase-plus-outline:before{content:\"\\FC1C\"}.mdi-briefcase-remove:before{content:\"\\FA2B\"}.mdi-briefcase-remove-outline:before{content:\"\\FC1D\"}.mdi-briefcase-search:before{content:\"\\FA2C\"}.mdi-briefcase-search-outline:before{content:\"\\FC1E\"}.mdi-briefcase-upload:before{content:\"\\F0D9\"}.mdi-briefcase-upload-outline:before{content:\"\\FC1F\"}.mdi-brightness-1:before{content:\"\\F0DA\"}.mdi-brightness-2:before{content:\"\\F0DB\"}.mdi-brightness-3:before{content:\"\\F0DC\"}.mdi-brightness-4:before{content:\"\\F0DD\"}.mdi-brightness-5:before{content:\"\\F0DE\"}.mdi-brightness-6:before{content:\"\\F0DF\"}.mdi-brightness-7:before{content:\"\\F0E0\"}.mdi-brightness-auto:before{content:\"\\F0E1\"}.mdi-brightness-percent:before{content:\"\\FCCE\"}.mdi-broom:before{content:\"\\F0E2\"}.mdi-brush:before{content:\"\\F0E3\"}.mdi-buddhism:before{content:\"\\F94A\"}.mdi-buffer:before{content:\"\\F619\"}.mdi-bug:before{content:\"\\F0E4\"}.mdi-bug-check:before{content:\"\\FA2D\"}.mdi-bug-check-outline:before{content:\"\\FA2E\"}.mdi-bug-outline:before{content:\"\\FA2F\"}.mdi-bugle:before{content:\"\\FD90\"}.mdi-bulldozer:before{content:\"\\FB07\"}.mdi-bullet:before{content:\"\\FCCF\"}.mdi-bulletin-board:before{content:\"\\F0E5\"}.mdi-bullhorn:before{content:\"\\F0E6\"}.mdi-bullhorn-outline:before{content:\"\\FB08\"}.mdi-bullseye:before{content:\"\\F5DD\"}.mdi-bullseye-arrow:before{content:\"\\F8C8\"}.mdi-bus:before{content:\"\\F0E7\"}.mdi-bus-alert:before{content:\"\\FA98\"}.mdi-bus-articulated-end:before{content:\"\\F79B\"}.mdi-bus-articulated-front:before{content:\"\\F79C\"}.mdi-bus-clock:before{content:\"\\F8C9\"}.mdi-bus-double-decker:before{content:\"\\F79D\"}.mdi-bus-school:before{content:\"\\F79E\"}.mdi-bus-side:before{content:\"\\F79F\"}.mdi-cached:before{content:\"\\F0E8\"}.mdi-cactus:before{content:\"\\FD91\"}.mdi-cake:before{content:\"\\F0E9\"}.mdi-cake-layered:before{content:\"\\F0EA\"}.mdi-cake-variant:before{content:\"\\F0EB\"}.mdi-calculator:before{content:\"\\F0EC\"}.mdi-calculator-variant:before{content:\"\\FA99\"}.mdi-calendar:before{content:\"\\F0ED\"}.mdi-calendar-alert:before{content:\"\\FA30\"}.mdi-calendar-blank:before{content:\"\\F0EE\"}.mdi-calendar-blank-outline:before{content:\"\\FB42\"}.mdi-calendar-check:before{content:\"\\F0EF\"}.mdi-calendar-check-outline:before{content:\"\\FC20\"}.mdi-calendar-clock:before{content:\"\\F0F0\"}.mdi-calendar-edit:before{content:\"\\F8A6\"}.mdi-calendar-export:before{content:\"\\FB09\"}.mdi-calendar-heart:before{content:\"\\F9D1\"}.mdi-calendar-import:before{content:\"\\FB0A\"}.mdi-calendar-minus:before{content:\"\\FD38\"}.mdi-calendar-multiple:before{content:\"\\F0F1\"}.mdi-calendar-multiple-check:before{content:\"\\F0F2\"}.mdi-calendar-multiselect:before{content:\"\\FA31\"}.mdi-calendar-outline:before{content:\"\\FB43\"}.mdi-calendar-plus:before{content:\"\\F0F3\"}.mdi-calendar-question:before{content:\"\\F691\"}.mdi-calendar-range:before{content:\"\\F678\"}.mdi-calendar-range-outline:before{content:\"\\FB44\"}.mdi-calendar-remove:before{content:\"\\F0F4\"}.mdi-calendar-remove-outline:before{content:\"\\FC21\"}.mdi-calendar-search:before{content:\"\\F94B\"}.mdi-calendar-star:before{content:\"\\F9D2\"}.mdi-calendar-text:before{content:\"\\F0F5\"}.mdi-calendar-text-outline:before{content:\"\\FC22\"}.mdi-calendar-today:before{content:\"\\F0F6\"}.mdi-calendar-week:before{content:\"\\FA32\"}.mdi-calendar-week-begin:before{content:\"\\FA33\"}.mdi-call-made:before{content:\"\\F0F7\"}.mdi-call-merge:before{content:\"\\F0F8\"}.mdi-call-missed:before{content:\"\\F0F9\"}.mdi-call-received:before{content:\"\\F0FA\"}.mdi-call-split:before{content:\"\\F0FB\"}.mdi-camcorder:before{content:\"\\F0FC\"}.mdi-camcorder-box:before{content:\"\\F0FD\"}.mdi-camcorder-box-off:before{content:\"\\F0FE\"}.mdi-camcorder-off:before{content:\"\\F0FF\"}.mdi-camera:before{content:\"\\F100\"}.mdi-camera-account:before{content:\"\\F8CA\"}.mdi-camera-burst:before{content:\"\\F692\"}.mdi-camera-control:before{content:\"\\FB45\"}.mdi-camera-enhance:before{content:\"\\F101\"}.mdi-camera-enhance-outline:before{content:\"\\FB46\"}.mdi-camera-front:before{content:\"\\F102\"}.mdi-camera-front-variant:before{content:\"\\F103\"}.mdi-camera-gopro:before{content:\"\\F7A0\"}.mdi-camera-image:before{content:\"\\F8CB\"}.mdi-camera-iris:before{content:\"\\F104\"}.mdi-camera-metering-center:before{content:\"\\F7A1\"}.mdi-camera-metering-matrix:before{content:\"\\F7A2\"}.mdi-camera-metering-partial:before{content:\"\\F7A3\"}.mdi-camera-metering-spot:before{content:\"\\F7A4\"}.mdi-camera-off:before{content:\"\\F5DF\"}.mdi-camera-outline:before{content:\"\\FD39\"}.mdi-camera-party-mode:before{content:\"\\F105\"}.mdi-camera-rear:before{content:\"\\F106\"}.mdi-camera-rear-variant:before{content:\"\\F107\"}.mdi-camera-switch:before{content:\"\\F108\"}.mdi-camera-timer:before{content:\"\\F109\"}.mdi-camera-wireless:before{content:\"\\FD92\"}.mdi-camera-wireless-outline:before{content:\"\\FD93\"}.mdi-cancel:before{content:\"\\F739\"}.mdi-candle:before{content:\"\\F5E2\"}.mdi-candycane:before{content:\"\\F10A\"}.mdi-cannabis:before{content:\"\\F7A5\"}.mdi-caps-lock:before{content:\"\\FA9A\"}.mdi-car:before{content:\"\\F10B\"}.mdi-car-battery:before{content:\"\\F10C\"}.mdi-car-brake-abs:before{content:\"\\FC23\"}.mdi-car-brake-alert:before{content:\"\\FC24\"}.mdi-car-brake-hold:before{content:\"\\FD3A\"}.mdi-car-brake-parking:before{content:\"\\FD3B\"}.mdi-car-connected:before{content:\"\\F10D\"}.mdi-car-convertible:before{content:\"\\F7A6\"}.mdi-car-cruise-control:before{content:\"\\FD3C\"}.mdi-car-defrost-front:before{content:\"\\FD3D\"}.mdi-car-defrost-rear:before{content:\"\\FD3E\"}.mdi-car-door:before{content:\"\\FB47\"}.mdi-car-electric:before{content:\"\\FB48\"}.mdi-car-esp:before{content:\"\\FC25\"}.mdi-car-estate:before{content:\"\\F7A7\"}.mdi-car-hatchback:before{content:\"\\F7A8\"}.mdi-car-key:before{content:\"\\FB49\"}.mdi-car-light-dimmed:before{content:\"\\FC26\"}.mdi-car-light-fog:before{content:\"\\FC27\"}.mdi-car-light-high:before{content:\"\\FC28\"}.mdi-car-limousine:before{content:\"\\F8CC\"}.mdi-car-multiple:before{content:\"\\FB4A\"}.mdi-car-parking-lights:before{content:\"\\FD3F\"}.mdi-car-pickup:before{content:\"\\F7A9\"}.mdi-car-side:before{content:\"\\F7AA\"}.mdi-car-sports:before{content:\"\\F7AB\"}.mdi-car-tire-alert:before{content:\"\\FC29\"}.mdi-car-traction-control:before{content:\"\\FD40\"}.mdi-car-wash:before{content:\"\\F10E\"}.mdi-caravan:before{content:\"\\F7AC\"}.mdi-card:before{content:\"\\FB4B\"}.mdi-card-bulleted:before{content:\"\\FB4C\"}.mdi-card-bulleted-off:before{content:\"\\FB4D\"}.mdi-card-bulleted-off-outline:before{content:\"\\FB4E\"}.mdi-card-bulleted-outline:before{content:\"\\FB4F\"}.mdi-card-bulleted-settings:before{content:\"\\FB50\"}.mdi-card-bulleted-settings-outline:before{content:\"\\FB51\"}.mdi-card-outline:before{content:\"\\FB52\"}.mdi-card-text:before{content:\"\\FB53\"}.mdi-card-text-outline:before{content:\"\\FB54\"}.mdi-cards:before{content:\"\\F638\"}.mdi-cards-club:before{content:\"\\F8CD\"}.mdi-cards-diamond:before{content:\"\\F8CE\"}.mdi-cards-heart:before{content:\"\\F8CF\"}.mdi-cards-outline:before{content:\"\\F639\"}.mdi-cards-playing-outline:before{content:\"\\F63A\"}.mdi-cards-spade:before{content:\"\\F8D0\"}.mdi-cards-variant:before{content:\"\\F6C6\"}.mdi-carrot:before{content:\"\\F10F\"}.mdi-carry-on-bag-check:before{content:\"\\FD41\"}.mdi-cart:before{content:\"\\F110\"}.mdi-cart-arrow-down:before{content:\"\\FD42\"}.mdi-cart-arrow-right:before{content:\"\\FC2A\"}.mdi-cart-arrow-up:before{content:\"\\FD43\"}.mdi-cart-minus:before{content:\"\\FD44\"}.mdi-cart-off:before{content:\"\\F66B\"}.mdi-cart-outline:before{content:\"\\F111\"}.mdi-cart-plus:before{content:\"\\F112\"}.mdi-cart-remove:before{content:\"\\FD45\"}.mdi-case-sensitive-alt:before{content:\"\\F113\"}.mdi-cash:before{content:\"\\F114\"}.mdi-cash-100:before{content:\"\\F115\"}.mdi-cash-marker:before{content:\"\\FD94\"}.mdi-cash-multiple:before{content:\"\\F116\"}.mdi-cash-refund:before{content:\"\\FA9B\"}.mdi-cash-register:before{content:\"\\FCD0\"}.mdi-cash-usd:before{content:\"\\F117\"}.mdi-cassette:before{content:\"\\F9D3\"}.mdi-cast:before{content:\"\\F118\"}.mdi-cast-connected:before{content:\"\\F119\"}.mdi-cast-off:before{content:\"\\F789\"}.mdi-castle:before{content:\"\\F11A\"}.mdi-cat:before{content:\"\\F11B\"}.mdi-cctv:before{content:\"\\F7AD\"}.mdi-ceiling-light:before{content:\"\\F768\"}.mdi-cellphone:before{content:\"\\F11C\"}.mdi-cellphone-android:before{content:\"\\F11D\"}.mdi-cellphone-arrow-down:before{content:\"\\F9D4\"}.mdi-cellphone-basic:before{content:\"\\F11E\"}.mdi-cellphone-dock:before{content:\"\\F11F\"}.mdi-cellphone-erase:before{content:\"\\F94C\"}.mdi-cellphone-iphone:before{content:\"\\F120\"}.mdi-cellphone-key:before{content:\"\\F94D\"}.mdi-cellphone-link:before{content:\"\\F121\"}.mdi-cellphone-link-off:before{content:\"\\F122\"}.mdi-cellphone-lock:before{content:\"\\F94E\"}.mdi-cellphone-message:before{content:\"\\F8D2\"}.mdi-cellphone-off:before{content:\"\\F94F\"}.mdi-cellphone-screenshot:before{content:\"\\FA34\"}.mdi-cellphone-settings:before{content:\"\\F123\"}.mdi-cellphone-settings-variant:before{content:\"\\F950\"}.mdi-cellphone-sound:before{content:\"\\F951\"}.mdi-cellphone-text:before{content:\"\\F8D1\"}.mdi-cellphone-wireless:before{content:\"\\F814\"}.mdi-celtic-cross:before{content:\"\\FCD1\"}.mdi-certificate:before{content:\"\\F124\"}.mdi-chair-school:before{content:\"\\F125\"}.mdi-charity:before{content:\"\\FC2B\"}.mdi-chart-arc:before{content:\"\\F126\"}.mdi-chart-areaspline:before{content:\"\\F127\"}.mdi-chart-bar:before{content:\"\\F128\"}.mdi-chart-bar-stacked:before{content:\"\\F769\"}.mdi-chart-bell-curve:before{content:\"\\FC2C\"}.mdi-chart-bubble:before{content:\"\\F5E3\"}.mdi-chart-donut:before{content:\"\\F7AE\"}.mdi-chart-donut-variant:before{content:\"\\F7AF\"}.mdi-chart-gantt:before{content:\"\\F66C\"}.mdi-chart-histogram:before{content:\"\\F129\"}.mdi-chart-line:before{content:\"\\F12A\"}.mdi-chart-line-stacked:before{content:\"\\F76A\"}.mdi-chart-line-variant:before{content:\"\\F7B0\"}.mdi-chart-multiline:before{content:\"\\F8D3\"}.mdi-chart-pie:before{content:\"\\F12B\"}.mdi-chart-scatterplot-hexbin:before{content:\"\\F66D\"}.mdi-chart-timeline:before{content:\"\\F66E\"}.mdi-chat:before{content:\"\\FB55\"}.mdi-chat-alert:before{content:\"\\FB56\"}.mdi-chat-processing:before{content:\"\\FB57\"}.mdi-check:before{content:\"\\F12C\"}.mdi-check-all:before{content:\"\\F12D\"}.mdi-check-box-multiple-outline:before{content:\"\\FC2D\"}.mdi-check-box-outline:before{content:\"\\FC2E\"}.mdi-check-circle:before{content:\"\\F5E0\"}.mdi-check-circle-outline:before{content:\"\\F5E1\"}.mdi-check-decagram:before{content:\"\\F790\"}.mdi-check-network:before{content:\"\\FC2F\"}.mdi-check-network-outline:before{content:\"\\FC30\"}.mdi-check-outline:before{content:\"\\F854\"}.mdi-checkbook:before{content:\"\\FA9C\"}.mdi-checkbox-blank:before{content:\"\\F12E\"}.mdi-checkbox-blank-circle:before{content:\"\\F12F\"}.mdi-checkbox-blank-circle-outline:before{content:\"\\F130\"}.mdi-checkbox-blank-outline:before{content:\"\\F131\"}.mdi-checkbox-intermediate:before{content:\"\\F855\"}.mdi-checkbox-marked:before{content:\"\\F132\"}.mdi-checkbox-marked-circle:before{content:\"\\F133\"}.mdi-checkbox-marked-circle-outline:before{content:\"\\F134\"}.mdi-checkbox-marked-outline:before{content:\"\\F135\"}.mdi-checkbox-multiple-blank:before{content:\"\\F136\"}.mdi-checkbox-multiple-blank-circle:before{content:\"\\F63B\"}.mdi-checkbox-multiple-blank-circle-outline:before{content:\"\\F63C\"}.mdi-checkbox-multiple-blank-outline:before{content:\"\\F137\"}.mdi-checkbox-multiple-marked:before{content:\"\\F138\"}.mdi-checkbox-multiple-marked-circle:before{content:\"\\F63D\"}.mdi-checkbox-multiple-marked-circle-outline:before{content:\"\\F63E\"}.mdi-checkbox-multiple-marked-outline:before{content:\"\\F139\"}.mdi-checkerboard:before{content:\"\\F13A\"}.mdi-chef-hat:before{content:\"\\FB58\"}.mdi-chemical-weapon:before{content:\"\\F13B\"}.mdi-chess-bishop:before{content:\"\\F85B\"}.mdi-chess-king:before{content:\"\\F856\"}.mdi-chess-knight:before{content:\"\\F857\"}.mdi-chess-pawn:before{content:\"\\F858\"}.mdi-chess-queen:before{content:\"\\F859\"}.mdi-chess-rook:before{content:\"\\F85A\"}.mdi-chevron-double-down:before{content:\"\\F13C\"}.mdi-chevron-double-left:before{content:\"\\F13D\"}.mdi-chevron-double-right:before{content:\"\\F13E\"}.mdi-chevron-double-up:before{content:\"\\F13F\"}.mdi-chevron-down:before{content:\"\\F140\"}.mdi-chevron-down-box:before{content:\"\\F9D5\"}.mdi-chevron-down-box-outline:before{content:\"\\F9D6\"}.mdi-chevron-down-circle:before{content:\"\\FB0B\"}.mdi-chevron-down-circle-outline:before{content:\"\\FB0C\"}.mdi-chevron-left:before{content:\"\\F141\"}.mdi-chevron-left-box:before{content:\"\\F9D7\"}.mdi-chevron-left-box-outline:before{content:\"\\F9D8\"}.mdi-chevron-left-circle:before{content:\"\\FB0D\"}.mdi-chevron-left-circle-outline:before{content:\"\\FB0E\"}.mdi-chevron-right:before{content:\"\\F142\"}.mdi-chevron-right-box:before{content:\"\\F9D9\"}.mdi-chevron-right-box-outline:before{content:\"\\F9DA\"}.mdi-chevron-right-circle:before{content:\"\\FB0F\"}.mdi-chevron-right-circle-outline:before{content:\"\\FB10\"}.mdi-chevron-triple-down:before{content:\"\\FD95\"}.mdi-chevron-triple-left:before{content:\"\\FD96\"}.mdi-chevron-triple-right:before{content:\"\\FD97\"}.mdi-chevron-triple-up:before{content:\"\\FD98\"}.mdi-chevron-up:before{content:\"\\F143\"}.mdi-chevron-up-box:before{content:\"\\F9DB\"}.mdi-chevron-up-box-outline:before{content:\"\\F9DC\"}.mdi-chevron-up-circle:before{content:\"\\FB11\"}.mdi-chevron-up-circle-outline:before{content:\"\\FB12\"}.mdi-chili-hot:before{content:\"\\F7B1\"}.mdi-chili-medium:before{content:\"\\F7B2\"}.mdi-chili-mild:before{content:\"\\F7B3\"}.mdi-chip:before{content:\"\\F61A\"}.mdi-christianity:before{content:\"\\F952\"}.mdi-christianity-outline:before{content:\"\\FCD2\"}.mdi-church:before{content:\"\\F144\"}.mdi-circle:before{content:\"\\F764\"}.mdi-circle-edit-outline:before{content:\"\\F8D4\"}.mdi-circle-medium:before{content:\"\\F9DD\"}.mdi-circle-outline:before{content:\"\\F765\"}.mdi-circle-slice-1:before{content:\"\\FA9D\"}.mdi-circle-slice-2:before{content:\"\\FA9E\"}.mdi-circle-slice-3:before{content:\"\\FA9F\"}.mdi-circle-slice-4:before{content:\"\\FAA0\"}.mdi-circle-slice-5:before{content:\"\\FAA1\"}.mdi-circle-slice-6:before{content:\"\\FAA2\"}.mdi-circle-slice-7:before{content:\"\\FAA3\"}.mdi-circle-slice-8:before{content:\"\\FAA4\"}.mdi-circle-small:before{content:\"\\F9DE\"}.mdi-cisco-webex:before{content:\"\\F145\"}.mdi-city:before{content:\"\\F146\"}.mdi-city-variant:before{content:\"\\FA35\"}.mdi-city-variant-outline:before{content:\"\\FA36\"}.mdi-clipboard:before{content:\"\\F147\"}.mdi-clipboard-account:before{content:\"\\F148\"}.mdi-clipboard-account-outline:before{content:\"\\FC31\"}.mdi-clipboard-alert:before{content:\"\\F149\"}.mdi-clipboard-alert-outline:before{content:\"\\FCD3\"}.mdi-clipboard-arrow-down:before{content:\"\\F14A\"}.mdi-clipboard-arrow-down-outline:before{content:\"\\FC32\"}.mdi-clipboard-arrow-left:before{content:\"\\F14B\"}.mdi-clipboard-arrow-left-outline:before{content:\"\\FCD4\"}.mdi-clipboard-arrow-right:before{content:\"\\FCD5\"}.mdi-clipboard-arrow-right-outline:before{content:\"\\FCD6\"}.mdi-clipboard-arrow-up:before{content:\"\\FC33\"}.mdi-clipboard-arrow-up-outline:before{content:\"\\FC34\"}.mdi-clipboard-check:before{content:\"\\F14C\"}.mdi-clipboard-check-outline:before{content:\"\\F8A7\"}.mdi-clipboard-flow:before{content:\"\\F6C7\"}.mdi-clipboard-outline:before{content:\"\\F14D\"}.mdi-clipboard-play:before{content:\"\\FC35\"}.mdi-clipboard-play-outline:before{content:\"\\FC36\"}.mdi-clipboard-plus:before{content:\"\\F750\"}.mdi-clipboard-pulse:before{content:\"\\F85C\"}.mdi-clipboard-pulse-outline:before{content:\"\\F85D\"}.mdi-clipboard-text:before{content:\"\\F14E\"}.mdi-clipboard-text-outline:before{content:\"\\FA37\"}.mdi-clipboard-text-play:before{content:\"\\FC37\"}.mdi-clipboard-text-play-outline:before{content:\"\\FC38\"}.mdi-clippy:before{content:\"\\F14F\"}.mdi-clock:before{content:\"\\F953\"}.mdi-clock-alert:before{content:\"\\F954\"}.mdi-clock-alert-outline:before{content:\"\\F5CE\"}.mdi-clock-end:before{content:\"\\F151\"}.mdi-clock-fast:before{content:\"\\F152\"}.mdi-clock-in:before{content:\"\\F153\"}.mdi-clock-out:before{content:\"\\F154\"}.mdi-clock-outline:before{content:\"\\F150\"}.mdi-clock-start:before{content:\"\\F155\"}.mdi-close:before{content:\"\\F156\"}.mdi-close-box:before{content:\"\\F157\"}.mdi-close-box-multiple:before{content:\"\\FC39\"}.mdi-close-box-multiple-outline:before{content:\"\\FC3A\"}.mdi-close-box-outline:before{content:\"\\F158\"}.mdi-close-circle:before{content:\"\\F159\"}.mdi-close-circle-outline:before{content:\"\\F15A\"}.mdi-close-network:before{content:\"\\F15B\"}.mdi-close-network-outline:before{content:\"\\FC3B\"}.mdi-close-octagon:before{content:\"\\F15C\"}.mdi-close-octagon-outline:before{content:\"\\F15D\"}.mdi-close-outline:before{content:\"\\F6C8\"}.mdi-closed-caption:before{content:\"\\F15E\"}.mdi-closed-caption-outline:before{content:\"\\FD99\"}.mdi-cloud:before{content:\"\\F15F\"}.mdi-cloud-alert:before{content:\"\\F9DF\"}.mdi-cloud-braces:before{content:\"\\F7B4\"}.mdi-cloud-check:before{content:\"\\F160\"}.mdi-cloud-circle:before{content:\"\\F161\"}.mdi-cloud-download:before{content:\"\\F162\"}.mdi-cloud-download-outline:before{content:\"\\FB59\"}.mdi-cloud-off-outline:before{content:\"\\F164\"}.mdi-cloud-outline:before{content:\"\\F163\"}.mdi-cloud-print:before{content:\"\\F165\"}.mdi-cloud-print-outline:before{content:\"\\F166\"}.mdi-cloud-question:before{content:\"\\FA38\"}.mdi-cloud-search:before{content:\"\\F955\"}.mdi-cloud-search-outline:before{content:\"\\F956\"}.mdi-cloud-sync:before{content:\"\\F63F\"}.mdi-cloud-tags:before{content:\"\\F7B5\"}.mdi-cloud-upload:before{content:\"\\F167\"}.mdi-cloud-upload-outline:before{content:\"\\FB5A\"}.mdi-clover:before{content:\"\\F815\"}.mdi-code-array:before{content:\"\\F168\"}.mdi-code-braces:before{content:\"\\F169\"}.mdi-code-brackets:before{content:\"\\F16A\"}.mdi-code-equal:before{content:\"\\F16B\"}.mdi-code-greater-than:before{content:\"\\F16C\"}.mdi-code-greater-than-or-equal:before{content:\"\\F16D\"}.mdi-code-less-than:before{content:\"\\F16E\"}.mdi-code-less-than-or-equal:before{content:\"\\F16F\"}.mdi-code-not-equal:before{content:\"\\F170\"}.mdi-code-not-equal-variant:before{content:\"\\F171\"}.mdi-code-parentheses:before{content:\"\\F172\"}.mdi-code-string:before{content:\"\\F173\"}.mdi-code-tags:before{content:\"\\F174\"}.mdi-code-tags-check:before{content:\"\\F693\"}.mdi-codepen:before{content:\"\\F175\"}.mdi-coffee:before{content:\"\\F176\"}.mdi-coffee-outline:before{content:\"\\F6C9\"}.mdi-coffee-to-go:before{content:\"\\F177\"}.mdi-coffin:before{content:\"\\FB5B\"}.mdi-cogs:before{content:\"\\F8D5\"}.mdi-coin:before{content:\"\\F178\"}.mdi-coins:before{content:\"\\F694\"}.mdi-collage:before{content:\"\\F640\"}.mdi-collapse-all:before{content:\"\\FAA5\"}.mdi-collapse-all-outline:before{content:\"\\FAA6\"}.mdi-color-helper:before{content:\"\\F179\"}.mdi-comment:before{content:\"\\F17A\"}.mdi-comment-account:before{content:\"\\F17B\"}.mdi-comment-account-outline:before{content:\"\\F17C\"}.mdi-comment-alert:before{content:\"\\F17D\"}.mdi-comment-alert-outline:before{content:\"\\F17E\"}.mdi-comment-arrow-left:before{content:\"\\F9E0\"}.mdi-comment-arrow-left-outline:before{content:\"\\F9E1\"}.mdi-comment-arrow-right:before{content:\"\\F9E2\"}.mdi-comment-arrow-right-outline:before{content:\"\\F9E3\"}.mdi-comment-check:before{content:\"\\F17F\"}.mdi-comment-check-outline:before{content:\"\\F180\"}.mdi-comment-eye:before{content:\"\\FA39\"}.mdi-comment-eye-outline:before{content:\"\\FA3A\"}.mdi-comment-multiple:before{content:\"\\F85E\"}.mdi-comment-multiple-outline:before{content:\"\\F181\"}.mdi-comment-outline:before{content:\"\\F182\"}.mdi-comment-plus:before{content:\"\\F9E4\"}.mdi-comment-plus-outline:before{content:\"\\F183\"}.mdi-comment-processing:before{content:\"\\F184\"}.mdi-comment-processing-outline:before{content:\"\\F185\"}.mdi-comment-question:before{content:\"\\F816\"}.mdi-comment-question-outline:before{content:\"\\F186\"}.mdi-comment-remove:before{content:\"\\F5DE\"}.mdi-comment-remove-outline:before{content:\"\\F187\"}.mdi-comment-search:before{content:\"\\FA3B\"}.mdi-comment-search-outline:before{content:\"\\FA3C\"}.mdi-comment-text:before{content:\"\\F188\"}.mdi-comment-text-multiple:before{content:\"\\F85F\"}.mdi-comment-text-multiple-outline:before{content:\"\\F860\"}.mdi-comment-text-outline:before{content:\"\\F189\"}.mdi-compare:before{content:\"\\F18A\"}.mdi-compass:before{content:\"\\F18B\"}.mdi-compass-off:before{content:\"\\FB5C\"}.mdi-compass-off-outline:before{content:\"\\FB5D\"}.mdi-compass-outline:before{content:\"\\F18C\"}.mdi-console:before{content:\"\\F18D\"}.mdi-console-line:before{content:\"\\F7B6\"}.mdi-console-network:before{content:\"\\F8A8\"}.mdi-console-network-outline:before{content:\"\\FC3C\"}.mdi-contact-mail:before{content:\"\\F18E\"}.mdi-contactless-payment:before{content:\"\\FD46\"}.mdi-contacts:before{content:\"\\F6CA\"}.mdi-contain:before{content:\"\\FA3D\"}.mdi-contain-end:before{content:\"\\FA3E\"}.mdi-contain-start:before{content:\"\\FA3F\"}.mdi-content-copy:before{content:\"\\F18F\"}.mdi-content-cut:before{content:\"\\F190\"}.mdi-content-duplicate:before{content:\"\\F191\"}.mdi-content-paste:before{content:\"\\F192\"}.mdi-content-save:before{content:\"\\F193\"}.mdi-content-save-all:before{content:\"\\F194\"}.mdi-content-save-edit:before{content:\"\\FCD7\"}.mdi-content-save-edit-outline:before{content:\"\\FCD8\"}.mdi-content-save-outline:before{content:\"\\F817\"}.mdi-content-save-settings:before{content:\"\\F61B\"}.mdi-content-save-settings-outline:before{content:\"\\FB13\"}.mdi-contrast:before{content:\"\\F195\"}.mdi-contrast-box:before{content:\"\\F196\"}.mdi-contrast-circle:before{content:\"\\F197\"}.mdi-controller-classic:before{content:\"\\FB5E\"}.mdi-controller-classic-outline:before{content:\"\\FB5F\"}.mdi-cookie:before{content:\"\\F198\"}.mdi-copyright:before{content:\"\\F5E6\"}.mdi-cordova:before{content:\"\\F957\"}.mdi-corn:before{content:\"\\F7B7\"}.mdi-counter:before{content:\"\\F199\"}.mdi-cow:before{content:\"\\F19A\"}.mdi-crane:before{content:\"\\F861\"}.mdi-creation:before{content:\"\\F1C9\"}.mdi-creative-commons:before{content:\"\\FD47\"}.mdi-credit-card:before{content:\"\\F19B\"}.mdi-credit-card-marker:before{content:\"\\FD9A\"}.mdi-credit-card-multiple:before{content:\"\\F19C\"}.mdi-credit-card-off:before{content:\"\\F5E4\"}.mdi-credit-card-plus:before{content:\"\\F675\"}.mdi-credit-card-refund:before{content:\"\\FAA7\"}.mdi-credit-card-scan:before{content:\"\\F19D\"}.mdi-credit-card-settings:before{content:\"\\F8D6\"}.mdi-credit-card-wireless:before{content:\"\\FD48\"}.mdi-cricket:before{content:\"\\FD49\"}.mdi-crop:before{content:\"\\F19E\"}.mdi-crop-free:before{content:\"\\F19F\"}.mdi-crop-landscape:before{content:\"\\F1A0\"}.mdi-crop-portrait:before{content:\"\\F1A1\"}.mdi-crop-rotate:before{content:\"\\F695\"}.mdi-crop-square:before{content:\"\\F1A2\"}.mdi-crosshairs:before{content:\"\\F1A3\"}.mdi-crosshairs-gps:before{content:\"\\F1A4\"}.mdi-crown:before{content:\"\\F1A5\"}.mdi-cryengine:before{content:\"\\F958\"}.mdi-crystal-ball:before{content:\"\\FB14\"}.mdi-cube:before{content:\"\\F1A6\"}.mdi-cube-outline:before{content:\"\\F1A7\"}.mdi-cube-scan:before{content:\"\\FB60\"}.mdi-cube-send:before{content:\"\\F1A8\"}.mdi-cube-unfolded:before{content:\"\\F1A9\"}.mdi-cup:before{content:\"\\F1AA\"}.mdi-cup-off:before{content:\"\\F5E5\"}.mdi-cup-water:before{content:\"\\F1AB\"}.mdi-cupcake:before{content:\"\\F959\"}.mdi-curling:before{content:\"\\F862\"}.mdi-currency-bdt:before{content:\"\\F863\"}.mdi-currency-brl:before{content:\"\\FB61\"}.mdi-currency-btc:before{content:\"\\F1AC\"}.mdi-currency-chf:before{content:\"\\F7B8\"}.mdi-currency-cny:before{content:\"\\F7B9\"}.mdi-currency-eth:before{content:\"\\F7BA\"}.mdi-currency-eur:before{content:\"\\F1AD\"}.mdi-currency-gbp:before{content:\"\\F1AE\"}.mdi-currency-ils:before{content:\"\\FC3D\"}.mdi-currency-inr:before{content:\"\\F1AF\"}.mdi-currency-jpy:before{content:\"\\F7BB\"}.mdi-currency-krw:before{content:\"\\F7BC\"}.mdi-currency-kzt:before{content:\"\\F864\"}.mdi-currency-ngn:before{content:\"\\F1B0\"}.mdi-currency-php:before{content:\"\\F9E5\"}.mdi-currency-rub:before{content:\"\\F1B1\"}.mdi-currency-sign:before{content:\"\\F7BD\"}.mdi-currency-try:before{content:\"\\F1B2\"}.mdi-currency-twd:before{content:\"\\F7BE\"}.mdi-currency-usd:before{content:\"\\F1B3\"}.mdi-currency-usd-off:before{content:\"\\F679\"}.mdi-current-ac:before{content:\"\\F95A\"}.mdi-current-dc:before{content:\"\\F95B\"}.mdi-cursor-default:before{content:\"\\F1B4\"}.mdi-cursor-default-click:before{content:\"\\FCD9\"}.mdi-cursor-default-click-outline:before{content:\"\\FCDA\"}.mdi-cursor-default-outline:before{content:\"\\F1B5\"}.mdi-cursor-move:before{content:\"\\F1B6\"}.mdi-cursor-pointer:before{content:\"\\F1B7\"}.mdi-cursor-text:before{content:\"\\F5E7\"}.mdi-database:before{content:\"\\F1B8\"}.mdi-database-check:before{content:\"\\FAA8\"}.mdi-database-edit:before{content:\"\\FB62\"}.mdi-database-export:before{content:\"\\F95D\"}.mdi-database-import:before{content:\"\\F95C\"}.mdi-database-lock:before{content:\"\\FAA9\"}.mdi-database-minus:before{content:\"\\F1B9\"}.mdi-database-plus:before{content:\"\\F1BA\"}.mdi-database-refresh:before{content:\"\\FCDB\"}.mdi-database-remove:before{content:\"\\FCDC\"}.mdi-database-search:before{content:\"\\F865\"}.mdi-database-settings:before{content:\"\\FCDD\"}.mdi-death-star:before{content:\"\\F8D7\"}.mdi-death-star-variant:before{content:\"\\F8D8\"}.mdi-deathly-hallows:before{content:\"\\FB63\"}.mdi-debian:before{content:\"\\F8D9\"}.mdi-debug-step-into:before{content:\"\\F1BB\"}.mdi-debug-step-out:before{content:\"\\F1BC\"}.mdi-debug-step-over:before{content:\"\\F1BD\"}.mdi-decagram:before{content:\"\\F76B\"}.mdi-decagram-outline:before{content:\"\\F76C\"}.mdi-decimal-decrease:before{content:\"\\F1BE\"}.mdi-decimal-increase:before{content:\"\\F1BF\"}.mdi-delete:before{content:\"\\F1C0\"}.mdi-delete-circle:before{content:\"\\F682\"}.mdi-delete-circle-outline:before{content:\"\\FB64\"}.mdi-delete-empty:before{content:\"\\F6CB\"}.mdi-delete-forever:before{content:\"\\F5E8\"}.mdi-delete-forever-outline:before{content:\"\\FB65\"}.mdi-delete-outline:before{content:\"\\F9E6\"}.mdi-delete-restore:before{content:\"\\F818\"}.mdi-delete-sweep:before{content:\"\\F5E9\"}.mdi-delete-sweep-outline:before{content:\"\\FC3E\"}.mdi-delete-variant:before{content:\"\\F1C1\"}.mdi-delta:before{content:\"\\F1C2\"}.mdi-desk-lamp:before{content:\"\\F95E\"}.mdi-deskphone:before{content:\"\\F1C3\"}.mdi-desktop-classic:before{content:\"\\F7BF\"}.mdi-desktop-mac:before{content:\"\\F1C4\"}.mdi-desktop-mac-dashboard:before{content:\"\\F9E7\"}.mdi-desktop-tower:before{content:\"\\F1C5\"}.mdi-desktop-tower-monitor:before{content:\"\\FAAA\"}.mdi-details:before{content:\"\\F1C6\"}.mdi-dev-to:before{content:\"\\FD4A\"}.mdi-developer-board:before{content:\"\\F696\"}.mdi-deviantart:before{content:\"\\F1C7\"}.mdi-dialpad:before{content:\"\\F61C\"}.mdi-diameter:before{content:\"\\FC3F\"}.mdi-diameter-outline:before{content:\"\\FC40\"}.mdi-diameter-variant:before{content:\"\\FC41\"}.mdi-diamond:before{content:\"\\FB66\"}.mdi-diamond-outline:before{content:\"\\FB67\"}.mdi-diamond-stone:before{content:\"\\F1C8\"}.mdi-dice-1:before{content:\"\\F1CA\"}.mdi-dice-2:before{content:\"\\F1CB\"}.mdi-dice-3:before{content:\"\\F1CC\"}.mdi-dice-4:before{content:\"\\F1CD\"}.mdi-dice-5:before{content:\"\\F1CE\"}.mdi-dice-6:before{content:\"\\F1CF\"}.mdi-dice-d10:before{content:\"\\F76E\"}.mdi-dice-d12:before{content:\"\\F866\"}.mdi-dice-d20:before{content:\"\\F5EA\"}.mdi-dice-d4:before{content:\"\\F5EB\"}.mdi-dice-d6:before{content:\"\\F5EC\"}.mdi-dice-d8:before{content:\"\\F5ED\"}.mdi-dice-multiple:before{content:\"\\F76D\"}.mdi-dictionary:before{content:\"\\F61D\"}.mdi-dip-switch:before{content:\"\\F7C0\"}.mdi-directions:before{content:\"\\F1D0\"}.mdi-directions-fork:before{content:\"\\F641\"}.mdi-disc:before{content:\"\\F5EE\"}.mdi-disc-alert:before{content:\"\\F1D1\"}.mdi-disc-player:before{content:\"\\F95F\"}.mdi-discord:before{content:\"\\F66F\"}.mdi-dishwasher:before{content:\"\\FAAB\"}.mdi-disqus:before{content:\"\\F1D2\"}.mdi-disqus-outline:before{content:\"\\F1D3\"}.mdi-diving-flippers:before{content:\"\\FD9B\"}.mdi-diving-helmet:before{content:\"\\FD9C\"}.mdi-diving-scuba:before{content:\"\\FD9D\"}.mdi-diving-scuba-flag:before{content:\"\\FD9E\"}.mdi-diving-scuba-tank:before{content:\"\\FD9F\"}.mdi-diving-scuba-tank-multiple:before{content:\"\\FDA0\"}.mdi-diving-snorkel:before{content:\"\\FDA1\"}.mdi-division:before{content:\"\\F1D4\"}.mdi-division-box:before{content:\"\\F1D5\"}.mdi-dlna:before{content:\"\\FA40\"}.mdi-dna:before{content:\"\\F683\"}.mdi-dns:before{content:\"\\F1D6\"}.mdi-dns-outline:before{content:\"\\FB68\"}.mdi-do-not-disturb:before{content:\"\\F697\"}.mdi-do-not-disturb-off:before{content:\"\\F698\"}.mdi-docker:before{content:\"\\F867\"}.mdi-doctor:before{content:\"\\FA41\"}.mdi-dog:before{content:\"\\FA42\"}.mdi-dog-service:before{content:\"\\FAAC\"}.mdi-dog-side:before{content:\"\\FA43\"}.mdi-dolby:before{content:\"\\F6B2\"}.mdi-domain:before{content:\"\\F1D7\"}.mdi-domain-off:before{content:\"\\FD4B\"}.mdi-donkey:before{content:\"\\F7C1\"}.mdi-door:before{content:\"\\F819\"}.mdi-door-closed:before{content:\"\\F81A\"}.mdi-door-open:before{content:\"\\F81B\"}.mdi-doorbell-video:before{content:\"\\F868\"}.mdi-dot-net:before{content:\"\\FAAD\"}.mdi-dots-horizontal:before{content:\"\\F1D8\"}.mdi-dots-horizontal-circle:before{content:\"\\F7C2\"}.mdi-dots-horizontal-circle-outline:before{content:\"\\FB69\"}.mdi-dots-vertical:before{content:\"\\F1D9\"}.mdi-dots-vertical-circle:before{content:\"\\F7C3\"}.mdi-dots-vertical-circle-outline:before{content:\"\\FB6A\"}.mdi-douban:before{content:\"\\F699\"}.mdi-download:before{content:\"\\F1DA\"}.mdi-download-multiple:before{content:\"\\F9E8\"}.mdi-download-network:before{content:\"\\F6F3\"}.mdi-download-network-outline:before{content:\"\\FC42\"}.mdi-download-outline:before{content:\"\\FB6B\"}.mdi-drag:before{content:\"\\F1DB\"}.mdi-drag-horizontal:before{content:\"\\F1DC\"}.mdi-drag-variant:before{content:\"\\FB6C\"}.mdi-drag-vertical:before{content:\"\\F1DD\"}.mdi-drama-masks:before{content:\"\\FCDE\"}.mdi-drawing:before{content:\"\\F1DE\"}.mdi-drawing-box:before{content:\"\\F1DF\"}.mdi-dribbble:before{content:\"\\F1E0\"}.mdi-dribbble-box:before{content:\"\\F1E1\"}.mdi-drone:before{content:\"\\F1E2\"}.mdi-dropbox:before{content:\"\\F1E3\"}.mdi-drupal:before{content:\"\\F1E4\"}.mdi-duck:before{content:\"\\F1E5\"}.mdi-dumbbell:before{content:\"\\F1E6\"}.mdi-dump-truck:before{content:\"\\FC43\"}.mdi-ear-hearing:before{content:\"\\F7C4\"}.mdi-ear-hearing-off:before{content:\"\\FA44\"}.mdi-earth:before{content:\"\\F1E7\"}.mdi-earth-box:before{content:\"\\F6CC\"}.mdi-earth-box-off:before{content:\"\\F6CD\"}.mdi-earth-off:before{content:\"\\F1E8\"}.mdi-edge:before{content:\"\\F1E9\"}.mdi-egg:before{content:\"\\FAAE\"}.mdi-egg-easter:before{content:\"\\FAAF\"}.mdi-eight-track:before{content:\"\\F9E9\"}.mdi-eject:before{content:\"\\F1EA\"}.mdi-eject-outline:before{content:\"\\FB6D\"}.mdi-elephant:before{content:\"\\F7C5\"}.mdi-elevation-decline:before{content:\"\\F1EB\"}.mdi-elevation-rise:before{content:\"\\F1EC\"}.mdi-elevator:before{content:\"\\F1ED\"}.mdi-email:before{content:\"\\F1EE\"}.mdi-email-alert:before{content:\"\\F6CE\"}.mdi-email-box:before{content:\"\\FCDF\"}.mdi-email-check:before{content:\"\\FAB0\"}.mdi-email-check-outline:before{content:\"\\FAB1\"}.mdi-email-lock:before{content:\"\\F1F1\"}.mdi-email-mark-as-unread:before{content:\"\\FB6E\"}.mdi-email-open:before{content:\"\\F1EF\"}.mdi-email-open-outline:before{content:\"\\F5EF\"}.mdi-email-outline:before{content:\"\\F1F0\"}.mdi-email-plus:before{content:\"\\F9EA\"}.mdi-email-plus-outline:before{content:\"\\F9EB\"}.mdi-email-search:before{content:\"\\F960\"}.mdi-email-search-outline:before{content:\"\\F961\"}.mdi-email-variant:before{content:\"\\F5F0\"}.mdi-ember:before{content:\"\\FB15\"}.mdi-emby:before{content:\"\\F6B3\"}.mdi-emoticon:before{content:\"\\FC44\"}.mdi-emoticon-angry:before{content:\"\\FC45\"}.mdi-emoticon-angry-outline:before{content:\"\\FC46\"}.mdi-emoticon-cool:before{content:\"\\FC47\"}.mdi-emoticon-cool-outline:before{content:\"\\F1F3\"}.mdi-emoticon-cry:before{content:\"\\FC48\"}.mdi-emoticon-cry-outline:before{content:\"\\FC49\"}.mdi-emoticon-dead:before{content:\"\\FC4A\"}.mdi-emoticon-dead-outline:before{content:\"\\F69A\"}.mdi-emoticon-devil:before{content:\"\\FC4B\"}.mdi-emoticon-devil-outline:before{content:\"\\F1F4\"}.mdi-emoticon-excited:before{content:\"\\FC4C\"}.mdi-emoticon-excited-outline:before{content:\"\\F69B\"}.mdi-emoticon-happy:before{content:\"\\FC4D\"}.mdi-emoticon-happy-outline:before{content:\"\\F1F5\"}.mdi-emoticon-kiss:before{content:\"\\FC4E\"}.mdi-emoticon-kiss-outline:before{content:\"\\FC4F\"}.mdi-emoticon-neutral:before{content:\"\\FC50\"}.mdi-emoticon-neutral-outline:before{content:\"\\F1F6\"}.mdi-emoticon-outline:before{content:\"\\F1F2\"}.mdi-emoticon-poop:before{content:\"\\F1F7\"}.mdi-emoticon-poop-outline:before{content:\"\\FC51\"}.mdi-emoticon-sad:before{content:\"\\FC52\"}.mdi-emoticon-sad-outline:before{content:\"\\F1F8\"}.mdi-emoticon-tongue:before{content:\"\\F1F9\"}.mdi-emoticon-tongue-outline:before{content:\"\\FC53\"}.mdi-emoticon-wink:before{content:\"\\FC54\"}.mdi-emoticon-wink-outline:before{content:\"\\FC55\"}.mdi-engine:before{content:\"\\F1FA\"}.mdi-engine-off:before{content:\"\\FA45\"}.mdi-engine-off-outline:before{content:\"\\FA46\"}.mdi-engine-outline:before{content:\"\\F1FB\"}.mdi-equal:before{content:\"\\F1FC\"}.mdi-equal-box:before{content:\"\\F1FD\"}.mdi-eraser:before{content:\"\\F1FE\"}.mdi-eraser-variant:before{content:\"\\F642\"}.mdi-escalator:before{content:\"\\F1FF\"}.mdi-eslint:before{content:\"\\FC56\"}.mdi-et:before{content:\"\\FAB2\"}.mdi-ethereum:before{content:\"\\F869\"}.mdi-ethernet:before{content:\"\\F200\"}.mdi-ethernet-cable:before{content:\"\\F201\"}.mdi-ethernet-cable-off:before{content:\"\\F202\"}.mdi-etsy:before{content:\"\\F203\"}.mdi-ev-station:before{content:\"\\F5F1\"}.mdi-eventbrite:before{content:\"\\F7C6\"}.mdi-evernote:before{content:\"\\F204\"}.mdi-exclamation:before{content:\"\\F205\"}.mdi-exit-run:before{content:\"\\FA47\"}.mdi-exit-to-app:before{content:\"\\F206\"}.mdi-expand-all:before{content:\"\\FAB3\"}.mdi-expand-all-outline:before{content:\"\\FAB4\"}.mdi-exponent:before{content:\"\\F962\"}.mdi-exponent-box:before{content:\"\\F963\"}.mdi-export:before{content:\"\\F207\"}.mdi-export-variant:before{content:\"\\FB6F\"}.mdi-eye:before{content:\"\\F208\"}.mdi-eye-check:before{content:\"\\FCE0\"}.mdi-eye-check-outline:before{content:\"\\FCE1\"}.mdi-eye-circle:before{content:\"\\FB70\"}.mdi-eye-circle-outline:before{content:\"\\FB71\"}.mdi-eye-off:before{content:\"\\F209\"}.mdi-eye-off-outline:before{content:\"\\F6D0\"}.mdi-eye-outline:before{content:\"\\F6CF\"}.mdi-eye-plus:before{content:\"\\F86A\"}.mdi-eye-plus-outline:before{content:\"\\F86B\"}.mdi-eye-settings:before{content:\"\\F86C\"}.mdi-eye-settings-outline:before{content:\"\\F86D\"}.mdi-eyedropper:before{content:\"\\F20A\"}.mdi-eyedropper-variant:before{content:\"\\F20B\"}.mdi-face:before{content:\"\\F643\"}.mdi-face-agent:before{content:\"\\FD4C\"}.mdi-face-outline:before{content:\"\\FB72\"}.mdi-face-profile:before{content:\"\\F644\"}.mdi-face-recognition:before{content:\"\\FC57\"}.mdi-facebook:before{content:\"\\F20C\"}.mdi-facebook-box:before{content:\"\\F20D\"}.mdi-facebook-messenger:before{content:\"\\F20E\"}.mdi-facebook-workplace:before{content:\"\\FB16\"}.mdi-factory:before{content:\"\\F20F\"}.mdi-fan:before{content:\"\\F210\"}.mdi-fan-off:before{content:\"\\F81C\"}.mdi-fast-forward:before{content:\"\\F211\"}.mdi-fast-forward-10:before{content:\"\\FD4D\"}.mdi-fast-forward-30:before{content:\"\\FCE2\"}.mdi-fast-forward-outline:before{content:\"\\F6D1\"}.mdi-fax:before{content:\"\\F212\"}.mdi-feather:before{content:\"\\F6D2\"}.mdi-feature-search:before{content:\"\\FA48\"}.mdi-feature-search-outline:before{content:\"\\FA49\"}.mdi-fedora:before{content:\"\\F8DA\"}.mdi-ferry:before{content:\"\\F213\"}.mdi-file:before{content:\"\\F214\"}.mdi-file-account:before{content:\"\\F73A\"}.mdi-file-alert:before{content:\"\\FA4A\"}.mdi-file-alert-outline:before{content:\"\\FA4B\"}.mdi-file-cabinet:before{content:\"\\FAB5\"}.mdi-file-cancel:before{content:\"\\FDA2\"}.mdi-file-cancel-outline:before{content:\"\\FDA3\"}.mdi-file-chart:before{content:\"\\F215\"}.mdi-file-check:before{content:\"\\F216\"}.mdi-file-cloud:before{content:\"\\F217\"}.mdi-file-compare:before{content:\"\\F8A9\"}.mdi-file-delimited:before{content:\"\\F218\"}.mdi-file-document:before{content:\"\\F219\"}.mdi-file-document-box:before{content:\"\\F21A\"}.mdi-file-document-box-multiple:before{content:\"\\FAB6\"}.mdi-file-document-box-multiple-outline:before{content:\"\\FAB7\"}.mdi-file-document-box-outline:before{content:\"\\F9EC\"}.mdi-file-document-edit:before{content:\"\\FDA4\"}.mdi-file-document-edit-outline:before{content:\"\\FDA5\"}.mdi-file-document-outline:before{content:\"\\F9ED\"}.mdi-file-download:before{content:\"\\F964\"}.mdi-file-download-outline:before{content:\"\\F965\"}.mdi-file-excel:before{content:\"\\F21B\"}.mdi-file-excel-box:before{content:\"\\F21C\"}.mdi-file-export:before{content:\"\\F21D\"}.mdi-file-eye:before{content:\"\\FDA6\"}.mdi-file-eye-outline:before{content:\"\\FDA7\"}.mdi-file-find:before{content:\"\\F21E\"}.mdi-file-find-outline:before{content:\"\\FB73\"}.mdi-file-hidden:before{content:\"\\F613\"}.mdi-file-image:before{content:\"\\F21F\"}.mdi-file-import:before{content:\"\\F220\"}.mdi-file-lock:before{content:\"\\F221\"}.mdi-file-move:before{content:\"\\FAB8\"}.mdi-file-multiple:before{content:\"\\F222\"}.mdi-file-music:before{content:\"\\F223\"}.mdi-file-outline:before{content:\"\\F224\"}.mdi-file-pdf:before{content:\"\\F225\"}.mdi-file-pdf-box:before{content:\"\\F226\"}.mdi-file-percent:before{content:\"\\F81D\"}.mdi-file-plus:before{content:\"\\F751\"}.mdi-file-powerpoint:before{content:\"\\F227\"}.mdi-file-powerpoint-box:before{content:\"\\F228\"}.mdi-file-presentation-box:before{content:\"\\F229\"}.mdi-file-question:before{content:\"\\F86E\"}.mdi-file-remove:before{content:\"\\FB74\"}.mdi-file-replace:before{content:\"\\FB17\"}.mdi-file-replace-outline:before{content:\"\\FB18\"}.mdi-file-restore:before{content:\"\\F670\"}.mdi-file-search:before{content:\"\\FC58\"}.mdi-file-search-outline:before{content:\"\\FC59\"}.mdi-file-send:before{content:\"\\F22A\"}.mdi-file-table:before{content:\"\\FC5A\"}.mdi-file-table-outline:before{content:\"\\FC5B\"}.mdi-file-tree:before{content:\"\\F645\"}.mdi-file-undo:before{content:\"\\F8DB\"}.mdi-file-upload:before{content:\"\\FA4C\"}.mdi-file-upload-outline:before{content:\"\\FA4D\"}.mdi-file-video:before{content:\"\\F22B\"}.mdi-file-word:before{content:\"\\F22C\"}.mdi-file-word-box:before{content:\"\\F22D\"}.mdi-file-xml:before{content:\"\\F22E\"}.mdi-film:before{content:\"\\F22F\"}.mdi-filmstrip:before{content:\"\\F230\"}.mdi-filmstrip-off:before{content:\"\\F231\"}.mdi-filter:before{content:\"\\F232\"}.mdi-filter-outline:before{content:\"\\F233\"}.mdi-filter-remove:before{content:\"\\F234\"}.mdi-filter-remove-outline:before{content:\"\\F235\"}.mdi-filter-variant:before{content:\"\\F236\"}.mdi-finance:before{content:\"\\F81E\"}.mdi-find-replace:before{content:\"\\F6D3\"}.mdi-fingerprint:before{content:\"\\F237\"}.mdi-fire:before{content:\"\\F238\"}.mdi-fire-truck:before{content:\"\\F8AA\"}.mdi-firebase:before{content:\"\\F966\"}.mdi-firefox:before{content:\"\\F239\"}.mdi-fish:before{content:\"\\F23A\"}.mdi-flag:before{content:\"\\F23B\"}.mdi-flag-checkered:before{content:\"\\F23C\"}.mdi-flag-minus:before{content:\"\\FB75\"}.mdi-flag-outline:before{content:\"\\F23D\"}.mdi-flag-plus:before{content:\"\\FB76\"}.mdi-flag-remove:before{content:\"\\FB77\"}.mdi-flag-triangle:before{content:\"\\F23F\"}.mdi-flag-variant:before{content:\"\\F240\"}.mdi-flag-variant-outline:before{content:\"\\F23E\"}.mdi-flare:before{content:\"\\FD4E\"}.mdi-flash:before{content:\"\\F241\"}.mdi-flash-auto:before{content:\"\\F242\"}.mdi-flash-circle:before{content:\"\\F81F\"}.mdi-flash-off:before{content:\"\\F243\"}.mdi-flash-outline:before{content:\"\\F6D4\"}.mdi-flash-red-eye:before{content:\"\\F67A\"}.mdi-flashlight:before{content:\"\\F244\"}.mdi-flashlight-off:before{content:\"\\F245\"}.mdi-flask:before{content:\"\\F093\"}.mdi-flask-empty:before{content:\"\\F094\"}.mdi-flask-empty-outline:before{content:\"\\F095\"}.mdi-flask-outline:before{content:\"\\F096\"}.mdi-flattr:before{content:\"\\F246\"}.mdi-flickr:before{content:\"\\FCE3\"}.mdi-flip-to-back:before{content:\"\\F247\"}.mdi-flip-to-front:before{content:\"\\F248\"}.mdi-floor-lamp:before{content:\"\\F8DC\"}.mdi-floor-plan:before{content:\"\\F820\"}.mdi-floppy:before{content:\"\\F249\"}.mdi-floppy-variant:before{content:\"\\F9EE\"}.mdi-flower:before{content:\"\\F24A\"}.mdi-flower-outline:before{content:\"\\F9EF\"}.mdi-flower-poppy:before{content:\"\\FCE4\"}.mdi-flower-tulip:before{content:\"\\F9F0\"}.mdi-flower-tulip-outline:before{content:\"\\F9F1\"}.mdi-folder:before{content:\"\\F24B\"}.mdi-folder-account:before{content:\"\\F24C\"}.mdi-folder-account-outline:before{content:\"\\FB78\"}.mdi-folder-alert:before{content:\"\\FDA8\"}.mdi-folder-alert-outline:before{content:\"\\FDA9\"}.mdi-folder-clock:before{content:\"\\FAB9\"}.mdi-folder-clock-outline:before{content:\"\\FABA\"}.mdi-folder-download:before{content:\"\\F24D\"}.mdi-folder-edit:before{content:\"\\F8DD\"}.mdi-folder-edit-outline:before{content:\"\\FDAA\"}.mdi-folder-google-drive:before{content:\"\\F24E\"}.mdi-folder-image:before{content:\"\\F24F\"}.mdi-folder-key:before{content:\"\\F8AB\"}.mdi-folder-key-network:before{content:\"\\F8AC\"}.mdi-folder-key-network-outline:before{content:\"\\FC5C\"}.mdi-folder-lock:before{content:\"\\F250\"}.mdi-folder-lock-open:before{content:\"\\F251\"}.mdi-folder-move:before{content:\"\\F252\"}.mdi-folder-multiple:before{content:\"\\F253\"}.mdi-folder-multiple-image:before{content:\"\\F254\"}.mdi-folder-multiple-outline:before{content:\"\\F255\"}.mdi-folder-network:before{content:\"\\F86F\"}.mdi-folder-network-outline:before{content:\"\\FC5D\"}.mdi-folder-open:before{content:\"\\F76F\"}.mdi-folder-open-outline:before{content:\"\\FDAB\"}.mdi-folder-outline:before{content:\"\\F256\"}.mdi-folder-plus:before{content:\"\\F257\"}.mdi-folder-plus-outline:before{content:\"\\FB79\"}.mdi-folder-pound:before{content:\"\\FCE5\"}.mdi-folder-pound-outline:before{content:\"\\FCE6\"}.mdi-folder-remove:before{content:\"\\F258\"}.mdi-folder-remove-outline:before{content:\"\\FB7A\"}.mdi-folder-search:before{content:\"\\F967\"}.mdi-folder-search-outline:before{content:\"\\F968\"}.mdi-folder-star:before{content:\"\\F69C\"}.mdi-folder-star-outline:before{content:\"\\FB7B\"}.mdi-folder-sync:before{content:\"\\FCE7\"}.mdi-folder-sync-outline:before{content:\"\\FCE8\"}.mdi-folder-text:before{content:\"\\FC5E\"}.mdi-folder-text-outline:before{content:\"\\FC5F\"}.mdi-folder-upload:before{content:\"\\F259\"}.mdi-font-awesome:before{content:\"\\F03A\"}.mdi-food:before{content:\"\\F25A\"}.mdi-food-apple:before{content:\"\\F25B\"}.mdi-food-apple-outline:before{content:\"\\FC60\"}.mdi-food-croissant:before{content:\"\\F7C7\"}.mdi-food-fork-drink:before{content:\"\\F5F2\"}.mdi-food-off:before{content:\"\\F5F3\"}.mdi-food-variant:before{content:\"\\F25C\"}.mdi-football:before{content:\"\\F25D\"}.mdi-football-australian:before{content:\"\\F25E\"}.mdi-football-helmet:before{content:\"\\F25F\"}.mdi-forklift:before{content:\"\\F7C8\"}.mdi-format-align-bottom:before{content:\"\\F752\"}.mdi-format-align-center:before{content:\"\\F260\"}.mdi-format-align-justify:before{content:\"\\F261\"}.mdi-format-align-left:before{content:\"\\F262\"}.mdi-format-align-middle:before{content:\"\\F753\"}.mdi-format-align-right:before{content:\"\\F263\"}.mdi-format-align-top:before{content:\"\\F754\"}.mdi-format-annotation-minus:before{content:\"\\FABB\"}.mdi-format-annotation-plus:before{content:\"\\F646\"}.mdi-format-bold:before{content:\"\\F264\"}.mdi-format-clear:before{content:\"\\F265\"}.mdi-format-color-fill:before{content:\"\\F266\"}.mdi-format-color-text:before{content:\"\\F69D\"}.mdi-format-columns:before{content:\"\\F8DE\"}.mdi-format-float-center:before{content:\"\\F267\"}.mdi-format-float-left:before{content:\"\\F268\"}.mdi-format-float-none:before{content:\"\\F269\"}.mdi-format-float-right:before{content:\"\\F26A\"}.mdi-format-font:before{content:\"\\F6D5\"}.mdi-format-font-size-decrease:before{content:\"\\F9F2\"}.mdi-format-font-size-increase:before{content:\"\\F9F3\"}.mdi-format-header-1:before{content:\"\\F26B\"}.mdi-format-header-2:before{content:\"\\F26C\"}.mdi-format-header-3:before{content:\"\\F26D\"}.mdi-format-header-4:before{content:\"\\F26E\"}.mdi-format-header-5:before{content:\"\\F26F\"}.mdi-format-header-6:before{content:\"\\F270\"}.mdi-format-header-decrease:before{content:\"\\F271\"}.mdi-format-header-equal:before{content:\"\\F272\"}.mdi-format-header-increase:before{content:\"\\F273\"}.mdi-format-header-pound:before{content:\"\\F274\"}.mdi-format-horizontal-align-center:before{content:\"\\F61E\"}.mdi-format-horizontal-align-left:before{content:\"\\F61F\"}.mdi-format-horizontal-align-right:before{content:\"\\F620\"}.mdi-format-indent-decrease:before{content:\"\\F275\"}.mdi-format-indent-increase:before{content:\"\\F276\"}.mdi-format-italic:before{content:\"\\F277\"}.mdi-format-letter-case:before{content:\"\\FB19\"}.mdi-format-letter-case-lower:before{content:\"\\FB1A\"}.mdi-format-letter-case-upper:before{content:\"\\FB1B\"}.mdi-format-line-spacing:before{content:\"\\F278\"}.mdi-format-line-style:before{content:\"\\F5C8\"}.mdi-format-line-weight:before{content:\"\\F5C9\"}.mdi-format-list-bulleted:before{content:\"\\F279\"}.mdi-format-list-bulleted-square:before{content:\"\\FDAC\"}.mdi-format-list-bulleted-type:before{content:\"\\F27A\"}.mdi-format-list-checkbox:before{content:\"\\F969\"}.mdi-format-list-checks:before{content:\"\\F755\"}.mdi-format-list-numbered:before{content:\"\\F27B\"}.mdi-format-list-numbered-rtl:before{content:\"\\FCE9\"}.mdi-format-page-break:before{content:\"\\F6D6\"}.mdi-format-paint:before{content:\"\\F27C\"}.mdi-format-paragraph:before{content:\"\\F27D\"}.mdi-format-pilcrow:before{content:\"\\F6D7\"}.mdi-format-quote-close:before{content:\"\\F27E\"}.mdi-format-quote-open:before{content:\"\\F756\"}.mdi-format-rotate-90:before{content:\"\\F6A9\"}.mdi-format-section:before{content:\"\\F69E\"}.mdi-format-size:before{content:\"\\F27F\"}.mdi-format-strikethrough:before{content:\"\\F280\"}.mdi-format-strikethrough-variant:before{content:\"\\F281\"}.mdi-format-subscript:before{content:\"\\F282\"}.mdi-format-superscript:before{content:\"\\F283\"}.mdi-format-text:before{content:\"\\F284\"}.mdi-format-text-rotation-down:before{content:\"\\FD4F\"}.mdi-format-text-rotation-none:before{content:\"\\FD50\"}.mdi-format-text-wrapping-clip:before{content:\"\\FCEA\"}.mdi-format-text-wrapping-overflow:before{content:\"\\FCEB\"}.mdi-format-text-wrapping-wrap:before{content:\"\\FCEC\"}.mdi-format-textbox:before{content:\"\\FCED\"}.mdi-format-textdirection-l-to-r:before{content:\"\\F285\"}.mdi-format-textdirection-r-to-l:before{content:\"\\F286\"}.mdi-format-title:before{content:\"\\F5F4\"}.mdi-format-underline:before{content:\"\\F287\"}.mdi-format-vertical-align-bottom:before{content:\"\\F621\"}.mdi-format-vertical-align-center:before{content:\"\\F622\"}.mdi-format-vertical-align-top:before{content:\"\\F623\"}.mdi-format-wrap-inline:before{content:\"\\F288\"}.mdi-format-wrap-square:before{content:\"\\F289\"}.mdi-format-wrap-tight:before{content:\"\\F28A\"}.mdi-format-wrap-top-bottom:before{content:\"\\F28B\"}.mdi-forum:before{content:\"\\F28C\"}.mdi-forum-outline:before{content:\"\\F821\"}.mdi-forward:before{content:\"\\F28D\"}.mdi-forwardburger:before{content:\"\\FD51\"}.mdi-fountain:before{content:\"\\F96A\"}.mdi-fountain-pen:before{content:\"\\FCEE\"}.mdi-fountain-pen-tip:before{content:\"\\FCEF\"}.mdi-foursquare:before{content:\"\\F28E\"}.mdi-freebsd:before{content:\"\\F8DF\"}.mdi-fridge:before{content:\"\\F290\"}.mdi-fridge-bottom:before{content:\"\\F292\"}.mdi-fridge-outline:before{content:\"\\F28F\"}.mdi-fridge-top:before{content:\"\\F291\"}.mdi-fuel:before{content:\"\\F7C9\"}.mdi-fullscreen:before{content:\"\\F293\"}.mdi-fullscreen-exit:before{content:\"\\F294\"}.mdi-function:before{content:\"\\F295\"}.mdi-function-variant:before{content:\"\\F870\"}.mdi-fuse:before{content:\"\\FC61\"}.mdi-fuse-blade:before{content:\"\\FC62\"}.mdi-gamepad:before{content:\"\\F296\"}.mdi-gamepad-variant:before{content:\"\\F297\"}.mdi-gantry-crane:before{content:\"\\FDAD\"}.mdi-garage:before{content:\"\\F6D8\"}.mdi-garage-alert:before{content:\"\\F871\"}.mdi-garage-open:before{content:\"\\F6D9\"}.mdi-gas-cylinder:before{content:\"\\F647\"}.mdi-gas-station:before{content:\"\\F298\"}.mdi-gate:before{content:\"\\F299\"}.mdi-gate-and:before{content:\"\\F8E0\"}.mdi-gate-nand:before{content:\"\\F8E1\"}.mdi-gate-nor:before{content:\"\\F8E2\"}.mdi-gate-not:before{content:\"\\F8E3\"}.mdi-gate-or:before{content:\"\\F8E4\"}.mdi-gate-xnor:before{content:\"\\F8E5\"}.mdi-gate-xor:before{content:\"\\F8E6\"}.mdi-gauge:before{content:\"\\F29A\"}.mdi-gauge-empty:before{content:\"\\F872\"}.mdi-gauge-full:before{content:\"\\F873\"}.mdi-gauge-low:before{content:\"\\F874\"}.mdi-gavel:before{content:\"\\F29B\"}.mdi-gender-female:before{content:\"\\F29C\"}.mdi-gender-male:before{content:\"\\F29D\"}.mdi-gender-male-female:before{content:\"\\F29E\"}.mdi-gender-transgender:before{content:\"\\F29F\"}.mdi-gentoo:before{content:\"\\F8E7\"}.mdi-gesture:before{content:\"\\F7CA\"}.mdi-gesture-double-tap:before{content:\"\\F73B\"}.mdi-gesture-pinch:before{content:\"\\FABC\"}.mdi-gesture-spread:before{content:\"\\FABD\"}.mdi-gesture-swipe:before{content:\"\\FD52\"}.mdi-gesture-swipe-down:before{content:\"\\F73C\"}.mdi-gesture-swipe-horizontal:before{content:\"\\FABE\"}.mdi-gesture-swipe-left:before{content:\"\\F73D\"}.mdi-gesture-swipe-right:before{content:\"\\F73E\"}.mdi-gesture-swipe-up:before{content:\"\\F73F\"}.mdi-gesture-swipe-vertical:before{content:\"\\FABF\"}.mdi-gesture-tap:before{content:\"\\F740\"}.mdi-gesture-tap-hold:before{content:\"\\FD53\"}.mdi-gesture-two-double-tap:before{content:\"\\F741\"}.mdi-gesture-two-tap:before{content:\"\\F742\"}.mdi-ghost:before{content:\"\\F2A0\"}.mdi-ghost-off:before{content:\"\\F9F4\"}.mdi-gif:before{content:\"\\FD54\"}.mdi-gift:before{content:\"\\F2A1\"}.mdi-git:before{content:\"\\F2A2\"}.mdi-github-box:before{content:\"\\F2A3\"}.mdi-github-circle:before{content:\"\\F2A4\"}.mdi-github-face:before{content:\"\\F6DA\"}.mdi-gitlab:before{content:\"\\FB7C\"}.mdi-glass-cocktail:before{content:\"\\F356\"}.mdi-glass-flute:before{content:\"\\F2A5\"}.mdi-glass-mug:before{content:\"\\F2A6\"}.mdi-glass-stange:before{content:\"\\F2A7\"}.mdi-glass-tulip:before{content:\"\\F2A8\"}.mdi-glass-wine:before{content:\"\\F875\"}.mdi-glassdoor:before{content:\"\\F2A9\"}.mdi-glasses:before{content:\"\\F2AA\"}.mdi-globe-model:before{content:\"\\F8E8\"}.mdi-gmail:before{content:\"\\F2AB\"}.mdi-gnome:before{content:\"\\F2AC\"}.mdi-go-kart:before{content:\"\\FD55\"}.mdi-go-kart-track:before{content:\"\\FD56\"}.mdi-gog:before{content:\"\\FB7D\"}.mdi-golf:before{content:\"\\F822\"}.mdi-gondola:before{content:\"\\F685\"}.mdi-goodreads:before{content:\"\\FD57\"}.mdi-google:before{content:\"\\F2AD\"}.mdi-google-adwords:before{content:\"\\FC63\"}.mdi-google-allo:before{content:\"\\F801\"}.mdi-google-analytics:before{content:\"\\F7CB\"}.mdi-google-assistant:before{content:\"\\F7CC\"}.mdi-google-cardboard:before{content:\"\\F2AE\"}.mdi-google-chrome:before{content:\"\\F2AF\"}.mdi-google-circles:before{content:\"\\F2B0\"}.mdi-google-circles-communities:before{content:\"\\F2B1\"}.mdi-google-circles-extended:before{content:\"\\F2B2\"}.mdi-google-circles-group:before{content:\"\\F2B3\"}.mdi-google-classroom:before{content:\"\\F2C0\"}.mdi-google-controller:before{content:\"\\F2B4\"}.mdi-google-controller-off:before{content:\"\\F2B5\"}.mdi-google-drive:before{content:\"\\F2B6\"}.mdi-google-earth:before{content:\"\\F2B7\"}.mdi-google-fit:before{content:\"\\F96B\"}.mdi-google-glass:before{content:\"\\F2B8\"}.mdi-google-hangouts:before{content:\"\\F2C9\"}.mdi-google-home:before{content:\"\\F823\"}.mdi-google-keep:before{content:\"\\F6DB\"}.mdi-google-lens:before{content:\"\\F9F5\"}.mdi-google-maps:before{content:\"\\F5F5\"}.mdi-google-nearby:before{content:\"\\F2B9\"}.mdi-google-pages:before{content:\"\\F2BA\"}.mdi-google-photos:before{content:\"\\F6DC\"}.mdi-google-physical-web:before{content:\"\\F2BB\"}.mdi-google-play:before{content:\"\\F2BC\"}.mdi-google-plus:before{content:\"\\F2BD\"}.mdi-google-plus-box:before{content:\"\\F2BE\"}.mdi-google-spreadsheet:before{content:\"\\F9F6\"}.mdi-google-street-view:before{content:\"\\FC64\"}.mdi-google-translate:before{content:\"\\F2BF\"}.mdi-gpu:before{content:\"\\F8AD\"}.mdi-gradient:before{content:\"\\F69F\"}.mdi-grain:before{content:\"\\FD58\"}.mdi-graphql:before{content:\"\\F876\"}.mdi-grave-stone:before{content:\"\\FB7E\"}.mdi-grease-pencil:before{content:\"\\F648\"}.mdi-greater-than:before{content:\"\\F96C\"}.mdi-greater-than-or-equal:before{content:\"\\F96D\"}.mdi-grid:before{content:\"\\F2C1\"}.mdi-grid-large:before{content:\"\\F757\"}.mdi-grid-off:before{content:\"\\F2C2\"}.mdi-group:before{content:\"\\F2C3\"}.mdi-guitar-acoustic:before{content:\"\\F770\"}.mdi-guitar-electric:before{content:\"\\F2C4\"}.mdi-guitar-pick:before{content:\"\\F2C5\"}.mdi-guitar-pick-outline:before{content:\"\\F2C6\"}.mdi-guy-fawkes-mask:before{content:\"\\F824\"}.mdi-hackernews:before{content:\"\\F624\"}.mdi-hail:before{content:\"\\FAC0\"}.mdi-halloween:before{content:\"\\FB7F\"}.mdi-hamburger:before{content:\"\\F684\"}.mdi-hammer:before{content:\"\\F8E9\"}.mdi-hand:before{content:\"\\FA4E\"}.mdi-hand-okay:before{content:\"\\FA4F\"}.mdi-hand-peace:before{content:\"\\FA50\"}.mdi-hand-peace-variant:before{content:\"\\FA51\"}.mdi-hand-pointing-down:before{content:\"\\FA52\"}.mdi-hand-pointing-left:before{content:\"\\FA53\"}.mdi-hand-pointing-right:before{content:\"\\F2C7\"}.mdi-hand-pointing-up:before{content:\"\\FA54\"}.mdi-hanger:before{content:\"\\F2C8\"}.mdi-hard-hat:before{content:\"\\F96E\"}.mdi-harddisk:before{content:\"\\F2CA\"}.mdi-hat-fedora:before{content:\"\\FB80\"}.mdi-hazard-lights:before{content:\"\\FC65\"}.mdi-hdr:before{content:\"\\FD59\"}.mdi-hdr-off:before{content:\"\\FD5A\"}.mdi-headphones:before{content:\"\\F2CB\"}.mdi-headphones-bluetooth:before{content:\"\\F96F\"}.mdi-headphones-box:before{content:\"\\F2CC\"}.mdi-headphones-off:before{content:\"\\F7CD\"}.mdi-headphones-settings:before{content:\"\\F2CD\"}.mdi-headset:before{content:\"\\F2CE\"}.mdi-headset-dock:before{content:\"\\F2CF\"}.mdi-headset-off:before{content:\"\\F2D0\"}.mdi-heart:before{content:\"\\F2D1\"}.mdi-heart-box:before{content:\"\\F2D2\"}.mdi-heart-box-outline:before{content:\"\\F2D3\"}.mdi-heart-broken:before{content:\"\\F2D4\"}.mdi-heart-broken-outline:before{content:\"\\FCF0\"}.mdi-heart-circle:before{content:\"\\F970\"}.mdi-heart-circle-outline:before{content:\"\\F971\"}.mdi-heart-half:before{content:\"\\F6DE\"}.mdi-heart-half-full:before{content:\"\\F6DD\"}.mdi-heart-half-outline:before{content:\"\\F6DF\"}.mdi-heart-multiple:before{content:\"\\FA55\"}.mdi-heart-multiple-outline:before{content:\"\\FA56\"}.mdi-heart-off:before{content:\"\\F758\"}.mdi-heart-outline:before{content:\"\\F2D5\"}.mdi-heart-pulse:before{content:\"\\F5F6\"}.mdi-helicopter:before{content:\"\\FAC1\"}.mdi-help:before{content:\"\\F2D6\"}.mdi-help-box:before{content:\"\\F78A\"}.mdi-help-circle:before{content:\"\\F2D7\"}.mdi-help-circle-outline:before{content:\"\\F625\"}.mdi-help-network:before{content:\"\\F6F4\"}.mdi-help-network-outline:before{content:\"\\FC66\"}.mdi-help-rhombus:before{content:\"\\FB81\"}.mdi-help-rhombus-outline:before{content:\"\\FB82\"}.mdi-hexagon:before{content:\"\\F2D8\"}.mdi-hexagon-multiple:before{content:\"\\F6E0\"}.mdi-hexagon-outline:before{content:\"\\F2D9\"}.mdi-hexagon-slice-1:before{content:\"\\FAC2\"}.mdi-hexagon-slice-2:before{content:\"\\FAC3\"}.mdi-hexagon-slice-3:before{content:\"\\FAC4\"}.mdi-hexagon-slice-4:before{content:\"\\FAC5\"}.mdi-hexagon-slice-5:before{content:\"\\FAC6\"}.mdi-hexagon-slice-6:before{content:\"\\FAC7\"}.mdi-hexagram:before{content:\"\\FAC8\"}.mdi-hexagram-outline:before{content:\"\\FAC9\"}.mdi-high-definition:before{content:\"\\F7CE\"}.mdi-high-definition-box:before{content:\"\\F877\"}.mdi-highway:before{content:\"\\F5F7\"}.mdi-hiking:before{content:\"\\FD5B\"}.mdi-hinduism:before{content:\"\\F972\"}.mdi-history:before{content:\"\\F2DA\"}.mdi-hockey-puck:before{content:\"\\F878\"}.mdi-hockey-sticks:before{content:\"\\F879\"}.mdi-hololens:before{content:\"\\F2DB\"}.mdi-home:before{content:\"\\F2DC\"}.mdi-home-account:before{content:\"\\F825\"}.mdi-home-alert:before{content:\"\\F87A\"}.mdi-home-assistant:before{content:\"\\F7CF\"}.mdi-home-automation:before{content:\"\\F7D0\"}.mdi-home-circle:before{content:\"\\F7D1\"}.mdi-home-city:before{content:\"\\FCF1\"}.mdi-home-city-outline:before{content:\"\\FCF2\"}.mdi-home-currency-usd:before{content:\"\\F8AE\"}.mdi-home-floor-0:before{content:\"\\FDAE\"}.mdi-home-floor-1:before{content:\"\\FD5C\"}.mdi-home-floor-2:before{content:\"\\FD5D\"}.mdi-home-floor-3:before{content:\"\\FD5E\"}.mdi-home-floor-a:before{content:\"\\FD5F\"}.mdi-home-floor-b:before{content:\"\\FD60\"}.mdi-home-floor-g:before{content:\"\\FD61\"}.mdi-home-floor-l:before{content:\"\\FD62\"}.mdi-home-floor-negative-1:before{content:\"\\FDAF\"}.mdi-home-group:before{content:\"\\FDB0\"}.mdi-home-heart:before{content:\"\\F826\"}.mdi-home-lock:before{content:\"\\F8EA\"}.mdi-home-lock-open:before{content:\"\\F8EB\"}.mdi-home-map-marker:before{content:\"\\F5F8\"}.mdi-home-minus:before{content:\"\\F973\"}.mdi-home-modern:before{content:\"\\F2DD\"}.mdi-home-outline:before{content:\"\\F6A0\"}.mdi-home-plus:before{content:\"\\F974\"}.mdi-home-variant:before{content:\"\\F2DE\"}.mdi-home-variant-outline:before{content:\"\\FB83\"}.mdi-hook:before{content:\"\\F6E1\"}.mdi-hook-off:before{content:\"\\F6E2\"}.mdi-hops:before{content:\"\\F2DF\"}.mdi-horseshoe:before{content:\"\\FA57\"}.mdi-hospital:before{content:\"\\F2E0\"}.mdi-hospital-building:before{content:\"\\F2E1\"}.mdi-hospital-marker:before{content:\"\\F2E2\"}.mdi-hot-tub:before{content:\"\\F827\"}.mdi-hotel:before{content:\"\\F2E3\"}.mdi-houzz:before{content:\"\\F2E4\"}.mdi-houzz-box:before{content:\"\\F2E5\"}.mdi-hubspot:before{content:\"\\FCF3\"}.mdi-hulu:before{content:\"\\F828\"}.mdi-human:before{content:\"\\F2E6\"}.mdi-human-child:before{content:\"\\F2E7\"}.mdi-human-female:before{content:\"\\F649\"}.mdi-human-female-boy:before{content:\"\\FA58\"}.mdi-human-female-female:before{content:\"\\FA59\"}.mdi-human-female-girl:before{content:\"\\FA5A\"}.mdi-human-greeting:before{content:\"\\F64A\"}.mdi-human-handsdown:before{content:\"\\F64B\"}.mdi-human-handsup:before{content:\"\\F64C\"}.mdi-human-male:before{content:\"\\F64D\"}.mdi-human-male-boy:before{content:\"\\FA5B\"}.mdi-human-male-female:before{content:\"\\F2E8\"}.mdi-human-male-girl:before{content:\"\\FA5C\"}.mdi-human-male-male:before{content:\"\\FA5D\"}.mdi-human-pregnant:before{content:\"\\F5CF\"}.mdi-humble-bundle:before{content:\"\\F743\"}.mdi-ice-cream:before{content:\"\\F829\"}.mdi-iframe:before{content:\"\\FC67\"}.mdi-iframe-outline:before{content:\"\\FC68\"}.mdi-image:before{content:\"\\F2E9\"}.mdi-image-album:before{content:\"\\F2EA\"}.mdi-image-area:before{content:\"\\F2EB\"}.mdi-image-area-close:before{content:\"\\F2EC\"}.mdi-image-broken:before{content:\"\\F2ED\"}.mdi-image-broken-variant:before{content:\"\\F2EE\"}.mdi-image-filter:before{content:\"\\F2EF\"}.mdi-image-filter-black-white:before{content:\"\\F2F0\"}.mdi-image-filter-center-focus:before{content:\"\\F2F1\"}.mdi-image-filter-center-focus-weak:before{content:\"\\F2F2\"}.mdi-image-filter-drama:before{content:\"\\F2F3\"}.mdi-image-filter-frames:before{content:\"\\F2F4\"}.mdi-image-filter-hdr:before{content:\"\\F2F5\"}.mdi-image-filter-none:before{content:\"\\F2F6\"}.mdi-image-filter-tilt-shift:before{content:\"\\F2F7\"}.mdi-image-filter-vintage:before{content:\"\\F2F8\"}.mdi-image-move:before{content:\"\\F9F7\"}.mdi-image-multiple:before{content:\"\\F2F9\"}.mdi-image-off:before{content:\"\\F82A\"}.mdi-image-outline:before{content:\"\\F975\"}.mdi-image-plus:before{content:\"\\F87B\"}.mdi-image-search:before{content:\"\\F976\"}.mdi-image-search-outline:before{content:\"\\F977\"}.mdi-image-size-select-actual:before{content:\"\\FC69\"}.mdi-image-size-select-large:before{content:\"\\FC6A\"}.mdi-image-size-select-small:before{content:\"\\FC6B\"}.mdi-import:before{content:\"\\F2FA\"}.mdi-inbox:before{content:\"\\F686\"}.mdi-inbox-arrow-down:before{content:\"\\F2FB\"}.mdi-inbox-arrow-up:before{content:\"\\F3D1\"}.mdi-inbox-multiple:before{content:\"\\F8AF\"}.mdi-inbox-multiple-outline:before{content:\"\\FB84\"}.mdi-incognito:before{content:\"\\F5F9\"}.mdi-infinity:before{content:\"\\F6E3\"}.mdi-information:before{content:\"\\F2FC\"}.mdi-information-outline:before{content:\"\\F2FD\"}.mdi-information-variant:before{content:\"\\F64E\"}.mdi-instagram:before{content:\"\\F2FE\"}.mdi-instapaper:before{content:\"\\F2FF\"}.mdi-internet-explorer:before{content:\"\\F300\"}.mdi-invert-colors:before{content:\"\\F301\"}.mdi-ip:before{content:\"\\FA5E\"}.mdi-ip-network:before{content:\"\\FA5F\"}.mdi-ip-network-outline:before{content:\"\\FC6C\"}.mdi-ipod:before{content:\"\\FC6D\"}.mdi-islam:before{content:\"\\F978\"}.mdi-itunes:before{content:\"\\F676\"}.mdi-jabber:before{content:\"\\FDB1\"}.mdi-jeepney:before{content:\"\\F302\"}.mdi-jira:before{content:\"\\F303\"}.mdi-jquery:before{content:\"\\F87C\"}.mdi-jsfiddle:before{content:\"\\F304\"}.mdi-json:before{content:\"\\F626\"}.mdi-judaism:before{content:\"\\F979\"}.mdi-kabaddi:before{content:\"\\FD63\"}.mdi-karate:before{content:\"\\F82B\"}.mdi-keg:before{content:\"\\F305\"}.mdi-kettle:before{content:\"\\F5FA\"}.mdi-key:before{content:\"\\F306\"}.mdi-key-change:before{content:\"\\F307\"}.mdi-key-minus:before{content:\"\\F308\"}.mdi-key-outline:before{content:\"\\FDB2\"}.mdi-key-plus:before{content:\"\\F309\"}.mdi-key-remove:before{content:\"\\F30A\"}.mdi-key-variant:before{content:\"\\F30B\"}.mdi-keyboard:before{content:\"\\F30C\"}.mdi-keyboard-backspace:before{content:\"\\F30D\"}.mdi-keyboard-caps:before{content:\"\\F30E\"}.mdi-keyboard-close:before{content:\"\\F30F\"}.mdi-keyboard-off:before{content:\"\\F310\"}.mdi-keyboard-outline:before{content:\"\\F97A\"}.mdi-keyboard-return:before{content:\"\\F311\"}.mdi-keyboard-settings:before{content:\"\\F9F8\"}.mdi-keyboard-settings-outline:before{content:\"\\F9F9\"}.mdi-keyboard-tab:before{content:\"\\F312\"}.mdi-keyboard-variant:before{content:\"\\F313\"}.mdi-kickstarter:before{content:\"\\F744\"}.mdi-knife:before{content:\"\\F9FA\"}.mdi-knife-military:before{content:\"\\F9FB\"}.mdi-kodi:before{content:\"\\F314\"}.mdi-label:before{content:\"\\F315\"}.mdi-label-off:before{content:\"\\FACA\"}.mdi-label-off-outline:before{content:\"\\FACB\"}.mdi-label-outline:before{content:\"\\F316\"}.mdi-label-variant:before{content:\"\\FACC\"}.mdi-label-variant-outline:before{content:\"\\FACD\"}.mdi-ladybug:before{content:\"\\F82C\"}.mdi-lambda:before{content:\"\\F627\"}.mdi-lamp:before{content:\"\\F6B4\"}.mdi-lan:before{content:\"\\F317\"}.mdi-lan-connect:before{content:\"\\F318\"}.mdi-lan-disconnect:before{content:\"\\F319\"}.mdi-lan-pending:before{content:\"\\F31A\"}.mdi-language-c:before{content:\"\\F671\"}.mdi-language-cpp:before{content:\"\\F672\"}.mdi-language-csharp:before{content:\"\\F31B\"}.mdi-language-css3:before{content:\"\\F31C\"}.mdi-language-go:before{content:\"\\F7D2\"}.mdi-language-haskell:before{content:\"\\FC6E\"}.mdi-language-html5:before{content:\"\\F31D\"}.mdi-language-java:before{content:\"\\FB1C\"}.mdi-language-javascript:before{content:\"\\F31E\"}.mdi-language-lua:before{content:\"\\F8B0\"}.mdi-language-php:before{content:\"\\F31F\"}.mdi-language-python:before{content:\"\\F320\"}.mdi-language-python-text:before{content:\"\\F321\"}.mdi-language-r:before{content:\"\\F7D3\"}.mdi-language-ruby-on-rails:before{content:\"\\FACE\"}.mdi-language-swift:before{content:\"\\F6E4\"}.mdi-language-typescript:before{content:\"\\F6E5\"}.mdi-laptop:before{content:\"\\F322\"}.mdi-laptop-chromebook:before{content:\"\\F323\"}.mdi-laptop-mac:before{content:\"\\F324\"}.mdi-laptop-off:before{content:\"\\F6E6\"}.mdi-laptop-windows:before{content:\"\\F325\"}.mdi-laravel:before{content:\"\\FACF\"}.mdi-lastfm:before{content:\"\\F326\"}.mdi-lastpass:before{content:\"\\F446\"}.mdi-launch:before{content:\"\\F327\"}.mdi-lava-lamp:before{content:\"\\F7D4\"}.mdi-layers:before{content:\"\\F328\"}.mdi-layers-off:before{content:\"\\F329\"}.mdi-layers-off-outline:before{content:\"\\F9FC\"}.mdi-layers-outline:before{content:\"\\F9FD\"}.mdi-lead-pencil:before{content:\"\\F64F\"}.mdi-leaf:before{content:\"\\F32A\"}.mdi-leaf-maple:before{content:\"\\FC6F\"}.mdi-leak:before{content:\"\\FDB3\"}.mdi-leak-off:before{content:\"\\FDB4\"}.mdi-led-off:before{content:\"\\F32B\"}.mdi-led-on:before{content:\"\\F32C\"}.mdi-led-outline:before{content:\"\\F32D\"}.mdi-led-strip:before{content:\"\\F7D5\"}.mdi-led-variant-off:before{content:\"\\F32E\"}.mdi-led-variant-on:before{content:\"\\F32F\"}.mdi-led-variant-outline:before{content:\"\\F330\"}.mdi-less-than:before{content:\"\\F97B\"}.mdi-less-than-or-equal:before{content:\"\\F97C\"}.mdi-library:before{content:\"\\F331\"}.mdi-library-books:before{content:\"\\F332\"}.mdi-library-movie:before{content:\"\\FCF4\"}.mdi-library-music:before{content:\"\\F333\"}.mdi-library-plus:before{content:\"\\F334\"}.mdi-library-shelves:before{content:\"\\FB85\"}.mdi-library-video:before{content:\"\\FCF5\"}.mdi-lifebuoy:before{content:\"\\F87D\"}.mdi-light-switch:before{content:\"\\F97D\"}.mdi-lightbulb:before{content:\"\\F335\"}.mdi-lightbulb-on:before{content:\"\\F6E7\"}.mdi-lightbulb-on-outline:before{content:\"\\F6E8\"}.mdi-lightbulb-outline:before{content:\"\\F336\"}.mdi-lighthouse:before{content:\"\\F9FE\"}.mdi-lighthouse-on:before{content:\"\\F9FF\"}.mdi-link:before{content:\"\\F337\"}.mdi-link-box:before{content:\"\\FCF6\"}.mdi-link-box-outline:before{content:\"\\FCF7\"}.mdi-link-box-variant:before{content:\"\\FCF8\"}.mdi-link-box-variant-outline:before{content:\"\\FCF9\"}.mdi-link-off:before{content:\"\\F338\"}.mdi-link-plus:before{content:\"\\FC70\"}.mdi-link-variant:before{content:\"\\F339\"}.mdi-link-variant-off:before{content:\"\\F33A\"}.mdi-linkedin:before{content:\"\\F33B\"}.mdi-linkedin-box:before{content:\"\\F33C\"}.mdi-linux:before{content:\"\\F33D\"}.mdi-linux-mint:before{content:\"\\F8EC\"}.mdi-litecoin:before{content:\"\\FA60\"}.mdi-loading:before{content:\"\\F771\"}.mdi-lock:before{content:\"\\F33E\"}.mdi-lock-alert:before{content:\"\\F8ED\"}.mdi-lock-clock:before{content:\"\\F97E\"}.mdi-lock-open:before{content:\"\\F33F\"}.mdi-lock-open-outline:before{content:\"\\F340\"}.mdi-lock-outline:before{content:\"\\F341\"}.mdi-lock-pattern:before{content:\"\\F6E9\"}.mdi-lock-plus:before{content:\"\\F5FB\"}.mdi-lock-question:before{content:\"\\F8EE\"}.mdi-lock-reset:before{content:\"\\F772\"}.mdi-lock-smart:before{content:\"\\F8B1\"}.mdi-locker:before{content:\"\\F7D6\"}.mdi-locker-multiple:before{content:\"\\F7D7\"}.mdi-login:before{content:\"\\F342\"}.mdi-login-variant:before{content:\"\\F5FC\"}.mdi-logout:before{content:\"\\F343\"}.mdi-logout-variant:before{content:\"\\F5FD\"}.mdi-looks:before{content:\"\\F344\"}.mdi-loop:before{content:\"\\F6EA\"}.mdi-loupe:before{content:\"\\F345\"}.mdi-lumx:before{content:\"\\F346\"}.mdi-lyft:before{content:\"\\FB1D\"}.mdi-magnet:before{content:\"\\F347\"}.mdi-magnet-on:before{content:\"\\F348\"}.mdi-magnify:before{content:\"\\F349\"}.mdi-magnify-close:before{content:\"\\F97F\"}.mdi-magnify-minus:before{content:\"\\F34A\"}.mdi-magnify-minus-cursor:before{content:\"\\FA61\"}.mdi-magnify-minus-outline:before{content:\"\\F6EB\"}.mdi-magnify-plus:before{content:\"\\F34B\"}.mdi-magnify-plus-cursor:before{content:\"\\FA62\"}.mdi-magnify-plus-outline:before{content:\"\\F6EC\"}.mdi-mail-ru:before{content:\"\\F34C\"}.mdi-mailbox:before{content:\"\\F6ED\"}.mdi-mailbox-open:before{content:\"\\FD64\"}.mdi-mailbox-open-outline:before{content:\"\\FD65\"}.mdi-mailbox-open-up:before{content:\"\\FD66\"}.mdi-mailbox-open-up-outline:before{content:\"\\FD67\"}.mdi-mailbox-outline:before{content:\"\\FD68\"}.mdi-mailbox-up:before{content:\"\\FD69\"}.mdi-mailbox-up-outline:before{content:\"\\FD6A\"}.mdi-map:before{content:\"\\F34D\"}.mdi-map-clock:before{content:\"\\FCFA\"}.mdi-map-clock-outline:before{content:\"\\FCFB\"}.mdi-map-legend:before{content:\"\\FA00\"}.mdi-map-marker:before{content:\"\\F34E\"}.mdi-map-marker-check:before{content:\"\\FC71\"}.mdi-map-marker-circle:before{content:\"\\F34F\"}.mdi-map-marker-distance:before{content:\"\\F8EF\"}.mdi-map-marker-minus:before{content:\"\\F650\"}.mdi-map-marker-multiple:before{content:\"\\F350\"}.mdi-map-marker-off:before{content:\"\\F351\"}.mdi-map-marker-outline:before{content:\"\\F7D8\"}.mdi-map-marker-path:before{content:\"\\FCFC\"}.mdi-map-marker-plus:before{content:\"\\F651\"}.mdi-map-marker-radius:before{content:\"\\F352\"}.mdi-map-minus:before{content:\"\\F980\"}.mdi-map-outline:before{content:\"\\F981\"}.mdi-map-plus:before{content:\"\\F982\"}.mdi-map-search:before{content:\"\\F983\"}.mdi-map-search-outline:before{content:\"\\F984\"}.mdi-mapbox:before{content:\"\\FB86\"}.mdi-margin:before{content:\"\\F353\"}.mdi-markdown:before{content:\"\\F354\"}.mdi-marker:before{content:\"\\F652\"}.mdi-marker-cancel:before{content:\"\\FDB5\"}.mdi-marker-check:before{content:\"\\F355\"}.mdi-mastodon:before{content:\"\\FAD0\"}.mdi-mastodon-variant:before{content:\"\\FAD1\"}.mdi-material-design:before{content:\"\\F985\"}.mdi-material-ui:before{content:\"\\F357\"}.mdi-math-compass:before{content:\"\\F358\"}.mdi-math-cos:before{content:\"\\FC72\"}.mdi-math-sin:before{content:\"\\FC73\"}.mdi-math-tan:before{content:\"\\FC74\"}.mdi-matrix:before{content:\"\\F628\"}.mdi-maxcdn:before{content:\"\\F359\"}.mdi-medal:before{content:\"\\F986\"}.mdi-medical-bag:before{content:\"\\F6EE\"}.mdi-medium:before{content:\"\\F35A\"}.mdi-meetup:before{content:\"\\FAD2\"}.mdi-memory:before{content:\"\\F35B\"}.mdi-menu:before{content:\"\\F35C\"}.mdi-menu-down:before{content:\"\\F35D\"}.mdi-menu-down-outline:before{content:\"\\F6B5\"}.mdi-menu-left:before{content:\"\\F35E\"}.mdi-menu-left-outline:before{content:\"\\FA01\"}.mdi-menu-open:before{content:\"\\FB87\"}.mdi-menu-right:before{content:\"\\F35F\"}.mdi-menu-right-outline:before{content:\"\\FA02\"}.mdi-menu-swap:before{content:\"\\FA63\"}.mdi-menu-swap-outline:before{content:\"\\FA64\"}.mdi-menu-up:before{content:\"\\F360\"}.mdi-menu-up-outline:before{content:\"\\F6B6\"}.mdi-message:before{content:\"\\F361\"}.mdi-message-alert:before{content:\"\\F362\"}.mdi-message-alert-outline:before{content:\"\\FA03\"}.mdi-message-bulleted:before{content:\"\\F6A1\"}.mdi-message-bulleted-off:before{content:\"\\F6A2\"}.mdi-message-draw:before{content:\"\\F363\"}.mdi-message-image:before{content:\"\\F364\"}.mdi-message-outline:before{content:\"\\F365\"}.mdi-message-plus:before{content:\"\\F653\"}.mdi-message-processing:before{content:\"\\F366\"}.mdi-message-reply:before{content:\"\\F367\"}.mdi-message-reply-text:before{content:\"\\F368\"}.mdi-message-settings:before{content:\"\\F6EF\"}.mdi-message-settings-variant:before{content:\"\\F6F0\"}.mdi-message-text:before{content:\"\\F369\"}.mdi-message-text-outline:before{content:\"\\F36A\"}.mdi-message-video:before{content:\"\\F36B\"}.mdi-meteor:before{content:\"\\F629\"}.mdi-metronome:before{content:\"\\F7D9\"}.mdi-metronome-tick:before{content:\"\\F7DA\"}.mdi-micro-sd:before{content:\"\\F7DB\"}.mdi-microphone:before{content:\"\\F36C\"}.mdi-microphone-minus:before{content:\"\\F8B2\"}.mdi-microphone-off:before{content:\"\\F36D\"}.mdi-microphone-outline:before{content:\"\\F36E\"}.mdi-microphone-plus:before{content:\"\\F8B3\"}.mdi-microphone-settings:before{content:\"\\F36F\"}.mdi-microphone-variant:before{content:\"\\F370\"}.mdi-microphone-variant-off:before{content:\"\\F371\"}.mdi-microscope:before{content:\"\\F654\"}.mdi-microsoft:before{content:\"\\F372\"}.mdi-microsoft-dynamics:before{content:\"\\F987\"}.mdi-microwave:before{content:\"\\FC75\"}.mdi-midi:before{content:\"\\F8F0\"}.mdi-midi-port:before{content:\"\\F8F1\"}.mdi-mine:before{content:\"\\FDB6\"}.mdi-minecraft:before{content:\"\\F373\"}.mdi-mini-sd:before{content:\"\\FA04\"}.mdi-minidisc:before{content:\"\\FA05\"}.mdi-minus:before{content:\"\\F374\"}.mdi-minus-box:before{content:\"\\F375\"}.mdi-minus-box-outline:before{content:\"\\F6F1\"}.mdi-minus-circle:before{content:\"\\F376\"}.mdi-minus-circle-outline:before{content:\"\\F377\"}.mdi-minus-network:before{content:\"\\F378\"}.mdi-minus-network-outline:before{content:\"\\FC76\"}.mdi-mixcloud:before{content:\"\\F62A\"}.mdi-mixed-martial-arts:before{content:\"\\FD6B\"}.mdi-mixed-reality:before{content:\"\\F87E\"}.mdi-mixer:before{content:\"\\F7DC\"}.mdi-molecule:before{content:\"\\FB88\"}.mdi-monitor:before{content:\"\\F379\"}.mdi-monitor-cellphone:before{content:\"\\F988\"}.mdi-monitor-cellphone-star:before{content:\"\\F989\"}.mdi-monitor-dashboard:before{content:\"\\FA06\"}.mdi-monitor-lock:before{content:\"\\FDB7\"}.mdi-monitor-multiple:before{content:\"\\F37A\"}.mdi-monitor-off:before{content:\"\\FD6C\"}.mdi-monitor-star:before{content:\"\\FDB8\"}.mdi-more:before{content:\"\\F37B\"}.mdi-mother-nurse:before{content:\"\\FCFD\"}.mdi-motion-sensor:before{content:\"\\FD6D\"}.mdi-motorbike:before{content:\"\\F37C\"}.mdi-mouse:before{content:\"\\F37D\"}.mdi-mouse-bluetooth:before{content:\"\\F98A\"}.mdi-mouse-off:before{content:\"\\F37E\"}.mdi-mouse-variant:before{content:\"\\F37F\"}.mdi-mouse-variant-off:before{content:\"\\F380\"}.mdi-move-resize:before{content:\"\\F655\"}.mdi-move-resize-variant:before{content:\"\\F656\"}.mdi-movie:before{content:\"\\F381\"}.mdi-movie-outline:before{content:\"\\FDB9\"}.mdi-movie-roll:before{content:\"\\F7DD\"}.mdi-muffin:before{content:\"\\F98B\"}.mdi-multiplication:before{content:\"\\F382\"}.mdi-multiplication-box:before{content:\"\\F383\"}.mdi-mushroom:before{content:\"\\F7DE\"}.mdi-mushroom-outline:before{content:\"\\F7DF\"}.mdi-music:before{content:\"\\F759\"}.mdi-music-box:before{content:\"\\F384\"}.mdi-music-box-outline:before{content:\"\\F385\"}.mdi-music-circle:before{content:\"\\F386\"}.mdi-music-circle-outline:before{content:\"\\FAD3\"}.mdi-music-note:before{content:\"\\F387\"}.mdi-music-note-bluetooth:before{content:\"\\F5FE\"}.mdi-music-note-bluetooth-off:before{content:\"\\F5FF\"}.mdi-music-note-eighth:before{content:\"\\F388\"}.mdi-music-note-half:before{content:\"\\F389\"}.mdi-music-note-off:before{content:\"\\F38A\"}.mdi-music-note-plus:before{content:\"\\FDBA\"}.mdi-music-note-quarter:before{content:\"\\F38B\"}.mdi-music-note-sixteenth:before{content:\"\\F38C\"}.mdi-music-note-whole:before{content:\"\\F38D\"}.mdi-music-off:before{content:\"\\F75A\"}.mdi-nail:before{content:\"\\FDBB\"}.mdi-nas:before{content:\"\\F8F2\"}.mdi-nativescript:before{content:\"\\F87F\"}.mdi-nature:before{content:\"\\F38E\"}.mdi-nature-people:before{content:\"\\F38F\"}.mdi-navigation:before{content:\"\\F390\"}.mdi-near-me:before{content:\"\\F5CD\"}.mdi-needle:before{content:\"\\F391\"}.mdi-netflix:before{content:\"\\F745\"}.mdi-network:before{content:\"\\F6F2\"}.mdi-network-off:before{content:\"\\FC77\"}.mdi-network-off-outline:before{content:\"\\FC78\"}.mdi-network-outline:before{content:\"\\FC79\"}.mdi-network-strength-1:before{content:\"\\F8F3\"}.mdi-network-strength-1-alert:before{content:\"\\F8F4\"}.mdi-network-strength-2:before{content:\"\\F8F5\"}.mdi-network-strength-2-alert:before{content:\"\\F8F6\"}.mdi-network-strength-3:before{content:\"\\F8F7\"}.mdi-network-strength-3-alert:before{content:\"\\F8F8\"}.mdi-network-strength-4:before{content:\"\\F8F9\"}.mdi-network-strength-4-alert:before{content:\"\\F8FA\"}.mdi-network-strength-off:before{content:\"\\F8FB\"}.mdi-network-strength-off-outline:before{content:\"\\F8FC\"}.mdi-network-strength-outline:before{content:\"\\F8FD\"}.mdi-new-box:before{content:\"\\F394\"}.mdi-newspaper:before{content:\"\\F395\"}.mdi-nfc:before{content:\"\\F396\"}.mdi-nfc-tap:before{content:\"\\F397\"}.mdi-nfc-variant:before{content:\"\\F398\"}.mdi-ninja:before{content:\"\\F773\"}.mdi-nintendo-switch:before{content:\"\\F7E0\"}.mdi-nodejs:before{content:\"\\F399\"}.mdi-not-equal:before{content:\"\\F98C\"}.mdi-not-equal-variant:before{content:\"\\F98D\"}.mdi-note:before{content:\"\\F39A\"}.mdi-note-multiple:before{content:\"\\F6B7\"}.mdi-note-multiple-outline:before{content:\"\\F6B8\"}.mdi-note-outline:before{content:\"\\F39B\"}.mdi-note-plus:before{content:\"\\F39C\"}.mdi-note-plus-outline:before{content:\"\\F39D\"}.mdi-note-text:before{content:\"\\F39E\"}.mdi-notebook:before{content:\"\\F82D\"}.mdi-notification-clear-all:before{content:\"\\F39F\"}.mdi-npm:before{content:\"\\F6F6\"}.mdi-npm-variant:before{content:\"\\F98E\"}.mdi-npm-variant-outline:before{content:\"\\F98F\"}.mdi-nuke:before{content:\"\\F6A3\"}.mdi-null:before{content:\"\\F7E1\"}.mdi-numeric:before{content:\"\\F3A0\"}.mdi-numeric-0:before{content:\"0\"}.mdi-numeric-0-box:before{content:\"\\F3A1\"}.mdi-numeric-0-box-multiple-outline:before{content:\"\\F3A2\"}.mdi-numeric-0-box-outline:before{content:\"\\F3A3\"}.mdi-numeric-0-circle:before{content:\"\\FC7A\"}.mdi-numeric-0-circle-outline:before{content:\"\\FC7B\"}.mdi-numeric-1:before{content:\"1\"}.mdi-numeric-1-box:before{content:\"\\F3A4\"}.mdi-numeric-1-box-multiple-outline:before{content:\"\\F3A5\"}.mdi-numeric-1-box-outline:before{content:\"\\F3A6\"}.mdi-numeric-1-circle:before{content:\"\\FC7C\"}.mdi-numeric-1-circle-outline:before{content:\"\\FC7D\"}.mdi-numeric-2:before{content:\"2\"}.mdi-numeric-2-box:before{content:\"\\F3A7\"}.mdi-numeric-2-box-multiple-outline:before{content:\"\\F3A8\"}.mdi-numeric-2-box-outline:before{content:\"\\F3A9\"}.mdi-numeric-2-circle:before{content:\"\\FC7E\"}.mdi-numeric-2-circle-outline:before{content:\"\\FC7F\"}.mdi-numeric-3:before{content:\"3\"}.mdi-numeric-3-box:before{content:\"\\F3AA\"}.mdi-numeric-3-box-multiple-outline:before{content:\"\\F3AB\"}.mdi-numeric-3-box-outline:before{content:\"\\F3AC\"}.mdi-numeric-3-circle:before{content:\"\\FC80\"}.mdi-numeric-3-circle-outline:before{content:\"\\FC81\"}.mdi-numeric-4:before{content:\"4\"}.mdi-numeric-4-box:before{content:\"\\F3AD\"}.mdi-numeric-4-box-multiple-outline:before{content:\"\\F3AE\"}.mdi-numeric-4-box-outline:before{content:\"\\F3AF\"}.mdi-numeric-4-circle:before{content:\"\\FC82\"}.mdi-numeric-4-circle-outline:before{content:\"\\FC83\"}.mdi-numeric-5:before{content:\"5\"}.mdi-numeric-5-box:before{content:\"\\F3B0\"}.mdi-numeric-5-box-multiple-outline:before{content:\"\\F3B1\"}.mdi-numeric-5-box-outline:before{content:\"\\F3B2\"}.mdi-numeric-5-circle:before{content:\"\\FC84\"}.mdi-numeric-5-circle-outline:before{content:\"\\FC85\"}.mdi-numeric-6:before{content:\"6\"}.mdi-numeric-6-box:before{content:\"\\F3B3\"}.mdi-numeric-6-box-multiple-outline:before{content:\"\\F3B4\"}.mdi-numeric-6-box-outline:before{content:\"\\F3B5\"}.mdi-numeric-6-circle:before{content:\"\\FC86\"}.mdi-numeric-6-circle-outline:before{content:\"\\FC87\"}.mdi-numeric-7:before{content:\"7\"}.mdi-numeric-7-box:before{content:\"\\F3B6\"}.mdi-numeric-7-box-multiple-outline:before{content:\"\\F3B7\"}.mdi-numeric-7-box-outline:before{content:\"\\F3B8\"}.mdi-numeric-7-circle:before{content:\"\\FC88\"}.mdi-numeric-7-circle-outline:before{content:\"\\FC89\"}.mdi-numeric-8:before{content:\"8\"}.mdi-numeric-8-box:before{content:\"\\F3B9\"}.mdi-numeric-8-box-multiple-outline:before{content:\"\\F3BA\"}.mdi-numeric-8-box-outline:before{content:\"\\F3BB\"}.mdi-numeric-8-circle:before{content:\"\\FC8A\"}.mdi-numeric-8-circle-outline:before{content:\"\\FC8B\"}.mdi-numeric-9:before{content:\"9\"}.mdi-numeric-9-box:before{content:\"\\F3BC\"}.mdi-numeric-9-box-multiple-outline:before{content:\"\\F3BD\"}.mdi-numeric-9-box-outline:before{content:\"\\F3BE\"}.mdi-numeric-9-circle:before{content:\"\\FC8C\"}.mdi-numeric-9-circle-outline:before{content:\"\\FC8D\"}.mdi-numeric-9-plus-box:before{content:\"\\F3BF\"}.mdi-numeric-9-plus-box-multiple-outline:before{content:\"\\F3C0\"}.mdi-numeric-9-plus-box-outline:before{content:\"\\F3C1\"}.mdi-numeric-9-plus-circle:before{content:\"\\FC8E\"}.mdi-numeric-9-plus-circle-outline:before{content:\"\\FC8F\"}.mdi-nut:before{content:\"\\F6F7\"}.mdi-nutrition:before{content:\"\\F3C2\"}.mdi-oar:before{content:\"\\F67B\"}.mdi-ocarina:before{content:\"\\FDBC\"}.mdi-octagon:before{content:\"\\F3C3\"}.mdi-octagon-outline:before{content:\"\\F3C4\"}.mdi-octagram:before{content:\"\\F6F8\"}.mdi-octagram-outline:before{content:\"\\F774\"}.mdi-odnoklassniki:before{content:\"\\F3C5\"}.mdi-office:before{content:\"\\F3C6\"}.mdi-office-building:before{content:\"\\F990\"}.mdi-oil:before{content:\"\\F3C7\"}.mdi-oil-temperature:before{content:\"\\F3C8\"}.mdi-omega:before{content:\"\\F3C9\"}.mdi-one-up:before{content:\"\\FB89\"}.mdi-onedrive:before{content:\"\\F3CA\"}.mdi-onenote:before{content:\"\\F746\"}.mdi-onepassword:before{content:\"\\F880\"}.mdi-opacity:before{content:\"\\F5CC\"}.mdi-open-in-app:before{content:\"\\F3CB\"}.mdi-open-in-new:before{content:\"\\F3CC\"}.mdi-open-source-initiative:before{content:\"\\FB8A\"}.mdi-openid:before{content:\"\\F3CD\"}.mdi-opera:before{content:\"\\F3CE\"}.mdi-orbit:before{content:\"\\F018\"}.mdi-origin:before{content:\"\\FB2B\"}.mdi-ornament:before{content:\"\\F3CF\"}.mdi-ornament-variant:before{content:\"\\F3D0\"}.mdi-outlook:before{content:\"\\FCFE\"}.mdi-owl:before{content:\"\\F3D2\"}.mdi-pac-man:before{content:\"\\FB8B\"}.mdi-package:before{content:\"\\F3D3\"}.mdi-package-down:before{content:\"\\F3D4\"}.mdi-package-up:before{content:\"\\F3D5\"}.mdi-package-variant:before{content:\"\\F3D6\"}.mdi-package-variant-closed:before{content:\"\\F3D7\"}.mdi-page-first:before{content:\"\\F600\"}.mdi-page-last:before{content:\"\\F601\"}.mdi-page-layout-body:before{content:\"\\F6F9\"}.mdi-page-layout-footer:before{content:\"\\F6FA\"}.mdi-page-layout-header:before{content:\"\\F6FB\"}.mdi-page-layout-sidebar-left:before{content:\"\\F6FC\"}.mdi-page-layout-sidebar-right:before{content:\"\\F6FD\"}.mdi-page-next:before{content:\"\\FB8C\"}.mdi-page-next-outline:before{content:\"\\FB8D\"}.mdi-page-previous:before{content:\"\\FB8E\"}.mdi-page-previous-outline:before{content:\"\\FB8F\"}.mdi-palette:before{content:\"\\F3D8\"}.mdi-palette-advanced:before{content:\"\\F3D9\"}.mdi-palette-outline:before{content:\"\\FDE8\"}.mdi-palette-swatch:before{content:\"\\F8B4\"}.mdi-pan:before{content:\"\\FB90\"}.mdi-pan-bottom-left:before{content:\"\\FB91\"}.mdi-pan-bottom-right:before{content:\"\\FB92\"}.mdi-pan-down:before{content:\"\\FB93\"}.mdi-pan-horizontal:before{content:\"\\FB94\"}.mdi-pan-left:before{content:\"\\FB95\"}.mdi-pan-right:before{content:\"\\FB96\"}.mdi-pan-top-left:before{content:\"\\FB97\"}.mdi-pan-top-right:before{content:\"\\FB98\"}.mdi-pan-up:before{content:\"\\FB99\"}.mdi-pan-vertical:before{content:\"\\FB9A\"}.mdi-panda:before{content:\"\\F3DA\"}.mdi-pandora:before{content:\"\\F3DB\"}.mdi-panorama:before{content:\"\\F3DC\"}.mdi-panorama-fisheye:before{content:\"\\F3DD\"}.mdi-panorama-horizontal:before{content:\"\\F3DE\"}.mdi-panorama-vertical:before{content:\"\\F3DF\"}.mdi-panorama-wide-angle:before{content:\"\\F3E0\"}.mdi-paper-cut-vertical:before{content:\"\\F3E1\"}.mdi-paperclip:before{content:\"\\F3E2\"}.mdi-parachute:before{content:\"\\FC90\"}.mdi-parachute-outline:before{content:\"\\FC91\"}.mdi-parking:before{content:\"\\F3E3\"}.mdi-passport:before{content:\"\\F7E2\"}.mdi-passport-biometric:before{content:\"\\FDBD\"}.mdi-patreon:before{content:\"\\F881\"}.mdi-pause:before{content:\"\\F3E4\"}.mdi-pause-circle:before{content:\"\\F3E5\"}.mdi-pause-circle-outline:before{content:\"\\F3E6\"}.mdi-pause-octagon:before{content:\"\\F3E7\"}.mdi-pause-octagon-outline:before{content:\"\\F3E8\"}.mdi-paw:before{content:\"\\F3E9\"}.mdi-paw-off:before{content:\"\\F657\"}.mdi-paypal:before{content:\"\\F882\"}.mdi-peace:before{content:\"\\F883\"}.mdi-pen:before{content:\"\\F3EA\"}.mdi-pen-lock:before{content:\"\\FDBE\"}.mdi-pen-minus:before{content:\"\\FDBF\"}.mdi-pen-off:before{content:\"\\FDC0\"}.mdi-pen-plus:before{content:\"\\FDC1\"}.mdi-pen-remove:before{content:\"\\FDC2\"}.mdi-pencil:before{content:\"\\F3EB\"}.mdi-pencil-box:before{content:\"\\F3EC\"}.mdi-pencil-box-outline:before{content:\"\\F3ED\"}.mdi-pencil-circle:before{content:\"\\F6FE\"}.mdi-pencil-circle-outline:before{content:\"\\F775\"}.mdi-pencil-lock:before{content:\"\\F3EE\"}.mdi-pencil-lock-outline:before{content:\"\\FDC3\"}.mdi-pencil-minus:before{content:\"\\FDC4\"}.mdi-pencil-minus-outline:before{content:\"\\FDC5\"}.mdi-pencil-off:before{content:\"\\F3EF\"}.mdi-pencil-off-outline:before{content:\"\\FDC6\"}.mdi-pencil-outline:before{content:\"\\FC92\"}.mdi-pencil-plus:before{content:\"\\FDC7\"}.mdi-pencil-plus-outline:before{content:\"\\FDC8\"}.mdi-pencil-remove:before{content:\"\\FDC9\"}.mdi-pencil-remove-outline:before{content:\"\\FDCA\"}.mdi-pentagon:before{content:\"\\F6FF\"}.mdi-pentagon-outline:before{content:\"\\F700\"}.mdi-percent:before{content:\"\\F3F0\"}.mdi-periodic-table:before{content:\"\\F8B5\"}.mdi-periodic-table-co2:before{content:\"\\F7E3\"}.mdi-periscope:before{content:\"\\F747\"}.mdi-perspective-less:before{content:\"\\FCFF\"}.mdi-perspective-more:before{content:\"\\FD00\"}.mdi-pharmacy:before{content:\"\\F3F1\"}.mdi-phone:before{content:\"\\F3F2\"}.mdi-phone-bluetooth:before{content:\"\\F3F3\"}.mdi-phone-classic:before{content:\"\\F602\"}.mdi-phone-forward:before{content:\"\\F3F4\"}.mdi-phone-hangup:before{content:\"\\F3F5\"}.mdi-phone-in-talk:before{content:\"\\F3F6\"}.mdi-phone-incoming:before{content:\"\\F3F7\"}.mdi-phone-lock:before{content:\"\\F3F8\"}.mdi-phone-log:before{content:\"\\F3F9\"}.mdi-phone-minus:before{content:\"\\F658\"}.mdi-phone-missed:before{content:\"\\F3FA\"}.mdi-phone-off:before{content:\"\\FDCB\"}.mdi-phone-outgoing:before{content:\"\\F3FB\"}.mdi-phone-outline:before{content:\"\\FDCC\"}.mdi-phone-paused:before{content:\"\\F3FC\"}.mdi-phone-plus:before{content:\"\\F659\"}.mdi-phone-return:before{content:\"\\F82E\"}.mdi-phone-rotate-landscape:before{content:\"\\F884\"}.mdi-phone-rotate-portrait:before{content:\"\\F885\"}.mdi-phone-settings:before{content:\"\\F3FD\"}.mdi-phone-voip:before{content:\"\\F3FE\"}.mdi-pi:before{content:\"\\F3FF\"}.mdi-pi-box:before{content:\"\\F400\"}.mdi-pi-hole:before{content:\"\\FDCD\"}.mdi-piano:before{content:\"\\F67C\"}.mdi-pickaxe:before{content:\"\\F8B6\"}.mdi-pier:before{content:\"\\F886\"}.mdi-pier-crane:before{content:\"\\F887\"}.mdi-pig:before{content:\"\\F401\"}.mdi-pill:before{content:\"\\F402\"}.mdi-pillar:before{content:\"\\F701\"}.mdi-pin:before{content:\"\\F403\"}.mdi-pin-off:before{content:\"\\F404\"}.mdi-pin-off-outline:before{content:\"\\F92F\"}.mdi-pin-outline:before{content:\"\\F930\"}.mdi-pine-tree:before{content:\"\\F405\"}.mdi-pine-tree-box:before{content:\"\\F406\"}.mdi-pinterest:before{content:\"\\F407\"}.mdi-pinterest-box:before{content:\"\\F408\"}.mdi-pinwheel:before{content:\"\\FAD4\"}.mdi-pinwheel-outline:before{content:\"\\FAD5\"}.mdi-pipe:before{content:\"\\F7E4\"}.mdi-pipe-disconnected:before{content:\"\\F7E5\"}.mdi-pipe-leak:before{content:\"\\F888\"}.mdi-pirate:before{content:\"\\FA07\"}.mdi-pistol:before{content:\"\\F702\"}.mdi-piston:before{content:\"\\F889\"}.mdi-pizza:before{content:\"\\F409\"}.mdi-play:before{content:\"\\F40A\"}.mdi-play-box-outline:before{content:\"\\F40B\"}.mdi-play-circle:before{content:\"\\F40C\"}.mdi-play-circle-outline:before{content:\"\\F40D\"}.mdi-play-network:before{content:\"\\F88A\"}.mdi-play-network-outline:before{content:\"\\FC93\"}.mdi-play-pause:before{content:\"\\F40E\"}.mdi-play-protected-content:before{content:\"\\F40F\"}.mdi-play-speed:before{content:\"\\F8FE\"}.mdi-playlist-check:before{content:\"\\F5C7\"}.mdi-playlist-edit:before{content:\"\\F8FF\"}.mdi-playlist-minus:before{content:\"\\F410\"}.mdi-playlist-music:before{content:\"\\FC94\"}.mdi-playlist-music-outline:before{content:\"\\FC95\"}.mdi-playlist-play:before{content:\"\\F411\"}.mdi-playlist-plus:before{content:\"\\F412\"}.mdi-playlist-remove:before{content:\"\\F413\"}.mdi-playlist-star:before{content:\"\\FDCE\"}.mdi-playstation:before{content:\"\\F414\"}.mdi-plex:before{content:\"\\F6B9\"}.mdi-plus:before{content:\"\\F415\"}.mdi-plus-box:before{content:\"\\F416\"}.mdi-plus-box-outline:before{content:\"\\F703\"}.mdi-plus-circle:before{content:\"\\F417\"}.mdi-plus-circle-multiple-outline:before{content:\"\\F418\"}.mdi-plus-circle-outline:before{content:\"\\F419\"}.mdi-plus-minus:before{content:\"\\F991\"}.mdi-plus-minus-box:before{content:\"\\F992\"}.mdi-plus-network:before{content:\"\\F41A\"}.mdi-plus-network-outline:before{content:\"\\FC96\"}.mdi-plus-one:before{content:\"\\F41B\"}.mdi-plus-outline:before{content:\"\\F704\"}.mdi-pocket:before{content:\"\\F41C\"}.mdi-podcast:before{content:\"\\F993\"}.mdi-podium:before{content:\"\\FD01\"}.mdi-podium-bronze:before{content:\"\\FD02\"}.mdi-podium-gold:before{content:\"\\FD03\"}.mdi-podium-silver:before{content:\"\\FD04\"}.mdi-point-of-sale:before{content:\"\\FD6E\"}.mdi-pokeball:before{content:\"\\F41D\"}.mdi-pokemon-go:before{content:\"\\FA08\"}.mdi-poker-chip:before{content:\"\\F82F\"}.mdi-polaroid:before{content:\"\\F41E\"}.mdi-poll:before{content:\"\\F41F\"}.mdi-poll-box:before{content:\"\\F420\"}.mdi-polymer:before{content:\"\\F421\"}.mdi-pool:before{content:\"\\F606\"}.mdi-popcorn:before{content:\"\\F422\"}.mdi-postage-stamp:before{content:\"\\FC97\"}.mdi-pot:before{content:\"\\F65A\"}.mdi-pot-mix:before{content:\"\\F65B\"}.mdi-pound:before{content:\"\\F423\"}.mdi-pound-box:before{content:\"\\F424\"}.mdi-power:before{content:\"\\F425\"}.mdi-power-cycle:before{content:\"\\F900\"}.mdi-power-off:before{content:\"\\F901\"}.mdi-power-on:before{content:\"\\F902\"}.mdi-power-plug:before{content:\"\\F6A4\"}.mdi-power-plug-off:before{content:\"\\F6A5\"}.mdi-power-settings:before{content:\"\\F426\"}.mdi-power-sleep:before{content:\"\\F903\"}.mdi-power-socket:before{content:\"\\F427\"}.mdi-power-socket-au:before{content:\"\\F904\"}.mdi-power-socket-eu:before{content:\"\\F7E6\"}.mdi-power-socket-uk:before{content:\"\\F7E7\"}.mdi-power-socket-us:before{content:\"\\F7E8\"}.mdi-power-standby:before{content:\"\\F905\"}.mdi-powershell:before{content:\"\\FA09\"}.mdi-prescription:before{content:\"\\F705\"}.mdi-presentation:before{content:\"\\F428\"}.mdi-presentation-play:before{content:\"\\F429\"}.mdi-printer:before{content:\"\\F42A\"}.mdi-printer-3d:before{content:\"\\F42B\"}.mdi-printer-alert:before{content:\"\\F42C\"}.mdi-printer-settings:before{content:\"\\F706\"}.mdi-printer-wireless:before{content:\"\\FA0A\"}.mdi-priority-high:before{content:\"\\F603\"}.mdi-priority-low:before{content:\"\\F604\"}.mdi-professional-hexagon:before{content:\"\\F42D\"}.mdi-progress-alert:before{content:\"\\FC98\"}.mdi-progress-check:before{content:\"\\F994\"}.mdi-progress-clock:before{content:\"\\F995\"}.mdi-progress-download:before{content:\"\\F996\"}.mdi-progress-upload:before{content:\"\\F997\"}.mdi-progress-wrench:before{content:\"\\FC99\"}.mdi-projector:before{content:\"\\F42E\"}.mdi-projector-screen:before{content:\"\\F42F\"}.mdi-publish:before{content:\"\\F6A6\"}.mdi-pulse:before{content:\"\\F430\"}.mdi-pumpkin:before{content:\"\\FB9B\"}.mdi-puzzle:before{content:\"\\F431\"}.mdi-puzzle-outline:before{content:\"\\FA65\"}.mdi-qi:before{content:\"\\F998\"}.mdi-qqchat:before{content:\"\\F605\"}.mdi-qrcode:before{content:\"\\F432\"}.mdi-qrcode-edit:before{content:\"\\F8B7\"}.mdi-qrcode-scan:before{content:\"\\F433\"}.mdi-quadcopter:before{content:\"\\F434\"}.mdi-quality-high:before{content:\"\\F435\"}.mdi-quality-low:before{content:\"\\FA0B\"}.mdi-quality-medium:before{content:\"\\FA0C\"}.mdi-quicktime:before{content:\"\\F436\"}.mdi-quora:before{content:\"\\FD05\"}.mdi-rabbit:before{content:\"\\F906\"}.mdi-racing-helmet:before{content:\"\\FD6F\"}.mdi-racquetball:before{content:\"\\FD70\"}.mdi-radar:before{content:\"\\F437\"}.mdi-radiator:before{content:\"\\F438\"}.mdi-radiator-disabled:before{content:\"\\FAD6\"}.mdi-radiator-off:before{content:\"\\FAD7\"}.mdi-radio:before{content:\"\\F439\"}.mdi-radio-am:before{content:\"\\FC9A\"}.mdi-radio-fm:before{content:\"\\FC9B\"}.mdi-radio-handheld:before{content:\"\\F43A\"}.mdi-radio-tower:before{content:\"\\F43B\"}.mdi-radioactive:before{content:\"\\F43C\"}.mdi-radiobox-blank:before{content:\"\\F43D\"}.mdi-radiobox-marked:before{content:\"\\F43E\"}.mdi-radius:before{content:\"\\FC9C\"}.mdi-radius-outline:before{content:\"\\FC9D\"}.mdi-raspberry-pi:before{content:\"\\F43F\"}.mdi-ray-end:before{content:\"\\F440\"}.mdi-ray-end-arrow:before{content:\"\\F441\"}.mdi-ray-start:before{content:\"\\F442\"}.mdi-ray-start-arrow:before{content:\"\\F443\"}.mdi-ray-start-end:before{content:\"\\F444\"}.mdi-ray-vertex:before{content:\"\\F445\"}.mdi-react:before{content:\"\\F707\"}.mdi-read:before{content:\"\\F447\"}.mdi-receipt:before{content:\"\\F449\"}.mdi-record:before{content:\"\\F44A\"}.mdi-record-player:before{content:\"\\F999\"}.mdi-record-rec:before{content:\"\\F44B\"}.mdi-recycle:before{content:\"\\F44C\"}.mdi-reddit:before{content:\"\\F44D\"}.mdi-redo:before{content:\"\\F44E\"}.mdi-redo-variant:before{content:\"\\F44F\"}.mdi-reflect-horizontal:before{content:\"\\FA0D\"}.mdi-reflect-vertical:before{content:\"\\FA0E\"}.mdi-refresh:before{content:\"\\F450\"}.mdi-regex:before{content:\"\\F451\"}.mdi-registered-trademark:before{content:\"\\FA66\"}.mdi-relative-scale:before{content:\"\\F452\"}.mdi-reload:before{content:\"\\F453\"}.mdi-reminder:before{content:\"\\F88B\"}.mdi-remote:before{content:\"\\F454\"}.mdi-remote-desktop:before{content:\"\\F8B8\"}.mdi-rename-box:before{content:\"\\F455\"}.mdi-reorder-horizontal:before{content:\"\\F687\"}.mdi-reorder-vertical:before{content:\"\\F688\"}.mdi-repeat:before{content:\"\\F456\"}.mdi-repeat-off:before{content:\"\\F457\"}.mdi-repeat-once:before{content:\"\\F458\"}.mdi-replay:before{content:\"\\F459\"}.mdi-reply:before{content:\"\\F45A\"}.mdi-reply-all:before{content:\"\\F45B\"}.mdi-reproduction:before{content:\"\\F45C\"}.mdi-resistor:before{content:\"\\FB1F\"}.mdi-resistor-nodes:before{content:\"\\FB20\"}.mdi-resize:before{content:\"\\FA67\"}.mdi-resize-bottom-right:before{content:\"\\F45D\"}.mdi-responsive:before{content:\"\\F45E\"}.mdi-restart:before{content:\"\\F708\"}.mdi-restart-off:before{content:\"\\FD71\"}.mdi-restore:before{content:\"\\F99A\"}.mdi-restore-clock:before{content:\"\\F6A7\"}.mdi-rewind:before{content:\"\\F45F\"}.mdi-rewind-10:before{content:\"\\FD06\"}.mdi-rewind-30:before{content:\"\\FD72\"}.mdi-rewind-outline:before{content:\"\\F709\"}.mdi-rhombus:before{content:\"\\F70A\"}.mdi-rhombus-medium:before{content:\"\\FA0F\"}.mdi-rhombus-outline:before{content:\"\\F70B\"}.mdi-rhombus-split:before{content:\"\\FA10\"}.mdi-ribbon:before{content:\"\\F460\"}.mdi-rice:before{content:\"\\F7E9\"}.mdi-ring:before{content:\"\\F7EA\"}.mdi-road:before{content:\"\\F461\"}.mdi-road-variant:before{content:\"\\F462\"}.mdi-robot:before{content:\"\\F6A8\"}.mdi-robot-industrial:before{content:\"\\FB21\"}.mdi-robot-vacuum:before{content:\"\\F70C\"}.mdi-robot-vacuum-variant:before{content:\"\\F907\"}.mdi-rocket:before{content:\"\\F463\"}.mdi-roller-skate:before{content:\"\\FD07\"}.mdi-rollerblade:before{content:\"\\FD08\"}.mdi-rollupjs:before{content:\"\\FB9C\"}.mdi-room-service:before{content:\"\\F88C\"}.mdi-room-service-outline:before{content:\"\\FD73\"}.mdi-rotate-3d:before{content:\"\\F464\"}.mdi-rotate-left:before{content:\"\\F465\"}.mdi-rotate-left-variant:before{content:\"\\F466\"}.mdi-rotate-orbit:before{content:\"\\FD74\"}.mdi-rotate-right:before{content:\"\\F467\"}.mdi-rotate-right-variant:before{content:\"\\F468\"}.mdi-rounded-corner:before{content:\"\\F607\"}.mdi-router-wireless:before{content:\"\\F469\"}.mdi-router-wireless-settings:before{content:\"\\FA68\"}.mdi-routes:before{content:\"\\F46A\"}.mdi-rowing:before{content:\"\\F608\"}.mdi-rss:before{content:\"\\F46B\"}.mdi-rss-box:before{content:\"\\F46C\"}.mdi-ruby:before{content:\"\\FD09\"}.mdi-rugby:before{content:\"\\FD75\"}.mdi-ruler:before{content:\"\\F46D\"}.mdi-ruler-square:before{content:\"\\FC9E\"}.mdi-run:before{content:\"\\F70D\"}.mdi-run-fast:before{content:\"\\F46E\"}.mdi-sack:before{content:\"\\FD0A\"}.mdi-sack-percent:before{content:\"\\FD0B\"}.mdi-safe:before{content:\"\\FA69\"}.mdi-safety-goggles:before{content:\"\\FD0C\"}.mdi-sale:before{content:\"\\F46F\"}.mdi-salesforce:before{content:\"\\F88D\"}.mdi-sass:before{content:\"\\F7EB\"}.mdi-satellite:before{content:\"\\F470\"}.mdi-satellite-uplink:before{content:\"\\F908\"}.mdi-satellite-variant:before{content:\"\\F471\"}.mdi-sausage:before{content:\"\\F8B9\"}.mdi-saxophone:before{content:\"\\F609\"}.mdi-scale:before{content:\"\\F472\"}.mdi-scale-balance:before{content:\"\\F5D1\"}.mdi-scale-bathroom:before{content:\"\\F473\"}.mdi-scanner:before{content:\"\\F6AA\"}.mdi-scanner-off:before{content:\"\\F909\"}.mdi-school:before{content:\"\\F474\"}.mdi-scissors-cutting:before{content:\"\\FA6A\"}.mdi-screen-rotation:before{content:\"\\F475\"}.mdi-screen-rotation-lock:before{content:\"\\F476\"}.mdi-screw-flat-top:before{content:\"\\FDCF\"}.mdi-screw-lag:before{content:\"\\FDD0\"}.mdi-screw-machine-flat-top:before{content:\"\\FDD1\"}.mdi-screw-machine-round-top:before{content:\"\\FDD2\"}.mdi-screw-round-top:before{content:\"\\FDD3\"}.mdi-screwdriver:before{content:\"\\F477\"}.mdi-script:before{content:\"\\FB9D\"}.mdi-script-outline:before{content:\"\\F478\"}.mdi-script-text:before{content:\"\\FB9E\"}.mdi-script-text-outline:before{content:\"\\FB9F\"}.mdi-sd:before{content:\"\\F479\"}.mdi-seal:before{content:\"\\F47A\"}.mdi-search-web:before{content:\"\\F70E\"}.mdi-seat:before{content:\"\\FC9F\"}.mdi-seat-flat:before{content:\"\\F47B\"}.mdi-seat-flat-angled:before{content:\"\\F47C\"}.mdi-seat-individual-suite:before{content:\"\\F47D\"}.mdi-seat-legroom-extra:before{content:\"\\F47E\"}.mdi-seat-legroom-normal:before{content:\"\\F47F\"}.mdi-seat-legroom-reduced:before{content:\"\\F480\"}.mdi-seat-outline:before{content:\"\\FCA0\"}.mdi-seat-recline-extra:before{content:\"\\F481\"}.mdi-seat-recline-normal:before{content:\"\\F482\"}.mdi-seatbelt:before{content:\"\\FCA1\"}.mdi-security:before{content:\"\\F483\"}.mdi-security-network:before{content:\"\\F484\"}.mdi-select:before{content:\"\\F485\"}.mdi-select-all:before{content:\"\\F486\"}.mdi-select-color:before{content:\"\\FD0D\"}.mdi-select-compare:before{content:\"\\FAD8\"}.mdi-select-drag:before{content:\"\\FA6B\"}.mdi-select-inverse:before{content:\"\\F487\"}.mdi-select-off:before{content:\"\\F488\"}.mdi-selection:before{content:\"\\F489\"}.mdi-selection-drag:before{content:\"\\FA6C\"}.mdi-selection-ellipse:before{content:\"\\FD0E\"}.mdi-selection-off:before{content:\"\\F776\"}.mdi-send:before{content:\"\\F48A\"}.mdi-send-circle:before{content:\"\\FDD4\"}.mdi-send-circle-outline:before{content:\"\\FDD5\"}.mdi-send-lock:before{content:\"\\F7EC\"}.mdi-serial-port:before{content:\"\\F65C\"}.mdi-server:before{content:\"\\F48B\"}.mdi-server-minus:before{content:\"\\F48C\"}.mdi-server-network:before{content:\"\\F48D\"}.mdi-server-network-off:before{content:\"\\F48E\"}.mdi-server-off:before{content:\"\\F48F\"}.mdi-server-plus:before{content:\"\\F490\"}.mdi-server-remove:before{content:\"\\F491\"}.mdi-server-security:before{content:\"\\F492\"}.mdi-set-all:before{content:\"\\F777\"}.mdi-set-center:before{content:\"\\F778\"}.mdi-set-center-right:before{content:\"\\F779\"}.mdi-set-left:before{content:\"\\F77A\"}.mdi-set-left-center:before{content:\"\\F77B\"}.mdi-set-left-right:before{content:\"\\F77C\"}.mdi-set-none:before{content:\"\\F77D\"}.mdi-set-right:before{content:\"\\F77E\"}.mdi-set-top-box:before{content:\"\\F99E\"}.mdi-settings:before{content:\"\\F493\"}.mdi-settings-box:before{content:\"\\F494\"}.mdi-settings-helper:before{content:\"\\FA6D\"}.mdi-settings-outline:before{content:\"\\F8BA\"}.mdi-shape:before{content:\"\\F830\"}.mdi-shape-circle-plus:before{content:\"\\F65D\"}.mdi-shape-outline:before{content:\"\\F831\"}.mdi-shape-plus:before{content:\"\\F495\"}.mdi-shape-polygon-plus:before{content:\"\\F65E\"}.mdi-shape-rectangle-plus:before{content:\"\\F65F\"}.mdi-shape-square-plus:before{content:\"\\F660\"}.mdi-share:before{content:\"\\F496\"}.mdi-share-outline:before{content:\"\\F931\"}.mdi-share-variant:before{content:\"\\F497\"}.mdi-sheep:before{content:\"\\FCA2\"}.mdi-shield:before{content:\"\\F498\"}.mdi-shield-account:before{content:\"\\F88E\"}.mdi-shield-account-outline:before{content:\"\\FA11\"}.mdi-shield-airplane:before{content:\"\\F6BA\"}.mdi-shield-airplane-outline:before{content:\"\\FCA3\"}.mdi-shield-check:before{content:\"\\F565\"}.mdi-shield-check-outline:before{content:\"\\FCA4\"}.mdi-shield-cross:before{content:\"\\FCA5\"}.mdi-shield-cross-outline:before{content:\"\\FCA6\"}.mdi-shield-half-full:before{content:\"\\F77F\"}.mdi-shield-home:before{content:\"\\F689\"}.mdi-shield-home-outline:before{content:\"\\FCA7\"}.mdi-shield-key:before{content:\"\\FBA0\"}.mdi-shield-key-outline:before{content:\"\\FBA1\"}.mdi-shield-link-variant:before{content:\"\\FD0F\"}.mdi-shield-link-variant-outline:before{content:\"\\FD10\"}.mdi-shield-lock:before{content:\"\\F99C\"}.mdi-shield-lock-outline:before{content:\"\\FCA8\"}.mdi-shield-off:before{content:\"\\F99D\"}.mdi-shield-off-outline:before{content:\"\\F99B\"}.mdi-shield-outline:before{content:\"\\F499\"}.mdi-shield-plus:before{content:\"\\FAD9\"}.mdi-shield-plus-outline:before{content:\"\\FADA\"}.mdi-shield-remove:before{content:\"\\FADB\"}.mdi-shield-remove-outline:before{content:\"\\FADC\"}.mdi-shield-search:before{content:\"\\FD76\"}.mdi-ship-wheel:before{content:\"\\F832\"}.mdi-shoe-formal:before{content:\"\\FB22\"}.mdi-shoe-heel:before{content:\"\\FB23\"}.mdi-shoe-print:before{content:\"\\FDD6\"}.mdi-shopify:before{content:\"\\FADD\"}.mdi-shopping:before{content:\"\\F49A\"}.mdi-shopping-music:before{content:\"\\F49B\"}.mdi-shovel:before{content:\"\\F70F\"}.mdi-shovel-off:before{content:\"\\F710\"}.mdi-shower:before{content:\"\\F99F\"}.mdi-shower-head:before{content:\"\\F9A0\"}.mdi-shredder:before{content:\"\\F49C\"}.mdi-shuffle:before{content:\"\\F49D\"}.mdi-shuffle-disabled:before{content:\"\\F49E\"}.mdi-shuffle-variant:before{content:\"\\F49F\"}.mdi-sigma:before{content:\"\\F4A0\"}.mdi-sigma-lower:before{content:\"\\F62B\"}.mdi-sign-caution:before{content:\"\\F4A1\"}.mdi-sign-direction:before{content:\"\\F780\"}.mdi-sign-text:before{content:\"\\F781\"}.mdi-signal:before{content:\"\\F4A2\"}.mdi-signal-2g:before{content:\"\\F711\"}.mdi-signal-3g:before{content:\"\\F712\"}.mdi-signal-4g:before{content:\"\\F713\"}.mdi-signal-5g:before{content:\"\\FA6E\"}.mdi-signal-cellular-1:before{content:\"\\F8BB\"}.mdi-signal-cellular-2:before{content:\"\\F8BC\"}.mdi-signal-cellular-3:before{content:\"\\F8BD\"}.mdi-signal-cellular-outline:before{content:\"\\F8BE\"}.mdi-signal-hspa:before{content:\"\\F714\"}.mdi-signal-hspa-plus:before{content:\"\\F715\"}.mdi-signal-off:before{content:\"\\F782\"}.mdi-signal-variant:before{content:\"\\F60A\"}.mdi-signature:before{content:\"\\FDD7\"}.mdi-signature-freehand:before{content:\"\\FDD8\"}.mdi-signature-image:before{content:\"\\FDD9\"}.mdi-signature-text:before{content:\"\\FDDA\"}.mdi-silo:before{content:\"\\FB24\"}.mdi-silverware:before{content:\"\\F4A3\"}.mdi-silverware-fork:before{content:\"\\F4A4\"}.mdi-silverware-fork-knife:before{content:\"\\FA6F\"}.mdi-silverware-spoon:before{content:\"\\F4A5\"}.mdi-silverware-variant:before{content:\"\\F4A6\"}.mdi-sim:before{content:\"\\F4A7\"}.mdi-sim-alert:before{content:\"\\F4A8\"}.mdi-sim-off:before{content:\"\\F4A9\"}.mdi-sina-weibo:before{content:\"\\FADE\"}.mdi-sitemap:before{content:\"\\F4AA\"}.mdi-skate:before{content:\"\\FD11\"}.mdi-skew-less:before{content:\"\\FD12\"}.mdi-skew-more:before{content:\"\\FD13\"}.mdi-skip-backward:before{content:\"\\F4AB\"}.mdi-skip-forward:before{content:\"\\F4AC\"}.mdi-skip-next:before{content:\"\\F4AD\"}.mdi-skip-next-circle:before{content:\"\\F661\"}.mdi-skip-next-circle-outline:before{content:\"\\F662\"}.mdi-skip-previous:before{content:\"\\F4AE\"}.mdi-skip-previous-circle:before{content:\"\\F663\"}.mdi-skip-previous-circle-outline:before{content:\"\\F664\"}.mdi-skull:before{content:\"\\F68B\"}.mdi-skull-crossbones:before{content:\"\\FBA2\"}.mdi-skull-crossbones-outline:before{content:\"\\FBA3\"}.mdi-skull-outline:before{content:\"\\FBA4\"}.mdi-skype:before{content:\"\\F4AF\"}.mdi-skype-business:before{content:\"\\F4B0\"}.mdi-slack:before{content:\"\\F4B1\"}.mdi-slackware:before{content:\"\\F90A\"}.mdi-sleep:before{content:\"\\F4B2\"}.mdi-sleep-off:before{content:\"\\F4B3\"}.mdi-slope-downhill:before{content:\"\\FDDB\"}.mdi-slope-uphill:before{content:\"\\FDDC\"}.mdi-smog:before{content:\"\\FA70\"}.mdi-smoke-detector:before{content:\"\\F392\"}.mdi-smoking:before{content:\"\\F4B4\"}.mdi-smoking-off:before{content:\"\\F4B5\"}.mdi-snapchat:before{content:\"\\F4B6\"}.mdi-snowflake:before{content:\"\\F716\"}.mdi-snowman:before{content:\"\\F4B7\"}.mdi-soccer:before{content:\"\\F4B8\"}.mdi-soccer-field:before{content:\"\\F833\"}.mdi-sofa:before{content:\"\\F4B9\"}.mdi-solar-panel:before{content:\"\\FD77\"}.mdi-solar-panel-large:before{content:\"\\FD78\"}.mdi-solar-power:before{content:\"\\FA71\"}.mdi-solid:before{content:\"\\F68C\"}.mdi-sort:before{content:\"\\F4BA\"}.mdi-sort-alphabetical:before{content:\"\\F4BB\"}.mdi-sort-ascending:before{content:\"\\F4BC\"}.mdi-sort-descending:before{content:\"\\F4BD\"}.mdi-sort-numeric:before{content:\"\\F4BE\"}.mdi-sort-variant:before{content:\"\\F4BF\"}.mdi-sort-variant-lock:before{content:\"\\FCA9\"}.mdi-sort-variant-lock-open:before{content:\"\\FCAA\"}.mdi-soundcloud:before{content:\"\\F4C0\"}.mdi-source-branch:before{content:\"\\F62C\"}.mdi-source-commit:before{content:\"\\F717\"}.mdi-source-commit-end:before{content:\"\\F718\"}.mdi-source-commit-end-local:before{content:\"\\F719\"}.mdi-source-commit-local:before{content:\"\\F71A\"}.mdi-source-commit-next-local:before{content:\"\\F71B\"}.mdi-source-commit-start:before{content:\"\\F71C\"}.mdi-source-commit-start-next-local:before{content:\"\\F71D\"}.mdi-source-fork:before{content:\"\\F4C1\"}.mdi-source-merge:before{content:\"\\F62D\"}.mdi-source-pull:before{content:\"\\F4C2\"}.mdi-source-repository:before{content:\"\\FCAB\"}.mdi-source-repository-multiple:before{content:\"\\FCAC\"}.mdi-soy-sauce:before{content:\"\\F7ED\"}.mdi-spa:before{content:\"\\FCAD\"}.mdi-spa-outline:before{content:\"\\FCAE\"}.mdi-space-invaders:before{content:\"\\FBA5\"}.mdi-speaker:before{content:\"\\F4C3\"}.mdi-speaker-bluetooth:before{content:\"\\F9A1\"}.mdi-speaker-multiple:before{content:\"\\FD14\"}.mdi-speaker-off:before{content:\"\\F4C4\"}.mdi-speaker-wireless:before{content:\"\\F71E\"}.mdi-speedometer:before{content:\"\\F4C5\"}.mdi-spellcheck:before{content:\"\\F4C6\"}.mdi-spider-web:before{content:\"\\FBA6\"}.mdi-spotify:before{content:\"\\F4C7\"}.mdi-spotlight:before{content:\"\\F4C8\"}.mdi-spotlight-beam:before{content:\"\\F4C9\"}.mdi-spray:before{content:\"\\F665\"}.mdi-spray-bottle:before{content:\"\\FADF\"}.mdi-square:before{content:\"\\F763\"}.mdi-square-edit-outline:before{content:\"\\F90B\"}.mdi-square-inc:before{content:\"\\F4CA\"}.mdi-square-inc-cash:before{content:\"\\F4CB\"}.mdi-square-medium:before{content:\"\\FA12\"}.mdi-square-medium-outline:before{content:\"\\FA13\"}.mdi-square-outline:before{content:\"\\F762\"}.mdi-square-root:before{content:\"\\F783\"}.mdi-square-root-box:before{content:\"\\F9A2\"}.mdi-square-small:before{content:\"\\FA14\"}.mdi-squeegee:before{content:\"\\FAE0\"}.mdi-ssh:before{content:\"\\F8BF\"}.mdi-stack-exchange:before{content:\"\\F60B\"}.mdi-stack-overflow:before{content:\"\\F4CC\"}.mdi-stadium:before{content:\"\\F71F\"}.mdi-stairs:before{content:\"\\F4CD\"}.mdi-stamper:before{content:\"\\FD15\"}.mdi-standard-definition:before{content:\"\\F7EE\"}.mdi-star:before{content:\"\\F4CE\"}.mdi-star-box:before{content:\"\\FA72\"}.mdi-star-box-outline:before{content:\"\\FA73\"}.mdi-star-circle:before{content:\"\\F4CF\"}.mdi-star-circle-outline:before{content:\"\\F9A3\"}.mdi-star-face:before{content:\"\\F9A4\"}.mdi-star-four-points:before{content:\"\\FAE1\"}.mdi-star-four-points-outline:before{content:\"\\FAE2\"}.mdi-star-half:before{content:\"\\F4D0\"}.mdi-star-off:before{content:\"\\F4D1\"}.mdi-star-outline:before{content:\"\\F4D2\"}.mdi-star-three-points:before{content:\"\\FAE3\"}.mdi-star-three-points-outline:before{content:\"\\FAE4\"}.mdi-steam:before{content:\"\\F4D3\"}.mdi-steam-box:before{content:\"\\F90C\"}.mdi-steering:before{content:\"\\F4D4\"}.mdi-steering-off:before{content:\"\\F90D\"}.mdi-step-backward:before{content:\"\\F4D5\"}.mdi-step-backward-2:before{content:\"\\F4D6\"}.mdi-step-forward:before{content:\"\\F4D7\"}.mdi-step-forward-2:before{content:\"\\F4D8\"}.mdi-stethoscope:before{content:\"\\F4D9\"}.mdi-sticker:before{content:\"\\F5D0\"}.mdi-sticker-emoji:before{content:\"\\F784\"}.mdi-stocking:before{content:\"\\F4DA\"}.mdi-stop:before{content:\"\\F4DB\"}.mdi-stop-circle:before{content:\"\\F666\"}.mdi-stop-circle-outline:before{content:\"\\F667\"}.mdi-store:before{content:\"\\F4DC\"}.mdi-store-24-hour:before{content:\"\\F4DD\"}.mdi-stove:before{content:\"\\F4DE\"}.mdi-strava:before{content:\"\\FB25\"}.mdi-subdirectory-arrow-left:before{content:\"\\F60C\"}.mdi-subdirectory-arrow-right:before{content:\"\\F60D\"}.mdi-subtitles:before{content:\"\\FA15\"}.mdi-subtitles-outline:before{content:\"\\FA16\"}.mdi-subway:before{content:\"\\F6AB\"}.mdi-subway-alert-variant:before{content:\"\\FD79\"}.mdi-subway-variant:before{content:\"\\F4DF\"}.mdi-summit:before{content:\"\\F785\"}.mdi-sunglasses:before{content:\"\\F4E0\"}.mdi-surround-sound:before{content:\"\\F5C5\"}.mdi-surround-sound-2-0:before{content:\"\\F7EF\"}.mdi-surround-sound-3-1:before{content:\"\\F7F0\"}.mdi-surround-sound-5-1:before{content:\"\\F7F1\"}.mdi-surround-sound-7-1:before{content:\"\\F7F2\"}.mdi-svg:before{content:\"\\F720\"}.mdi-swap-horizontal:before{content:\"\\F4E1\"}.mdi-swap-horizontal-bold:before{content:\"\\FBA9\"}.mdi-swap-horizontal-variant:before{content:\"\\F8C0\"}.mdi-swap-vertical:before{content:\"\\F4E2\"}.mdi-swap-vertical-bold:before{content:\"\\FBAA\"}.mdi-swap-vertical-variant:before{content:\"\\F8C1\"}.mdi-swim:before{content:\"\\F4E3\"}.mdi-switch:before{content:\"\\F4E4\"}.mdi-sword:before{content:\"\\F4E5\"}.mdi-sword-cross:before{content:\"\\F786\"}.mdi-symfony:before{content:\"\\FAE5\"}.mdi-sync:before{content:\"\\F4E6\"}.mdi-sync-alert:before{content:\"\\F4E7\"}.mdi-sync-off:before{content:\"\\F4E8\"}.mdi-tab:before{content:\"\\F4E9\"}.mdi-tab-minus:before{content:\"\\FB26\"}.mdi-tab-plus:before{content:\"\\F75B\"}.mdi-tab-remove:before{content:\"\\FB27\"}.mdi-tab-unselected:before{content:\"\\F4EA\"}.mdi-table:before{content:\"\\F4EB\"}.mdi-table-border:before{content:\"\\FA17\"}.mdi-table-column:before{content:\"\\F834\"}.mdi-table-column-plus-after:before{content:\"\\F4EC\"}.mdi-table-column-plus-before:before{content:\"\\F4ED\"}.mdi-table-column-remove:before{content:\"\\F4EE\"}.mdi-table-column-width:before{content:\"\\F4EF\"}.mdi-table-edit:before{content:\"\\F4F0\"}.mdi-table-large:before{content:\"\\F4F1\"}.mdi-table-merge-cells:before{content:\"\\F9A5\"}.mdi-table-of-contents:before{content:\"\\F835\"}.mdi-table-plus:before{content:\"\\FA74\"}.mdi-table-remove:before{content:\"\\FA75\"}.mdi-table-row:before{content:\"\\F836\"}.mdi-table-row-height:before{content:\"\\F4F2\"}.mdi-table-row-plus-after:before{content:\"\\F4F3\"}.mdi-table-row-plus-before:before{content:\"\\F4F4\"}.mdi-table-row-remove:before{content:\"\\F4F5\"}.mdi-table-search:before{content:\"\\F90E\"}.mdi-table-settings:before{content:\"\\F837\"}.mdi-tablet:before{content:\"\\F4F6\"}.mdi-tablet-android:before{content:\"\\F4F7\"}.mdi-tablet-cellphone:before{content:\"\\F9A6\"}.mdi-tablet-ipad:before{content:\"\\F4F8\"}.mdi-taco:before{content:\"\\F761\"}.mdi-tag:before{content:\"\\F4F9\"}.mdi-tag-faces:before{content:\"\\F4FA\"}.mdi-tag-heart:before{content:\"\\F68A\"}.mdi-tag-heart-outline:before{content:\"\\FBAB\"}.mdi-tag-minus:before{content:\"\\F90F\"}.mdi-tag-multiple:before{content:\"\\F4FB\"}.mdi-tag-outline:before{content:\"\\F4FC\"}.mdi-tag-plus:before{content:\"\\F721\"}.mdi-tag-remove:before{content:\"\\F722\"}.mdi-tag-text-outline:before{content:\"\\F4FD\"}.mdi-tank:before{content:\"\\FD16\"}.mdi-tape-measure:before{content:\"\\FB28\"}.mdi-target:before{content:\"\\F4FE\"}.mdi-target-account:before{content:\"\\FBAC\"}.mdi-target-variant:before{content:\"\\FA76\"}.mdi-taxi:before{content:\"\\F4FF\"}.mdi-tea:before{content:\"\\FD7A\"}.mdi-tea-outline:before{content:\"\\FD7B\"}.mdi-teach:before{content:\"\\F88F\"}.mdi-teamviewer:before{content:\"\\F500\"}.mdi-telegram:before{content:\"\\F501\"}.mdi-telescope:before{content:\"\\FB29\"}.mdi-television:before{content:\"\\F502\"}.mdi-television-box:before{content:\"\\F838\"}.mdi-television-classic:before{content:\"\\F7F3\"}.mdi-television-classic-off:before{content:\"\\F839\"}.mdi-television-guide:before{content:\"\\F503\"}.mdi-television-off:before{content:\"\\F83A\"}.mdi-temperature-celsius:before{content:\"\\F504\"}.mdi-temperature-fahrenheit:before{content:\"\\F505\"}.mdi-temperature-kelvin:before{content:\"\\F506\"}.mdi-tennis:before{content:\"\\FD7C\"}.mdi-tennis-ball:before{content:\"\\F507\"}.mdi-tent:before{content:\"\\F508\"}.mdi-terrain:before{content:\"\\F509\"}.mdi-test-tube:before{content:\"\\F668\"}.mdi-test-tube-empty:before{content:\"\\F910\"}.mdi-test-tube-off:before{content:\"\\F911\"}.mdi-text:before{content:\"\\F9A7\"}.mdi-text-shadow:before{content:\"\\F669\"}.mdi-text-short:before{content:\"\\F9A8\"}.mdi-text-subject:before{content:\"\\F9A9\"}.mdi-text-to-speech:before{content:\"\\F50A\"}.mdi-text-to-speech-off:before{content:\"\\F50B\"}.mdi-textbox:before{content:\"\\F60E\"}.mdi-textbox-password:before{content:\"\\F7F4\"}.mdi-texture:before{content:\"\\F50C\"}.mdi-theater:before{content:\"\\F50D\"}.mdi-theme-light-dark:before{content:\"\\F50E\"}.mdi-thermometer:before{content:\"\\F50F\"}.mdi-thermometer-alert:before{content:\"\\FDDD\"}.mdi-thermometer-chevron-down:before{content:\"\\FDDE\"}.mdi-thermometer-chevron-up:before{content:\"\\FDDF\"}.mdi-thermometer-lines:before{content:\"\\F510\"}.mdi-thermometer-minus:before{content:\"\\FDE0\"}.mdi-thermometer-plus:before{content:\"\\FDE1\"}.mdi-thermostat:before{content:\"\\F393\"}.mdi-thermostat-box:before{content:\"\\F890\"}.mdi-thought-bubble:before{content:\"\\F7F5\"}.mdi-thought-bubble-outline:before{content:\"\\F7F6\"}.mdi-thumb-down:before{content:\"\\F511\"}.mdi-thumb-down-outline:before{content:\"\\F512\"}.mdi-thumb-up:before{content:\"\\F513\"}.mdi-thumb-up-outline:before{content:\"\\F514\"}.mdi-thumbs-up-down:before{content:\"\\F515\"}.mdi-ticket:before{content:\"\\F516\"}.mdi-ticket-account:before{content:\"\\F517\"}.mdi-ticket-confirmation:before{content:\"\\F518\"}.mdi-ticket-outline:before{content:\"\\F912\"}.mdi-ticket-percent:before{content:\"\\F723\"}.mdi-tie:before{content:\"\\F519\"}.mdi-tilde:before{content:\"\\F724\"}.mdi-timelapse:before{content:\"\\F51A\"}.mdi-timeline:before{content:\"\\FBAD\"}.mdi-timeline-outline:before{content:\"\\FBAE\"}.mdi-timeline-text:before{content:\"\\FBAF\"}.mdi-timeline-text-outline:before{content:\"\\FBB0\"}.mdi-timer:before{content:\"\\F51B\"}.mdi-timer-10:before{content:\"\\F51C\"}.mdi-timer-3:before{content:\"\\F51D\"}.mdi-timer-off:before{content:\"\\F51E\"}.mdi-timer-sand:before{content:\"\\F51F\"}.mdi-timer-sand-empty:before{content:\"\\F6AC\"}.mdi-timer-sand-full:before{content:\"\\F78B\"}.mdi-timetable:before{content:\"\\F520\"}.mdi-toaster-oven:before{content:\"\\FCAF\"}.mdi-toggle-switch:before{content:\"\\F521\"}.mdi-toggle-switch-off:before{content:\"\\F522\"}.mdi-toggle-switch-off-outline:before{content:\"\\FA18\"}.mdi-toggle-switch-outline:before{content:\"\\FA19\"}.mdi-toilet:before{content:\"\\F9AA\"}.mdi-toolbox:before{content:\"\\F9AB\"}.mdi-toolbox-outline:before{content:\"\\F9AC\"}.mdi-tooltip:before{content:\"\\F523\"}.mdi-tooltip-account:before{content:\"\\F00C\"}.mdi-tooltip-edit:before{content:\"\\F524\"}.mdi-tooltip-image:before{content:\"\\F525\"}.mdi-tooltip-image-outline:before{content:\"\\FBB1\"}.mdi-tooltip-outline:before{content:\"\\F526\"}.mdi-tooltip-plus:before{content:\"\\FBB2\"}.mdi-tooltip-plus-outline:before{content:\"\\F527\"}.mdi-tooltip-text:before{content:\"\\F528\"}.mdi-tooltip-text-outline:before{content:\"\\FBB3\"}.mdi-tooth:before{content:\"\\F8C2\"}.mdi-tooth-outline:before{content:\"\\F529\"}.mdi-tor:before{content:\"\\F52A\"}.mdi-tortoise:before{content:\"\\FD17\"}.mdi-tournament:before{content:\"\\F9AD\"}.mdi-tower-beach:before{content:\"\\F680\"}.mdi-tower-fire:before{content:\"\\F681\"}.mdi-towing:before{content:\"\\F83B\"}.mdi-track-light:before{content:\"\\F913\"}.mdi-trackpad:before{content:\"\\F7F7\"}.mdi-trackpad-lock:before{content:\"\\F932\"}.mdi-tractor:before{content:\"\\F891\"}.mdi-trademark:before{content:\"\\FA77\"}.mdi-traffic-light:before{content:\"\\F52B\"}.mdi-train:before{content:\"\\F52C\"}.mdi-train-car:before{content:\"\\FBB4\"}.mdi-train-variant:before{content:\"\\F8C3\"}.mdi-tram:before{content:\"\\F52D\"}.mdi-transcribe:before{content:\"\\F52E\"}.mdi-transcribe-close:before{content:\"\\F52F\"}.mdi-transfer-down:before{content:\"\\FD7D\"}.mdi-transfer-left:before{content:\"\\FD7E\"}.mdi-transfer-right:before{content:\"\\F530\"}.mdi-transfer-up:before{content:\"\\FD7F\"}.mdi-transit-connection:before{content:\"\\FD18\"}.mdi-transit-connection-variant:before{content:\"\\FD19\"}.mdi-transit-transfer:before{content:\"\\F6AD\"}.mdi-transition:before{content:\"\\F914\"}.mdi-transition-masked:before{content:\"\\F915\"}.mdi-translate:before{content:\"\\F5CA\"}.mdi-translate-off:before{content:\"\\FDE2\"}.mdi-transmission-tower:before{content:\"\\FD1A\"}.mdi-trash-can:before{content:\"\\FA78\"}.mdi-trash-can-outline:before{content:\"\\FA79\"}.mdi-treasure-chest:before{content:\"\\F725\"}.mdi-tree:before{content:\"\\F531\"}.mdi-trello:before{content:\"\\F532\"}.mdi-trending-down:before{content:\"\\F533\"}.mdi-trending-neutral:before{content:\"\\F534\"}.mdi-trending-up:before{content:\"\\F535\"}.mdi-triangle:before{content:\"\\F536\"}.mdi-triangle-outline:before{content:\"\\F537\"}.mdi-triforce:before{content:\"\\FBB5\"}.mdi-trophy:before{content:\"\\F538\"}.mdi-trophy-award:before{content:\"\\F539\"}.mdi-trophy-broken:before{content:\"\\FD80\"}.mdi-trophy-outline:before{content:\"\\F53A\"}.mdi-trophy-variant:before{content:\"\\F53B\"}.mdi-trophy-variant-outline:before{content:\"\\F53C\"}.mdi-truck:before{content:\"\\F53D\"}.mdi-truck-check:before{content:\"\\FCB0\"}.mdi-truck-delivery:before{content:\"\\F53E\"}.mdi-truck-fast:before{content:\"\\F787\"}.mdi-truck-trailer:before{content:\"\\F726\"}.mdi-tshirt-crew:before{content:\"\\FA7A\"}.mdi-tshirt-crew-outline:before{content:\"\\F53F\"}.mdi-tshirt-v:before{content:\"\\FA7B\"}.mdi-tshirt-v-outline:before{content:\"\\F540\"}.mdi-tumble-dryer:before{content:\"\\F916\"}.mdi-tumblr:before{content:\"\\F541\"}.mdi-tumblr-box:before{content:\"\\F917\"}.mdi-tumblr-reblog:before{content:\"\\F542\"}.mdi-tune:before{content:\"\\F62E\"}.mdi-tune-vertical:before{content:\"\\F66A\"}.mdi-turnstile:before{content:\"\\FCB1\"}.mdi-turnstile-outline:before{content:\"\\FCB2\"}.mdi-turtle:before{content:\"\\FCB3\"}.mdi-twitch:before{content:\"\\F543\"}.mdi-twitter:before{content:\"\\F544\"}.mdi-twitter-box:before{content:\"\\F545\"}.mdi-twitter-circle:before{content:\"\\F546\"}.mdi-twitter-retweet:before{content:\"\\F547\"}.mdi-two-factor-authentication:before{content:\"\\F9AE\"}.mdi-uber:before{content:\"\\F748\"}.mdi-ubisoft:before{content:\"\\FBB6\"}.mdi-ubuntu:before{content:\"\\F548\"}.mdi-ultra-high-definition:before{content:\"\\F7F8\"}.mdi-umbraco:before{content:\"\\F549\"}.mdi-umbrella:before{content:\"\\F54A\"}.mdi-umbrella-closed:before{content:\"\\F9AF\"}.mdi-umbrella-outline:before{content:\"\\F54B\"}.mdi-undo:before{content:\"\\F54C\"}.mdi-undo-variant:before{content:\"\\F54D\"}.mdi-unfold-less-horizontal:before{content:\"\\F54E\"}.mdi-unfold-less-vertical:before{content:\"\\F75F\"}.mdi-unfold-more-horizontal:before{content:\"\\F54F\"}.mdi-unfold-more-vertical:before{content:\"\\F760\"}.mdi-ungroup:before{content:\"\\F550\"}.mdi-unity:before{content:\"\\F6AE\"}.mdi-unreal:before{content:\"\\F9B0\"}.mdi-untappd:before{content:\"\\F551\"}.mdi-update:before{content:\"\\F6AF\"}.mdi-upload:before{content:\"\\F552\"}.mdi-upload-multiple:before{content:\"\\F83C\"}.mdi-upload-network:before{content:\"\\F6F5\"}.mdi-upload-network-outline:before{content:\"\\FCB4\"}.mdi-upload-outline:before{content:\"\\FDE3\"}.mdi-usb:before{content:\"\\F553\"}.mdi-van-passenger:before{content:\"\\F7F9\"}.mdi-van-utility:before{content:\"\\F7FA\"}.mdi-vanish:before{content:\"\\F7FB\"}.mdi-variable:before{content:\"\\FAE6\"}.mdi-vector-arrange-above:before{content:\"\\F554\"}.mdi-vector-arrange-below:before{content:\"\\F555\"}.mdi-vector-bezier:before{content:\"\\FAE7\"}.mdi-vector-circle:before{content:\"\\F556\"}.mdi-vector-circle-variant:before{content:\"\\F557\"}.mdi-vector-combine:before{content:\"\\F558\"}.mdi-vector-curve:before{content:\"\\F559\"}.mdi-vector-difference:before{content:\"\\F55A\"}.mdi-vector-difference-ab:before{content:\"\\F55B\"}.mdi-vector-difference-ba:before{content:\"\\F55C\"}.mdi-vector-ellipse:before{content:\"\\F892\"}.mdi-vector-intersection:before{content:\"\\F55D\"}.mdi-vector-line:before{content:\"\\F55E\"}.mdi-vector-point:before{content:\"\\F55F\"}.mdi-vector-polygon:before{content:\"\\F560\"}.mdi-vector-polyline:before{content:\"\\F561\"}.mdi-vector-radius:before{content:\"\\F749\"}.mdi-vector-rectangle:before{content:\"\\F5C6\"}.mdi-vector-selection:before{content:\"\\F562\"}.mdi-vector-square:before{content:\"\\F001\"}.mdi-vector-triangle:before{content:\"\\F563\"}.mdi-vector-union:before{content:\"\\F564\"}.mdi-venmo:before{content:\"\\F578\"}.mdi-vhs:before{content:\"\\FA1A\"}.mdi-vibrate:before{content:\"\\F566\"}.mdi-vibrate-off:before{content:\"\\FCB5\"}.mdi-video:before{content:\"\\F567\"}.mdi-video-3d:before{content:\"\\F7FC\"}.mdi-video-4k-box:before{content:\"\\F83D\"}.mdi-video-account:before{content:\"\\F918\"}.mdi-video-image:before{content:\"\\F919\"}.mdi-video-input-antenna:before{content:\"\\F83E\"}.mdi-video-input-component:before{content:\"\\F83F\"}.mdi-video-input-hdmi:before{content:\"\\F840\"}.mdi-video-input-svideo:before{content:\"\\F841\"}.mdi-video-minus:before{content:\"\\F9B1\"}.mdi-video-off:before{content:\"\\F568\"}.mdi-video-off-outline:before{content:\"\\FBB7\"}.mdi-video-outline:before{content:\"\\FBB8\"}.mdi-video-plus:before{content:\"\\F9B2\"}.mdi-video-stabilization:before{content:\"\\F91A\"}.mdi-video-switch:before{content:\"\\F569\"}.mdi-video-vintage:before{content:\"\\FA1B\"}.mdi-view-agenda:before{content:\"\\F56A\"}.mdi-view-array:before{content:\"\\F56B\"}.mdi-view-carousel:before{content:\"\\F56C\"}.mdi-view-column:before{content:\"\\F56D\"}.mdi-view-dashboard:before{content:\"\\F56E\"}.mdi-view-dashboard-outline:before{content:\"\\FA1C\"}.mdi-view-dashboard-variant:before{content:\"\\F842\"}.mdi-view-day:before{content:\"\\F56F\"}.mdi-view-grid:before{content:\"\\F570\"}.mdi-view-headline:before{content:\"\\F571\"}.mdi-view-list:before{content:\"\\F572\"}.mdi-view-module:before{content:\"\\F573\"}.mdi-view-parallel:before{content:\"\\F727\"}.mdi-view-quilt:before{content:\"\\F574\"}.mdi-view-sequential:before{content:\"\\F728\"}.mdi-view-split-horizontal:before{content:\"\\FBA7\"}.mdi-view-split-vertical:before{content:\"\\FBA8\"}.mdi-view-stream:before{content:\"\\F575\"}.mdi-view-week:before{content:\"\\F576\"}.mdi-vimeo:before{content:\"\\F577\"}.mdi-violin:before{content:\"\\F60F\"}.mdi-virtual-reality:before{content:\"\\F893\"}.mdi-visual-studio:before{content:\"\\F610\"}.mdi-visual-studio-code:before{content:\"\\FA1D\"}.mdi-vk:before{content:\"\\F579\"}.mdi-vk-box:before{content:\"\\F57A\"}.mdi-vk-circle:before{content:\"\\F57B\"}.mdi-vlc:before{content:\"\\F57C\"}.mdi-voice:before{content:\"\\F5CB\"}.mdi-voicemail:before{content:\"\\F57D\"}.mdi-volleyball:before{content:\"\\F9B3\"}.mdi-volume-high:before{content:\"\\F57E\"}.mdi-volume-low:before{content:\"\\F57F\"}.mdi-volume-medium:before{content:\"\\F580\"}.mdi-volume-minus:before{content:\"\\F75D\"}.mdi-volume-mute:before{content:\"\\F75E\"}.mdi-volume-off:before{content:\"\\F581\"}.mdi-volume-plus:before{content:\"\\F75C\"}.mdi-volume-variant-off:before{content:\"\\FDE4\"}.mdi-vote:before{content:\"\\FA1E\"}.mdi-vote-outline:before{content:\"\\FA1F\"}.mdi-vpn:before{content:\"\\F582\"}.mdi-vuejs:before{content:\"\\F843\"}.mdi-walk:before{content:\"\\F583\"}.mdi-wall:before{content:\"\\F7FD\"}.mdi-wall-sconce:before{content:\"\\F91B\"}.mdi-wall-sconce-flat:before{content:\"\\F91C\"}.mdi-wall-sconce-variant:before{content:\"\\F91D\"}.mdi-wallet:before{content:\"\\F584\"}.mdi-wallet-giftcard:before{content:\"\\F585\"}.mdi-wallet-membership:before{content:\"\\F586\"}.mdi-wallet-outline:before{content:\"\\FBB9\"}.mdi-wallet-travel:before{content:\"\\F587\"}.mdi-wallpaper:before{content:\"\\FDE5\"}.mdi-wan:before{content:\"\\F588\"}.mdi-washing-machine:before{content:\"\\F729\"}.mdi-watch:before{content:\"\\F589\"}.mdi-watch-export:before{content:\"\\F58A\"}.mdi-watch-export-variant:before{content:\"\\F894\"}.mdi-watch-import:before{content:\"\\F58B\"}.mdi-watch-import-variant:before{content:\"\\F895\"}.mdi-watch-variant:before{content:\"\\F896\"}.mdi-watch-vibrate:before{content:\"\\F6B0\"}.mdi-watch-vibrate-off:before{content:\"\\FCB6\"}.mdi-water:before{content:\"\\F58C\"}.mdi-water-off:before{content:\"\\F58D\"}.mdi-water-outline:before{content:\"\\FDE6\"}.mdi-water-percent:before{content:\"\\F58E\"}.mdi-water-pump:before{content:\"\\F58F\"}.mdi-watermark:before{content:\"\\F612\"}.mdi-waves:before{content:\"\\F78C\"}.mdi-waze:before{content:\"\\FBBA\"}.mdi-weather-cloudy:before{content:\"\\F590\"}.mdi-weather-fog:before{content:\"\\F591\"}.mdi-weather-hail:before{content:\"\\F592\"}.mdi-weather-hurricane:before{content:\"\\F897\"}.mdi-weather-lightning:before{content:\"\\F593\"}.mdi-weather-lightning-rainy:before{content:\"\\F67D\"}.mdi-weather-night:before{content:\"\\F594\"}.mdi-weather-partlycloudy:before{content:\"\\F595\"}.mdi-weather-pouring:before{content:\"\\F596\"}.mdi-weather-rainy:before{content:\"\\F597\"}.mdi-weather-snowy:before{content:\"\\F598\"}.mdi-weather-snowy-rainy:before{content:\"\\F67E\"}.mdi-weather-sunny:before{content:\"\\F599\"}.mdi-weather-sunset:before{content:\"\\F59A\"}.mdi-weather-sunset-down:before{content:\"\\F59B\"}.mdi-weather-sunset-up:before{content:\"\\F59C\"}.mdi-weather-windy:before{content:\"\\F59D\"}.mdi-weather-windy-variant:before{content:\"\\F59E\"}.mdi-web:before{content:\"\\F59F\"}.mdi-webcam:before{content:\"\\F5A0\"}.mdi-webhook:before{content:\"\\F62F\"}.mdi-webpack:before{content:\"\\F72A\"}.mdi-wechat:before{content:\"\\F611\"}.mdi-weight:before{content:\"\\F5A1\"}.mdi-weight-gram:before{content:\"\\FD1B\"}.mdi-weight-kilogram:before{content:\"\\F5A2\"}.mdi-weight-pound:before{content:\"\\F9B4\"}.mdi-whatsapp:before{content:\"\\F5A3\"}.mdi-wheelchair-accessibility:before{content:\"\\F5A4\"}.mdi-whistle:before{content:\"\\F9B5\"}.mdi-white-balance-auto:before{content:\"\\F5A5\"}.mdi-white-balance-incandescent:before{content:\"\\F5A6\"}.mdi-white-balance-iridescent:before{content:\"\\F5A7\"}.mdi-white-balance-sunny:before{content:\"\\F5A8\"}.mdi-widgets:before{content:\"\\F72B\"}.mdi-wifi:before{content:\"\\F5A9\"}.mdi-wifi-off:before{content:\"\\F5AA\"}.mdi-wifi-star:before{content:\"\\FDE7\"}.mdi-wifi-strength-1:before{content:\"\\F91E\"}.mdi-wifi-strength-1-alert:before{content:\"\\F91F\"}.mdi-wifi-strength-1-lock:before{content:\"\\F920\"}.mdi-wifi-strength-2:before{content:\"\\F921\"}.mdi-wifi-strength-2-alert:before{content:\"\\F922\"}.mdi-wifi-strength-2-lock:before{content:\"\\F923\"}.mdi-wifi-strength-3:before{content:\"\\F924\"}.mdi-wifi-strength-3-alert:before{content:\"\\F925\"}.mdi-wifi-strength-3-lock:before{content:\"\\F926\"}.mdi-wifi-strength-4:before{content:\"\\F927\"}.mdi-wifi-strength-4-alert:before{content:\"\\F928\"}.mdi-wifi-strength-4-lock:before{content:\"\\F929\"}.mdi-wifi-strength-alert-outline:before{content:\"\\F92A\"}.mdi-wifi-strength-lock-outline:before{content:\"\\F92B\"}.mdi-wifi-strength-off:before{content:\"\\F92C\"}.mdi-wifi-strength-off-outline:before{content:\"\\F92D\"}.mdi-wifi-strength-outline:before{content:\"\\F92E\"}.mdi-wii:before{content:\"\\F5AB\"}.mdi-wiiu:before{content:\"\\F72C\"}.mdi-wikipedia:before{content:\"\\F5AC\"}.mdi-wind-turbine:before{content:\"\\FD81\"}.mdi-window-close:before{content:\"\\F5AD\"}.mdi-window-closed:before{content:\"\\F5AE\"}.mdi-window-maximize:before{content:\"\\F5AF\"}.mdi-window-minimize:before{content:\"\\F5B0\"}.mdi-window-open:before{content:\"\\F5B1\"}.mdi-window-restore:before{content:\"\\F5B2\"}.mdi-windows:before{content:\"\\F5B3\"}.mdi-windows-classic:before{content:\"\\FA20\"}.mdi-wiper:before{content:\"\\FAE8\"}.mdi-wiper-wash:before{content:\"\\FD82\"}.mdi-wordpress:before{content:\"\\F5B4\"}.mdi-worker:before{content:\"\\F5B5\"}.mdi-wrap:before{content:\"\\F5B6\"}.mdi-wrap-disabled:before{content:\"\\FBBB\"}.mdi-wrench:before{content:\"\\F5B7\"}.mdi-wrench-outline:before{content:\"\\FBBC\"}.mdi-wunderlist:before{content:\"\\F5B8\"}.mdi-xamarin:before{content:\"\\F844\"}.mdi-xamarin-outline:before{content:\"\\F845\"}.mdi-xaml:before{content:\"\\F673\"}.mdi-xbox:before{content:\"\\F5B9\"}.mdi-xbox-controller:before{content:\"\\F5BA\"}.mdi-xbox-controller-battery-alert:before{content:\"\\F74A\"}.mdi-xbox-controller-battery-charging:before{content:\"\\FA21\"}.mdi-xbox-controller-battery-empty:before{content:\"\\F74B\"}.mdi-xbox-controller-battery-full:before{content:\"\\F74C\"}.mdi-xbox-controller-battery-low:before{content:\"\\F74D\"}.mdi-xbox-controller-battery-medium:before{content:\"\\F74E\"}.mdi-xbox-controller-battery-unknown:before{content:\"\\F74F\"}.mdi-xbox-controller-off:before{content:\"\\F5BB\"}.mdi-xda:before{content:\"\\F5BC\"}.mdi-xing:before{content:\"\\F5BD\"}.mdi-xing-box:before{content:\"\\F5BE\"}.mdi-xing-circle:before{content:\"\\F5BF\"}.mdi-xml:before{content:\"\\F5C0\"}.mdi-xmpp:before{content:\"\\F7FE\"}.mdi-yahoo:before{content:\"\\FB2A\"}.mdi-yammer:before{content:\"\\F788\"}.mdi-yeast:before{content:\"\\F5C1\"}.mdi-yelp:before{content:\"\\F5C2\"}.mdi-yin-yang:before{content:\"\\F67F\"}.mdi-youtube:before{content:\"\\F5C3\"}.mdi-youtube-creator-studio:before{content:\"\\F846\"}.mdi-youtube-gaming:before{content:\"\\F847\"}.mdi-youtube-subscription:before{content:\"\\FD1C\"}.mdi-youtube-tv:before{content:\"\\F448\"}.mdi-z-wave:before{content:\"\\FAE9\"}.mdi-zend:before{content:\"\\FAEA\"}.mdi-zigbee:before{content:\"\\FD1D\"}.mdi-zip-box:before{content:\"\\F5C4\"}.mdi-zip-disk:before{content:\"\\FA22\"}.mdi-zodiac-aquarius:before{content:\"\\FA7C\"}.mdi-zodiac-aries:before{content:\"\\FA7D\"}.mdi-zodiac-cancer:before{content:\"\\FA7E\"}.mdi-zodiac-capricorn:before{content:\"\\FA7F\"}.mdi-zodiac-gemini:before{content:\"\\FA80\"}.mdi-zodiac-leo:before{content:\"\\FA81\"}.mdi-zodiac-libra:before{content:\"\\FA82\"}.mdi-zodiac-pisces:before{content:\"\\FA83\"}.mdi-zodiac-sagittarius:before{content:\"\\FA84\"}.mdi-zodiac-scorpio:before{content:\"\\FA85\"}.mdi-zodiac-taurus:before{content:\"\\FA86\"}.mdi-zodiac-virgo:before{content:\"\\FA87\"}.mdi-blank:before{content:\"\\F68C\";visibility:hidden}.mdi-18px.mdi-set,.mdi-18px.mdi:before{font-size:18px}.mdi-24px.mdi-set,.mdi-24px.mdi:before{font-size:24px}.mdi-36px.mdi-set,.mdi-36px.mdi:before{font-size:36px}.mdi-48px.mdi-set,.mdi-48px.mdi:before{font-size:48px}.mdi-dark:before{color:rgba(0,0,0,0.54)}.mdi-dark.mdi-inactive:before{color:rgba(0,0,0,0.26)}.mdi-light:before{color:#fff}.mdi-light.mdi-inactive:before{color:rgba(255,255,255,0.3)}.mdi-rotate-45:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.mdi-rotate-90:before{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.mdi-rotate-135:before{-webkit-transform:rotate(135deg);-ms-transform:rotate(135deg);transform:rotate(135deg)}.mdi-rotate-180:before{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.mdi-rotate-225:before{-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg)}.mdi-rotate-270:before{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.mdi-rotate-315:before{-webkit-transform:rotate(315deg);-ms-transform:rotate(315deg);transform:rotate(315deg)}.mdi-flip-h:before{-webkit-transform:scaleX(-1);transform:scaleX(-1);filter:FlipH;-ms-filter:\"FlipH\"}.mdi-flip-v:before{-webkit-transform:scaleY(-1);transform:scaleY(-1);filter:FlipV;-ms-filter:\"FlipV\"}.mdi-spin:before{-webkit-animation:mdi-spin 2s infinite linear;animation:mdi-spin 2s infinite linear}@-webkit-keyframes mdi-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes mdi-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/@mdi/materialdesignicons-webfont.eot?1993c4a16cce5446a5cfafacf4da740b";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/@mdi/materialdesignicons-webfont.eot?1993c4a16cce5446a5cfafacf4da740b";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/@mdi/materialdesignicons-webfont.woff2?af3f6dbe172a9c1aba77366a2ff630d1";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/@mdi/materialdesignicons-webfont.woff?26333b3884782fdb5f8c0a971f1d2570";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/@mdi/materialdesignicons-webfont.ttf?baded94134f273450a473a4962111324";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "/fonts/vendor/@mdi/materialdesignicons-webfont.svg?032eb679a327d4668d7537c32c314fbc";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(18);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "nav",
      { staticClass: "navbar navbar-expand-sm navbar-light bg-light" },
      [
        _c("a", { staticClass: "navbar-brand", attrs: { href: "/" } }, [
          _vm._v("Tasks")
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse navbar-collapse",
            attrs: { id: "navbarSupportedContent" }
          },
          [
            _c("ul", { staticClass: "navbar-nav ml-auto" }, [
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    class: _vm.checkRoute("default"),
                    on: {
                      click: function($event) {
                        return _vm.$router.push({ name: "default" })
                      }
                    }
                  },
                  [_vm._v("Home")]
                )
              ]),
              _vm._v(" "),
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.$auth.check(),
                      expression: "!$auth.check()"
                    }
                  ],
                  staticClass: "nav-item"
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      class: _vm.checkRoute("login"),
                      on: {
                        click: function($event) {
                          return _vm.$router.push({ name: "login" })
                        }
                      }
                    },
                    [_vm._v("Login")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.$auth.check(),
                      expression: "!$auth.check()"
                    }
                  ],
                  staticClass: "nav-item"
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      class: _vm.checkRoute("register"),
                      on: {
                        click: function($event) {
                          return _vm.$router.push({ name: "register" })
                        }
                      }
                    },
                    [_vm._v("Register")]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.$auth.check(),
                      expression: "$auth.check()"
                    }
                  ],
                  staticClass: "nav-item"
                },
                [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link",
                      attrs: { href: "javascript:void(0);" },
                      on: {
                        click: function($event) {
                          return _vm.logout()
                        }
                      }
                    },
                    [_vm._v("Logout")]
                  )
                ]
              )
            ])
          ]
        )
      ]
    ),
    _vm._v(" "),
    _vm.$auth.ready() && _vm.loaded
      ? _c("div", [_c("router-view")], 1)
      : _vm._e(),
    _vm._v(" "),
    !_vm.$auth.ready() || !_vm.loaded
      ? _c("div", [
          _c(
            "div",
            { staticStyle: { "text-align": "center", "padding-top": "50px" } },
            [_vm._v("\n            Loading site...\n        ")]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8142f38c", module.exports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(21)
/* template */
var __vue_template__ = __webpack_require__(28)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/pages/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a937e7e", Component.options)
  } else {
    hotAPI.reload("data-v-0a937e7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__johmun_vue_tags_input__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__johmun_vue_tags_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__johmun_vue_tags_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ModalEdit__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ModalEdit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ModalEdit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ModalCreate__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ModalCreate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ModalCreate__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            showModal: false,
            showModalCreate: false,
            showNewTaskForm: false,
            edit_id: null,
            tasks: [],
            tag: '',
            autocompleteItems: [],
            newtask: {
                name: '',
                priority: '2',
                status: 'continues',
                tags: []
            }
        };
    },
    mounted: function mounted() {
        if (this.$auth.check()) {
            this.getTasks();
        }
    },

    methods: {
        createTask: function createTask() {
            this.showModalCreate = true;
        },
        toggleStatus: function toggleStatus(id) {
            var _this = this;

            this.$http.post('/api/toggle-status', { id: id }).then(function (response) {
                console.log(response);
                _this.getTasks();
            });
        },
        editTask: function editTask(id) {
            this.edit_id = id;
            console.log('id', this.edit_id);
            this.showModal = true;
        },
        closeModal: function closeModal() {
            this.edit_id = null;
            this.showModal = false;
            this.showModalCreate = false;
            this.getTasks();
        },
        getTasks: function getTasks() {
            var _this2 = this;

            this.$http.get('/api/get-tasks').then(function (response) {
                _this2.tasks = response.body;
                console.log('response', response);
            });
        }
    },
    components: {
        VueTagsInput: __WEBPACK_IMPORTED_MODULE_0__johmun_vue_tags_input___default.a,
        'modal-edit': __WEBPACK_IMPORTED_MODULE_1__ModalEdit___default.a,
        'modal-create': __WEBPACK_IMPORTED_MODULE_2__ModalCreate___default.a
    }
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(23)
/* template */
var __vue_template__ = __webpack_require__(24)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ModalEdit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-537b0aa0", Component.options)
  } else {
    hotAPI.reload("data-v-537b0aa0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__johmun_vue_tags_input__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__johmun_vue_tags_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__johmun_vue_tags_input__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['showModal', 'task', 'id'],
    name: "ModalEdit",
    data: function data() {
        return {
            newTask: {},
            tag: '',
            autocompleteItems: []
        };
    },
    mounted: function mounted() {
        this.getTask();
        this.getTagsAutocomplete();
    },

    methods: {
        save: function save() {
            var _this = this;

            this.$http.post('/api/update-task', this.newTask).then(function (response) {
                _this.$emit('input');
            });
        },
        getTagsAutocomplete: function getTagsAutocomplete() {
            var _this2 = this;

            this.$http.post('/api/get-tags-autocomplete', {}).then(function (response) {
                console.log('get-tags-autocomplete', response.body);
                _this2.autocompleteItems = response.body;
            });
        },
        getTask: function getTask() {
            var _this3 = this;

            this.$http.post('/api/get-task', { 'id': this.id }).then(function (response) {
                var app = _this3;
                _this3.newTask = response.body;
                _this3.newTask.tags.forEach(function (item, i, arr) {
                    app.newTask.tags[i] = { text: item.name };
                });
            });
        },
        init: function init() {
            this.newTask = this.task;
        }
    },
    computed: {
        filteredItems: function filteredItems() {
            var _this4 = this;

            return this.autocompleteItems.filter(function (i) {
                return i.text.toLowerCase().indexOf(_this4.tag.toLowerCase()) !== -1;
            });
        }
    },
    components: {
        VueTagsInput: __WEBPACK_IMPORTED_MODULE_0__johmun_vue_tags_input___default.a
    }
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("transition", { attrs: { name: "modal" } }, [
        _c("div", { staticClass: "modal-mask" }, [
          _c("div", { staticClass: "modal-wrapper" }, [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header" }, [
                    _c("h5", { staticClass: "modal-title" }, [
                      _vm._v("Edit task")
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "close",
                        attrs: {
                          type: "button",
                          "data-dismiss": "modal",
                          "aria-label": "Close"
                        }
                      },
                      [
                        _c(
                          "span",
                          {
                            attrs: { "aria-hidden": "true" },
                            on: {
                              click: function($event) {
                                return _vm.$emit("input")
                              }
                            }
                          },
                          [_vm._v("×")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-12 col-form-label text-left",
                          attrs: { for: "newtask_name" }
                        },
                        [_vm._v("Task name")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newTask.name,
                              expression: "newTask.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "newtask_name",
                            required: "",
                            autofocus: ""
                          },
                          domProps: { value: _vm.newTask.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.newTask, "name", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass:
                            "col-md-12 col-form-label text-left mt-3",
                          attrs: { for: "priority" }
                        },
                        [_vm._v("Priority")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newTask.priority,
                                expression: "newTask.priority"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "priority", required: "" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.newTask,
                                  "priority",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("High")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Middle")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Low")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "col-md-12 col-form-label text-left mt-3"
                        },
                        [_vm._v("Tags")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-12" },
                        [
                          _c("vue-tags-input", {
                            staticClass: "tag-input",
                            attrs: {
                              tags: _vm.newTask.tags,
                              "autocomplete-items": _vm.filteredItems
                            },
                            on: {
                              "tags-changed": function(newTags) {
                                return (_vm.newTask.tags = newTags)
                              }
                            },
                            model: {
                              value: _vm.tag,
                              callback: function($$v) {
                                _vm.tag = $$v
                              },
                              expression: "tag"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.$emit("input")
                          }
                        }
                      },
                      [_vm._v("Close")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.save }
                      },
                      [_vm._v("Save changes")]
                    )
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-537b0aa0", module.exports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(26)
/* template */
var __vue_template__ = __webpack_require__(27)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/ModalCreate.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c825922", Component.options)
  } else {
    hotAPI.reload("data-v-6c825922", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__johmun_vue_tags_input__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__johmun_vue_tags_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__johmun_vue_tags_input__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['showModal'],
    name: "ModalCreate",
    data: function data() {
        return {
            newTask: {
                name: '',
                priority: '2',
                status: 'continues',
                tags: []
            },
            tag: '',
            autocompleteItems: []
        };
    },
    mounted: function mounted() {
        this.getTagsAutocomplete();
    },

    methods: {
        createTask: function createTask() {
            var _this = this;

            this.$http.post('/api/create-task', this.newTask).then(function (response) {
                _this.newTask.name = '';
                _this.newTask.priority = '2';
                _this.newTask.tags = [];
                _this.$emit('input');
            });
        },
        getTagsAutocomplete: function getTagsAutocomplete() {
            var _this2 = this;

            this.$http.post('/api/get-tags-autocomplete', {}).then(function (response) {
                console.log('get-tags-autocomplete', response.body);
                _this2.autocompleteItems = response.body;
            });
        }
    },
    computed: {
        filteredItems: function filteredItems() {
            var _this3 = this;

            return this.autocompleteItems.filter(function (i) {
                return i.text.toLowerCase().indexOf(_this3.tag.toLowerCase()) !== -1;
            });
        }
    },
    components: {
        VueTagsInput: __WEBPACK_IMPORTED_MODULE_0__johmun_vue_tags_input___default.a
    }
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("transition", { attrs: { name: "modal" } }, [
        _c("div", { staticClass: "modal-mask" }, [
          _c("div", { staticClass: "modal-wrapper" }, [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header" }, [
                    _c("h5", { staticClass: "modal-title" }, [
                      _vm._v("Create task")
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "close",
                        attrs: {
                          type: "button",
                          "data-dismiss": "modal",
                          "aria-label": "Close"
                        }
                      },
                      [
                        _c(
                          "span",
                          {
                            attrs: { "aria-hidden": "true" },
                            on: {
                              click: function($event) {
                                return _vm.$emit("input")
                              }
                            }
                          },
                          [_vm._v("×")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-md-12 col-form-label text-left",
                          attrs: { for: "newtask_name" }
                        },
                        [_vm._v("Task name")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.newTask.name,
                              expression: "newTask.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "newtask_name",
                            required: "",
                            autofocus: ""
                          },
                          domProps: { value: _vm.newTask.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.newTask, "name", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass:
                            "col-md-12 col-form-label text-left mt-3",
                          attrs: { for: "priority" }
                        },
                        [_vm._v("Priority")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newTask.priority,
                                expression: "newTask.priority"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "priority", required: "" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.newTask,
                                  "priority",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "1" } }, [
                              _vm._v("High")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "2" } }, [
                              _vm._v("Middle")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "3" } }, [
                              _vm._v("Low")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "col-md-12 col-form-label text-left mt-3"
                        },
                        [_vm._v("Tags")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-12" },
                        [
                          _c("vue-tags-input", {
                            staticClass: "tag-input",
                            attrs: {
                              tags: _vm.newTask.tags,
                              "autocomplete-items": _vm.filteredItems
                            },
                            on: {
                              "tags-changed": function(newTags) {
                                return (_vm.newTask.tags = newTags)
                              }
                            },
                            model: {
                              value: _vm.tag,
                              callback: function($$v) {
                                _vm.tag = $$v
                              },
                              expression: "tag"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.$emit("input")
                          }
                        }
                      },
                      [_vm._v("Close")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: { click: _vm.createTask }
                      },
                      [_vm._v("Create")]
                    )
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6c825922", module.exports)
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.showModal
        ? _c("modal-edit", {
            attrs: { id: _vm.edit_id },
            on: { input: _vm.closeModal }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showModalCreate
        ? _c("modal-create", { on: { input: _vm.closeModal } })
        : _vm._e(),
      _vm._v(" "),
      _vm.$auth.check()
        ? _c("div", { staticClass: "container mt-3" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary",
                attrs: { type: "button" },
                on: { click: _vm.createTask }
              },
              [_vm._v("Add new task")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card mt-3 mb-3" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v("\n                Task list\n            ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body1" }, [
                _vm.tasks.length
                  ? _c(
                      "ul",
                      { staticClass: "list-group list-group-flush" },
                      _vm._l(_vm.tasks, function(task) {
                        return _c(
                          "li",
                          {
                            staticClass: "list-group-item",
                            class:
                              task.status === "completed"
                                ? "list-group-item-success"
                                : ""
                          },
                          [
                            _c("span", { staticClass: "task-left" }, [
                              task.priority === 1
                                ? _c("i", {
                                    staticClass:
                                      "mdi mdi-numeric-1-circle priority-icon"
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              task.priority === 2
                                ? _c("i", {
                                    staticClass:
                                      "mdi mdi-numeric-2-circle priority-icon"
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              task.priority === 3
                                ? _c("i", {
                                    staticClass:
                                      "mdi mdi-numeric-3-circle priority-icon"
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              task.status === "continues"
                                ? _c("i", {
                                    staticClass:
                                      "mdi mdi-checkbox-blank-outline task-status",
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleStatus(task.id)
                                      }
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              task.status === "completed"
                                ? _c("i", {
                                    staticClass:
                                      "mdi mdi-checkbox-marked-outline task-status",
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleStatus(task.id)
                                      }
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(task.name) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-outline-secondary btn-sm btn-edit ml-3",
                                on: {
                                  click: function($event) {
                                    return _vm.editTask(task.id)
                                  }
                                }
                              },
                              [_vm._v("EDIT")]
                            ),
                            _vm._v(" "),
                            _vm._l(task.tags, function(tag) {
                              return task.tags.length
                                ? _c(
                                    "span",
                                    {
                                      staticClass:
                                        "badge badge-task badge-pill tag-badge"
                                    },
                                    [
                                      _vm._v(
                                        "\n                            " +
                                          _vm._s(tag.name) +
                                          "\n                        "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            })
                          ],
                          2
                        )
                      }),
                      0
                    )
                  : _c("ul", { staticClass: "list-group list-group-flush" }, [
                      _c("li", { staticClass: "list-group-item no-tasks" }, [
                        _vm._v("No tasks found for this user")
                      ])
                    ])
              ])
            ])
          ])
        : _c("div", { staticClass: "container mt-3" }, [_vm._m(0)])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 text-center" }, [
      _c("p", { staticClass: "no-tasks mt-5 mb-5" }, [
        _vm._v("Login to be able to work with tasks")
      ]),
      _vm._v(" "),
      _c("p", [_c("b", [_vm._v("Default username:")]), _vm._v(" admin")]),
      _vm._v(" "),
      _c("p", [_c("b", [_vm._v("Default password:")]), _vm._v(" admin")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0a937e7e", module.exports)
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(30)
/* template */
var __vue_template__ = __webpack_require__(31)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/pages/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79f6bdf7", Component.options)
  } else {
    hotAPI.reload("data-v-79f6bdf7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            context: 'login context',

            data: {
                body: {
                    username: 'admin',
                    password: 'admin'
                },
                fetchUser: true
            },

            error: null
        };
    },
    mounted: function mounted() {
        console.log(this.$auth.redirect());
    },


    methods: {
        login: function login() {
            var _this = this;

            var redirect = this.$auth.redirect();

            this.$auth.login({
                body: this.data.body, // Vue-resource
                data: this.data.body, // Axios
                rememberMe: false,
                redirect: '/',
                fetchUser: this.data.fetchUser
            }).then(function (response) {
                console.log('response', response);
                console.log('success ' + _this.context);
            }, function (res) {
                console.log('error ' + _this.context);

                _this.error = res.data;
            });
        }
    }
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "login-form" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("form", { staticClass: "auth-form" }, [
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-md-4 col-form-label text-md-right",
                  attrs: { for: "username" }
                },
                [_vm._v("Username")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.body.username,
                      expression: "data.body.username"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "username",
                    required: "",
                    autofocus: ""
                  },
                  domProps: { value: _vm.data.body.username },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data.body, "username", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-md-4 col-form-label text-md-right",
                  attrs: { for: "password" }
                },
                [_vm._v("Password")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.body.password,
                      expression: "data.body.password"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    id: "password",
                    name: "password",
                    required: ""
                  },
                  domProps: { value: _vm.data.body.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data.body, "password", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 offset-md-4" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.login }
                },
                [
                  _vm._v(
                    "\n                                    Login\n                                "
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-79f6bdf7", module.exports)
  }
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(33)
/* template */
var __vue_template__ = __webpack_require__(34)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/pages/Register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6214f8f6", Component.options)
  } else {
    hotAPI.reload("data-v-6214f8f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            context: 'register context',

            data: {
                body: {
                    username: '',
                    password: ''
                },
                autoLogin: true,
                rememberMe: true
            },

            formData: new FormData(),

            error: null
        };
    },


    methods: {
        register: function register() {
            var formData = new FormData();

            formData.append('username', this.data.body.username);
            formData.append('password', this.data.body.password);

            this.$auth.register({
                body: formData,
                data: formData,
                autoLogin: this.data.autoLogin,
                rememberMe: this.data.rememberMe,
                redirect: '/',
                success: function success() {
                    console.log('success ' + this.context);
                },
                error: function error(res) {
                    console.log('error ' + this.context);
                    this.error = res.data;
                }
            });
        }
    }
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("main", { staticClass: "register-form" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("form", { staticClass: "auth-form" }, [
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-md-4 col-form-label text-md-right",
                  attrs: { for: "username" }
                },
                [_vm._v("Username")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.body.username,
                      expression: "data.body.username"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "username",
                    required: "",
                    autofocus: ""
                  },
                  domProps: { value: _vm.data.body.username },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data.body, "username", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-md-4 col-form-label text-md-right",
                  attrs: { for: "password" }
                },
                [_vm._v("Password")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.body.password,
                      expression: "data.body.password"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    id: "password",
                    name: "password",
                    required: ""
                  },
                  domProps: { value: _vm.data.body.password },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data.body, "password", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 offset-md-4" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.register }
                },
                [
                  _vm._v(
                    "\n                            Register\n                        "
                  )
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6214f8f6", module.exports)
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(36)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/pages/404.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66d925e6", Component.options)
  } else {
    hotAPI.reload("data-v-66d925e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("\n    404\n")])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-66d925e6", module.exports)
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(38)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/pages/403.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66cb0e65", Component.options)
  } else {
    hotAPI.reload("data-v-66cb0e65", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("\n    403\n")])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-66cb0e65", module.exports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(40)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/pages/502.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c8b99bb6", Component.options)
  } else {
    hotAPI.reload("data-v-c8b99bb6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("\n    502\n")])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c8b99bb6", module.exports)
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var Auth = __webpack_require__(42)();

module.exports = function () {

    return function install(Vue, options) {

        var auth = new Auth(Vue, options);

        var ready = auth.ready;
        var login = auth.login;
        var fetch = auth.fetch;
        var logout = auth.logout;
        var oauth2 = auth.oauth2;
        var refresh = auth.refresh;
        var register = auth.register;
        var impersonate = auth.impersonate;
        var unimpersonate = auth.unimpersonate;

        Vue.auth = auth;

        Object.defineProperties(Vue.prototype, {
            $auth: {
                get: function get() {
                    auth.ready = ready.bind(this);
                    auth.login = login.bind(this);
                    auth.fetch = fetch.bind(this);
                    auth.logout = logout.bind(this);
                    auth.oauth2 = oauth2.bind(this);
                    auth.refresh = refresh.bind(this);
                    auth.register = register.bind(this);
                    auth.impersonate = impersonate.bind(this);
                    auth.unimpersonate = unimpersonate.bind(this);

                    return auth;
                }
            }
        });
    };
}();

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __utils = __webpack_require__(43),
    __token = __webpack_require__(44),
    __cookie = __webpack_require__(3);

module.exports = function () {

    // Private (used double underscore __).

    var __transitionPrev = null,
        __transitionThis = null,
        __transitionRedirectType = null;

    function __duckPunch(methodName, data) {
        var _this = this,
            success = data.success;

        data = __utils.extend(this.options[methodName + 'Data'], [data]);

        data.success = function (res) {
            data.success = success;

            _this.options[methodName + 'Process'].call(_this, res, data);
        };

        return this.options.http._http.call(this, data);
    }

    function __bindContext(methodName, data) {
        var _auth = this.$auth;

        return _auth.options[methodName + 'Perform'].call(_auth, _auth.options.router._bindData.call(_auth, data, this));
    }

    // Overrideable

    function _checkAuthenticated(cb) {
        if (this.watch.authenticated === null && __token.get.call(this)) {
            if (!__cookie.exists.call(this)) {
                this.options.logoutProcess.call(this, null, {});

                this.watch.loaded = true;

                return cb.call(this);
            }

            this.watch.authenticated = false;

            if (this.options.fetchData.enabled) {
                this.options.fetchPerform.call(this, {
                    success: cb,
                    error: cb,
                    enabled: true
                });
            } else {
                this.options.fetchProcess.call(this, {}, {});
                return cb.call(this);
            }
        } else {
            this.watch.loaded = true;
            return cb.call(this);
        }
    }

    function _routerBeforeEach(cb) {
        var _this = this;

        if (this.watch.authenticated && !__token.get.call(this)) {
            this.options.logoutProcess.call(this, null, {});
        }

        if (this.options.refreshData.enabled && !this.watch.loaded && __token.get.call(this)) {
            this.options.refreshPerform.call(this, {
                success: function success() {
                    this.options.checkAuthenticated.call(_this, cb);
                }
            });

            return;
        }

        _checkAuthenticated.call(this, cb);
    }

    function _transitionEach(transition, routeAuth, cb) {
        var authRedirect = (routeAuth || '').redirect || this.options.authRedirect,
            forbiddenRedirect = (routeAuth || '').forbiddenRedirect || (routeAuth || '').redirect || this.options.forbiddenRedirect,
            notFoundRedirect = (routeAuth || '').redirect || this.options.notFoundRedirect;

        routeAuth = __utils.toArray((routeAuth || '').roles !== undefined ? routeAuth.roles : routeAuth);

        if (routeAuth && (routeAuth === true || routeAuth.constructor === Array || __utils.isObject(routeAuth))) {
            if (!this.check()) {
                __transitionRedirectType = 401;
                cb.call(this, authRedirect);
            } else if ((routeAuth.constructor === Array || __utils.isObject(routeAuth)) && !__utils.compare(routeAuth, this.watch.data[this.options.rolesVar])) {
                __transitionRedirectType = 403;
                cb.call(this, forbiddenRedirect);
            } else {
                this.watch.redirect = __transitionRedirectType ? { type: __transitionRedirectType, from: __transitionPrev, to: __transitionThis } : null;
                __transitionRedirectType = null;

                return cb();
            }
        } else if (routeAuth === false && this.check()) {
            __transitionRedirectType = 404;
            cb.call(this, notFoundRedirect);
        } else {
            this.watch.redirect = __transitionRedirectType ? { type: __transitionRedirectType, from: __transitionPrev, to: __transitionThis } : null;
            __transitionRedirectType = null;

            return cb();
        }
    }

    function _requestIntercept(req) {
        var token, tokenName;

        if (req.ignoreVueAuth) {
            return req;
        }

        if (req.impersonating === false && this.impersonating()) {
            tokenName = this.options.tokenDefaultName;
        }

        token = __token.get.call(this, tokenName);

        if (token) {
            this.options.auth.request.call(this, req, token);
        }

        return req;
    }

    function _responseIntercept(res, req) {
        var token;

        if (req && req.ignoreVueAuth) {
            return;
        }

        _processInvalidToken.call(this, res, __transitionThis);

        token = this.options.auth.response.call(this, res);

        if (token) {
            __token.set.call(this, null, token);
        }
    }

    function _parseUserData(data) {
        return data.data || {};
    }

    function _parseOauthState(data) {
        return JSON.parse(decodeURIComponent(data));
    }

    function _check(role, key) {
        if (this.watch.authenticated === true) {
            if (role) {
                return __utils.compare(role, this.watch.data[key || this.options.rolesVar]);
            }

            return true;
        }

        return false;
    }

    function _tokenExpired() {
        return !__token.get.call(this);
    }

    function _cookieDomain() {
        return window.location.hostname;
    }

    function _getUrl() {
        var port = window.location.port;

        return window.location.protocol + '//' + window.location.hostname + (port ? ':' + port : '');
    }

    function _getAuthMeta(transition) {
        var auth, authRoutes;

        if (transition.to) {
            auth = transition.to.auth;
        } else {
            authRoutes = transition.matched.filter(function (route) {
                return route.meta.hasOwnProperty('auth');
            });

            // matches the nested route, the last one in the list
            if (authRoutes.length) {
                auth = authRoutes[authRoutes.length - 1].meta.auth;
            }
        }

        return auth;
    }

    function _setTransitions(transition) {
        __transitionPrev = __transitionThis;
        __transitionThis = transition;
    }

    function _processInvalidToken(res, transition) {
        var i,
            auth,
            query = '',
            redirect = transition && transition.path;

        // Make sure we also attach any existing
        // query parameters on the path.
        if (redirect && transition.query) {
            for (i in transition.query) {
                if (transition.query[i]) {
                    query += '&' + i + '=' + transition.query[i];
                }
            }

            redirect += '?' + query.substring(1);
        }

        if (!this.options.http._invalidToken) {
            return;
        }

        if (!this.options.http._invalidToken.call(this, res)) {
            return;
        }

        if (transition) {
            auth = this.options.getAuthMeta(transition);
        }

        if (auth) {
            redirect = auth.redirect || this.options.authRedirect;
        }

        this.options.logoutProcess.call(this, res, { redirect: redirect });
    }

    function _fetchPerform(data) {
        var _this = this,
            error = data.error;

        data.error = function (res) {
            _this.watch.loaded = true;

            if (_this.options.fetchData.error) {
                _this.options.fetchData.error.call(_this, res);
            }

            if (error) {
                error.call(_this, res);
            }
        };

        if (this.watch.authenticated !== true && !data.enabled) {
            _fetchProcess.call(this, {}, data);
        } else {
            return __duckPunch.call(this, 'fetch', data);
        }
    }

    function _fetchProcess(res, data) {
        this.watch.authenticated = true;
        this.watch.data = this.options.parseUserData.call(this, this.options.http._httpData.call(this, res));

        this.watch.loaded = true;

        if (this.options.fetchData.success) {
            this.options.fetchData.success.call(this, res);
        }

        if (data.success) {
            data.success.call(this, res);
        }
    }

    function _refreshPerform(data) {
        return __duckPunch.call(this, 'refresh', data);
    }

    function _refreshProcess(res, data) {
        if (data.success) {
            data.success.call(this, res);
        }
    }

    function _registerPerform(data) {
        return __duckPunch.call(this, 'register', data);
    }

    function _registerProcess(res, data) {
        if (data.autoLogin === true) {
            data = __utils.extend(data, [this.options.loginData, { redirect: data.redirect }]);

            this.options.loginPerform.call(this, data);
        } else {
            if (data.success) {
                data.success.call(this, res);
            }

            if (data.redirect) {
                this.options.router._routerGo.call(this, data.redirect);
            }
        }
    }

    function _loginPerform(data) {
        return __duckPunch.call(this, 'login', data);
    }

    function _loginProcess(res, data) {
        var _this = this;

        __cookie.remember.call(this, data.rememberMe);

        this.watch.authenticated = null;

        this.options.fetchPerform.call(this, {
            enabled: data.fetchUser,
            success: function success() {
                if (data.success) {
                    data.success.call(this, res);
                }

                if (data.redirect && _this.options.check.call(_this)) {
                    _this.options.router._routerGo.call(_this, data.redirect);
                }
            }
        });
    }

    function _logoutPerform(data) {
        data = __utils.extend(this.options.logoutData, [data || {}]);

        if (data.makeRequest) {
            return __duckPunch.call(this, 'logout', data);
        } else {
            this.options.logoutProcess.call(this, null, data);
        }
    }

    function _logoutProcess(res, data) {
        __cookie.remove.call(this, 'rememberMe');

        __cookie.remove.call(this, this.options.tokenImpersonateName);
        __cookie.remove.call(this, this.options.tokenDefaultName);

        __token.remove.call(this, this.options.tokenImpersonateName);
        __token.remove.call(this, this.options.tokenDefaultName);

        this.watch.authenticated = false;
        this.watch.data = null;

        if (data.success) {
            data.success.call(this, res, data);
        }

        if (data.redirect) {
            this.options.router._routerGo.call(this, data.redirect);
        }
    }

    function _impersonatePerform(data) {
        var success,
            token = this.token.call(this); // (admin) token

        data = data || {};

        success = data.success;

        data.success = function (res) {

            // Reshuffle tokens here...
            __token.set.call(this, this.options.tokenImpersonateName, this.token.call(this));
            __token.set.call(this, this.options.tokenDefaultName, token);

            if (success) {
                success.call(this, res);
            }
        };

        return __duckPunch.call(this, 'impersonate', data);
    }

    function _impersonateProcess(res, data) {
        var _this = this;

        this.options.fetchPerform.call(this, {
            enabled: true,
            success: function success() {
                if (data.success) {
                    data.success.call(this, res);
                }

                if (data.redirect && _this.options.check.call(_this)) {
                    _this.options.router._routerGo.call(_this, data.redirect);
                }
            }
        });
    }

    function _unimpersonatePerform(data) {
        data = __utils.extend(this.options.unimpersonateData, [data || {}]);

        if (data.makeRequest) {
            return __duckPunch.call(this, 'unimpersonate', data);
        } else {
            this.options.unimpersonateProcess.call(this, null, data);
        }
    }

    function _unimpersonateProcess(res, data) {
        __token.remove.call(this, this.options.tokenImpersonateName);

        this.options.fetchPerform.call(this, {
            enabled: true,
            success: function success() {
                if (data.success) {
                    data.success.call(this, res, data);
                }

                if (data.redirect) {
                    this.options.router._routerGo.call(this, data.redirect);
                }
            }
        });
    }

    function _oauth2Perform(data) {
        var key,
            state = {},
            params = '';

        data = data || {};

        if (data.code === true) {
            data = __utils.extend(this.options[data.provider + 'Data'], [data]);

            try {
                if (data.query.state) {
                    state = this.options.parseOauthState(data.query.state);
                }
            } catch (e) {
                console.error('vue-auth:error There was an issue retrieving the state data.');
                state = {};
            }

            data.rememberMe = state.rememberMe === true;
            data.state = state;

            this.options.loginPerform.call(this, data);
        } else {
            data.params = __utils.extend(this.options[data.provider + 'Oauth2Data'].params, [data.params || {}]);
            data = __utils.extend(this.options[data.provider + 'Oauth2Data'], [data]);

            // Backwards compatibility.
            data.params.redirect_uri = data.redirect || data.params.redirect_uri;
            data.params.client_id = data.clientId || data.params.client_id;
            data.params.response_type = data.response_type || data.params.response_type || 'code';
            data.params.scope = data.scope || data.params.scope;
            data.params.state = data.state || data.params.state || {};

            if (typeof data.params.redirect_uri === 'function') {
                data.params.redirect_uri = data.params.redirect_uri.call(this);
            }

            data.params.state.rememberMe = data.rememberMe === true;
            data.params.state = JSON.stringify(data.params.state);

            for (key in data.params) {
                params += '&' + key + '=' + encodeURIComponent(data.params[key]);
            }

            window.location = data.url + '?' + params.substring(1);
        }
    }

    var defaultOptions = {

        // Variables

        rolesVar: 'roles',
        tokenImpersonateName: 'impersonate_auth_token',
        tokenDefaultName: 'default_auth_token',
        tokenStore: ['localStorage', 'cookie'],

        // Objects

        authRedirect: { path: '/login' },
        forbiddenRedirect: { path: '/403' },
        notFoundRedirect: { path: '/404' },

        registerData: { url: 'auth/register', method: 'POST', redirect: '/login' },
        loginData: { url: 'auth/login', method: 'POST', redirect: '/', fetchUser: true },
        logoutData: { url: 'auth/logout', method: 'POST', redirect: '/', makeRequest: false },
        oauth1Data: { url: 'auth/login', method: 'POST' },
        fetchData: { url: 'auth/user', method: 'GET', enabled: true },
        refreshData: { url: 'auth/refresh', method: 'GET', enabled: true, interval: 30 },
        impersonateData: { url: 'auth/impersonate', method: 'POST', redirect: '/' },
        unimpersonateData: { url: 'auth/unimpersonate', method: 'POST', redirect: '/admin', makeRequest: false },

        facebookData: { url: 'auth/facebook', method: 'POST', redirect: '/' },
        googleData: { url: 'auth/google', method: 'POST', redirect: '/' },

        facebookOauth2Data: {
            url: 'https://www.facebook.com/v2.5/dialog/oauth',
            params: {
                client_id: '',
                redirect_uri: function redirect_uri() {
                    return this.options.getUrl() + '/login/facebook';
                },
                scope: 'email'
            }
        },
        googleOauth2Data: {
            url: 'https://accounts.google.com/o/oauth2/auth',
            params: {
                client_id: '',
                redirect_uri: function redirect_uri() {
                    return this.options.getUrl() + '/login/google';
                },
                scope: 'https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
            }
        },

        // Internal

        getUrl: _getUrl,
        cookieDomain: _cookieDomain,
        parseUserData: _parseUserData,
        parseOauthState: _parseOauthState,
        tokenExpired: _tokenExpired,
        check: _check,
        checkAuthenticated: _checkAuthenticated,
        getAuthMeta: _getAuthMeta,
        setTransitions: _setTransitions,

        readyCallback: null,

        transitionEach: _transitionEach,
        routerBeforeEach: _routerBeforeEach,
        requestIntercept: _requestIntercept,
        responseIntercept: _responseIntercept,

        // Contextual

        registerPerform: _registerPerform,
        registerProcess: _registerProcess,

        loginPerform: _loginPerform,
        loginProcess: _loginProcess,

        logoutPerform: _logoutPerform,
        logoutProcess: _logoutProcess,

        fetchPerform: _fetchPerform,
        fetchProcess: _fetchProcess,

        refreshPerform: _refreshPerform,
        refreshProcess: _refreshProcess,

        impersonatePerform: _impersonatePerform,
        impersonateProcess: _impersonateProcess,

        unimpersonatePerform: _unimpersonatePerform,
        unimpersonateProcess: _unimpersonateProcess,

        oauth2Perform: _oauth2Perform
    };

    function Auth(Vue, options) {
        var i,
            ii,
            msg,
            _this = this,
            drivers = ['auth', 'http', 'router'];

        this.currentToken = null;

        this.options = __utils.extend(defaultOptions, [options || {}]);
        this.options.Vue = Vue;

        this.watch = new this.options.Vue({
            data: function data() {
                return {
                    data: null,
                    loaded: false,
                    redirect: null,
                    authenticated: null
                };
            },

            watch: {
                loaded: function loaded(val) {
                    if (val === true && _this.options.readyCallback) {
                        _this.options.readyCallback();
                    }
                }
            }
        });

        // Check drivers.
        for (i = 0, ii = drivers.length; i < ii; i++) {
            if (!this.options[drivers[i]]) {
                console.error('Error (@websanova/vue-auth): "' + drivers[i] + '" driver must be set.');
                return;
            }

            if (this.options[drivers[i]]._init) {
                msg = this.options[drivers[i]]._init.call(this);

                if (msg) {
                    console.error('Error (@websanova/vue-auth): ' + msg);
                    return;
                }
            }
        }

        // Set refresh interval.
        if (this.options.refreshData.interval && this.options.refreshData.interval > 0) {
            setInterval(function () {
                if (this.options.refreshData.enabled && !this.options.tokenExpired.call(this)) {
                    this.options.refreshPerform.call(this, {});
                }
            }.bind(this), this.options.refreshData.interval * 1000 * 60); // In minutes.
        }

        // Init interceptors.
        this.options.router._beforeEach.call(this, this.options.routerBeforeEach, this.options.transitionEach);
        this.options.http._interceptor.call(this, this.options.requestIntercept, this.options.responseIntercept);
    }

    Auth.prototype.ready = function (cb) {
        if (cb !== undefined) {
            this.$auth.options.readyCallback = cb.bind(this);
        }

        return this.$auth.watch.loaded;
    };

    Auth.prototype.redirect = function () {
        return this.watch.redirect;
    };

    Auth.prototype.user = function (data) {
        if (data) {
            this.watch.data = data;
        }

        return this.watch.data || {};
    };

    Auth.prototype.check = function (role, key) {
        return this.options.check.call(this, role, key);
    };

    Auth.prototype.impersonating = function () {
        this.watch.data; // To fire watch

        return __token.get.call(this, this.options.tokenImpersonateName) ? true : false;
    };

    Auth.prototype.token = function (name, token) {
        if (token) {
            __token.set.call(this, name, token);
        }

        return __token.get.call(this, name);
    };

    Auth.prototype.fetch = function (data) {
        return __bindContext.call(this, 'fetch', data);
    };

    Auth.prototype.refresh = function (data) {
        return __bindContext.call(this, 'refresh', data);
    };

    Auth.prototype.register = function (data) {
        return __bindContext.call(this, 'register', data);
    };

    Auth.prototype.login = function (data) {
        return __bindContext.call(this, 'login', data);
    };

    Auth.prototype.logout = function (data) {
        return __bindContext.call(this, 'logout', data);
    };

    Auth.prototype.impersonate = function (data) {
        return __bindContext.call(this, 'impersonate', data);
    };

    Auth.prototype.unimpersonate = function (data) {
        return __bindContext.call(this, 'unimpersonate', data);
    };

    Auth.prototype.oauth2 = function (data) {
        return __bindContext.call(this, 'oauth2', data);
    };

    Auth.prototype.enableImpersonate = function () {
        if (this.impersonating()) {
            this.currentToken = null;
        }
    };

    Auth.prototype.disableImpersonate = function () {
        if (this.impersonating()) {
            this.currentToken = this.options.tokenDefaultName;
        }
    };

    return Auth;
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function () {

    function isObject(val) {
        if (val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val.constructor !== Array) {
            return true;
        }

        return false;
    }

    function toArray(val) {
        return typeof val === 'string' || typeof val === 'number' ? [val] : val;
    }

    function extend(mainObj, appendObj) {
        var i,
            ii,
            key,
            data = {};

        for (key in mainObj) {
            if (isObject(mainObj[key]) && mainObj[key].constructor.name !== 'FormData') {
                data[key] = extend(mainObj[key], {});
            } else {
                data[key] = mainObj[key];
            }
        }

        for (i = 0, ii = appendObj.length; i < ii; i++) {
            for (key in appendObj[i]) {
                if (isObject(appendObj[i][key]) && appendObj[i][key].constructor.name !== 'FormData') {
                    data[key] = extend(mainObj[key] || {}, [appendObj[i][key]]);
                } else {
                    data[key] = appendObj[i][key];
                }
            }
        }

        return data;
    }

    function compare(one, two) {
        var i, ii, key;

        if (Object.prototype.toString.call(one) === '[object Object]' && Object.prototype.toString.call(two) === '[object Object]') {
            for (key in one) {
                if (compare(one[key], two[key])) {
                    return true;
                }
            }

            return false;
        }

        one = toArray(one);
        two = toArray(two);

        if (!one || !two || one.constructor !== Array || two.constructor !== Array) {
            return false;
        }

        for (i = 0, ii = one.length; i < ii; i++) {
            if (two.indexOf(one[i]) >= 0) {
                return true;
            }
        }

        return false;
    }

    return {
        extend: extend,
        toArray: toArray,
        isObject: isObject,
        compare: compare
    };
}();

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __cookie = __webpack_require__(3);

module.exports = function () {

    function tokenName(name) {
        name = name || this.currentToken;

        if (name) {
            return name;
        }

        if (this.impersonating.call(this)) {
            return this.options.tokenImpersonateName;
        }

        return this.options.tokenDefaultName;
    }

    function isLocalStorageSupported() {
        try {
            if (!window.localStorage || !window.sessionStorage) {
                throw 'exception';
            }

            localStorage.setItem('storage_test', 1);
            localStorage.removeItem('storage_test');

            return true;
        } catch (e) {
            return false;
        }
    }

    function isCookieSupported() {
        return true;
    }

    function processToken(action, name, token) {
        var i,
            ii,
            args = [tokenName.call(this, name)];

        if (token) {
            args.push(token);
        }

        for (i = 0, ii = this.options.tokenStore.length; i < ii; i++) {
            if (this.options.tokenStore[i] === 'localStorage' && isLocalStorageSupported()) {
                return localStorage[action + 'Item'](args[0], args[1]);
            } else if (this.options.tokenStore[i] === 'cookie' && isCookieSupported()) {
                return __cookie[action].apply(this, args);
            }
        }
    }

    return {
        get: function get(name) {
            return processToken.call(this, 'get', name);
        },

        set: function set(name, token) {
            return processToken.call(this, 'set', name, token);
        },

        remove: function remove(name) {
            return processToken.call(this, 'remove', name);
        },

        expiring: function expiring() {
            return false;
        }
    };
}();

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {

    request: function request(req, token) {
        this.options.http._setHeaders.call(this, req, { Authorization: 'Bearer ' + token });
    },

    response: function response(res) {
        var headers = this.options.http._getHeaders.call(this, res),
            token = headers.Authorization || headers.authorization;

        if (token) {
            token = token.split(/Bearer\:?\s?/i);

            return token[token.length > 1 ? 1 : 0].trim();
        }
    }
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {

    _init: function _init() {
        if (!this.options.Vue.http) {
            return 'vue-resource.1.x.js : Vue.http must be set.';
        }
    },

    _interceptor: function _interceptor(req, res) {
        var _this = this;

        this.options.Vue.http.interceptors.push(function (request, next) {
            if (req) {
                req.call(_this, request);
            }

            next(function (response) {
                if (res) {
                    res.call(_this, response, request);
                }
            });
        });
    },

    _invalidToken: function _invalidToken(res, transition) {
        if (res.status === 401) {
            return true;
        }
    },

    _httpData: function _httpData(res) {
        return res.data || {};
    },

    _http: function _http(data) {
        var http = this.options.Vue.http(data);

        http.then(data.success, data.error);

        return http;
    },

    _getHeaders: function _getHeaders(res) {
        var i,
            data = {},
            headers = res.headers.map;

        for (i in headers) {
            data[i] = headers[i][0];
        }

        return data;
    },

    _setHeaders: function _setHeaders(req, headers) {
        var i;

        for (i in headers) {
            req.headers.set(i, headers[i]);
        }
    }
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {

    _init: function _init() {
        if (!this.options.Vue.router) {
            return 'vue-router.2.x.js : Vue.router must be set.';
        }
    },

    _bindData: function _bindData(data, ctx) {
        var error, success;

        data = data || {};

        error = data.error;
        success = data.success;

        data.query = ctx.$route.query || {};

        if (data.success) {
            data.success = function (res) {
                success.call(ctx, res);
            };
        }
        if (data.error) {
            data.error = function (res) {
                error.call(ctx, res);
            };
        }

        return data;
    },

    _beforeEach: function _beforeEach(routerBeforeEach, transitionEach) {
        var _this = this;

        this.options.Vue.router.beforeEach(function (transition, location, next) {
            _this.options.setTransitions.call(this, transition);

            routerBeforeEach.call(_this, function () {
                var auth = _this.options.getAuthMeta(transition);

                transitionEach.call(_this, transition, auth, function (redirect) {
                    if (!redirect) {
                        (next || transition.next)();
                        return;
                    }

                    // router v2.x
                    if (next) {
                        next(redirect);
                    } else {
                        this.options.router._routerReplace.call(this, redirect);
                    }
                });
            });
        });
    },

    _routerReplace: function _routerReplace(data) {
        var router = this.options.Vue.router;

        router.replace.call(router, data);
    },

    _routerGo: function _routerGo(data) {
        var router = this.options.Vue.router;

        (router.push || router.go).call(router, data);
    }

};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);