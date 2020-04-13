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
  exports.PficonHistoryIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const PficonHistoryIconConfig = exports.PficonHistoryIconConfig = {
    name: 'PficonHistoryIcon',
    height: 1024,
    width: 1024,
    svgPath: 'M512 950.857c-136.731 0-260.937-53.623-352.754-140.96l-116.823 116.823c-23.337 23.337-42.423 15.429-42.423-17.577v-264c0-50.994 8.343-60 60-60h264c33.006 0 40.914 19.086 17.577 42.423v0l-91.794 91.794c71.383 66.834 163.977 103.497 262.217 103.497 102.56 0 198.994-39.954 271.52-112.48s112.48-168.96 112.48-271.52c0-102.56-39.954-198.994-112.48-271.543-72.526-72.503-168.96-112.457-271.52-112.457s-198.994 39.954-271.52 112.48c-6.057 6.057-11.863 12.297-17.463 18.674l-96.32-84.297c93.851-107.177 231.657-174.857 385.303-174.857 282.766 0 512 229.234 512 512s-229.234 512-512 512z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(PficonHistoryIconConfig);
});
//# sourceMappingURL=pficon-history-icon.js.map