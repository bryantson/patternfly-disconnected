import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Popover/popover';
import { css, getModifier } from '@patternfly/react-styles';
export const PopoverPosition = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};
export const PopoverDialog = (_ref) => {
  let {
    position = 'top',
    children = null,
    className = null
  } = _ref,
      props = _objectWithoutProperties(_ref, ["position", "children", "className"]);

  return React.createElement("div", _extends({
    className: css(styles.popover, getModifier(styles, position, styles.modifiers.top), className),
    role: "dialog",
    "aria-modal": "true"
  }, props), children);
};
PopoverDialog.propTypes = {
  position: _pt.oneOf(['top', 'bottom', 'left', 'right']),
  className: _pt.string,
  children: _pt.node.isRequired
};
//# sourceMappingURL=PopoverDialog.js.map