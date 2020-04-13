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
  exports.EditAltIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const EditAltIconConfig = exports.EditAltIconConfig = {
    name: 'EditAltIcon',
    height: 1024,
    width: 1024,
    svgPath: 'M219.554 0l73.294 73.143-146.583 146.286-73.070-73.143v-73.143h73.090v-73.438l73.269 0.295zM806.176 512l-586.747-585.143h-219.429v219.429l586.585 585.143 219.591-219.429zM1024 762.937c0-19.056-6.656-35.237-19.968-48.537l-146.578-150.455-218.686 218.505 148.576 147.915c12.955 13.662 29.147 20.494 48.578 20.494 19.074 0 35.445-6.832 49.115-20.494l118.994-118.352c13.312-14.023 19.968-30.384 19.968-49.077v0z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(EditAltIconConfig);
});
//# sourceMappingURL=edit-alt-icon.js.map