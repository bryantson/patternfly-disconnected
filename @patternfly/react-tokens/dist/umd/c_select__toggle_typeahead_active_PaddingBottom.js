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
    "name": "--pf-c-select__toggle-typeahead--active--PaddingBottom",
    "value": "calc(0.375rem - 1px)",
    "var": "var(--pf-c-select__toggle-typeahead--active--PaddingBottom)"
  };
});