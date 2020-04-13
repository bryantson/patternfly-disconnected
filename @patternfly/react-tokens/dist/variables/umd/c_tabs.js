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
    ".pf-c-tabs": [{
      "property": "--pf-c-tabs__item--BackgroundColor",
      "value": "#fff",
      "token": "c_tabs__item_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-tabs__item--BorderColor",
      "value": "#d2d2d2",
      "token": "c_tabs__item_BorderColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-tabs__item--BorderWidth",
      "value": "1px",
      "token": "c_tabs__item_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-tabs__item--m-current--ZIndex",
      "value": "200",
      "token": "c_tabs__item_m_current_ZIndex",
      "values": ["--pf-global--ZIndex--sm", "$pf-global--ZIndex--sm", "200"]
    }, {
      "property": "--pf-c-tabs__item--m-current--Color",
      "value": "#06c",
      "token": "c_tabs__item_m_current_Color",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-tabs__item--m-current--BorderTopWidth",
      "value": "2px",
      "token": "c_tabs__item_m_current_BorderTopWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-tabs__item--hover--Color",
      "value": "#737679",
      "token": "c_tabs__item_hover_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-tabs__button--Color",
      "value": "#151515",
      "token": "c_tabs__button_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-tabs__button--FontWeight",
      "value": "400",
      "token": "c_tabs__button_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-tabs__button--Background",
      "value": "transparent",
      "token": "c_tabs__button_Background"
    }, {
      "property": "--pf-c-tabs__button--OutlineOffset",
      "value": "calc(-1 * 0.25rem)",
      "token": "c_tabs__button_OutlineOffset",
      "values": ["calc(-1 * --pf-global--spacer--xs)", "calc(-1 * $pf-global--spacer--xs)", "calc(-1 * pf-size-prem(4px))", "calc(-1 * 0.25rem)"]
    }, {
      "property": "--pf-c-tabs__button--PaddingTop",
      "value": "0.5rem",
      "token": "c_tabs__button_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-tabs__button--PaddingRight",
      "value": "0.5rem",
      "token": "c_tabs__button_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-tabs__button--PaddingBottom",
      "value": "0.5rem",
      "token": "c_tabs__button_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-tabs__button--PaddingLeft",
      "value": "0.5rem",
      "token": "c_tabs__button_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-tabs__scroll-button--Width",
      "value": "2rem",
      "token": "c_tabs__scroll_button_Width",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-tabs__scroll-button--ZIndex",
      "value": "100",
      "token": "c_tabs__scroll_button_ZIndex",
      "values": ["--pf-global--ZIndex--xs", "$pf-global--ZIndex--xs", "100"]
    }, {
      "property": "--pf-c-tabs__scroll-button--m-secondary--hover--Color",
      "value": "#06c",
      "token": "c_tabs__scroll_button_m_secondary_hover_Color",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-tabs__scroll-button--m-secondary--hover--Color",
      "value": "#06c",
      "token": "c_tabs__scroll_button_m_secondary_hover_Color",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-tabs__scroll-button--m-secondary-right--m-start-current--Color",
      "value": "#06c",
      "token": "c_tabs__scroll_button_m_secondary_right_m_start_current_Color",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-tabs__scroll-button--m-secondary--nth-of-type-1--BoxShadow",
      "value": "0.75rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.07)",
      "token": "c_tabs__scroll_button_m_secondary_nth_of_type_1_BoxShadow",
      "values": ["--pf-global--BoxShadow--lg-right", "$pf-global--BoxShadow--lg-right", "pf-size-prem(12) 0 pf-size-prem(10) pf-size-prem(-4) rgba($pf-color-black-1000, .07)", "pf-size-prem(12) 0 pf-size-prem(10) pf-size-prem(-4) rgba(#030303, .07)", "0.75rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.07)"]
    }, {
      "property": "--pf-c-tabs__scroll-button--m-secondary--nth-of-type-2--BoxShadow",
      "value": "-0.75rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.07)",
      "token": "c_tabs__scroll_button_m_secondary_nth_of_type_2_BoxShadow",
      "values": ["--pf-global--BoxShadow--lg-left", "$pf-global--BoxShadow--lg-left", "pf-size-prem(-12) 0 pf-size-prem(10) pf-size-prem(-4) rgba($pf-color-black-1000, .07)", "pf-size-prem(-12) 0 pf-size-prem(10) pf-size-prem(-4) rgba(#030303, .07)", "-0.75rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.07)"]
    }]
  };
});