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
  exports.GlassWhiskeyIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const GlassWhiskeyIconConfig = exports.GlassWhiskeyIconConfig = {
    name: 'GlassWhiskeyIcon',
    height: 512,
    width: 512,
    svgPath: 'M480 32H32C12.5 32-2.4 49.2.3 68.5l56 356.5c4.5 31.5 31.5 54.9 63.4 54.9h273c31.8 0 58.9-23.4 63.4-54.9l55.6-356.5C514.4 49.2 499.5 32 480 32zm-37.4 64l-30 192h-313L69.4 96h373.2z',
    yOffset: '',
    xOffset: '',
    transform: ''
  };
  exports.default = (0, _createIcon2.default)(GlassWhiskeyIconConfig);
});
//# sourceMappingURL=glass-whiskey-icon.js.map