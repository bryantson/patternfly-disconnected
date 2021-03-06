(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DropdownArrowContext = exports.DropdownContext = exports.DropdownDirection = exports.DropdownPosition = undefined;

  var React = _interopRequireWildcard(_react);

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};

    if (obj != null) {
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  let DropdownPosition = exports.DropdownPosition = undefined;

  (function (DropdownPosition) {
    DropdownPosition["right"] = "right";
    DropdownPosition["left"] = "left";
  })(DropdownPosition || (exports.DropdownPosition = DropdownPosition = {}));

  let DropdownDirection = exports.DropdownDirection = undefined;

  (function (DropdownDirection) {
    DropdownDirection["up"] = "up";
    DropdownDirection["down"] = "down";
  })(DropdownDirection || (exports.DropdownDirection = DropdownDirection = {}));

  const DropdownContext = exports.DropdownContext = React.createContext({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSelect: event => undefined,
    id: '',
    toggleIconClass: '',
    toggleTextClass: '',
    menuClass: '',
    itemClass: '',
    toggleClass: '',
    baseClass: '',
    baseComponent: 'div',
    sectionClass: '',
    sectionTitleClass: '',
    sectionComponent: 'section',
    disabledClass: '',
    hoverClass: '',
    separatorClass: '',
    menuComponent: 'ul'
  });
  const DropdownArrowContext = exports.DropdownArrowContext = React.createContext({
    keyHandler: null,
    sendRef: null
  });
});
//# sourceMappingURL=dropdownConstants.js.map