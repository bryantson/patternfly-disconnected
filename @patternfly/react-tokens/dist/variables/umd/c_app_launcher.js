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
    ".pf-c-app-launcher": [{
      "property": "--pf-c-app-launcher__menu--BackgroundColor",
      "value": "#fff",
      "token": "c_app_launcher__menu_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-100", "$pf-global--BackgroundColor--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-app-launcher__menu--BorderWidth",
      "value": "1px",
      "token": "c_app_launcher__menu_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-app-launcher__menu--BoxShadow",
      "value": "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)",
      "token": "c_app_launcher__menu_BoxShadow",
      "values": ["--pf-global--BoxShadow--md", "$pf-global--BoxShadow--md", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba($pf-color-black-1000, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba($pf-color-black-1000, .06)", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba(#030303, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba(#030303, .06)", "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)"]
    }, {
      "property": "--pf-c-app-launcher__menu--PaddingTop",
      "value": "0.5rem",
      "token": "c_app_launcher__menu_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__menu--PaddingBottom",
      "value": "0.5rem",
      "token": "c_app_launcher__menu_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__menu--Top",
      "value": "calc(100% + 0.25rem)",
      "token": "c_app_launcher__menu_Top",
      "values": ["calc(100% + --pf-global--spacer--xs)", "calc(100% + $pf-global--spacer--xs)", "calc(100% + pf-size-prem(4px))", "calc(100% + 0.25rem)"]
    }, {
      "property": "--pf-c-app-launcher__menu--ZIndex",
      "value": "200",
      "token": "c_app_launcher__menu_ZIndex",
      "values": ["--pf-global--ZIndex--sm", "$pf-global--ZIndex--sm", "200"]
    }, {
      "property": "--pf-c-app-launcher--m-top__menu--Top",
      "value": "0",
      "token": "c_app_launcher_m_top__menu_Top"
    }, {
      "property": "--pf-c-app-launcher--m-top__menu--Transform",
      "value": "translateY(calc(-100% - 0.25rem))",
      "token": "c_app_launcher_m_top__menu_Transform",
      "values": ["translateY(calc(-100% - --pf-global--spacer--xs))", "translateY(calc(-100% - $pf-global--spacer--xs))", "translateY(calc(-100% - pf-size-prem(4px)))", "translateY(calc(-100% - 0.25rem))"]
    }, {
      "property": "--pf-c-app-launcher__toggle--PaddingTop",
      "value": "0.375rem",
      "token": "c_app_launcher__toggle_PaddingTop",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-app-launcher__toggle--PaddingRight",
      "value": "1rem",
      "token": "c_app_launcher__toggle_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-app-launcher__toggle--PaddingBottom",
      "value": "0.375rem",
      "token": "c_app_launcher__toggle_PaddingBottom",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-app-launcher__toggle--PaddingLeft",
      "value": "1rem",
      "token": "c_app_launcher__toggle_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-app-launcher__toggle--Color",
      "value": "#737679",
      "token": "c_app_launcher__toggle_Color",
      "values": ["--pf-global--Color--200", "$pf-global--Color--200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-app-launcher__toggle--hover--Color",
      "value": "#151515",
      "token": "c_app_launcher__toggle_hover_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-app-launcher__toggle--active--Color",
      "value": "#151515",
      "token": "c_app_launcher__toggle_active_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-app-launcher__toggle--focus--Color",
      "value": "#151515",
      "token": "c_app_launcher__toggle_focus_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-app-launcher__toggle--disabled--Color",
      "value": "#d2d2d2",
      "token": "c_app_launcher__toggle_disabled_Color",
      "values": ["--pf-global--disabled-color--200", "$pf-global--disabled-color--200", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-app-launcher__toggle--m-expanded--Color",
      "value": "#151515",
      "token": "c_app_launcher__toggle_m_expanded_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-app-launcher__menu-search--PaddingTop",
      "value": "0.5rem",
      "token": "c_app_launcher__menu_search_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-search--PaddingRight",
      "value": "1rem",
      "token": "c_app_launcher__menu_search_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-search--PaddingBottom",
      "value": "1rem",
      "token": "c_app_launcher__menu_search_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-search--PaddingLeft",
      "value": "1rem",
      "token": "c_app_launcher__menu_search_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-search--BottomBorderColor",
      "value": "#d2d2d2",
      "token": "c_app_launcher__menu_search_BottomBorderColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-app-launcher__menu-search--BottomBorderWidth",
      "value": "1px",
      "token": "c_app_launcher__menu_search_BottomBorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-app-launcher__menu-search--MarginBottom",
      "value": "0.5rem",
      "token": "c_app_launcher__menu_search_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--PaddingTop",
      "value": "0.5rem",
      "token": "c_app_launcher__menu_item_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--PaddingRight",
      "value": "1rem",
      "token": "c_app_launcher__menu_item_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--PaddingBottom",
      "value": "0.5rem",
      "token": "c_app_launcher__menu_item_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--PaddingLeft",
      "value": "1rem",
      "token": "c_app_launcher__menu_item_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--Color",
      "value": "#151515",
      "token": "c_app_launcher__menu_item_Color",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--FontWeight",
      "value": "400",
      "token": "c_app_launcher__menu_item_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--Width",
      "value": "100%",
      "token": "c_app_launcher__menu_item_Width"
    }, {
      "property": "--pf-c-app-launcher__menu-item--disabled--Color",
      "value": "#737679",
      "token": "c_app_launcher__menu_item_disabled_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--hover--BackgroundColor",
      "value": "#ededed",
      "token": "c_app_launcher__menu_item_hover_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-300", "$pf-global--BackgroundColor--light-300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--m-link--PaddingRight",
      "value": "0",
      "token": "c_app_launcher__menu_item_m_link_PaddingRight"
    }, {
      "property": "--pf-c-app-launcher__menu-item--m-link--hover--BackgroundColor",
      "value": "transparent",
      "token": "c_app_launcher__menu_item_m_link_hover_BackgroundColor"
    }, {
      "property": "--pf-c-app-launcher__menu-item--m-action--hover--BackgroundColor",
      "value": "transparent",
      "token": "c_app_launcher__menu_item_m_action_hover_BackgroundColor"
    }, {
      "property": "--pf-c-app-launcher__menu-item--m-action--Color",
      "value": "#d2d2d2",
      "token": "c_app_launcher__menu_item_m_action_Color",
      "values": ["--pf-global--disabled-color--200", "$pf-global--disabled-color--200", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--m-action--Width",
      "value": "auto",
      "token": "c_app_launcher__menu_item_m_action_Width"
    }, {
      "property": "--pf-c-app-launcher__menu-item--m-action--FontSize",
      "value": "0.625rem",
      "token": "c_app_launcher__menu_item_m_action_FontSize",
      "values": ["--pf-global--icon--FontSize--sm", "$pf-global--icon--FontSize--sm", "pf-font-prem(10px)", "0.625rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--hover__menu-item--m-action--Color",
      "value": "#737679",
      "token": "c_app_launcher__menu_item_hover__menu_item_m_action_Color",
      "values": ["--pf-global--Color--200", "$pf-global--Color--200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--m-action--hover--Color",
      "value": "#151515",
      "token": "c_app_launcher__menu_item_m_action_hover_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--m-favorite__menu-item--m-action--Color",
      "value": "#f0ab00",
      "token": "c_app_launcher__menu_item_m_favorite__menu_item_m_action_Color",
      "values": ["--pf-global--palette--gold-400", "$pf-color-gold-400", "#f0ab00"]
    }, {
      "property": "--pf-c-app-launcher__menu-item-icon--MarginRight",
      "value": "0.5rem",
      "token": "c_app_launcher__menu_item_icon_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-item-icon--Width",
      "value": "1.5rem",
      "token": "c_app_launcher__menu_item_icon_Width",
      "values": ["--pf-global--icon--FontSize--lg", "$pf-global--icon--FontSize--lg", "pf-font-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-item-icon--Height",
      "value": "1.5rem",
      "token": "c_app_launcher__menu_item_icon_Height",
      "values": ["--pf-global--icon--FontSize--lg", "$pf-global--icon--FontSize--lg", "pf-font-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-item-external-icon--Color",
      "value": "#06c",
      "token": "c_app_launcher__menu_item_external_icon_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-app-launcher__menu-item-external-icon--PaddingLeft",
      "value": "1rem",
      "token": "c_app_launcher__menu_item_external_icon_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-app-launcher__menu-item-external-icon--Transform",
      "value": "translateY(-0.0625rem)",
      "token": "c_app_launcher__menu_item_external_icon_Transform"
    }, {
      "property": "--pf-c-app-launcher__menu-item-external-icon--FontSize",
      "value": "0.625rem",
      "token": "c_app_launcher__menu_item_external_icon_FontSize",
      "values": ["--pf-global--icon--FontSize--sm", "$pf-global--icon--FontSize--sm", "pf-font-prem(10px)", "0.625rem"]
    }, {
      "property": "--pf-c-app-launcher__c-divider--MarginTop",
      "value": "0.5rem",
      "token": "c_app_launcher__c_divider_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__c-divider--MarginBottom",
      "value": "0.5rem",
      "token": "c_app_launcher__c_divider_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__separator--Height",
      "value": "1px",
      "token": "c_app_launcher__separator_Height",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-app-launcher__separator--BackgroundColor",
      "value": "#d2d2d2",
      "token": "c_app_launcher__separator_BackgroundColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-app-launcher__separator--MarginTop",
      "value": "0.5rem",
      "token": "c_app_launcher__separator_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__separator--MarginBottom",
      "value": "0.5rem",
      "token": "c_app_launcher__separator_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__group--PaddingTop",
      "value": "0",
      "token": "c_app_launcher__group_PaddingTop"
    }, {
      "property": "--pf-c-app-launcher__group--group--PaddingTop",
      "value": "0.5rem",
      "token": "c_app_launcher__group_group_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__group--first-child--PaddingTop",
      "value": "0",
      "token": "c_app_launcher__group_first_child_PaddingTop"
    }, {
      "property": "--pf-c-app-launcher__group-title--PaddingTop",
      "value": "0.5rem",
      "token": "c_app_launcher__group_title_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__group-title--PaddingRight",
      "value": "1rem",
      "token": "c_app_launcher__group_title_PaddingRight",
      "values": ["--pf-c-app-launcher__menu-item--PaddingRight", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-app-launcher__group-title--PaddingBottom",
      "value": "0.5rem",
      "token": "c_app_launcher__group_title_PaddingBottom",
      "values": ["--pf-c-app-launcher__menu-item--PaddingBottom", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-app-launcher__group-title--PaddingLeft",
      "value": "1rem",
      "token": "c_app_launcher__group_title_PaddingLeft",
      "values": ["--pf-c-app-launcher__menu-item--PaddingLeft", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-app-launcher__group-title--FontSize",
      "value": "0.875rem",
      "token": "c_app_launcher__group_title_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-app-launcher__group-title--FontWeight",
      "value": "500",
      "token": "c_app_launcher__group_title_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-app-launcher__group-title--Color",
      "value": "#737679",
      "token": "c_app_launcher__group_title_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-app-launcher__toggle:hover": [{
      "property": "--pf-c-app-launcher__toggle--Color",
      "value": "#151515",
      "token": "c_app_launcher__toggle_Color",
      "values": ["--pf-c-app-launcher__toggle--hover--Color", "--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }],
    ".pf-c-app-launcher__toggle:active": [{
      "property": "--pf-c-app-launcher__toggle--Color",
      "value": "#151515",
      "token": "c_app_launcher__toggle_Color",
      "values": ["--pf-c-app-launcher__toggle--active--Color", "--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }],
    ".pf-c-app-launcher__toggle:focus": [{
      "property": "--pf-c-app-launcher__toggle--Color",
      "value": "#151515",
      "token": "c_app_launcher__toggle_Color",
      "values": ["--pf-c-app-launcher__toggle--focus--Color", "--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }],
    ".pf-c-app-launcher__toggle:disabled": [{
      "property": "--pf-c-app-launcher__toggle--Color",
      "value": "#d2d2d2",
      "token": "c_app_launcher__toggle_Color",
      "values": ["--pf-c-app-launcher__toggle--disabled--Color", "--pf-global--disabled-color--200", "$pf-global--disabled-color--200", "$pf-color-black-300", "#d2d2d2"]
    }],
    ".pf-c-app-launcher.pf-m-top .pf-c-app-launcher__menu": [{
      "property": "--pf-c-app-launcher__menu--Top",
      "value": "0",
      "token": "c_app_launcher__menu_Top",
      "values": ["--pf-c-app-launcher--m-top__menu--Top", "0"]
    }],
    ".pf-c-app-launcher__menu-wrapper.pf-m-favorite": [{
      "property": "--pf-c-app-launcher__menu-item--m-action--Color",
      "value": "#f0ab00",
      "token": "c_app_launcher__menu_item_m_action_Color",
      "values": ["--pf-c-app-launcher__menu-item--m-favorite__menu-item--m-action--Color", "--pf-global--palette--gold-400", "$pf-color-gold-400", "#f0ab00"]
    }],
    ".pf-c-app-launcher__menu-item:hover": [{
      "property": "--pf-c-app-launcher__menu-item--m-action--Color",
      "value": "#737679",
      "token": "c_app_launcher__menu_item_m_action_Color",
      "values": ["--pf-c-app-launcher__menu-item--hover__menu-item--m-action--Color", "--pf-global--Color--200", "$pf-global--Color--200", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-app-launcher__menu-item:disabled": [{
      "property": "--pf-c-app-launcher__menu-item--Color",
      "value": "#737679",
      "token": "c_app_launcher__menu_item_Color",
      "values": ["--pf-c-app-launcher__menu-item--disabled--Color", "--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-app-launcher__menu-item.pf-m-link": [{
      "property": "--pf-c-app-launcher__menu-item--PaddingRight",
      "value": "0",
      "token": "c_app_launcher__menu_item_PaddingRight",
      "values": ["--pf-c-app-launcher__menu-item--m-link--PaddingRight", "0"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--hover--BackgroundColor",
      "value": "transparent",
      "token": "c_app_launcher__menu_item_hover_BackgroundColor",
      "values": ["--pf-c-app-launcher__menu-item--m-link--hover--BackgroundColor", "transparent"]
    }],
    ".pf-c-app-launcher__menu-item.pf-m-action": [{
      "property": "--pf-c-app-launcher__menu-item--hover--BackgroundColor",
      "value": "transparent",
      "token": "c_app_launcher__menu_item_hover_BackgroundColor",
      "values": ["--pf-c-app-launcher__menu-item--m-action--hover--BackgroundColor", "transparent"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--Color",
      "value": "#d2d2d2",
      "token": "c_app_launcher__menu_item_Color",
      "values": ["--pf-c-app-launcher__menu-item--m-action--Color", "--pf-global--disabled-color--200", "$pf-global--disabled-color--200", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-app-launcher__menu-item--Width",
      "value": "auto",
      "token": "c_app_launcher__menu_item_Width",
      "values": ["--pf-c-app-launcher__menu-item--m-action--Width", "auto"]
    }],
    ".pf-c-app-launcher__menu-item.pf-m-action:hover": [{
      "property": "--pf-c-app-launcher__menu-item--m-action--Color",
      "value": "#151515",
      "token": "c_app_launcher__menu_item_m_action_Color",
      "values": ["--pf-c-app-launcher__menu-item--m-action--hover--Color", "--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }],
    ".pf-c-app-launcher__separator:last-child": [{
      "property": "--pf-c-app-launcher__separator--MarginBottom",
      "value": "0",
      "token": "c_app_launcher__separator_MarginBottom"
    }],
    ".pf-c-app-launcher__group:first-child": [{
      "property": "--pf-c-app-launcher__group--PaddingTop",
      "value": "0",
      "token": "c_app_launcher__group_PaddingTop",
      "values": ["--pf-c-app-launcher__group--first-child--PaddingTop", "0"]
    }],
    ".pf-c-app-launcher__group + .pf-c-app-launcher__group": [{
      "property": "--pf-c-app-launcher__group--PaddingTop",
      "value": "0.5rem",
      "token": "c_app_launcher__group_PaddingTop",
      "values": ["--pf-c-app-launcher__group--group--PaddingTop", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }]
  };
});