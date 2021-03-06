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
    "name": "--pf-c-nav__scroll-button--m-dark--nth-of-type-1--BoxShadow",
    "value": "20px 0 10px -4px rgba(21,21,21,0.7)",
    "var": "var(--pf-c-nav__scroll-button--m-dark--nth-of-type-1--BoxShadow)"
  };
});