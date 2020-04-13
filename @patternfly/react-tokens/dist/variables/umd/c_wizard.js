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
    ".pf-c-wizard__header": [{
      "property": "--pf-global--Color--100",
      "value": "#fff",
      "token": "global_Color_100",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-global--Color--200",
      "value": "#ededed",
      "token": "global_Color_200",
      "values": ["--pf-global--Color--light-200", "$pf-global--Color--light-200", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-global--BorderColor--100",
      "value": "#b8bbbe",
      "token": "global_BorderColor_100",
      "values": ["--pf-global--BorderColor--light-100", "$pf-global--BorderColor--light-100", "$pf-color-black-400", "#b8bbbe"]
    }, {
      "property": "--pf-global--primary-color--100",
      "value": "#73bcf7",
      "token": "global_primary_color_100",
      "values": ["--pf-global--primary-color--light-100", "$pf-global--primary-color--light-100", "$pf-color-blue-200", "#73bcf7"]
    }, {
      "property": "--pf-global--link--Color",
      "value": "#73bcf7",
      "token": "global_link_Color",
      "values": ["--pf-global--link--Color--light", "$pf-global--link--Color--light", "$pf-global--active-color--300", "$pf-color-blue-200", "#73bcf7"]
    }, {
      "property": "--pf-global--link--Color--hover",
      "value": "#73bcf7",
      "token": "global_link_Color_hover",
      "values": ["--pf-global--link--Color--light", "$pf-global--link--Color--light", "$pf-global--active-color--300", "$pf-color-blue-200", "#73bcf7"]
    }, {
      "property": "--pf-global--BackgroundColor--100",
      "value": "#151515",
      "token": "global_BackgroundColor_100",
      "values": ["--pf-global--BackgroundColor--dark-100", "$pf-global--BackgroundColor--dark-100", "$pf-color-black-900", "#151515"]
    }],
    ".pf-c-wizard__header .pf-c-card": [{
      "property": "--pf-c-card--BackgroundColor",
      "value": "rgba(#030303, .32)",
      "token": "c_card_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--dark-transparent-200", "$pf-global--BackgroundColor--dark-transparent-200", "rgba($pf-color-black-1000, .32)", "rgba(#030303, .32)"]
    }],
    ".pf-c-wizard__header .pf-c-button": [{
      "property": "--pf-c-button--m-primary--Color",
      "value": "#06c",
      "token": "c_button_m_primary_Color",
      "values": ["--pf-global--primary-color--dark-100", "$pf-global--primary-color--dark-100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-button--m-primary--hover--Color",
      "value": "#06c",
      "token": "c_button_m_primary_hover_Color",
      "values": ["--pf-global--primary-color--dark-100", "$pf-global--primary-color--dark-100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-button--m-primary--focus--Color",
      "value": "#06c",
      "token": "c_button_m_primary_focus_Color",
      "values": ["--pf-global--primary-color--dark-100", "$pf-global--primary-color--dark-100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-button--m-primary--active--Color",
      "value": "#06c",
      "token": "c_button_m_primary_active_Color",
      "values": ["--pf-global--primary-color--dark-100", "$pf-global--primary-color--dark-100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-button--m-primary--BackgroundColor",
      "value": "#fff",
      "token": "c_button_m_primary_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-100", "$pf-global--BackgroundColor--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-button--m-primary--hover--BackgroundColor",
      "value": "#ededed",
      "token": "c_button_m_primary_hover_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-300", "$pf-global--BackgroundColor--light-300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-button--m-primary--focus--BackgroundColor",
      "value": "#ededed",
      "token": "c_button_m_primary_focus_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-300", "$pf-global--BackgroundColor--light-300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-button--m-primary--active--BackgroundColor",
      "value": "#ededed",
      "token": "c_button_m_primary_active_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-300", "$pf-global--BackgroundColor--light-300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-button--m-secondary--Color",
      "value": "#fff",
      "token": "c_button_m_secondary_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-button--m-secondary--hover--Color",
      "value": "#fff",
      "token": "c_button_m_secondary_hover_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-button--m-secondary--focus--Color",
      "value": "#fff",
      "token": "c_button_m_secondary_focus_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-button--m-secondary--active--Color",
      "value": "#fff",
      "token": "c_button_m_secondary_active_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-button--m-secondary--BorderColor",
      "value": "#fff",
      "token": "c_button_m_secondary_BorderColor",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-button--m-secondary--hover--BorderColor",
      "value": "#fff",
      "token": "c_button_m_secondary_hover_BorderColor",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-button--m-secondary--focus--BorderColor",
      "value": "#fff",
      "token": "c_button_m_secondary_focus_BorderColor",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-button--m-secondary--active--BorderColor",
      "value": "#fff",
      "token": "c_button_m_secondary_active_BorderColor",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }],
    ".pf-c-wizard": [{
      "property": "--pf-c-wizard--BoxShadow",
      "value": "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)",
      "token": "c_wizard_BoxShadow",
      "values": ["--pf-global--BoxShadow--lg", "$pf-global--BoxShadow--lg", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba($pf-color-black-1000, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba($pf-color-black-1000, .12)", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba(#030303, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba(#030303, .12)", "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)"]
    }, {
      "property": "--pf-c-wizard--Height",
      "value": "100%",
      "token": "c_wizard_Height"
    }, {
      "property": "--pf-c-wizard--Width",
      "value": "100vw",
      "token": "c_wizard_Width"
    }, {
      "property": "--pf-c-wizard--lg--Width",
      "value": "calc(100% - (3rem * 2))",
      "token": "c_wizard_lg_Width",
      "values": ["calc(100% - (--pf-global--spacer--2xl * 2))", "calc(100% - ($pf-global--spacer--2xl * 2))", "calc(100% - (pf-size-prem(48px) * 2))", "calc(100% - (3rem * 2))"]
    }, {
      "property": "--pf-c-wizard--lg--MaxWidth",
      "value": "77rem",
      "token": "c_wizard_lg_MaxWidth"
    }, {
      "property": "--pf-c-wizard--lg--Height",
      "value": "47.625rem",
      "token": "c_wizard_lg_Height"
    }, {
      "property": "--pf-c-wizard--lg--MaxHeight",
      "value": "calc(100% - (3rem * 2))",
      "token": "c_wizard_lg_MaxHeight",
      "values": ["calc(100% - (--pf-global--spacer--2xl * 2))", "calc(100% - ($pf-global--spacer--2xl * 2))", "calc(100% - (pf-size-prem(48px) * 2))", "calc(100% - (3rem * 2))"]
    }, {
      "property": "--pf-c-wizard--m-full-width--lg--MaxWidth",
      "value": "auto",
      "token": "c_wizard_m_full_width_lg_MaxWidth"
    }, {
      "property": "--pf-c-wizard--m-full-height--lg--Height",
      "value": "100%",
      "token": "c_wizard_m_full_height_lg_Height"
    }, {
      "property": "--pf-c-wizard--m-in-page--BoxShadow",
      "value": "none",
      "token": "c_wizard_m_in_page_BoxShadow"
    }, {
      "property": "--pf-c-wizard--m-in-page--Height",
      "value": "100%",
      "token": "c_wizard_m_in_page_Height"
    }, {
      "property": "--pf-c-wizard--m-in-page--Width",
      "value": "auto",
      "token": "c_wizard_m_in_page_Width"
    }, {
      "property": "--pf-c-wizard--m-in-page--lg--MaxWidth",
      "value": "none",
      "token": "c_wizard_m_in_page_lg_MaxWidth"
    }, {
      "property": "--pf-c-wizard--m-in-page--lg--MaxHeight",
      "value": "none",
      "token": "c_wizard_m_in_page_lg_MaxHeight"
    }, {
      "property": "--pf-c-wizard__header--BackgroundColor",
      "value": "#151515",
      "token": "c_wizard__header_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--dark-100", "$pf-global--BackgroundColor--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-wizard__header--ZIndex",
      "value": "300",
      "token": "c_wizard__header_ZIndex",
      "values": ["--pf-global--ZIndex--md", "$pf-global--ZIndex--md", "300"]
    }, {
      "property": "--pf-c-wizard__header--PaddingTop",
      "value": "1.5rem",
      "token": "c_wizard__header_PaddingTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-wizard__header--PaddingRight",
      "value": "1rem",
      "token": "c_wizard__header_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__header--PaddingBottom",
      "value": "1.5rem",
      "token": "c_wizard__header_PaddingBottom",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-wizard__header--PaddingLeft",
      "value": "1rem",
      "token": "c_wizard__header_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__header--lg--PaddingRight",
      "value": "2rem",
      "token": "c_wizard__header_lg_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard__header--lg--PaddingLeft",
      "value": "2rem",
      "token": "c_wizard__header_lg_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard__close--Top",
      "value": "calc(1.5rem - 0.375rem)",
      "token": "c_wizard__close_Top",
      "values": ["calc(--pf-global--spacer--lg - --pf-global--spacer--form-element)", "calc($pf-global--spacer--lg - $pf-global--spacer--form-element)", "calc(pf-size-prem(24px) - pf-size-prem(6px))", "calc(1.5rem - 0.375rem)"]
    }, {
      "property": "--pf-c-wizard__close--Right",
      "value": "0",
      "token": "c_wizard__close_Right"
    }, {
      "property": "--pf-c-wizard__close--lg--Right",
      "value": "1rem",
      "token": "c_wizard__close_lg_Right",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__close--FontSize",
      "value": "1.25rem",
      "token": "c_wizard__close_FontSize",
      "values": ["--pf-global--FontSize--xl", "$pf-global--FontSize--xl", "pf-font-prem(20px)", "1.25rem"]
    }, {
      "property": "--pf-c-wizard__title--PaddingRight",
      "value": "3rem",
      "token": "c_wizard__title_PaddingRight",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-wizard__description--PaddingTop",
      "value": "0.5rem",
      "token": "c_wizard__description_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-wizard__description--Color",
      "value": "#ededed",
      "token": "c_wizard__description_Color",
      "values": ["--pf-global--Color--light-200", "$pf-global--Color--light-200", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-wizard__nav-link--Color",
      "value": "#151515",
      "token": "c_wizard__nav_link_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-wizard__nav-link--TextDecoration",
      "value": "none",
      "token": "c_wizard__nav_link_TextDecoration",
      "values": ["--pf-global--link--TextDecoration", "$pf-global--link--TextDecoration", "none"]
    }, {
      "property": "--pf-c-wizard__nav-link--hover--Color",
      "value": "#06c",
      "token": "c_wizard__nav_link_hover_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-wizard__nav-link--focus--Color",
      "value": "#06c",
      "token": "c_wizard__nav_link_focus_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-wizard__nav-link--m-current--Color",
      "value": "#06c",
      "token": "c_wizard__nav_link_m_current_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-wizard__nav-link--m-disabled--Color",
      "value": "#737679",
      "token": "c_wizard__nav_link_m_disabled_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-wizard__nav-list__nav-list__nav-link--m-current--FontWeight",
      "value": "600",
      "token": "c_wizard__nav_list__nav_list__nav_link_m_current_FontWeight",
      "values": ["--pf-global--FontWeight--bold", "$pf-global--FontWeight--bold", "600"]
    }, {
      "property": "--pf-c-wizard__nav-link--before--Width",
      "value": "1.5rem",
      "token": "c_wizard__nav_link_before_Width"
    }, {
      "property": "--pf-c-wizard__nav-link--before--Height",
      "value": "1.5rem",
      "token": "c_wizard__nav_link_before_Height"
    }, {
      "property": "--pf-c-wizard__nav-link--before--Top",
      "value": "0",
      "token": "c_wizard__nav_link_before_Top"
    }, {
      "property": "--pf-c-wizard__nav-link--before--BackgroundColor",
      "value": "#ededed",
      "token": "c_wizard__nav_link_before_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--300", "$pf-global--BackgroundColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-wizard__nav-link--before--BorderRadius",
      "value": "30em",
      "token": "c_wizard__nav_link_before_BorderRadius",
      "values": ["--pf-global--BorderRadius--lg", "$pf-global--BorderRadius--lg", "30em"]
    }, {
      "property": "--pf-c-wizard__nav-link--before--Color",
      "value": "#151515",
      "token": "c_wizard__nav_link_before_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-wizard__nav-link--before--FontSize",
      "value": "0.875rem",
      "token": "c_wizard__nav_link_before_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-wizard__nav-link--before--Transform",
      "value": "translateX(calc(-100% - 0.5rem))",
      "token": "c_wizard__nav_link_before_Transform",
      "values": ["translateX(calc(-100% - --pf-global--spacer--sm))", "translateX(calc(-100% - $pf-global--spacer--sm))", "translateX(calc(-100% - pf-size-prem(8px)))", "translateX(calc(-100% - 0.5rem))"]
    }, {
      "property": "--pf-c-wizard__nav-link--m-current--before--BackgroundColor",
      "value": "#06c",
      "token": "c_wizard__nav_link_m_current_before_BackgroundColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-wizard__nav-link--m-current--before--Color",
      "value": "#fff",
      "token": "c_wizard__nav_link_m_current_before_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-wizard__nav-link--m-disabled--before--BackgroundColor",
      "value": "transparent",
      "token": "c_wizard__nav_link_m_disabled_before_BackgroundColor"
    }, {
      "property": "--pf-c-wizard__nav-link--m-disabled--before--Color",
      "value": "#737679",
      "token": "c_wizard__nav_link_m_disabled_before_Color",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-wizard__toggle--BackgroundColor",
      "value": "#fff",
      "token": "c_wizard__toggle_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-wizard__toggle--ZIndex",
      "value": "300",
      "token": "c_wizard__toggle_ZIndex",
      "values": ["--pf-global--ZIndex--md", "$pf-global--ZIndex--md", "300"]
    }, {
      "property": "--pf-c-wizard__toggle--BoxShadow",
      "value": "0 0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25)",
      "token": "c_wizard__toggle_BoxShadow",
      "values": ["--pf-global--BoxShadow--md-bottom", "$pf-global--BoxShadow--md-bottom", "0 pf-size-prem(5) pf-size-prem(10) pf-size-prem(-4) rgba($pf-color-black-1000, .25)", "0 pf-size-prem(5) pf-size-prem(10) pf-size-prem(-4) rgba(#030303, .25)", "0 0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25)"]
    }, {
      "property": "--pf-c-wizard__toggle--PaddingTop",
      "value": "1.5rem",
      "token": "c_wizard__toggle_PaddingTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-wizard__toggle--PaddingRight",
      "value": "1rem",
      "token": "c_wizard__toggle_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__toggle--PaddingBottom",
      "value": "1.5rem",
      "token": "c_wizard__toggle_PaddingBottom",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-wizard__toggle--PaddingLeft",
      "value": "calc(1rem + 1.5rem + 0.5rem)",
      "token": "c_wizard__toggle_PaddingLeft",
      "values": ["calc(--pf-global--spacer--md + --pf-c-wizard__nav-link--before--Width + --pf-global--spacer--sm)", "calc($pf-global--spacer--md + 1.5rem + $pf-global--spacer--sm)", "calc(pf-size-prem(16px) + 1.5rem + pf-size-prem(8px))", "calc(1rem + 1.5rem + 0.5rem)"]
    }, {
      "property": "--pf-c-wizard--m-in-page__toggle--md--PaddingLeft",
      "value": "calc(2rem + 1.5rem + 0.5rem)",
      "token": "c_wizard_m_in_page__toggle_md_PaddingLeft",
      "values": ["calc(--pf-global--spacer--xl + --pf-c-wizard__nav-link--before--Width + --pf-global--spacer--sm)", "calc($pf-global--spacer--xl + 1.5rem + $pf-global--spacer--sm)", "calc(pf-size-prem(32px) + 1.5rem + pf-size-prem(8px))", "calc(2rem + 1.5rem + 0.5rem)"]
    }, {
      "property": "--pf-c-wizard__toggle-num--before--Top",
      "value": "0",
      "token": "c_wizard__toggle_num_before_Top"
    }, {
      "property": "--pf-c-wizard__toggle-list-item--not-last-child--MarginRight",
      "value": "0.5rem",
      "token": "c_wizard__toggle_list_item_not_last_child_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-wizard__toggle-list-item--MarginBottom",
      "value": "0.25rem",
      "token": "c_wizard__toggle_list_item_MarginBottom",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-wizard__toggle-list--MarginRight",
      "value": "0.5rem",
      "token": "c_wizard__toggle_list_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-wizard__toggle-list--MarginBottom",
      "value": "calc(0.25rem * -1)",
      "token": "c_wizard__toggle_list_MarginBottom",
      "values": ["calc(--pf-c-wizard__toggle-list-item--MarginBottom * -1)", "calc(--pf-global--spacer--xs * -1)", "calc($pf-global--spacer--xs * -1)", "calc(pf-size-prem(4px) * -1)", "calc(0.25rem * -1)"]
    }, {
      "property": "--pf-c-wizard__toggle-separator--MarginLeft",
      "value": "0.5rem",
      "token": "c_wizard__toggle_separator_MarginLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-wizard__toggle-separator--Color",
      "value": "#8a8d90",
      "token": "c_wizard__toggle_separator_Color",
      "values": ["--pf-global--BorderColor--200", "$pf-global--BorderColor--200", "$pf-color-black-500", "#8a8d90"]
    }, {
      "property": "--pf-c-wizard__toggle-icon--MarginTop",
      "value": "0",
      "token": "c_wizard__toggle_icon_MarginTop"
    }, {
      "property": "--pf-c-wizard__toggle-icon--LineHeight",
      "value": "1.5",
      "token": "c_wizard__toggle_icon_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-wizard__toggle--m-expanded__toggle-icon--Transform",
      "value": "rotate(180deg)",
      "token": "c_wizard__toggle_m_expanded__toggle_icon_Transform"
    }, {
      "property": "--pf-c-wizard__nav--ZIndex",
      "value": "200",
      "token": "c_wizard__nav_ZIndex",
      "values": ["--pf-global--ZIndex--sm", "$pf-global--ZIndex--sm", "200"]
    }, {
      "property": "--pf-c-wizard__nav--BackgroundColor",
      "value": "#fff",
      "token": "c_wizard__nav_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-wizard__nav--BoxShadow",
      "value": "0 0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25)",
      "token": "c_wizard__nav_BoxShadow",
      "values": ["--pf-global--BoxShadow--md-bottom", "$pf-global--BoxShadow--md-bottom", "0 pf-size-prem(5) pf-size-prem(10) pf-size-prem(-4) rgba($pf-color-black-1000, .25)", "0 pf-size-prem(5) pf-size-prem(10) pf-size-prem(-4) rgba(#030303, .25)", "0 0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25)"]
    }, {
      "property": "--pf-c-wizard__nav--lg--BoxShadow",
      "value": "0.75rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.07)",
      "token": "c_wizard__nav_lg_BoxShadow",
      "values": ["--pf-global--BoxShadow--lg-right", "$pf-global--BoxShadow--lg-right", "pf-size-prem(12) 0 pf-size-prem(10) pf-size-prem(-4) rgba($pf-color-black-1000, .07)", "pf-size-prem(12) 0 pf-size-prem(10) pf-size-prem(-4) rgba(#030303, .07)", "0.75rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.07)"]
    }, {
      "property": "--pf-c-wizard__nav--Width",
      "value": "100%",
      "token": "c_wizard__nav_Width"
    }, {
      "property": "--pf-c-wizard__nav--lg--Width",
      "value": "18.75rem",
      "token": "c_wizard__nav_lg_Width"
    }, {
      "property": "--pf-c-wizard--m-compact-nav__nav--lg--Width",
      "value": "15.625rem",
      "token": "c_wizard_m_compact_nav__nav_lg_Width"
    }, {
      "property": "--pf-c-wizard--m-in-page__nav--lg--Width",
      "value": "15.625rem",
      "token": "c_wizard_m_in_page__nav_lg_Width"
    }, {
      "property": "--pf-c-wizard--m-in-page__nav--lg--BoxShadow",
      "value": "none",
      "token": "c_wizard_m_in_page__nav_lg_BoxShadow"
    }, {
      "property": "--pf-c-wizard--m-in-page__nav--lg--BorderRightWidth",
      "value": "1px",
      "token": "c_wizard_m_in_page__nav_lg_BorderRightWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-wizard--m-in-page__nav--lg--BorderRightColor",
      "value": "#d2d2d2",
      "token": "c_wizard_m_in_page__nav_lg_BorderRightColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-wizard__nav-list--PaddingTop",
      "value": "2rem",
      "token": "c_wizard__nav_list_PaddingTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard__nav-list--PaddingRight",
      "value": "1rem",
      "token": "c_wizard__nav_list_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__nav-list--PaddingBottom",
      "value": "2rem",
      "token": "c_wizard__nav_list_PaddingBottom",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard__nav-list--PaddingLeft",
      "value": "calc(1rem + 1.5rem + 0.5rem)",
      "token": "c_wizard__nav_list_PaddingLeft",
      "values": ["calc(--pf-global--spacer--md + --pf-c-wizard__nav-link--before--Width + --pf-global--spacer--sm)", "calc($pf-global--spacer--md + 1.5rem + $pf-global--spacer--sm)", "calc(pf-size-prem(16px) + 1.5rem + pf-size-prem(8px))", "calc(1rem + 1.5rem + 0.5rem)"]
    }, {
      "property": "--pf-c-wizard__nav-list--lg--PaddingRight",
      "value": "2rem",
      "token": "c_wizard__nav_list_lg_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard__nav-list--lg--PaddingLeft",
      "value": "calc(2rem + 1.5rem + 0.5rem)",
      "token": "c_wizard__nav_list_lg_PaddingLeft",
      "values": ["calc(--pf-global--spacer--xl + --pf-c-wizard__nav-link--before--Width + --pf-global--spacer--sm)", "calc($pf-global--spacer--xl + 1.5rem + $pf-global--spacer--sm)", "calc(pf-size-prem(32px) + 1.5rem + pf-size-prem(8px))", "calc(2rem + 1.5rem + 0.5rem)"]
    }, {
      "property": "--pf-c-wizard__nav-list--nested--MarginLeft",
      "value": "1rem",
      "token": "c_wizard__nav_list_nested_MarginLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__nav-list--nested--MarginTop",
      "value": "1rem",
      "token": "c_wizard__nav_list_nested_MarginTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard--m-in-page__nav-list--md--PaddingLeft",
      "value": "calc(2rem + 1.5rem + 0.5rem)",
      "token": "c_wizard_m_in_page__nav_list_md_PaddingLeft",
      "values": ["calc(--pf-global--spacer--xl + --pf-c-wizard__nav-link--before--Width + --pf-global--spacer--sm)", "calc($pf-global--spacer--xl + 1.5rem + $pf-global--spacer--sm)", "calc(pf-size-prem(32px) + 1.5rem + pf-size-prem(8px))", "calc(2rem + 1.5rem + 0.5rem)"]
    }, {
      "property": "--pf-c-wizard__nav-item--MarginTop",
      "value": "1rem",
      "token": "c_wizard__nav_item_MarginTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__outer-wrap--BackgroundColor",
      "value": "#fff",
      "token": "c_wizard__outer_wrap_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-wizard__outer-wrap--lg--PaddingLeft",
      "value": "18.75rem",
      "token": "c_wizard__outer_wrap_lg_PaddingLeft",
      "values": ["--pf-c-wizard__nav--lg--Width", "18.75rem"]
    }, {
      "property": "--pf-c-wizard__main--ZIndex",
      "value": "100",
      "token": "c_wizard__main_ZIndex",
      "values": ["--pf-global--ZIndex--xs", "$pf-global--ZIndex--xs", "100"]
    }, {
      "property": "--pf-c-wizard__main-body--PaddingTop",
      "value": "1rem",
      "token": "c_wizard__main_body_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__main-body--PaddingRight",
      "value": "1rem",
      "token": "c_wizard__main_body_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__main-body--PaddingBottom",
      "value": "1rem",
      "token": "c_wizard__main_body_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__main-body--PaddingLeft",
      "value": "1rem",
      "token": "c_wizard__main_body_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__main-body--lg--PaddingTop",
      "value": "2rem",
      "token": "c_wizard__main_body_lg_PaddingTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard__main-body--lg--PaddingRight",
      "value": "2rem",
      "token": "c_wizard__main_body_lg_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard__main-body--lg--PaddingBottom",
      "value": "2rem",
      "token": "c_wizard__main_body_lg_PaddingBottom",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard__main-body--lg--PaddingLeft",
      "value": "2rem",
      "token": "c_wizard__main_body_lg_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard--m-in-page__main-body--md--PaddingTop",
      "value": "2rem",
      "token": "c_wizard_m_in_page__main_body_md_PaddingTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard--m-in-page__main-body--md--PaddingRight",
      "value": "2rem",
      "token": "c_wizard_m_in_page__main_body_md_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard--m-in-page__main-body--md--PaddingBottom",
      "value": "2rem",
      "token": "c_wizard_m_in_page__main_body_md_PaddingBottom",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard--m-in-page__main-body--md--PaddingLeft",
      "value": "2rem",
      "token": "c_wizard_m_in_page__main_body_md_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard__footer--PaddingTop",
      "value": "1rem",
      "token": "c_wizard__footer_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__footer--PaddingRight",
      "value": "1rem",
      "token": "c_wizard__footer_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__footer--PaddingBottom",
      "value": "0.5rem",
      "token": "c_wizard__footer_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-wizard__footer--PaddingLeft",
      "value": "1rem",
      "token": "c_wizard__footer_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__footer--lg--PaddingTop",
      "value": "2rem",
      "token": "c_wizard__footer_lg_PaddingTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard__footer--lg--PaddingRight",
      "value": "2rem",
      "token": "c_wizard__footer_lg_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard__footer--lg--PaddingBottom",
      "value": "1.5rem",
      "token": "c_wizard__footer_lg_PaddingBottom",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-wizard__footer--lg--PaddingLeft",
      "value": "2rem",
      "token": "c_wizard__footer_lg_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard__footer--child--MarginRight",
      "value": "1rem",
      "token": "c_wizard__footer_child_MarginRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-wizard__footer--child--MarginBottom",
      "value": "0.5rem",
      "token": "c_wizard__footer_child_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-wizard--m-in-page__footer--md--PaddingTop",
      "value": "2rem",
      "token": "c_wizard_m_in_page__footer_md_PaddingTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard--m-in-page__footer--md--PaddingRight",
      "value": "2rem",
      "token": "c_wizard_m_in_page__footer_md_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-wizard--m-in-page__footer--md--PaddingBottom",
      "value": "1.5rem",
      "token": "c_wizard_m_in_page__footer_md_PaddingBottom",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-wizard--m-in-page__footer--md--PaddingLeft",
      "value": "2rem",
      "token": "c_wizard_m_in_page__footer_md_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }],
    ".pf-c-wizard.pf-m-finished": [{
      "property": "--pf-c-wizard__outer-wrap--lg--PaddingLeft",
      "value": "0",
      "token": "c_wizard__outer_wrap_lg_PaddingLeft"
    }],
    ".pf-c-wizard.pf-m-in-page": [{
      "property": "--pf-c-wizard--Height",
      "value": "100%",
      "token": "c_wizard_Height",
      "values": ["--pf-c-wizard--m-in-page--Height", "100%"]
    }, {
      "property": "--pf-c-wizard--BoxShadow",
      "value": "none",
      "token": "c_wizard_BoxShadow",
      "values": ["--pf-c-wizard--m-in-page--BoxShadow", "none"]
    }, {
      "property": "--pf-c-wizard--Width",
      "value": "auto",
      "token": "c_wizard_Width",
      "values": ["--pf-c-wizard--m-in-page--Width", "auto"]
    }],
    ".pf-c-wizard__toggle-num": [{
      "property": "--pf-c-wizard__nav-link--before--Top",
      "value": "0",
      "token": "c_wizard__nav_link_before_Top",
      "values": ["--pf-c-wizard__toggle-num--before--Top", "0"]
    }, {
      "property": "--pf-c-wizard__nav-link--before--BackgroundColor",
      "value": "#06c",
      "token": "c_wizard__nav_link_before_BackgroundColor",
      "values": ["--pf-c-wizard__nav-link--m-current--before--BackgroundColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-wizard__nav-link--before--Color",
      "value": "#fff",
      "token": "c_wizard__nav_link_before_Color",
      "values": ["--pf-c-wizard__nav-link--m-current--before--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }],
    ".pf-c-wizard__nav-link:hover": [{
      "property": "--pf-c-wizard__nav-link--Color",
      "value": "#06c",
      "token": "c_wizard__nav_link_Color",
      "values": ["--pf-c-wizard__nav-link--hover--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-wizard__nav-link:focus": [{
      "property": "--pf-c-wizard__nav-link--Color",
      "value": "#06c",
      "token": "c_wizard__nav_link_Color",
      "values": ["--pf-c-wizard__nav-link--focus--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-wizard__nav-link.pf-m-current": [{
      "property": "--pf-c-wizard__nav-link--Color",
      "value": "#06c",
      "token": "c_wizard__nav_link_Color",
      "values": ["--pf-c-wizard__nav-link--m-current--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-wizard__nav-link.pf-m-disabled": [{
      "property": "--pf-c-wizard__nav-link--Color",
      "value": "#737679",
      "token": "c_wizard__nav_link_Color",
      "values": ["--pf-c-wizard__nav-link--m-disabled--Color", "--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-wizard__nav-link.pf-m-disabled::before": [{
      "property": "--pf-c-wizard__nav-link--before--BackgroundColor",
      "value": "transparent",
      "token": "c_wizard__nav_link_before_BackgroundColor",
      "values": ["--pf-c-wizard__nav-link--m-disabled--before--BackgroundColor", "transparent"]
    }, {
      "property": "--pf-c-wizard__nav-link--before--Color",
      "value": "#737679",
      "token": "c_wizard__nav_link_before_Color",
      "values": ["--pf-c-wizard__nav-link--m-disabled--before--Color", "--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }]
  };
});