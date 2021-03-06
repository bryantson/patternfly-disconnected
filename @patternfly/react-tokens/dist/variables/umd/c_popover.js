(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.undefined = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    ".pf-c-popover": [{
      "property": "--pf-c-popover--MinWidth",
      "value": "calc(2rem + 18.75rem)",
      "token": "c_popover_MinWidth",
      "values": ["calc(--pf-c-popover--c-button--sibling--PaddingRight + 18.75rem)", "calc(--pf-global--spacer--xl + 18.75rem)", "calc($pf-global--spacer--xl + 18.75rem)", "calc(pf-size-prem(32px) + 18.75rem)", "calc(2rem + 18.75rem)"]
    }, {
      "property": "--pf-c-popover--MaxWidth",
      "value": "calc(2rem + 18.75rem)",
      "token": "c_popover_MaxWidth",
      "values": ["calc(--pf-c-popover--c-button--sibling--PaddingRight + 18.75rem)", "calc(--pf-global--spacer--xl + 18.75rem)", "calc($pf-global--spacer--xl + 18.75rem)", "calc(pf-size-prem(32px) + 18.75rem)", "calc(2rem + 18.75rem)"]
    }, {
      "property": "--pf-c-popover--BoxShadow",
      "value": "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)",
      "token": "c_popover_BoxShadow",
      "values": ["--pf-global--BoxShadow--md", "$pf-global--BoxShadow--md", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba($pf-color-black-1000, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba($pf-color-black-1000, .06)", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba(#030303, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba(#030303, .06)", "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)"]
    }, {
      "property": "--pf-c-popover__content--BackgroundColor",
      "value": "#fff",
      "token": "c_popover__content_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-popover__content--PaddingTop",
      "value": "2rem",
      "token": "c_popover__content_PaddingTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-popover__content--PaddingRight",
      "value": "2rem",
      "token": "c_popover__content_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-popover__content--PaddingBottom",
      "value": "2rem",
      "token": "c_popover__content_PaddingBottom",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-popover__content--PaddingLeft",
      "value": "2rem",
      "token": "c_popover__content_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-popover__arrow--Width",
      "value": "1.5625rem",
      "token": "c_popover__arrow_Width",
      "values": ["--pf-global--arrow--width-lg", "$pf-global--arrow--width-lg", "pf-font-prem(25px)", "1.5625rem"]
    }, {
      "property": "--pf-c-popover__arrow--Height",
      "value": "1.5625rem",
      "token": "c_popover__arrow_Height",
      "values": ["--pf-global--arrow--width-lg", "$pf-global--arrow--width-lg", "pf-font-prem(25px)", "1.5625rem"]
    }, {
      "property": "--pf-c-popover__arrow--BoxShadow",
      "value": "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)",
      "token": "c_popover__arrow_BoxShadow",
      "values": ["--pf-global--BoxShadow--md", "$pf-global--BoxShadow--md", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba($pf-color-black-1000, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba($pf-color-black-1000, .06)", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba(#030303, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba(#030303, .06)", "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)"]
    }, {
      "property": "--pf-c-popover__arrow--BackgroundColor",
      "value": "#fff",
      "token": "c_popover__arrow_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-popover__arrow--m-top--Transform",
      "value": "translate(-50%, 50%) rotate(45deg)",
      "token": "c_popover__arrow_m_top_Transform"
    }, {
      "property": "--pf-c-popover__arrow--m-right--Transform",
      "value": "translate(-50%, -50%) rotate(45deg)",
      "token": "c_popover__arrow_m_right_Transform"
    }, {
      "property": "--pf-c-popover__arrow--m-bottom--Transform",
      "value": "translate(-50%, -50%) rotate(45deg)",
      "token": "c_popover__arrow_m_bottom_Transform"
    }, {
      "property": "--pf-c-popover__arrow--m-left--Transform",
      "value": "translate(50%, -50%) rotate(45deg)",
      "token": "c_popover__arrow_m_left_Transform"
    }, {
      "property": "--pf-c-popover--c-button--MarginLeft",
      "value": "0.5rem",
      "token": "c_popover_c_button_MarginLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-popover--c-button--Top",
      "value": "calc(2rem - 0.375rem + 0.0625rem)",
      "token": "c_popover_c_button_Top",
      "values": ["calc(--pf-c-popover__content--PaddingTop - --pf-global--spacer--form-element + 0.0625rem)", "calc(--pf-global--spacer--xl - $pf-global--spacer--form-element + 0.0625rem)", "calc($pf-global--spacer--xl - $pf-global--spacer--form-element + 0.0625rem)", "calc(pf-size-prem(32px) - pf-size-prem(6px) + 0.0625rem)", "calc(2rem - 0.375rem + 0.0625rem)"]
    }, {
      "property": "--pf-c-popover--c-button--Right",
      "value": "1rem",
      "token": "c_popover_c_button_Right",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-popover--c-button--sibling--PaddingRight",
      "value": "2rem",
      "token": "c_popover_c_button_sibling_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-popover--c-title--MarginBottom",
      "value": "1rem",
      "token": "c_popover_c_title_MarginBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-popover__footer--MarginTop",
      "value": "1.5rem",
      "token": "c_popover__footer_MarginTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }]
  };
});