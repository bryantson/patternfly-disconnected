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
    "name": "--pf-c-table--m-compact-cell--first-last-child--PaddingLeft",
    "value": "1.5rem",
    "var": "var(--pf-c-table--m-compact-cell--first-last-child--PaddingLeft)"
  };
});