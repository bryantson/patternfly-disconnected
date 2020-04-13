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
  exports.PficonSortCommonDescIconConfig = undefined;

  var _createIcon2 = _interopRequireDefault(_createIcon);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /* This file is generated by createIcons.js any changes will be lost. */
  const PficonSortCommonDescIconConfig = exports.PficonSortCommonDescIconConfig = {
    name: 'PficonSortCommonDescIcon',
    height: 1024,
    width: 1024,
    svgPath: 'M528.48 294.057h186.286c10.103 0 18.286-8.183 18.286-18.286v-112.709c0-10.103-8.183-18.286-18.286-18.286h-186.286c-10.103 0-18.286 8.183-18.286 18.286v112.709c0 10.103 8.183 18.286 18.286 18.286v0zM528.48 584.297h332.571c10.103 0 18.286-8.183 18.286-18.286v-108.137c0-10.103-8.183-18.286-18.286-18.286h-332.571c-10.103 0-18.286 8.183-18.286 18.286v108.137c0 10.103 8.183 18.286 18.286 18.286v0zM526.194 876.914h478.857c10.103 0 18.286-8.183 18.286-18.286v-108.137c0-10.103-8.183-18.286-18.286-18.286h-476.571c-10.103 0-18.286 8.183-18.286 18.286v108.137c0 10.103 5.897 18.286 16 18.286v0zM386.286 219.428h-91.2v712.8c0 0.091 0 0.183 0 0.274 0 9.943-10.354 18.011-20.297 18.011-0.091 0 2.103 0 1.989 0h-111.726c-0.091 0-0.183 0-0.274 0-9.943 0-18.011-8.069-18.011-18.011 0-0.091 0-0.206 0-0.297v0.023-712.8h-125.486c-0.114 0-2.857 0-2.994 0-10.103 0-18.286-6.377-18.286-16.48 0-5.143 2.126-11.589 5.531-14.903l200.777-256.069c3.429-3.177 8.046-5.12 13.12-5.12s9.691 1.943 13.143 5.143v0l200.594 253.189c3.383 3.589 5.714 10.697 5.714 16.251v-0.297c0 0.069 0 0.937 0 1.006 0 9.966-8.069 17.257-18.034 17.257-0.091 0-16.183 0-16.274 0h-2.286l-16 0.023z',
    yOffset: '64',
    xOffset: '',
    transform: 'rotate(180 0 512) scale(-1 1)'
  };
  exports.default = (0, _createIcon2.default)(PficonSortCommonDescIconConfig);
});
//# sourceMappingURL=pficon-sort-common-desc-icon.js.map