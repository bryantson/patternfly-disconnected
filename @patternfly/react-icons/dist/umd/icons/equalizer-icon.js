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
  exports.EqualizerIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const EqualizerIconConfig = exports.EqualizerIconConfig = {
    name: 'EqualizerIcon',
    height: 1024,
    width: 1024,
    svgPath: 'M950.857 438.857h18.286c30.171 0 54.857 24.686 54.857 54.857v182.857c0 30.171-24.686 54.857-54.857 54.857h-18.286v219.429h-146.286v-219.429h-18.286c-30.171 0-54.857-24.686-54.857-54.857v-182.857c0-30.171 24.686-54.857 54.857-54.857h18.286v-1024h146.286v1024zM804.571 658.286h146.286v-146.286h-146.286v146.286zM603.429 146.286c30.171 0 54.857 24.686 54.857 54.857v182.857c0 30.171-24.686 54.857-54.857 54.857h-18.286v1024h-146.286v-1024h-18.286c-30.171 0-54.857-24.686-54.857-54.857v-182.857c0-30.171 24.686-54.857 54.857-54.857h18.286v-219.429h146.286v219.429h18.286zM438.857 365.714h146.286v-146.286h-146.286v146.286zM237.714 438.857c30.171 0 54.857 24.686 54.857 54.857v182.857c0 30.171-24.686 54.857-54.857 54.857h-18.286v219.429h-146.286v-219.429h-18.286c-30.171 0-54.857-24.686-54.857-54.857v-182.857c0-30.171 24.686-54.857 54.857-54.857h18.286v-1024h146.286v1024h18.286zM73.143 658.286h146.286v-146.286h-146.286v146.286z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(EqualizerIconConfig);
});
//# sourceMappingURL=equalizer-icon.js.map