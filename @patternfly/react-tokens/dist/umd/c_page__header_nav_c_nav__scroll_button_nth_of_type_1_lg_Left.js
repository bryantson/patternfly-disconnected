(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "name": "--pf-c-page__header-nav--c-nav__scroll-button--nth-of-type-1--lg--Left",
    "value": "0",
    "var": "var(--pf-c-page__header-nav--c-nav__scroll-button--nth-of-type-1--lg--Left)"
  };
});