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
    ".pf-c-chip-group": [{
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
      "property": "--pf-c-chip-group--MarginRight",
      "value": "0.25rem",
      "token": "c_chip_group_MarginRight",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-chip-group--MarginBottom",
      "value": "calc(0.25rem * -1)",
      "token": "c_chip_group_MarginBottom",
      "values": ["calc(--pf-c-chip-group--c-chip--MarginBottom * -1)", "calc(--pf-global--spacer--xs * -1)", "calc($pf-global--spacer--xs * -1)", "calc(pf-size-prem(4px) * -1)", "calc(0.25rem * -1)"]
    }, {
      "property": "--pf-c-chip-group--m-toolbar-PaddingTop",
      "value": "0.25rem",
      "token": "c_chip_group_m_toolbar_PaddingTop",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-chip-group--m-toolbar-PaddingRight",
      "value": "0.25rem",
      "token": "c_chip_group_m_toolbar_PaddingRight",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-chip-group--m-toolbar-PaddingBottom",
      "value": "0.25rem",
      "token": "c_chip_group_m_toolbar_PaddingBottom",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-chip-group--m-toolbar-PaddingLeft",
      "value": "0.5rem",
      "token": "c_chip_group_m_toolbar_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-chip-group--m-toolbar-BorderRadius",
      "value": "3px",
      "token": "c_chip_group_m_toolbar_BorderRadius",
      "values": ["--pf-global--BorderRadius--sm", "$pf-global--BorderRadius--sm", "3px"]
    }, {
      "property": "--pf-c-chip-group--m-toolbar--BackgroundColor",
      "value": "#ededed",
      "token": "c_chip_group_m_toolbar_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--300", "$pf-global--BackgroundColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-chip-group__li--m-toolbar--MarginRight",
      "value": "0.5rem",
      "token": "c_chip_group__li_m_toolbar_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-chip-group__label--PaddingTop",
      "value": "0.25rem",
      "token": "c_chip_group__label_PaddingTop",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-chip-group__label--PaddingRight",
      "value": "0.5rem",
      "token": "c_chip_group__label_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-chip-group__label--PaddingBottom",
      "value": "0.25rem",
      "token": "c_chip_group__label_PaddingBottom",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-chip-group__label--PaddingLeft",
      "value": "0",
      "token": "c_chip_group__label_PaddingLeft"
    }, {
      "property": "--pf-c-chip-group__label--FontSize",
      "value": "0.875rem",
      "token": "c_chip_group__label_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-chip-group__label--Maxwidth",
      "value": "7.5rem",
      "token": "c_chip_group__label_Maxwidth"
    }, {
      "property": "--pf-c-chip-group--c-chip--MarginRight",
      "value": "0.25rem",
      "token": "c_chip_group_c_chip_MarginRight",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-chip-group--c-chip--MarginBottom",
      "value": "0.25rem",
      "token": "c_chip_group_c_chip_MarginBottom",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }],
    ".pf-c-chip-group > .pf-c-chip:last-child": [{
      "property": "--pf-c-chip-group--c-chip--MarginRight",
      "value": "0",
      "token": "c_chip_group_c_chip_MarginRight"
    }]
  };
});