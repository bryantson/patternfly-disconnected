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
    "name": "--pf-c-switch__toggle--before--Top",
    "value": "calc((calc(1rem*1.5) - calc(1rem - 0.125rem))/2)",
    "var": "var(--pf-c-switch__toggle--before--Top)"
  };
});