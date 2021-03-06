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
    ".pf-c-context-selector__menu": [{
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
    }],
    ".pf-c-context-selector": [{
      "property": "--pf-c-context-selector--Width",
      "value": "15.625rem",
      "token": "c_context_selector_Width"
    }, {
      "property": "--pf-c-context-selector__toggle--PaddingTop",
      "value": "0.375rem",
      "token": "c_context_selector__toggle_PaddingTop",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-context-selector__toggle--PaddingRight",
      "value": "0.5rem",
      "token": "c_context_selector__toggle_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-context-selector__toggle--PaddingBottom",
      "value": "0.375rem",
      "token": "c_context_selector__toggle_PaddingBottom",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-context-selector__toggle--PaddingLeft",
      "value": "0.5rem",
      "token": "c_context_selector__toggle_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-context-selector__toggle--BorderWidth",
      "value": "1px",
      "token": "c_context_selector__toggle_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-context-selector__toggle--BorderTopColor",
      "value": "#ededed",
      "token": "c_context_selector__toggle_BorderTopColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-context-selector__toggle--BorderRightColor",
      "value": "#ededed",
      "token": "c_context_selector__toggle_BorderRightColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-context-selector__toggle--BorderBottomColor",
      "value": "#8a8d90",
      "token": "c_context_selector__toggle_BorderBottomColor",
      "values": ["--pf-global--BorderColor--200", "$pf-global--BorderColor--200", "$pf-color-black-500", "#8a8d90"]
    }, {
      "property": "--pf-c-context-selector__toggle--BorderLeftColor",
      "value": "#ededed",
      "token": "c_context_selector__toggle_BorderLeftColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-context-selector__toggle--Color",
      "value": "#151515",
      "token": "c_context_selector__toggle_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-context-selector__toggle--hover--BorderBottomColor",
      "value": "#06c",
      "token": "c_context_selector__toggle_hover_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-context-selector__toggle--active--BorderBottomWidth",
      "value": "2px",
      "token": "c_context_selector__toggle_active_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-context-selector__toggle--active--BorderBottomColor",
      "value": "#06c",
      "token": "c_context_selector__toggle_active_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-context-selector__toggle--expanded--BorderBottomWidth",
      "value": "2px",
      "token": "c_context_selector__toggle_expanded_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-context-selector__toggle--expanded--BorderBottomColor",
      "value": "#06c",
      "token": "c_context_selector__toggle_expanded_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-context-selector__toggle-text--FontSize",
      "value": "1rem",
      "token": "c_context_selector__toggle_text_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-context-selector__toggle-text--FontWeight",
      "value": "400",
      "token": "c_context_selector__toggle_text_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-context-selector__toggle-text--LineHeight",
      "value": "1.5",
      "token": "c_context_selector__toggle_text_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-context-selector__toggle-icon--MarginRight",
      "value": "0.5rem",
      "token": "c_context_selector__toggle_icon_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-context-selector__toggle-icon--MarginLeft",
      "value": "1rem",
      "token": "c_context_selector__toggle_icon_MarginLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-context-selector__menu--Top",
      "value": "calc(100% + 0.25rem)",
      "token": "c_context_selector__menu_Top",
      "values": ["calc(100% + --pf-global--spacer--xs)", "calc(100% + $pf-global--spacer--xs)", "calc(100% + pf-size-prem(4px))", "calc(100% + 0.25rem)"]
    }, {
      "property": "--pf-c-context-selector__menu--ZIndex",
      "value": "200",
      "token": "c_context_selector__menu_ZIndex",
      "values": ["--pf-global--ZIndex--sm", "$pf-global--ZIndex--sm", "200"]
    }, {
      "property": "--pf-c-context-selector__menu--PaddingTop",
      "value": "0.5rem",
      "token": "c_context_selector__menu_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-context-selector__menu--BackgroundColor",
      "value": "#fff",
      "token": "c_context_selector__menu_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-100", "$pf-global--BackgroundColor--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-context-selector__menu--BorderWidth",
      "value": "1px",
      "token": "c_context_selector__menu_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-context-selector__menu--BoxShadow",
      "value": "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)",
      "token": "c_context_selector__menu_BoxShadow",
      "values": ["--pf-global--BoxShadow--md", "$pf-global--BoxShadow--md", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba($pf-color-black-1000, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba($pf-color-black-1000, .06)", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba(#030303, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba(#030303, .06)", "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)"]
    }, {
      "property": "--pf-c-context-selector__menu-input--PaddingTop",
      "value": "0.5rem",
      "token": "c_context_selector__menu_input_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-context-selector__menu-input--PaddingRight",
      "value": "1rem",
      "token": "c_context_selector__menu_input_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-context-selector__menu-input--PaddingBottom",
      "value": "1rem",
      "token": "c_context_selector__menu_input_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-context-selector__menu-input--PaddingLeft",
      "value": "1rem",
      "token": "c_context_selector__menu_input_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-context-selector__menu-input--BottomBorderColor",
      "value": "#d2d2d2",
      "token": "c_context_selector__menu_input_BottomBorderColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-context-selector__menu-input--BottomBorderWidth",
      "value": "1px",
      "token": "c_context_selector__menu_input_BottomBorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-context-selector__menu-list--MaxHeight",
      "value": "12.5rem",
      "token": "c_context_selector__menu_list_MaxHeight"
    }, {
      "property": "--pf-c-context-selector__menu-list-item--PaddingTop",
      "value": "0.5rem",
      "token": "c_context_selector__menu_list_item_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-context-selector__menu-list-item--PaddingRight",
      "value": "1.5rem",
      "token": "c_context_selector__menu_list_item_PaddingRight",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-context-selector__menu-list-item--PaddingBottom",
      "value": "0.5rem",
      "token": "c_context_selector__menu_list_item_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-context-selector__menu-list-item--PaddingLeft",
      "value": "1.5rem",
      "token": "c_context_selector__menu_list_item_PaddingLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-context-selector__menu-list-item--hover--BackgroundColor",
      "value": "#ededed",
      "token": "c_context_selector__menu_list_item_hover_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-300", "$pf-global--BackgroundColor--light-300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-context-selector__menu-list-item--disabled--Color",
      "value": "#737679",
      "token": "c_context_selector__menu_list_item_disabled_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-context-selector__toggle:hover::before": [{
      "property": "--pf-c-context-selector__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_context_selector__toggle_BorderBottomColor",
      "values": ["--pf-c-context-selector__toggle--hover--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-context-selector__toggle:active::before": [{
      "property": "--pf-c-context-selector__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_context_selector__toggle_BorderBottomColor",
      "values": ["--pf-c-context-selector__toggle--active--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-m-expanded > .pf-c-context-selector__toggle::before": [{
      "property": "--pf-c-context-selector__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_context_selector__toggle_BorderBottomColor",
      "values": ["--pf-c-context-selector__toggle--expanded--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }]
  };
});