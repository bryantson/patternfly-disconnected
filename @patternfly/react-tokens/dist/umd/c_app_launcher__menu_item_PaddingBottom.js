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
    "name": "--pf-c-app-launcher__menu-item--PaddingBottom",
    "value": "0.5rem",
    "var": "var(--pf-c-app-launcher__menu-item--PaddingBottom)"
  };
});