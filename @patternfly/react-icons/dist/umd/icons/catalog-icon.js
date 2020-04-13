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
  exports.CatalogIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const CatalogIconConfig = exports.CatalogIconConfig = {
    name: 'CatalogIcon',
    height: 1024,
    width: 1097,
    svgPath: 'M509.714 737.371v-0.686c0.229 0.229 0.229 0.457 0 0.686zM184.457 84.114c-67.2-6.171-111.314-83.657-111.314-83.657v877.257c-73.143-2.286-73.143-68.571-73.143-68.571v-813.714c2.971-86.857 109.714-66.286 109.714-66.286 109.714 154.743 402.286-2.286 402.286-2.286v71.314c-125.714 81.829-242.286 95.543-327.543 85.943zM366.629 133.714c53.486-9.371 110.857-52.571 143.086-60.343v72.914h-3.886c-0.229 0-0.457 0-0.686 0h4.571v590.4c0 0 0 0 0 0v0.686c0 0 0 0 0 0l0.229 58.057c0 0-0.229 0-0.229 0.229v8c-119.314 76.8-274.057 129.143-363.429 145.829v-811.2c65.6 18.057 120.229 13.257 220.343-4.571zM587.429 737.371c-0.229-0.229-0.229-0.229 0 0v0zM1024 877.714v-877.257c0 0-44.114 77.486-111.314 83.657-85.257 9.6-201.829-4.114-327.543-85.943v-71.314c0 0 292.571 157.029 402.286 2.286 0 0 106.743-20.571 109.714 66.286v813.714c0 0 0 66.286-73.143 68.571zM587.429 545.143v-398.857l10.514 1.829c-2.057-1.143-4.343-1.829-6.629-1.829h-3.886v-72.914c32.229 7.771 89.6 50.971 143.086 60.343 100.114 17.829 154.743 22.629 220.343 4.571v811.2c-89.371-16.686-244.114-69.029-363.429-145.6v-8.229c0-0.229-0.229-0.229-0.229-0.229l0.229-58.057v-192.229z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(CatalogIconConfig);
});
//# sourceMappingURL=catalog-icon.js.map