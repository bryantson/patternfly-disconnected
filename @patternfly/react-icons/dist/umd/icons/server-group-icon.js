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
  exports.ServerGroupIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const ServerGroupIconConfig = exports.ServerGroupIconConfig = {
    name: 'ServerGroupIcon',
    height: 1024,
    width: 1024,
    svgPath: 'M841.143 731.428h182.857v-731.429h-182.857v731.429zM695.086 731.428h-658.514c-9.829 0-18.514-3.657-25.6-10.743-7.314-7.543-10.971-16-10.971-25.829v-731.657c0-9.829 3.657-18.514 10.743-25.6 7.314-7.314 15.771-10.743 25.6-10.743h658.743c9.829 0 18.514 3.657 25.6 10.743 7.314 7.314 10.743 15.771 10.743 25.6v731.657c0 9.829-3.657 18.514-10.743 25.6-7.314 7.314-15.771 10.971-25.6 10.971zM658.286 73.143h-438.857v109.714h438.857v-109.714zM658.286 292.571h-585.143v109.714h585.143v-109.714zM658.286 512h-219.429v109.714h219.429v-109.714zM22.4 768h686.629c11.429 0 18.743 2.971 21.257 8.686 2.743 5.714-0.229 12.8-8.686 21.257 0 0-142.4 130.514-152.914 142.857s-24 9.829-24 9.829h-361.143c0 0-11.886 1.371-22.629-10.286-10.514-11.886-151.314-142.4-151.314-142.4-8.457-8.457-11.429-15.314-8.686-21.257s9.829-8.686 21.486-8.686zM767.314 951.314h-121.143l194.743-182.171 183.086-1.6z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(ServerGroupIconConfig);
});
//# sourceMappingURL=server-group-icon.js.map