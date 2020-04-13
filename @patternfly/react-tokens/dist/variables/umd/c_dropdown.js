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
    ".pf-c-dropdown": [{
      "property": "--pf-c-dropdown__toggle--PaddingTop",
      "value": "0.375rem",
      "token": "c_dropdown__toggle_PaddingTop",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--PaddingRight",
      "value": "0.5rem",
      "token": "c_dropdown__toggle_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--PaddingBottom",
      "value": "0.375rem",
      "token": "c_dropdown__toggle_PaddingBottom",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--PaddingLeft",
      "value": "0.5rem",
      "token": "c_dropdown__toggle_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--MinWidth",
      "value": "44px",
      "token": "c_dropdown__toggle_MinWidth",
      "values": ["--pf-global--target-size--MinWidth", "$pf-global--target-size--MinWidth", "44px"]
    }, {
      "property": "--pf-c-dropdown__toggle--FontSize",
      "value": "1rem",
      "token": "c_dropdown__toggle_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--FontWeight",
      "value": "400",
      "token": "c_dropdown__toggle_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-dropdown__toggle--Color",
      "value": "#151515",
      "token": "c_dropdown__toggle_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-dropdown__toggle--LineHeight",
      "value": "1.5",
      "token": "c_dropdown__toggle_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-dropdown__toggle--BackgroundColor",
      "value": "transparent",
      "token": "c_dropdown__toggle_BackgroundColor"
    }, {
      "property": "--pf-c-dropdown__toggle--BorderWidth",
      "value": "1px",
      "token": "c_dropdown__toggle_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-dropdown__toggle--BorderTopColor",
      "value": "#ededed",
      "token": "c_dropdown__toggle_BorderTopColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-dropdown__toggle--BorderRightColor",
      "value": "#ededed",
      "token": "c_dropdown__toggle_BorderRightColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-dropdown__toggle--BorderBottomColor",
      "value": "#8a8d90",
      "token": "c_dropdown__toggle_BorderBottomColor",
      "values": ["--pf-global--BorderColor--200", "$pf-global--BorderColor--200", "$pf-color-black-500", "#8a8d90"]
    }, {
      "property": "--pf-c-dropdown__toggle--BorderLeftColor",
      "value": "#ededed",
      "token": "c_dropdown__toggle_BorderLeftColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-dropdown__toggle--hover--BorderBottomColor",
      "value": "#06c",
      "token": "c_dropdown__toggle_hover_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-dropdown__toggle--active--BorderBottomWidth",
      "value": "2px",
      "token": "c_dropdown__toggle_active_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-dropdown__toggle--active--BorderBottomColor",
      "value": "#06c",
      "token": "c_dropdown__toggle_active_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-dropdown__toggle--focus--BorderBottomWidth",
      "value": "2px",
      "token": "c_dropdown__toggle_focus_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-dropdown__toggle--focus--BorderBottomColor",
      "value": "#06c",
      "token": "c_dropdown__toggle_focus_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-dropdown__toggle--expanded--BorderBottomWidth",
      "value": "2px",
      "token": "c_dropdown__toggle_expanded_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-dropdown__toggle--expanded--BorderBottomColor",
      "value": "#06c",
      "token": "c_dropdown__toggle_expanded_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-dropdown__toggle--disabled--BackgroundColor",
      "value": "#ededed",
      "token": "c_dropdown__toggle_disabled_BackgroundColor",
      "values": ["--pf-global--disabled-color--300", "$pf-global--disabled-color--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-plain--BorderColor",
      "value": "transparent",
      "token": "c_dropdown__toggle_m_plain_BorderColor"
    }, {
      "property": "--pf-c-dropdown__toggle--m-plain--Color",
      "value": "#737679",
      "token": "c_dropdown__toggle_m_plain_Color",
      "values": ["--pf-global--Color--200", "$pf-global--Color--200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-plain--hover--Color",
      "value": "#151515",
      "token": "c_dropdown__toggle_m_plain_hover_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-plain--disabled--Color",
      "value": "#d2d2d2",
      "token": "c_dropdown__toggle_m_plain_disabled_Color",
      "values": ["--pf-global--disabled-color--200", "$pf-global--disabled-color--200", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-primary--Color",
      "value": "#fff",
      "token": "c_dropdown__toggle_m_primary_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-primary--BackgroundColor",
      "value": "#06c",
      "token": "c_dropdown__toggle_m_primary_BackgroundColor",
      "values": ["--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-primary--hover--BackgroundColor",
      "value": "#004080",
      "token": "c_dropdown__toggle_m_primary_hover_BackgroundColor",
      "values": ["--pf-global--primary-color--200", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-primary--active--BackgroundColor",
      "value": "#004080",
      "token": "c_dropdown__toggle_m_primary_active_BackgroundColor",
      "values": ["--pf-global--primary-color--200", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-primary--focus--BackgroundColor",
      "value": "#004080",
      "token": "c_dropdown__toggle_m_primary_focus_BackgroundColor",
      "values": ["--pf-global--primary-color--200", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }, {
      "property": "--pf-c-dropdown--m-expanded__toggle--m-primary--BackgroundColor",
      "value": "#004080",
      "token": "c_dropdown_m_expanded__toggle_m_primary_BackgroundColor",
      "values": ["--pf-global--primary-color--200", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }, {
      "property": "--pf-c-dropdown__toggle-button--Color",
      "value": "#151515",
      "token": "c_dropdown__toggle_button_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-split-button--child--PaddingTop",
      "value": "0.375rem",
      "token": "c_dropdown__toggle_m_split_button_child_PaddingTop",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-split-button--child--PaddingRight",
      "value": "0.25rem",
      "token": "c_dropdown__toggle_m_split_button_child_PaddingRight",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-split-button--child--PaddingBottom",
      "value": "0.375rem",
      "token": "c_dropdown__toggle_m_split_button_child_PaddingBottom",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-split-button--child--PaddingLeft",
      "value": "0.25rem",
      "token": "c_dropdown__toggle_m_split_button_child_PaddingLeft",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-split-button--child--BackgroundColor",
      "value": "transparent",
      "token": "c_dropdown__toggle_m_split_button_child_BackgroundColor"
    }, {
      "property": "--pf-c-dropdown__toggle--m-split-button--first-child--PaddingLeft",
      "value": "0.5rem",
      "token": "c_dropdown__toggle_m_split_button_first_child_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-split-button--last-child--PaddingRight",
      "value": "0.5rem",
      "token": "c_dropdown__toggle_m_split_button_last_child_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-split-button--m-action--child--PaddingLeft",
      "value": "0.5rem",
      "token": "c_dropdown__toggle_m_split_button_m_action_child_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-split-button--m-action--child--PaddingRight",
      "value": "0.5rem",
      "token": "c_dropdown__toggle_m_split_button_m_action_child_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-split-button--m-action__toggle-button--MarginRight",
      "value": "calc(-1 * 1px)",
      "token": "c_dropdown__toggle_m_split_button_m_action__toggle_button_MarginRight",
      "values": ["calc(-1 * --pf-global--BorderWidth--sm)", "calc(-1 * $pf-global--BorderWidth--sm)", "calc(-1 * 1px)"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-split-button__toggle-check__input--Transform",
      "value": "translateY(-0.0625rem)",
      "token": "c_dropdown__toggle_m_split_button__toggle_check__input_Transform"
    }, {
      "property": "--pf-c-dropdown__toggle--m-split-button__toggle-text--MarginLeft",
      "value": "0.5rem",
      "token": "c_dropdown__toggle_m_split_button__toggle_text_MarginLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__toggle-icon--MarginRight",
      "value": "0.5rem",
      "token": "c_dropdown__toggle_icon_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__toggle-icon--MarginLeft",
      "value": "1rem",
      "token": "c_dropdown__toggle_icon_MarginLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-dropdown--m-top--m-expanded__toggle-icon--Transform",
      "value": "rotate(180deg)",
      "token": "c_dropdown_m_top_m_expanded__toggle_icon_Transform"
    }, {
      "property": "--pf-c-dropdown__menu--BackgroundColor",
      "value": "#fff",
      "token": "c_dropdown__menu_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-100", "$pf-global--BackgroundColor--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-dropdown__menu--BorderWidth",
      "value": "1px",
      "token": "c_dropdown__menu_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-dropdown__menu--BoxShadow",
      "value": "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)",
      "token": "c_dropdown__menu_BoxShadow",
      "values": ["--pf-global--BoxShadow--md", "$pf-global--BoxShadow--md", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba($pf-color-black-1000, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba($pf-color-black-1000, .06)", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba(#030303, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba(#030303, .06)", "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)"]
    }, {
      "property": "--pf-c-dropdown__menu--PaddingTop",
      "value": "0.5rem",
      "token": "c_dropdown__menu_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__menu--PaddingBottom",
      "value": "0.5rem",
      "token": "c_dropdown__menu_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__menu--Top",
      "value": "calc(100% + 0.25rem)",
      "token": "c_dropdown__menu_Top",
      "values": ["calc(100% + --pf-global--spacer--xs)", "calc(100% + $pf-global--spacer--xs)", "calc(100% + pf-size-prem(4px))", "calc(100% + 0.25rem)"]
    }, {
      "property": "--pf-c-dropdown__menu--ZIndex",
      "value": "200",
      "token": "c_dropdown__menu_ZIndex",
      "values": ["--pf-global--ZIndex--sm", "$pf-global--ZIndex--sm", "200"]
    }, {
      "property": "--pf-c-dropdown--m-top__menu--Top",
      "value": "0",
      "token": "c_dropdown_m_top__menu_Top"
    }, {
      "property": "--pf-c-dropdown--m-top__menu--Transform",
      "value": "translateY(calc(-100% - 0.25rem))",
      "token": "c_dropdown_m_top__menu_Transform",
      "values": ["translateY(calc(-100% - --pf-global--spacer--xs))", "translateY(calc(-100% - $pf-global--spacer--xs))", "translateY(calc(-100% - pf-size-prem(4px)))", "translateY(calc(-100% - 0.25rem))"]
    }, {
      "property": "--pf-c-dropdown__menu-item--BackgroundColor",
      "value": "transparent",
      "token": "c_dropdown__menu_item_BackgroundColor"
    }, {
      "property": "--pf-c-dropdown__menu-item--PaddingTop",
      "value": "0.5rem",
      "token": "c_dropdown__menu_item_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__menu-item--PaddingRight",
      "value": "1rem",
      "token": "c_dropdown__menu_item_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-dropdown__menu-item--PaddingBottom",
      "value": "0.5rem",
      "token": "c_dropdown__menu_item_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__menu-item--PaddingLeft",
      "value": "1rem",
      "token": "c_dropdown__menu_item_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-dropdown__menu-item--FontSize",
      "value": "1rem",
      "token": "c_dropdown__menu_item_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-dropdown__menu-item--FontWeight",
      "value": "400",
      "token": "c_dropdown__menu_item_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-dropdown__menu-item--LineHeight",
      "value": "1.5",
      "token": "c_dropdown__menu_item_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-dropdown__menu-item--Color",
      "value": "#151515",
      "token": "c_dropdown__menu_item_Color",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-dropdown__menu-item--hover--Color",
      "value": "#151515",
      "token": "c_dropdown__menu_item_hover_Color",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-dropdown__menu-item--disabled--Color",
      "value": "#737679",
      "token": "c_dropdown__menu_item_disabled_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-dropdown__menu-item--hover--BackgroundColor",
      "value": "#ededed",
      "token": "c_dropdown__menu_item_hover_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-300", "$pf-global--BackgroundColor--light-300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-dropdown__menu-item--disabled--BackgroundColor",
      "value": "transparent",
      "token": "c_dropdown__menu_item_disabled_BackgroundColor"
    }, {
      "property": "--pf-c-dropdown__menu-item-icon--MarginRight",
      "value": "0.5rem",
      "token": "c_dropdown__menu_item_icon_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__menu-item-icon--Width",
      "value": "1.5rem",
      "token": "c_dropdown__menu_item_icon_Width",
      "values": ["--pf-global--icon--FontSize--lg", "$pf-global--icon--FontSize--lg", "pf-font-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-dropdown__menu-item-icon--Height",
      "value": "1.5rem",
      "token": "c_dropdown__menu_item_icon_Height",
      "values": ["--pf-global--icon--FontSize--lg", "$pf-global--icon--FontSize--lg", "pf-font-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-dropdown__c-divider--MarginTop",
      "value": "0.5rem",
      "token": "c_dropdown__c_divider_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__c-divider--MarginBottom",
      "value": "0.5rem",
      "token": "c_dropdown__c_divider_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__separator--Height",
      "value": "1px",
      "token": "c_dropdown__separator_Height",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-dropdown__separator--BackgroundColor",
      "value": "#d2d2d2",
      "token": "c_dropdown__separator_BackgroundColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-dropdown__separator--MarginTop",
      "value": "0.5rem",
      "token": "c_dropdown__separator_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__separator--MarginBottom",
      "value": "0.5rem",
      "token": "c_dropdown__separator_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__group--PaddingTop",
      "value": "0",
      "token": "c_dropdown__group_PaddingTop"
    }, {
      "property": "--pf-c-dropdown__group--group--PaddingTop",
      "value": "0.5rem",
      "token": "c_dropdown__group_group_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__group--first-child--PaddingTop",
      "value": "0",
      "token": "c_dropdown__group_first_child_PaddingTop"
    }, {
      "property": "--pf-c-dropdown__group-title--PaddingTop",
      "value": "0.5rem",
      "token": "c_dropdown__group_title_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__group-title--PaddingRight",
      "value": "1rem",
      "token": "c_dropdown__group_title_PaddingRight",
      "values": ["--pf-c-dropdown__menu-item--PaddingRight", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-dropdown__group-title--PaddingBottom",
      "value": "0.5rem",
      "token": "c_dropdown__group_title_PaddingBottom",
      "values": ["--pf-c-dropdown__menu-item--PaddingBottom", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__group-title--PaddingLeft",
      "value": "1rem",
      "token": "c_dropdown__group_title_PaddingLeft",
      "values": ["--pf-c-dropdown__menu-item--PaddingLeft", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-dropdown__group-title--FontSize",
      "value": "0.875rem",
      "token": "c_dropdown__group_title_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-dropdown__group-title--FontWeight",
      "value": "500",
      "token": "c_dropdown__group_title_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-dropdown__group-title--Color",
      "value": "#737679",
      "token": "c_dropdown__group_title_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-dropdown__toggle.pf-m-disabled:not(.pf-m-plain)": [{
      "property": "--pf-c-dropdown__toggle--BackgroundColor",
      "value": "#ededed",
      "token": "c_dropdown__toggle_BackgroundColor",
      "values": ["--pf-c-dropdown__toggle--disabled--BackgroundColor", "--pf-global--disabled-color--300", "$pf-global--disabled-color--300", "$pf-color-black-200", "#ededed"]
    }],
    ".pf-c-dropdown__toggle.pf-m-split-button > *:first-child": [{
      "property": "--pf-c-dropdown__toggle--m-split-button--child--PaddingLeft",
      "value": "0.5rem",
      "token": "c_dropdown__toggle_m_split_button_child_PaddingLeft",
      "values": ["--pf-c-dropdown__toggle--m-split-button--first-child--PaddingLeft", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-dropdown__toggle.pf-m-split-button > *:last-child": [{
      "property": "--pf-c-dropdown__toggle--m-split-button--child--PaddingRight",
      "value": "0.5rem",
      "token": "c_dropdown__toggle_m_split_button_child_PaddingRight",
      "values": ["--pf-c-dropdown__toggle--m-split-button--last-child--PaddingRight", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-dropdown__toggle.pf-m-split-button.pf-m-action": [{
      "property": "--pf-c-dropdown__toggle--m-split-button--child--PaddingRight",
      "value": "0.5rem",
      "token": "c_dropdown__toggle_m_split_button_child_PaddingRight",
      "values": ["--pf-c-dropdown__toggle--m-split-button--m-action--child--PaddingRight", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-dropdown__toggle--m-split-button--child--PaddingLeft",
      "value": "0.5rem",
      "token": "c_dropdown__toggle_m_split_button_child_PaddingLeft",
      "values": ["--pf-c-dropdown__toggle--m-split-button--m-action--child--PaddingLeft", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-dropdown__toggle.pf-m-split-button.pf-m-action .pf-c-dropdown__toggle-button:last-child": [{
      "property": "--pf-c-dropdown__toggle--m-split-button--m-action__toggle-button--MarginRight",
      "value": "0",
      "token": "c_dropdown__toggle_m_split_button_m_action__toggle_button_MarginRight"
    }],
    ".pf-c-dropdown__toggle:not(.pf-m-action):hover::before": [{
      "property": "--pf-c-dropdown__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_dropdown__toggle_BorderBottomColor",
      "values": ["--pf-c-dropdown__toggle--hover--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-dropdown__toggle:not(.pf-m-action):active::before": [{
      "property": "--pf-c-dropdown__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_dropdown__toggle_BorderBottomColor",
      "values": ["--pf-c-dropdown__toggle--active--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-dropdown__toggle:not(.pf-m-action):focus::before": [{
      "property": "--pf-c-dropdown__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_dropdown__toggle_BorderBottomColor",
      "values": ["--pf-c-dropdown__toggle--focus--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-m-expanded > .pf-c-dropdown__toggle:not(.pf-m-action)::before": [{
      "property": "--pf-c-dropdown__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_dropdown__toggle_BorderBottomColor",
      "values": ["--pf-c-dropdown__toggle--expanded--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-dropdown__toggle.pf-m-plain:hover": [{
      "property": "--pf-c-dropdown__toggle--m-plain--Color",
      "value": "#151515",
      "token": "c_dropdown__toggle_m_plain_Color",
      "values": ["--pf-c-dropdown__toggle--m-plain--hover--Color", "--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }],
    ".pf-c-dropdown__toggle.pf-m-plain.pf-m-disabled": [{
      "property": "--pf-c-dropdown__toggle--m-plain--Color",
      "value": "#d2d2d2",
      "token": "c_dropdown__toggle_m_plain_Color",
      "values": ["--pf-c-dropdown__toggle--m-plain--disabled--Color", "--pf-global--disabled-color--200", "$pf-global--disabled-color--200", "$pf-color-black-300", "#d2d2d2"]
    }],
    ".pf-c-dropdown__toggle.pf-m-primary": [{
      "property": "--pf-c-dropdown__toggle--Color",
      "value": "#fff",
      "token": "c_dropdown__toggle_Color",
      "values": ["--pf-c-dropdown__toggle--m-primary--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-dropdown__toggle--BackgroundColor",
      "value": "#06c",
      "token": "c_dropdown__toggle_BackgroundColor",
      "values": ["--pf-c-dropdown__toggle--m-primary--BackgroundColor", "--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-dropdown__toggle.pf-m-primary:hover": [{
      "property": "--pf-c-dropdown__toggle--BackgroundColor",
      "value": "#004080",
      "token": "c_dropdown__toggle_BackgroundColor",
      "values": ["--pf-c-dropdown__toggle--m-primary--hover--BackgroundColor", "--pf-global--primary-color--200", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }],
    ".pf-c-dropdown__toggle.pf-m-primary:active": [{
      "property": "--pf-c-dropdown__toggle--BackgroundColor",
      "value": "#004080",
      "token": "c_dropdown__toggle_BackgroundColor",
      "values": ["--pf-c-dropdown__toggle--m-primary--active--BackgroundColor", "--pf-global--primary-color--200", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }],
    ".pf-c-dropdown__toggle.pf-m-primary:focus": [{
      "property": "--pf-c-dropdown__toggle--BackgroundColor",
      "value": "#004080",
      "token": "c_dropdown__toggle_BackgroundColor",
      "values": ["--pf-c-dropdown__toggle--m-primary--focus--BackgroundColor", "--pf-global--primary-color--200", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }],
    ".pf-m-expanded > .pf-c-dropdown__toggle.pf-m-primary": [{
      "property": "--pf-c-dropdown__toggle--BackgroundColor",
      "value": "#004080",
      "token": "c_dropdown__toggle_BackgroundColor",
      "values": ["--pf-c-dropdown--m-expanded__toggle--m-primary--BackgroundColor", "--pf-global--primary-color--200", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }],
    ".pf-c-dropdown.pf-m-top .pf-c-dropdown__menu": [{
      "property": "--pf-c-dropdown__menu--Top",
      "value": "0",
      "token": "c_dropdown__menu_Top",
      "values": ["--pf-c-dropdown--m-top__menu--Top", "0"]
    }],
    ".pf-c-dropdown__menu-item:hover": [{
      "property": "--pf-c-dropdown__menu-item--Color",
      "value": "#151515",
      "token": "c_dropdown__menu_item_Color",
      "values": ["--pf-c-dropdown__menu-item--hover--Color", "--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-dropdown__menu-item--BackgroundColor",
      "value": "#ededed",
      "token": "c_dropdown__menu_item_BackgroundColor",
      "values": ["--pf-c-dropdown__menu-item--hover--BackgroundColor", "--pf-global--BackgroundColor--light-300", "$pf-global--BackgroundColor--light-300", "$pf-color-black-200", "#ededed"]
    }],
    ".pf-c-dropdown__menu-item:disabled": [{
      "property": "--pf-c-dropdown__menu-item--Color",
      "value": "#737679",
      "token": "c_dropdown__menu_item_Color",
      "values": ["--pf-c-dropdown__menu-item--disabled--Color", "--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-dropdown__menu-item--BackgroundColor",
      "value": "transparent",
      "token": "c_dropdown__menu_item_BackgroundColor",
      "values": ["--pf-c-dropdown__menu-item--disabled--BackgroundColor", "transparent"]
    }],
    ".pf-c-dropdown__separator:last-child": [{
      "property": "--pf-c-dropdown__separator--MarginBottom",
      "value": "0",
      "token": "c_dropdown__separator_MarginBottom"
    }],
    ".pf-c-dropdown__group:first-child": [{
      "property": "--pf-c-dropdown__group--PaddingTop",
      "value": "0",
      "token": "c_dropdown__group_PaddingTop",
      "values": ["--pf-c-dropdown__group--first-child--PaddingTop", "0"]
    }],
    ".pf-c-dropdown__group + .pf-c-dropdown__group": [{
      "property": "--pf-c-dropdown__group--PaddingTop",
      "value": "0.5rem",
      "token": "c_dropdown__group_PaddingTop",
      "values": ["--pf-c-dropdown__group--group--PaddingTop", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }]
  };
});