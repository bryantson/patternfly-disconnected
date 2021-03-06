"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertGroupInline = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _alertGroup = _interopRequireDefault(require("@patternfly/react-styles/css/components/AlertGroup/alert-group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AlertGroupInline = function AlertGroupInline(_ref) {
  var className = _ref.className,
      children = _ref.children,
      isToast = _ref.isToast,
      rest = _objectWithoutProperties(_ref, ["className", "children", "isToast"]);

  return React.createElement("ul", _extends({
    className: (0, _reactStyles.css)(_alertGroup["default"].alertGroup, className, isToast ? _alertGroup["default"].modifiers.toast : '')
  }, rest), React.Children.toArray(children).map(function (Alert, index) {
    return React.createElement("li", {
      key: index
    }, Alert);
  }));
};

exports.AlertGroupInline = AlertGroupInline;
//# sourceMappingURL=AlertGroupInline.js.map