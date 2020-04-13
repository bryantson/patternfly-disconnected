"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginMainFooter = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _login = _interopRequireDefault(require("@patternfly/react-styles/css/components/Login/login"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LoginMainFooter = function LoginMainFooter(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$socialMediaLogin = _ref.socialMediaLoginContent,
      socialMediaLoginContent = _ref$socialMediaLogin === void 0 ? null : _ref$socialMediaLogin,
      _ref$signUpForAccount = _ref.signUpForAccountMessage,
      signUpForAccountMessage = _ref$signUpForAccount === void 0 ? null : _ref$signUpForAccount,
      _ref$forgotCredential = _ref.forgotCredentials,
      forgotCredentials = _ref$forgotCredential === void 0 ? null : _ref$forgotCredential,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      props = _objectWithoutProperties(_ref, ["children", "socialMediaLoginContent", "signUpForAccountMessage", "forgotCredentials", "className"]);

  return React.createElement("div", _extends({
    className: (0, _reactStyles.css)(_login["default"].loginMainFooter, className)
  }, props), children, socialMediaLoginContent && React.createElement("ul", {
    className: (0, _reactStyles.css)(_login["default"].loginMainFooterLinks)
  }, socialMediaLoginContent), (signUpForAccountMessage || forgotCredentials) && React.createElement("div", {
    className: (0, _reactStyles.css)(_login["default"].loginMainFooterBand)
  }, signUpForAccountMessage, forgotCredentials));
};

exports.LoginMainFooter = LoginMainFooter;
LoginMainFooter.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  socialMediaLoginContent: _propTypes["default"].node,
  signUpForAccountMessage: _propTypes["default"].node,
  forgotCredentials: _propTypes["default"].node
};
//# sourceMappingURL=LoginMainFooter.js.map