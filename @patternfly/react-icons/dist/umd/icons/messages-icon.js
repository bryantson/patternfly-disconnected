(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../createIcon"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../createIcon"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.createIcon);
    global.undefined = mod.exports;
  }
})(this, function (exports, _createIcon) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MessagesIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const MessagesIconConfig = exports.MessagesIconConfig = {
    name: 'MessagesIcon',
    height: 1024,
    width: 951,
    svgPath: 'M672.75 578.352l10.249 20.555c0 0 35.71 80.126-45.57 104.654-75.518 22.789-353.326 106.617-392.35 118.391l7.25 55.963c4.576 35.349-19.209 72.939-54.553 72.939s-68.855-28.654-73.433-64l-124.345-960h129.145l50.066 386.533 213.232 61.563-3.671-13.854c0 0-3.627-85.241 103.961-53.019 56.818 17.015 458.126 186.702 458.126 186.702l-278.107 83.573z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(MessagesIconConfig);
});
//# sourceMappingURL=messages-icon.js.map