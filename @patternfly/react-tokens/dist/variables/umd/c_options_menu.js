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
    ".pf-c-options-menu": [{
      "property": "--pf-c-options-menu__toggle--Background",
      "value": "transparent",
      "token": "c_options_menu__toggle_Background"
    }, {
      "property": "--pf-c-options-menu__toggle--PaddingTop",
      "value": "0.375rem",
      "token": "c_options_menu__toggle_PaddingTop",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-options-menu__toggle--PaddingRight",
      "value": "0.5rem",
      "token": "c_options_menu__toggle_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__toggle--PaddingBottom",
      "value": "0.375rem",
      "token": "c_options_menu__toggle_PaddingBottom",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-options-menu__toggle--PaddingLeft",
      "value": "0.5rem",
      "token": "c_options_menu__toggle_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__toggle--MinWidth",
      "value": "44px",
      "token": "c_options_menu__toggle_MinWidth",
      "values": ["--pf-global--target-size--MinWidth", "$pf-global--target-size--MinWidth", "44px"]
    }, {
      "property": "--pf-c-options-menu__toggle--LineHeight",
      "value": "1.5",
      "token": "c_options_menu__toggle_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-options-menu__toggle--BorderWidth",
      "value": "1px",
      "token": "c_options_menu__toggle_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-options-menu__toggle--BorderTopColor",
      "value": "#ededed",
      "token": "c_options_menu__toggle_BorderTopColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-options-menu__toggle--BorderRightColor",
      "value": "#ededed",
      "token": "c_options_menu__toggle_BorderRightColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-options-menu__toggle--BorderBottomColor",
      "value": "#8a8d90",
      "token": "c_options_menu__toggle_BorderBottomColor",
      "values": ["--pf-global--BorderColor--200", "$pf-global--BorderColor--200", "$pf-color-black-500", "#8a8d90"]
    }, {
      "property": "--pf-c-options-menu__toggle--BorderLeftColor",
      "value": "#ededed",
      "token": "c_options_menu__toggle_BorderLeftColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-options-menu__toggle--Color",
      "value": "#151515",
      "token": "c_options_menu__toggle_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-options-menu__toggle--hover--BorderBottomColor",
      "value": "#06c",
      "token": "c_options_menu__toggle_hover_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-options-menu__toggle--active--BorderBottomWidth",
      "value": "2px",
      "token": "c_options_menu__toggle_active_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-options-menu__toggle--active--BorderBottomColor",
      "value": "#06c",
      "token": "c_options_menu__toggle_active_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-options-menu__toggle--focus--BorderBottomWidth",
      "value": "2px",
      "token": "c_options_menu__toggle_focus_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-options-menu__toggle--focus--BorderBottomColor",
      "value": "#06c",
      "token": "c_options_menu__toggle_focus_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-options-menu__toggle--expanded--BorderBottomWidth",
      "value": "2px",
      "token": "c_options_menu__toggle_expanded_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-options-menu__toggle--expanded--BorderBottomColor",
      "value": "#06c",
      "token": "c_options_menu__toggle_expanded_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-options-menu__toggle--disabled--BackgroundColor",
      "value": "#ededed",
      "token": "c_options_menu__toggle_disabled_BackgroundColor",
      "values": ["--pf-global--disabled-color--300", "$pf-global--disabled-color--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-options-menu__toggle--m-plain--Color",
      "value": "#737679",
      "token": "c_options_menu__toggle_m_plain_Color",
      "values": ["--pf-global--Color--200", "$pf-global--Color--200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-options-menu__toggle--m-plain--hover--Color",
      "value": "#151515",
      "token": "c_options_menu__toggle_m_plain_hover_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-options-menu__toggle--m-plain--disabled--Color",
      "value": "#d2d2d2",
      "token": "c_options_menu__toggle_m_plain_disabled_Color",
      "values": ["--pf-global--disabled-color--200", "$pf-global--disabled-color--200", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-options-menu__toggle-icon--MarginRight",
      "value": "0.5rem",
      "token": "c_options_menu__toggle_icon_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__toggle-icon--MarginLeft",
      "value": "1rem",
      "token": "c_options_menu__toggle_icon_MarginLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-options-menu--m-top--m-expanded__toggle-icon--Transform",
      "value": "rotate(180deg)",
      "token": "c_options_menu_m_top_m_expanded__toggle_icon_Transform"
    }, {
      "property": "--pf-c-options-menu__toggle-button--Background",
      "value": "transparent",
      "token": "c_options_menu__toggle_button_Background"
    }, {
      "property": "--pf-c-options-menu__toggle-button--PaddingTop",
      "value": "0.375rem",
      "token": "c_options_menu__toggle_button_PaddingTop",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-options-menu__toggle-button--PaddingRight",
      "value": "0.5rem",
      "token": "c_options_menu__toggle_button_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__toggle-button--PaddingBottom",
      "value": "0.375rem",
      "token": "c_options_menu__toggle_button_PaddingBottom",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-options-menu__toggle-button--PaddingLeft",
      "value": "0.5rem",
      "token": "c_options_menu__toggle_button_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__menu--BackgroundColor",
      "value": "#fff",
      "token": "c_options_menu__menu_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-100", "$pf-global--BackgroundColor--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-options-menu__menu--BorderWidth",
      "value": "1px",
      "token": "c_options_menu__menu_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-options-menu__menu--BoxShadow",
      "value": "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)",
      "token": "c_options_menu__menu_BoxShadow",
      "values": ["--pf-global--BoxShadow--md", "$pf-global--BoxShadow--md", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba($pf-color-black-1000, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba($pf-color-black-1000, .06)", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba(#030303, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba(#030303, .06)", "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)"]
    }, {
      "property": "--pf-c-options-menu__menu--PaddingTop",
      "value": "0.5rem",
      "token": "c_options_menu__menu_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__menu--PaddingBottom",
      "value": "0.5rem",
      "token": "c_options_menu__menu_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__menu--Top",
      "value": "calc(100% + 0.25rem)",
      "token": "c_options_menu__menu_Top",
      "values": ["calc(100% + --pf-global--spacer--xs)", "calc(100% + $pf-global--spacer--xs)", "calc(100% + pf-size-prem(4px))", "calc(100% + 0.25rem)"]
    }, {
      "property": "--pf-c-options-menu__menu--ZIndex",
      "value": "200",
      "token": "c_options_menu__menu_ZIndex",
      "values": ["--pf-global--ZIndex--sm", "$pf-global--ZIndex--sm", "200"]
    }, {
      "property": "--pf-c-options-menu--m-top__menu--Top",
      "value": "0",
      "token": "c_options_menu_m_top__menu_Top"
    }, {
      "property": "--pf-c-options-menu--m-top__menu--Transform",
      "value": "translateY(calc(-100% - 0.25rem))",
      "token": "c_options_menu_m_top__menu_Transform",
      "values": ["translateY(calc(-100% - --pf-global--spacer--xs))", "translateY(calc(-100% - $pf-global--spacer--xs))", "translateY(calc(-100% - pf-size-prem(4px)))", "translateY(calc(-100% - 0.25rem))"]
    }, {
      "property": "--pf-c-options-menu__menu-item--Background",
      "value": "transparent",
      "token": "c_options_menu__menu_item_Background"
    }, {
      "property": "--pf-c-options-menu__menu-item--FontSize",
      "value": "1rem",
      "token": "c_options_menu__menu_item_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-options-menu__menu-item--PaddingTop",
      "value": "0.5rem",
      "token": "c_options_menu__menu_item_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__menu-item--PaddingRight",
      "value": "1rem",
      "token": "c_options_menu__menu_item_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-options-menu__menu-item--PaddingBottom",
      "value": "0.5rem",
      "token": "c_options_menu__menu_item_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__menu-item--PaddingLeft",
      "value": "1rem",
      "token": "c_options_menu__menu_item_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-options-menu__menu-item--disabled--Color",
      "value": "#737679",
      "token": "c_options_menu__menu_item_disabled_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-options-menu__menu-item--hover--BackgroundColor",
      "value": "#ededed",
      "token": "c_options_menu__menu_item_hover_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-300", "$pf-global--BackgroundColor--light-300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-options-menu__menu-item--disabled--BackgroundColor",
      "value": "transparent",
      "token": "c_options_menu__menu_item_disabled_BackgroundColor"
    }, {
      "property": "--pf-c-options-menu__menu-item-icon--Color",
      "value": "#06c",
      "token": "c_options_menu__menu_item_icon_Color",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-options-menu__menu-item-icon--FontSize",
      "value": "0.625rem",
      "token": "c_options_menu__menu_item_icon_FontSize",
      "values": ["--pf-global--icon--FontSize--sm", "$pf-global--icon--FontSize--sm", "pf-font-prem(10px)", "0.625rem"]
    }, {
      "property": "--pf-c-options-menu__menu-item-icon--PaddingLeft",
      "value": "1.5rem",
      "token": "c_options_menu__menu_item_icon_PaddingLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-options-menu__c-divider--MarginTop",
      "value": "0.5rem",
      "token": "c_options_menu__c_divider_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__c-divider--MarginBottom",
      "value": "0.5rem",
      "token": "c_options_menu__c_divider_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__separator--Height",
      "value": "1px",
      "token": "c_options_menu__separator_Height",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-options-menu__separator--BackgroundColor",
      "value": "#d2d2d2",
      "token": "c_options_menu__separator_BackgroundColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-options-menu__separator--MarginTop",
      "value": "0.5rem",
      "token": "c_options_menu__separator_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__separator--MarginBottom",
      "value": "0.5rem",
      "token": "c_options_menu__separator_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__group--group--PaddingTop",
      "value": "0.5rem",
      "token": "c_options_menu__group_group_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__group-title--PaddingTop",
      "value": "0.5rem",
      "token": "c_options_menu__group_title_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__group-title--PaddingRight",
      "value": "1rem",
      "token": "c_options_menu__group_title_PaddingRight",
      "values": ["--pf-c-options-menu__menu-item--PaddingRight", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-options-menu__group-title--PaddingBottom",
      "value": "0.5rem",
      "token": "c_options_menu__group_title_PaddingBottom",
      "values": ["--pf-c-options-menu__menu-item--PaddingBottom", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-options-menu__group-title--PaddingLeft",
      "value": "1rem",
      "token": "c_options_menu__group_title_PaddingLeft",
      "values": ["--pf-c-options-menu__menu-item--PaddingLeft", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-options-menu__group-title--FontSize",
      "value": "0.875rem",
      "token": "c_options_menu__group_title_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-options-menu__group-title--FontWeight",
      "value": "500",
      "token": "c_options_menu__group_title_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-options-menu__group-title--Color",
      "value": "#737679",
      "token": "c_options_menu__group_title_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-options-menu__toggle:not(.pf-m-plain):hover::before": [{
      "property": "--pf-c-options-menu__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_options_menu__toggle_BorderBottomColor",
      "values": ["--pf-c-options-menu__toggle--hover--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-options-menu__toggle:not(.pf-m-plain):active::before": [{
      "property": "--pf-c-options-menu__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_options_menu__toggle_BorderBottomColor",
      "values": ["--pf-c-options-menu__toggle--active--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-options-menu__toggle:not(.pf-m-plain):focus::before": [{
      "property": "--pf-c-options-menu__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_options_menu__toggle_BorderBottomColor",
      "values": ["--pf-c-options-menu__toggle--focus--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-options-menu.pf-m-expanded > .pf-c-options-menu__toggle::before": [{
      "property": "--pf-c-options-menu__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_options_menu__toggle_BorderBottomColor",
      "values": ["--pf-c-options-menu__toggle--expanded--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-options-menu__toggle.pf-m-plain:hover": [{
      "property": "--pf-c-options-menu__toggle--m-plain--Color",
      "value": "#151515",
      "token": "c_options_menu__toggle_m_plain_Color",
      "values": ["--pf-c-options-menu__toggle--m-plain--hover--Color", "--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }],
    ".pf-c-options-menu__toggle.pf-m-plain.pf-m-disabled": [{
      "property": "--pf-c-options-menu__toggle--m-plain--Color",
      "value": "#d2d2d2",
      "token": "c_options_menu__toggle_m_plain_Color",
      "values": ["--pf-c-options-menu__toggle--m-plain--disabled--Color", "--pf-global--disabled-color--200", "$pf-global--disabled-color--200", "$pf-color-black-300", "#d2d2d2"]
    }],
    ".pf-c-options-menu__toggle.pf-m-disabled:not(.pf-m-plain)": [{
      "property": "--pf-c-options-menu__toggle--Background",
      "value": "#ededed",
      "token": "c_options_menu__toggle_Background",
      "values": ["--pf-c-options-menu__toggle--disabled--BackgroundColor", "--pf-global--disabled-color--300", "$pf-global--disabled-color--300", "$pf-color-black-200", "#ededed"]
    }],
    ".pf-c-options-menu.pf-m-top .pf-c-options-menu__menu": [{
      "property": "--pf-c-options-menu__menu--Top",
      "value": "0",
      "token": "c_options_menu__menu_Top",
      "values": ["--pf-c-options-menu--m-top__menu--Top", "0"]
    }],
    ".pf-c-options-menu__separator:last-child": [{
      "property": "--pf-c-options-menu__separator--MarginBottom",
      "value": "0",
      "token": "c_options_menu__separator_MarginBottom"
    }]
  };
});