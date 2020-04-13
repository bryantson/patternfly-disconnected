"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _progress = _interopRequireDefault(require("@patternfly/react-styles/css/components/Progress/progress"));

var _reactStyles = require("@patternfly/react-styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ProgressBar = function ProgressBar(_ref) {
  var ariaProps = _ref.ariaProps,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["ariaProps", "className", "children", "value"]);

  return React.createElement("div", _extends({}, props, {
    className: (0, _reactStyles.css)(_progress["default"].progressBar, className)
  }, ariaProps), React.createElement("div", {
    className: (0, _reactStyles.css)(_progress["default"].progressIndicator),
    style: {
      width: "".concat(value, "%")
    }
  }, React.createElement("span", {
    className: (0, _reactStyles.css)(_progress["default"].progressMeasure)
  }, children)));
};

exports.ProgressBar = ProgressBar;
ProgressBar.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  value: _propTypes["default"].number.isRequired,
  ariaProps: _propTypes["default"].shape({
    'aria-describedby': _propTypes["default"].string,
    'aria-valuemin': _propTypes["default"].number,
    'aria-valuenow': _propTypes["default"].number,
    'aria-valuemax': _propTypes["default"].number,
    'aria-valuetext': _propTypes["default"].string
  })
};
//# sourceMappingURL=ProgressBar.js.map