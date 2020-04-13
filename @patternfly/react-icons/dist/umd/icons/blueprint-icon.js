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
  exports.BlueprintIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const BlueprintIconConfig = exports.BlueprintIconConfig = {
    name: 'BlueprintIcon',
    height: 1024,
    width: 1024,
    svgPath: 'M78.629 225.143c-3.657 3.657-5.486 8-5.486 12.8v55.086h-73.143v-55.086c0-25.143 8.914-46.629 26.971-64.686 17.829-17.829 39.543-26.971 64.686-26.971h91.429v73.143h-91.657c-5.029 0.457-9.143 2.286-12.8 5.714zM997.257 705.143c-17.829 17.829-39.543 26.971-64.686 26.971h-621.714c-25.143 0-46.629-8.914-64.686-26.971-17.829-17.829-26.971-39.543-26.971-64.686v-621.943c0-25.143 8.914-46.629 26.971-64.686 17.829-17.829 39.543-26.971 64.686-26.971h621.943c25.143 0 46.629 8.914 64.686 26.971 17.829 17.829 26.971 39.543 26.971 64.686v621.943c-0.229 25.143-9.143 46.629-27.2 64.686zM951.086 18.514c0-5.029-1.829-9.143-5.486-12.8s-8-5.486-12.8-5.486h-621.943c-5.029 0-9.143 1.829-12.8 5.486s-5.486 8-5.486 12.8v621.943c0 5.029 1.829 9.143 5.486 12.8s8 5.486 12.8 5.486h621.943c5.029 0 9.143-1.829 12.8-5.486s5.486-8 5.486-12.8v-621.943zM0 1024.686h73.143v-147.429h-73.143v147.429zM0 732.114h73.143v-147.429h-73.143v147.429zM73.143 859.886c0 5.029 1.829 9.143 5.486 12.8s8 5.486 12.8 5.486h55.314v73.143h-55.314c-25.143 0-46.629-8.914-64.686-26.971-17.829-17.829-26.743-39.314-26.743-64.457v-55.771h73.143v55.771zM218.971 951.314h147.429v-73.143h-147.429v73.143zM726.171 872.686c3.657-3.657 5.486-8 5.486-12.8v-91.429h73.143v91.429c0 25.143-8.914 46.629-26.971 64.686-17.829 17.829-39.543 26.971-64.686 26.971h-55.543v-73.143h55.543c5.029-0.229 9.371-2.057 13.029-5.714zM438.4 951.314h147.429v-73.143h-147.429v73.143z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(BlueprintIconConfig);
});
//# sourceMappingURL=blueprint-icon.js.map