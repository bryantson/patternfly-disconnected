"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = exports.spinnerSize = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _spinner = _interopRequireDefault(require("@patternfly/react-styles/css/components/Spinner/spinner"));

var _reactStyles = require("@patternfly/react-styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var spinnerSize;
exports.spinnerSize = spinnerSize;

(function (spinnerSize) {
  spinnerSize["sm"] = "sm";
  spinnerSize["md"] = "md";
  spinnerSize["lg"] = "lg";
  spinnerSize["xl"] = "xl";
})(spinnerSize || (exports.spinnerSize = spinnerSize = {}));

var Spinner = function Spinner(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'xl' : _ref$size,
      _ref$ariaValuetext = _ref['aria-valuetext'],
      ariaValueText = _ref$ariaValuetext === void 0 ? 'Loading...' : _ref$ariaValuetext,
      props = _objectWithoutProperties(_ref, ["className", "size", "aria-valuetext"]);

  return React.createElement("span", _extends({
    className: (0, _reactStyles.css)(_spinner["default"].spinner, (0, _reactStyles.getModifier)(_spinner["default"], size)),
    role: "progressbar",
    "aria-valuetext": ariaValueText
  }, props), React.createElement("span", {
    className: (0, _reactStyles.css)(_spinner["default"].spinnerClipper)
  }), React.createElement("span", {
    className: (0, _reactStyles.css)(_spinner["default"].spinnerLeadBall)
  }), React.createElement("span", {
    className: (0, _reactStyles.css)(_spinner["default"].spinnerTailBall)
  }));
};

exports.Spinner = Spinner;
Spinner.propTypes = {
  className: _propTypes["default"].string,
  size: _propTypes["default"].oneOf(['sm', 'md', 'lg', 'xl']),
  'aria-valuetext': _propTypes["default"].string
};
//# sourceMappingURL=Spinner.js.map