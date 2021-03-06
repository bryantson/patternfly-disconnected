import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
export const DrawerContentBody = (_ref) => {
  let {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className = '',
    children,
    hasPadding = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "hasPadding"]);

  return React.createElement("div", _extends({
    className: css(styles.drawerBody, hasPadding && styles.modifiers.padding, className)
  }, props), children);
};
DrawerContentBody.propTypes = {
  className: _pt.string,
  children: _pt.node,
  hasPadding: _pt.bool
};
//# sourceMappingURL=DrawerContentBody.js.map