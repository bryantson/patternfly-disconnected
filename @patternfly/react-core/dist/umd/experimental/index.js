(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../components/Drawer", "../components/DataToolbar", "../components/Divider", "../components/OverflowMenu", "../components/Spinner"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../components/Drawer"), require("../components/DataToolbar"), require("../components/Divider"), require("../components/OverflowMenu"), require("../components/Spinner"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Drawer, global.DataToolbar, global.Divider, global.OverflowMenu, global.Spinner);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Drawer, _DataToolbar, _Divider, _OverflowMenu, _Spinner) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Drawer).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Drawer[key];
      }
    });
  });
  Object.keys(_DataToolbar).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _DataToolbar[key];
      }
    });
  });
  Object.keys(_Divider).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Divider[key];
      }
    });
  });
  Object.keys(_OverflowMenu).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _OverflowMenu[key];
      }
    });
  });
  Object.keys(_Spinner).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Spinner[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map