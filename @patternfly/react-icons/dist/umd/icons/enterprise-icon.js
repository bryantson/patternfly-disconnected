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
  exports.EnterpriseIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const EnterpriseIconConfig = exports.EnterpriseIconConfig = {
    name: 'EnterpriseIcon',
    height: 1024,
    width: 1024,
    svgPath: 'M511.543 950.857h-73.143l-438.4-109.714v-772.571l584.457-141.714h73.143l365.257 146.286v768l-511.314 109.714zM584.686 4.571l-73.143 17.371v109.486l-365.486 88v-111.086l-72.914 17.371v624.229l511.543-113.6v-631.771zM949.714 122.743l-73.143-29.257v86.171l-146.057-57.6v-87.086l-73.143-29.257v616l292.343 112.686v-611.657zM146.057 1024l365.486-82.286v147.429l-365.486 81.143zM146.057 292.571l365.486-86.857v147.429l-365.486 85.714zM876.8 618.514l-146.286-57.6v-146.286l146.286 57.6zM876.8 399.086l-146.286-57.6v-146.286l146.286 57.6z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(EnterpriseIconConfig);
});
//# sourceMappingURL=enterprise-icon.js.map