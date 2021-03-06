"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = exports.DividerVariant = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _divider = _interopRequireDefault(require("@patternfly/react-styles/css/components/Divider/divider"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DividerVariant;
exports.DividerVariant = DividerVariant;

(function (DividerVariant) {
  DividerVariant["hr"] = "hr";
  DividerVariant["li"] = "li";
  DividerVariant["div"] = "div";
})(DividerVariant || (exports.DividerVariant = DividerVariant = {}));

var Divider = function Divider(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? DividerVariant.hr : _ref$component,
      props = _objectWithoutProperties(_ref, ["className", "component"]);

  var Component = component;
  return React.createElement(Component, _extends({
    className: (0, _reactStyles.css)(_divider["default"].divider, className)
  }, component !== 'hr' && {
    role: 'separator'
  }, props));
};

exports.Divider = Divider;
Divider.propTypes = {
  className: _propTypes["default"].string,
  component: _propTypes["default"].oneOf(['hr', 'li', 'div'])
};
//# sourceMappingURL=Divider.js.map