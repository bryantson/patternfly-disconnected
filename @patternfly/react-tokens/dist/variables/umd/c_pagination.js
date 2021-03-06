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
    ".pf-c-pagination": [{
      "property": "--pf-c-pagination--child--MarginRight",
      "value": "1.5rem",
      "token": "c_pagination_child_MarginRight",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-pagination--m-compact--child--MarginRight",
      "value": "0.5rem",
      "token": "c_pagination_m_compact_child_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-pagination--c-options-menu__toggle--FontSize",
      "value": "0.875rem",
      "token": "c_pagination_c_options_menu__toggle_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-pagination__menu-text--PaddingLeft",
      "value": "0.25rem",
      "token": "c_pagination__menu_text_PaddingLeft",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-pagination__menu-text--FontSize",
      "value": "0.875rem",
      "token": "c_pagination__menu_text_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-pagination__menu-text--Color",
      "value": "#737679",
      "token": "c_pagination__menu_text_Color",
      "values": ["--pf-global--Color--200", "$pf-global--Color--200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-pagination__nav--c-button--PaddingLeft",
      "value": "0.5rem",
      "token": "c_pagination__nav_c_button_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-pagination__nav--c-button--PaddingRight",
      "value": "0.5rem",
      "token": "c_pagination__nav_c_button_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-pagination__nav--c-button--FontSize",
      "value": "1rem",
      "token": "c_pagination__nav_c_button_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-pagination--m-compact__nav--c-button--MarginLeft",
      "value": "1rem",
      "token": "c_pagination_m_compact__nav_c_button_MarginLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-pagination__nav-page-select--FontSize",
      "value": "0.875rem",
      "token": "c_pagination__nav_page_select_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-pagination__nav-page-select--PaddingLeft",
      "value": "1rem",
      "token": "c_pagination__nav_page_select_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-pagination__nav-page-select--PaddingRight",
      "value": "1rem",
      "token": "c_pagination__nav_page_select_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-pagination__nav-page-select--child--MarginRight",
      "value": "0.25rem",
      "token": "c_pagination__nav_page_select_child_MarginRight",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-pagination__nav-page-select--c-form-control--width-base",
      "value": "3.5ch",
      "token": "c_pagination__nav_page_select_c_form_control_width_base"
    }, {
      "property": "--pf-c-pagination__nav-page-select--c-form-control--width-chars",
      "value": "2",
      "token": "c_pagination__nav_page_select_c_form_control_width_chars"
    }, {
      "property": "--pf-c-pagination__nav-page-select--c-form-control--Width",
      "value": "calc(3.5ch + (2 * 1ch))",
      "token": "c_pagination__nav_page_select_c_form_control_Width",
      "values": ["calc(--pf-c-pagination__nav-page-select--c-form-control--width-base + (--pf-c-pagination__nav-page-select--c-form-control--width-chars * 1ch))", "calc(3.5ch + (2 * 1ch))"]
    }],
    ".pf-c-pagination.pf-m-compact": [{
      "property": "--pf-c-pagination--child--MarginRight",
      "value": "0.5rem",
      "token": "c_pagination_child_MarginRight",
      "values": ["--pf-c-pagination--m-compact--child--MarginRight", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }]
  };
});