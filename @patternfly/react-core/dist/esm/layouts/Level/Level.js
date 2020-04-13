import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/layouts/Level/level';
import { getGutterModifier } from '../../styles/gutters';
export const Level = (_ref) => {
  let {
    gutter = null,
    className = '',
    children = null
  } = _ref,
      props = _objectWithoutProperties(_ref, ["gutter", "className", "children"]);

  return React.createElement("div", _extends({}, props, {
    className: css(styles.level, gutter && getGutterModifier(styles, gutter, styles.modifiers.gutter), className)
  }), children);
};
Level.propTypes = {
  gutter: _pt.oneOf(['sm', 'md', 'lg']),
  className: _pt.string,
  children: _pt.node
};
//# sourceMappingURL=Level.js.map