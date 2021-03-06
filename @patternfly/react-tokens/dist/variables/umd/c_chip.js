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
    ".pf-c-chip": [{
      "property": "--pf-global--Color--100",
      "value": "#151515",
      "token": "global_Color_100",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-global--Color--200",
      "value": "#737679",
      "token": "global_Color_200",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-global--BorderColor--100",
      "value": "#d2d2d2",
      "token": "global_BorderColor_100",
      "values": ["--pf-global--BorderColor--dark-100", "$pf-global--BorderColor--dark-100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-global--primary-color--100",
      "value": "#06c",
      "token": "global_primary_color_100",
      "values": ["--pf-global--primary-color--dark-100", "$pf-global--primary-color--dark-100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-global--link--Color",
      "value": "#06c",
      "token": "global_link_Color",
      "values": ["--pf-global--link--Color--dark", "$pf-global--link--Color--dark", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-global--link--Color--hover",
      "value": "#004080",
      "token": "global_link_Color_hover",
      "values": ["--pf-global--link--Color--dark--hover", "$pf-global--link--Color--dark--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }, {
      "property": "--pf-global--BackgroundColor--100",
      "value": "#fff",
      "token": "global_BackgroundColor_100",
      "values": ["--pf-global--BackgroundColor--light-100", "$pf-global--BackgroundColor--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-chip--PaddingLeft",
      "value": "0.5rem",
      "token": "c_chip_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-chip--BackgroundColor",
      "value": "#fff",
      "token": "c_chip_BackgroundColor",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-chip--BorderColor",
      "value": "#737679",
      "token": "c_chip_BorderColor",
      "values": ["--pf-global--secondary-color--100", "$pf-global--secondary-color--100", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-chip--BorderWidth",
      "value": "1px",
      "token": "c_chip_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-chip--BorderRadius",
      "value": "3px",
      "token": "c_chip_BorderRadius",
      "values": ["--pf-global--BorderRadius--sm", "$pf-global--BorderRadius--sm", "3px"]
    }, {
      "property": "--pf-c-chip--m-overflow--BackgroundColor",
      "value": "#ededed",
      "token": "c_chip_m_overflow_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--300", "$pf-global--BackgroundColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-chip--m-overflow--PaddingLeft",
      "value": "0",
      "token": "c_chip_m_overflow_PaddingLeft"
    }, {
      "property": "--pf-c-chip--m-overflow--BorderWidth",
      "value": "0",
      "token": "c_chip_m_overflow_BorderWidth"
    }, {
      "property": "--pf-c-chip--m-overflow--c-button--BorderRadius",
      "value": "3px",
      "token": "c_chip_m_overflow_c_button_BorderRadius",
      "values": ["--pf-global--BorderRadius--sm", "$pf-global--BorderRadius--sm", "3px"]
    }, {
      "property": "--pf-c-chip--m-overflow--c-button--BorderWidth",
      "value": "0",
      "token": "c_chip_m_overflow_c_button_BorderWidth"
    }, {
      "property": "--pf-c-chip--m-overflow--c-button--PaddingLeft",
      "value": "0.5rem",
      "token": "c_chip_m_overflow_c_button_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-chip--m-overflow--c-button--PaddingRight",
      "value": "0.5rem",
      "token": "c_chip_m_overflow_c_button_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-chip--m-overflow--c-button--hover--BorderWidth",
      "value": "1px",
      "token": "c_chip_m_overflow_c_button_hover_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-chip--m-overflow--c-button--hover--BorderColor",
      "value": "#737679",
      "token": "c_chip_m_overflow_c_button_hover_BorderColor",
      "values": ["--pf-global--secondary-color--100", "$pf-global--secondary-color--100", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-chip--m-overflow--c-button--active--BorderWidth",
      "value": "1px",
      "token": "c_chip_m_overflow_c_button_active_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-chip--m-overflow--c-button--active--BorderColor",
      "value": "#737679",
      "token": "c_chip_m_overflow_c_button_active_BorderColor",
      "values": ["--pf-global--secondary-color--100", "$pf-global--secondary-color--100", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-chip--m-overflow--c-button--focus--BorderWidth",
      "value": "1px",
      "token": "c_chip_m_overflow_c_button_focus_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-chip--m-overflow--c-button--focus--BorderColor",
      "value": "#737679",
      "token": "c_chip_m_overflow_c_button_focus_BorderColor",
      "values": ["--pf-global--secondary-color--100", "$pf-global--secondary-color--100", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-chip--m-read-only--PaddingTop",
      "value": "0.375rem",
      "token": "c_chip_m_read_only_PaddingTop",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-chip--m-read-only--PaddingRight",
      "value": "0.5rem",
      "token": "c_chip_m_read_only_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-chip--m-read-only--PaddingBottom",
      "value": "0.375rem",
      "token": "c_chip_m_read_only_PaddingBottom",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-chip__text--FontSize",
      "value": "0.75rem",
      "token": "c_chip__text_FontSize",
      "values": ["--pf-global--FontSize--xs", "$pf-global--FontSize--xs", "pf-font-prem(12px)", "0.75rem"]
    }, {
      "property": "--pf-c-chip__text--Color",
      "value": "#151515",
      "token": "c_chip__text_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-chip__text--MaxWidth",
      "value": "7.5rem",
      "token": "c_chip__text_MaxWidth"
    }, {
      "property": "--pf-c-chip--c-button--PaddingLeft",
      "value": "0.5rem",
      "token": "c_chip_c_button_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-chip--c-button--PaddingRight",
      "value": "0.5rem",
      "token": "c_chip_c_button_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-chip--c-button--FontSize",
      "value": "0.75rem",
      "token": "c_chip_c_button_FontSize",
      "values": ["--pf-global--FontSize--xs", "$pf-global--FontSize--xs", "pf-font-prem(12px)", "0.75rem"]
    }, {
      "property": "--pf-c-chip--c-badge--MarginLeft",
      "value": "0.25rem",
      "token": "c_chip_c_badge_MarginLeft",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }],
    ".pf-c-chip.pf-m-overflow": [{
      "property": "--pf-c-chip--PaddingLeft",
      "value": "0",
      "token": "c_chip_PaddingLeft",
      "values": ["--pf-c-chip--m-overflow--PaddingLeft", "0"]
    }, {
      "property": "--pf-c-chip--BackgroundColor",
      "value": "#ededed",
      "token": "c_chip_BackgroundColor",
      "values": ["--pf-c-chip--m-overflow--BackgroundColor", "--pf-global--BackgroundColor--300", "$pf-global--BackgroundColor--300", "$pf-color-black-200", "#ededed"]
    }],
    ".pf-c-chip.pf-m-overflow::before": [{
      "property": "--pf-c-chip--BorderWidth",
      "value": "0",
      "token": "c_chip_BorderWidth",
      "values": ["--pf-c-chip--m-overflow--BorderWidth", "0"]
    }],
    ".pf-c-chip.pf-m-overflow .pf-c-button.pf-m-hover::after": [{
      "property": "--pf-c-chip--m-overflow--c-button--BorderWidth",
      "value": "1px",
      "token": "c_chip_m_overflow_c_button_BorderWidth",
      "values": ["--pf-c-chip--m-overflow--c-button--hover--BorderWidth", "--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-chip--m-overflow--c-button--BorderColor",
      "value": "#737679",
      "token": "c_chip_m_overflow_c_button_BorderColor",
      "values": ["--pf-c-chip--m-overflow--c-button--hover--BorderColor", "--pf-global--secondary-color--100", "$pf-global--secondary-color--100", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-chip.pf-m-overflow .pf-c-button.pf-m-active::after": [{
      "property": "--pf-c-chip--m-overflow--c-button--BorderWidth",
      "value": "1px",
      "token": "c_chip_m_overflow_c_button_BorderWidth",
      "values": ["--pf-c-chip--m-overflow--c-button--active--BorderWidth", "--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-chip--m-overflow--c-button--BorderColor",
      "value": "#737679",
      "token": "c_chip_m_overflow_c_button_BorderColor",
      "values": ["--pf-c-chip--m-overflow--c-button--active--BorderColor", "--pf-global--secondary-color--100", "$pf-global--secondary-color--100", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-chip.pf-m-overflow .pf-c-button.pf-m-focus::after": [{
      "property": "--pf-c-chip--m-overflow--c-button--BorderWidth",
      "value": "1px",
      "token": "c_chip_m_overflow_c_button_BorderWidth",
      "values": ["--pf-c-chip--m-overflow--c-button--focus--BorderWidth", "--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-chip--m-overflow--c-button--BorderColor",
      "value": "#737679",
      "token": "c_chip_m_overflow_c_button_BorderColor",
      "values": ["--pf-c-chip--m-overflow--c-button--focus--BorderColor", "--pf-global--secondary-color--100", "$pf-global--secondary-color--100", "$pf-color-black-600", "#737679"]
    }]
  };
});