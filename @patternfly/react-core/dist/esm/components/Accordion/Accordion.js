import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Accordion/accordion';
import { AccordionContext } from './AccordionContext';
export const Accordion = (_ref) => {
  let {
    children = null,
    className = '',
    'aria-label': ariaLabel = '',
    headingLevel = 'h3',
    asDefinitionList = true,
    noBoxShadow = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "className", "aria-label", "headingLevel", "asDefinitionList", "noBoxShadow"]);

  const AccordionList = asDefinitionList ? 'dl' : 'div';
  return React.createElement(AccordionList, _extends({
    className: css(styles.accordion, noBoxShadow && styles.modifiers.noBoxShadow, className),
    "aria-label": ariaLabel
  }, props), React.createElement(AccordionContext.Provider, {
    value: {
      ContentContainer: asDefinitionList ? 'dd' : 'div',
      ToggleContainer: asDefinitionList ? 'dt' : headingLevel
    }
  }, children));
};
Accordion.propTypes = {
  children: _pt.node,
  className: _pt.string,
  'aria-label': _pt.string,
  headingLevel: _pt.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  asDefinitionList: _pt.bool,
  noBoxShadow: _pt.bool
};
//# sourceMappingURL=Accordion.js.map