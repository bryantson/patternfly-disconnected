"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataList = exports.DataListContext = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _dataList = _interopRequireDefault(require("@patternfly/react-styles/css/components/DataList/data-list"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DataListContext = React.createContext({
  isSelectable: false
});
exports.DataListContext = DataListContext;

var DataList = function DataList(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      ariaLabel = _ref['aria-label'],
      _ref$selectedDataList = _ref.selectedDataListItemId,
      selectedDataListItemId = _ref$selectedDataList === void 0 ? '' : _ref$selectedDataList,
      onSelectDataListItem = _ref.onSelectDataListItem,
      _ref$isCompact = _ref.isCompact,
      isCompact = _ref$isCompact === void 0 ? false : _ref$isCompact,
      props = _objectWithoutProperties(_ref, ["children", "className", "aria-label", "selectedDataListItemId", "onSelectDataListItem", "isCompact"]);

  var isSelectable = onSelectDataListItem !== undefined;

  var updateSelectedDataListItem = function updateSelectedDataListItem(id) {
    onSelectDataListItem(id);
  };

  return React.createElement(DataListContext.Provider, {
    value: {
      isSelectable: isSelectable,
      selectedDataListItemId: selectedDataListItemId,
      updateSelectedDataListItem: updateSelectedDataListItem
    }
  }, React.createElement("ul", _extends({
    className: (0, _reactStyles.css)(_dataList["default"].dataList, isCompact && _dataList["default"].modifiers.compact, className),
    "aria-label": ariaLabel
  }, props), children));
};

exports.DataList = DataList;
DataList.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  'aria-label': _propTypes["default"].string.isRequired,
  onSelectDataListItem: _propTypes["default"].func,
  selectedDataListItemId: _propTypes["default"].string,
  isCompact: _propTypes["default"].bool
};
//# sourceMappingURL=DataList.js.map