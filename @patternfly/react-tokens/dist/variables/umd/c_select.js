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
    ".pf-c-select": [{
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
      "property": "--pf-c-select__toggle--PaddingTop",
      "value": "0.375rem",
      "token": "c_select__toggle_PaddingTop",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-select__toggle--PaddingRight",
      "value": "0.5rem",
      "token": "c_select__toggle_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__toggle--PaddingBottom",
      "value": "0.375rem",
      "token": "c_select__toggle_PaddingBottom",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-select__toggle--PaddingLeft",
      "value": "0.5rem",
      "token": "c_select__toggle_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__toggle--MinWidth",
      "value": "44px",
      "token": "c_select__toggle_MinWidth",
      "values": ["--pf-global--target-size--MinWidth", "$pf-global--target-size--MinWidth", "44px"]
    }, {
      "property": "--pf-c-select__toggle--FontSize",
      "value": "1rem",
      "token": "c_select__toggle_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-select__toggle--FontWeight",
      "value": "400",
      "token": "c_select__toggle_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-select__toggle--LineHeight",
      "value": "1.5",
      "token": "c_select__toggle_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-select__toggle--BackgroundColor",
      "value": "#fff",
      "token": "c_select__toggle_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-select__toggle--BorderWidth",
      "value": "1px",
      "token": "c_select__toggle_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-select__toggle--BorderTopColor",
      "value": "#ededed",
      "token": "c_select__toggle_BorderTopColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-select__toggle--BorderRightColor",
      "value": "#ededed",
      "token": "c_select__toggle_BorderRightColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-select__toggle--BorderBottomColor",
      "value": "#8a8d90",
      "token": "c_select__toggle_BorderBottomColor",
      "values": ["--pf-global--BorderColor--200", "$pf-global--BorderColor--200", "$pf-color-black-500", "#8a8d90"]
    }, {
      "property": "--pf-c-select__toggle--BorderLeftColor",
      "value": "#ededed",
      "token": "c_select__toggle_BorderLeftColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-select__toggle--Color",
      "value": "#151515",
      "token": "c_select__toggle_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-select__toggle--hover--BorderBottomColor",
      "value": "#06c",
      "token": "c_select__toggle_hover_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-select__toggle--active--BorderBottomWidth",
      "value": "2px",
      "token": "c_select__toggle_active_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-select__toggle--active--BorderBottomColor",
      "value": "#06c",
      "token": "c_select__toggle_active_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-select__toggle--expanded--BorderBottomWidth",
      "value": "2px",
      "token": "c_select__toggle_expanded_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-select__toggle--expanded--BorderBottomColor",
      "value": "#06c",
      "token": "c_select__toggle_expanded_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-select__toggle--disabled--BackgroundColor",
      "value": "#ededed",
      "token": "c_select__toggle_disabled_BackgroundColor",
      "values": ["--pf-global--disabled-color--300", "$pf-global--disabled-color--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-select__toggle--m-plain--BorderColor",
      "value": "transparent",
      "token": "c_select__toggle_m_plain_BorderColor"
    }, {
      "property": "--pf-c-select__toggle--m-plain--Color",
      "value": "#151515",
      "token": "c_select__toggle_m_plain_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-select__toggle--m-plain--hover--Color",
      "value": "#151515",
      "token": "c_select__toggle_m_plain_hover_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-select__toggle-wrapper--m-typeahead--PaddingTop",
      "value": "0",
      "token": "c_select__toggle_wrapper_m_typeahead_PaddingTop"
    }, {
      "property": "--pf-c-select__toggle-wrapper--not-last-child--MarginRight",
      "value": "0.25rem",
      "token": "c_select__toggle_wrapper_not_last_child_MarginRight",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-select__toggle-wrapper--MaxWidth",
      "value": "calc(100% - 1.5rem)",
      "token": "c_select__toggle_wrapper_MaxWidth",
      "values": ["calc(100% - --pf-global--spacer--lg)", "calc(100% - $pf-global--spacer--lg)", "calc(100% - pf-size-prem(24px))", "calc(100% - 1.5rem)"]
    }, {
      "property": "--pf-c-select__toggle-wrapper--c-chip-group--MarginTop",
      "value": "0.5rem",
      "token": "c_select__toggle_wrapper_c_chip_group_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__toggle-wrapper--c-chip-group--MarginBottom",
      "value": "0.25rem",
      "token": "c_select__toggle_wrapper_c_chip_group_MarginBottom",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-select__toggle-wrapper--c-chip--c-button--PaddingTop",
      "value": "0.25rem",
      "token": "c_select__toggle_wrapper_c_chip_c_button_PaddingTop",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-select__toggle-wrapper--c-chip--c-button--PaddingBottom",
      "value": "0.25rem",
      "token": "c_select__toggle_wrapper_c_chip_c_button_PaddingBottom",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-select__toggle-typeahead--FlexBasis",
      "value": "10em",
      "token": "c_select__toggle_typeahead_FlexBasis"
    }, {
      "property": "--pf-c-select__toggle-typeahead--BackgroundColor",
      "value": "transparent",
      "token": "c_select__toggle_typeahead_BackgroundColor"
    }, {
      "property": "--pf-c-select__toggle-typeahead--BorderTop",
      "value": "none",
      "token": "c_select__toggle_typeahead_BorderTop"
    }, {
      "property": "--pf-c-select__toggle-typeahead--BorderRight",
      "value": "none",
      "token": "c_select__toggle_typeahead_BorderRight"
    }, {
      "property": "--pf-c-select__toggle-typeahead--BorderLeft",
      "value": "none",
      "token": "c_select__toggle_typeahead_BorderLeft"
    }, {
      "property": "--pf-c-select__toggle-typeahead-form--MinWidth",
      "value": "7.5rem",
      "token": "c_select__toggle_typeahead_form_MinWidth"
    }, {
      "property": "--pf-c-select__toggle-typeahead--active--PaddingBottom",
      "value": "calc(0.375rem - 1px)",
      "token": "c_select__toggle_typeahead_active_PaddingBottom",
      "values": ["calc(--pf-global--spacer--form-element - --pf-global--BorderWidth--sm)", "calc($pf-global--spacer--form-element - $pf-global--BorderWidth--sm)", "calc(pf-size-prem(6px) - 1px)", "calc(0.375rem - 1px)"]
    }, {
      "property": "--pf-c-select__toggle-icon--toggle-text--MarginLeft",
      "value": "0.25rem",
      "token": "c_select__toggle_icon_toggle_text_MarginLeft",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-select__toggle-badge--PaddingLeft",
      "value": "0.5rem",
      "token": "c_select__toggle_badge_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__toggle-arrow--MarginLeft",
      "value": "1rem",
      "token": "c_select__toggle_arrow_MarginLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-select__toggle-arrow--MarginRight",
      "value": "0.5rem",
      "token": "c_select__toggle_arrow_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__toggle-arrow--with-clear--MarginLeft",
      "value": "0.5rem",
      "token": "c_select__toggle_arrow_with_clear_MarginLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__toggle-arrow--m-top--m-expanded__toggle-arrow--Transform",
      "value": "rotate(180deg)",
      "token": "c_select__toggle_arrow_m_top_m_expanded__toggle_arrow_Transform"
    }, {
      "property": "--pf-c-select__toggle-clear--PaddingRight",
      "value": "0.5rem",
      "token": "c_select__toggle_clear_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__toggle-clear--PaddingLeft",
      "value": "1rem",
      "token": "c_select__toggle_clear_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-select__toggle-button--PaddingLeft",
      "value": "0.5rem",
      "token": "c_select__toggle_button_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__toggle-button--Color",
      "value": "#151515",
      "token": "c_select__toggle_button_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-select__menu--BackgroundColor",
      "value": "#fff",
      "token": "c_select__menu_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-100", "$pf-global--BackgroundColor--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-select__menu--BorderWidth",
      "value": "1px",
      "token": "c_select__menu_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-select__menu--BoxShadow",
      "value": "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)",
      "token": "c_select__menu_BoxShadow",
      "values": ["--pf-global--BoxShadow--md", "$pf-global--BoxShadow--md", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba($pf-color-black-1000, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba($pf-color-black-1000, .06)", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba(#030303, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba(#030303, .06)", "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)"]
    }, {
      "property": "--pf-c-select__menu--PaddingTop",
      "value": "0.5rem",
      "token": "c_select__menu_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__menu--PaddingBottom",
      "value": "0.5rem",
      "token": "c_select__menu_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__menu--Top",
      "value": "calc(100% + 0.25rem)",
      "token": "c_select__menu_Top",
      "values": ["calc(100% + --pf-global--spacer--xs)", "calc(100% + $pf-global--spacer--xs)", "calc(100% + pf-size-prem(4px))", "calc(100% + 0.25rem)"]
    }, {
      "property": "--pf-c-select__menu--ZIndex",
      "value": "200",
      "token": "c_select__menu_ZIndex",
      "values": ["--pf-global--ZIndex--sm", "$pf-global--ZIndex--sm", "200"]
    }, {
      "property": "--pf-c-select__menu--m-top--Transform",
      "value": "translateY(calc(-100% - 0.25rem))",
      "token": "c_select__menu_m_top_Transform",
      "values": ["translateY(calc(-100% - --pf-global--spacer--xs))", "translateY(calc(-100% - $pf-global--spacer--xs))", "translateY(calc(-100% - pf-size-prem(4px)))", "translateY(calc(-100% - 0.25rem))"]
    }, {
      "property": "--pf-c-select__menu-item--PaddingTop",
      "value": "0.5rem",
      "token": "c_select__menu_item_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__menu-item--PaddingRight",
      "value": "1rem",
      "token": "c_select__menu_item_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-select__menu-item--m-selected--PaddingRight",
      "value": "3rem",
      "token": "c_select__menu_item_m_selected_PaddingRight",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-select__menu-item--PaddingBottom",
      "value": "0.5rem",
      "token": "c_select__menu_item_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__menu-item--PaddingLeft",
      "value": "1rem",
      "token": "c_select__menu_item_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-select__menu-item--FontSize",
      "value": "1rem",
      "token": "c_select__menu_item_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-select__menu-item--FontWeight",
      "value": "400",
      "token": "c_select__menu_item_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-select__menu-item--LineHeight",
      "value": "1.5",
      "token": "c_select__menu_item_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-select__menu-item--Color",
      "value": "#151515",
      "token": "c_select__menu_item_Color",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-select__menu-item--disabled--Color",
      "value": "#737679",
      "token": "c_select__menu_item_disabled_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-select__menu-item--hover--BackgroundColor",
      "value": "#ededed",
      "token": "c_select__menu_item_hover_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-300", "$pf-global--BackgroundColor--light-300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-select__menu-item--disabled--BackgroundColor",
      "value": "transparent",
      "token": "c_select__menu_item_disabled_BackgroundColor"
    }, {
      "property": "--pf-c-select__menu-item-icon--Color",
      "value": "#06c",
      "token": "c_select__menu_item_icon_Color",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-select__menu-item-icon--FontSize",
      "value": "0.625rem",
      "token": "c_select__menu_item_icon_FontSize",
      "values": ["--pf-global--icon--FontSize--sm", "$pf-global--icon--FontSize--sm", "pf-font-prem(10px)", "0.625rem"]
    }, {
      "property": "--pf-c-select__menu-item-icon--Right",
      "value": "1rem",
      "token": "c_select__menu_item_icon_Right",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-select__menu-item-icon--Top",
      "value": "50%",
      "token": "c_select__menu_item_icon_Top"
    }, {
      "property": "--pf-c-select__menu-item-icon--Transform",
      "value": "translateY(-50%)",
      "token": "c_select__menu_item_icon_Transform"
    }, {
      "property": "--pf-c-select__menu-item--match--FontWeight",
      "value": "600",
      "token": "c_select__menu_item_match_FontWeight",
      "values": ["--pf-global--FontWeight--bold", "$pf-global--FontWeight--bold", "600"]
    }, {
      "property": "--pf-c-select__menu-input--PaddingTop",
      "value": "0.5rem",
      "token": "c_select__menu_input_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__menu-input--PaddingRight",
      "value": "1rem",
      "token": "c_select__menu_input_PaddingRight",
      "values": ["--pf-c-select__menu-item--PaddingRight", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-select__menu-input--PaddingBottom",
      "value": "1rem",
      "token": "c_select__menu_input_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-select__menu-input--PaddingLeft",
      "value": "1rem",
      "token": "c_select__menu_input_PaddingLeft",
      "values": ["--pf-c-select__menu-item--PaddingLeft", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-select__separator--Height",
      "value": "1px",
      "token": "c_select__separator_Height",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-select__separator--BackgroundColor",
      "value": "#ededed",
      "token": "c_select__separator_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-300", "$pf-global--BackgroundColor--light-300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-select__separator--MarginTop",
      "value": "0.5rem",
      "token": "c_select__separator_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__separator--MarginBottom",
      "value": "0.5rem",
      "token": "c_select__separator_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__menu-group--not--first-of-type--PaddingTop",
      "value": "0.5rem",
      "token": "c_select__menu_group_not_first_of_type_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__menu-group-title--PaddingTop",
      "value": "0.5rem",
      "token": "c_select__menu_group_title_PaddingTop",
      "values": ["--pf-c-select__menu-item--PaddingTop", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__menu-group-title--PaddingRight",
      "value": "1rem",
      "token": "c_select__menu_group_title_PaddingRight",
      "values": ["--pf-c-select__menu-item--PaddingRight", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-select__menu-group-title--PaddingBottom",
      "value": "0.5rem",
      "token": "c_select__menu_group_title_PaddingBottom",
      "values": ["--pf-c-select__menu-item--PaddingBottom", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-select__menu-group-title--PaddingLeft",
      "value": "1rem",
      "token": "c_select__menu_group_title_PaddingLeft",
      "values": ["--pf-c-select__menu-item--PaddingLeft", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-select__menu-group-title--FontSize",
      "value": "0.875rem",
      "token": "c_select__menu_group_title_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-select__menu-group-title--FontWeight",
      "value": "500",
      "token": "c_select__menu_group_title_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-select__menu-group-title--Color",
      "value": "#737679",
      "token": "c_select__menu_group_title_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-select__toggle.pf-m-disabled": [{
      "property": "--pf-c-select__toggle--BackgroundColor",
      "value": "#ededed",
      "token": "c_select__toggle_BackgroundColor",
      "values": ["--pf-c-select__toggle--disabled--BackgroundColor", "--pf-global--disabled-color--300", "$pf-global--disabled-color--300", "$pf-color-black-200", "#ededed"]
    }],
    ".pf-c-select__toggle:hover::before": [{
      "property": "--pf-c-select__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_select__toggle_BorderBottomColor",
      "values": ["--pf-c-select__toggle--hover--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-select__toggle:active::before": [{
      "property": "--pf-c-select__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_select__toggle_BorderBottomColor",
      "values": ["--pf-c-select__toggle--active--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-m-expanded > .pf-c-select__toggle::before": [{
      "property": "--pf-c-select__toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_select__toggle_BorderBottomColor",
      "values": ["--pf-c-select__toggle--expanded--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-select__toggle.pf-m-plain": [{
      "property": "--pf-c-select__toggle--Color",
      "value": "#151515",
      "token": "c_select__toggle_Color",
      "values": ["--pf-c-select__toggle--m-plain--Color", "--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }],
    ".pf-c-select__toggle.pf-m-plain:hover": [{
      "property": "--pf-c-select__toggle--Color",
      "value": "#151515",
      "token": "c_select__toggle_Color",
      "values": ["--pf-c-select__toggle--m-plain--hover--Color", "--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }],
    ".pf-c-select__toggle.pf-m-typeahead": [{
      "property": "--pf-c-select__toggle--PaddingTop",
      "value": "0",
      "token": "c_select__toggle_PaddingTop"
    }, {
      "property": "--pf-c-select__toggle--PaddingRight",
      "value": "0",
      "token": "c_select__toggle_PaddingRight"
    }, {
      "property": "--pf-c-select__toggle--PaddingBottom",
      "value": "0",
      "token": "c_select__toggle_PaddingBottom"
    }],
    ".pf-c-select__menu-item.pf-m-selected": [{
      "property": "--pf-c-select__menu-item--PaddingRight",
      "value": "3rem",
      "token": "c_select__menu_item_PaddingRight",
      "values": ["--pf-c-select__menu-item--m-selected--PaddingRight", "--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }]
  };
});