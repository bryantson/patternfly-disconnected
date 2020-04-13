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
  exports.Remove2IconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const Remove2IconConfig = exports.Remove2IconConfig = {
    name: 'Remove2Icon',
    height: 1024,
    width: 878,
    svgPath: 'M146.286-73.143h585.143l73.143 658.286h-731.429l73.143-658.286zM585.143 804.855v146.002h-292.571v-146.002l-292.571-0.283v-219.429l73.001 73.143h731.57l73.143-73.143v219.712h-292.571zM511.010 804.855h-145.296v73.001h145.296v-73.001z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(Remove2IconConfig);
});
//# sourceMappingURL=remove2-icon.js.map