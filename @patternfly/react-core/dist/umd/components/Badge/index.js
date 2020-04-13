(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Badge"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Badge"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Badge);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Badge) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Badge).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Badge[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map