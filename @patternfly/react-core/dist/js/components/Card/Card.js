"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _card = _interopRequireDefault(require("@patternfly/react-styles/css/components/Card/card"));

var _reactStyles = require("@patternfly/react-styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Card = function Card(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? 'article' : _ref$component,
      _ref$isHoverable = _ref.isHoverable,
      isHoverable = _ref$isHoverable === void 0 ? false : _ref$isHoverable,
      _ref$isCompact = _ref.isCompact,
      isCompact = _ref$isCompact === void 0 ? false : _ref$isCompact,
      _ref$isSelectable = _ref.isSelectable,
      isSelectable = _ref$isSelectable === void 0 ? false : _ref$isSelectable,
      _ref$isSelected = _ref.isSelected,
      isSelected = _ref$isSelected === void 0 ? false : _ref$isSelected,
      props = _objectWithoutProperties(_ref, ["children", "className", "component", "isHoverable", "isCompact", "isSelectable", "isSelected"]);

  var Component = component;
  return React.createElement(Component, _extends({
    className: (0, _reactStyles.css)(_card["default"].card, isHoverable && _card["default"].modifiers.hoverable, isCompact && _card["default"].modifiers.compact, isSelectable && _card["default"].modifiers.selectable, isSelected && isSelectable && _card["default"].modifiers.selected, className),
    tabIndex: isSelectable ? '0' : undefined
  }, props), children);
};

exports.Card = Card;
Card.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  component: _propTypes["default"].any,
  isHoverable: _propTypes["default"].bool,
  isCompact: _propTypes["default"].bool,
  isSelectable: _propTypes["default"].bool,
  isSelected: _propTypes["default"].bool
};
//# sourceMappingURL=Card.js.map