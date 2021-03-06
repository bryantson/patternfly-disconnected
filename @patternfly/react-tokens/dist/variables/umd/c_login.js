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
    ".pf-c-login__header": [{
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
    ".pf-c-login__header .pf-c-card": [{
      "property": "--pf-c-card--BackgroundColor",
      "value": "rgba(#030303, .32)",
      "token": "c_card_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--dark-transparent-200", "$pf-global--BackgroundColor--dark-transparent-200", "rgba($pf-color-black-1000, .32)", "rgba(#030303, .32)"]
    }],
    ".pf-c-login__header .pf-c-button": [{
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
    ".pf-c-login": [{
      "property": "--pf-c-login--PaddingTop",
      "value": "1.5rem",
      "token": "c_login_PaddingTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-login--PaddingBottom",
      "value": "1.5rem",
      "token": "c_login_PaddingBottom",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-login--xl--BackgroundImage",
      "value": "none",
      "token": "c_login_xl_BackgroundImage"
    }, {
      "property": "--pf-c-login__container--xl--GridColumnGap",
      "value": "4rem",
      "token": "c_login__container_xl_GridColumnGap",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-login__container--MaxWidth",
      "value": "31.25rem",
      "token": "c_login__container_MaxWidth"
    }, {
      "property": "--pf-c-login__container--xl--MaxWidth",
      "value": "none",
      "token": "c_login__container_xl_MaxWidth"
    }, {
      "property": "--pf-c-login__container--PaddingLeft",
      "value": "6.125rem",
      "token": "c_login__container_PaddingLeft"
    }, {
      "property": "--pf-c-login__container--PaddingRight",
      "value": "6.125rem",
      "token": "c_login__container_PaddingRight"
    }, {
      "property": "--pf-c-login__container--xl--GridTemplateColumns",
      "value": "34rem minmax(auto, 34rem)",
      "token": "c_login__container_xl_GridTemplateColumns"
    }, {
      "property": "--pf-c-login__header--MarginBottom",
      "value": "1rem",
      "token": "c_login__header_MarginBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__header--sm--PaddingLeft",
      "value": "1rem",
      "token": "c_login__header_sm_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__header--sm--PaddingRight",
      "value": "1rem",
      "token": "c_login__header_sm_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__header--xl--MarginBottom",
      "value": "3rem",
      "token": "c_login__header_xl_MarginBottom",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-login__header--xl--MarginTop",
      "value": "4rem",
      "token": "c_login__header_xl_MarginTop",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-login__header--c-brand--MarginBottom",
      "value": "1.5rem",
      "token": "c_login__header_c_brand_MarginBottom",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-login__header--c-brand--xl--MarginBottom",
      "value": "3rem",
      "token": "c_login__header_c_brand_xl_MarginBottom",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-login__main--BackgroundColor",
      "value": "#fff",
      "token": "c_login__main_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-100", "$pf-global--BackgroundColor--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-login__main--xl--MarginBottom",
      "value": "1.5rem",
      "token": "c_login__main_xl_MarginBottom",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-login__main-header--PaddingTop",
      "value": "3rem",
      "token": "c_login__main_header_PaddingTop",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-login__main-header--PaddingRight",
      "value": "2rem",
      "token": "c_login__main_header_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-login__main-header--PaddingBottom",
      "value": "1rem",
      "token": "c_login__main_header_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__main-header--PaddingLeft",
      "value": "2rem",
      "token": "c_login__main_header_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-login__main-header--md--PaddingRight",
      "value": "3rem",
      "token": "c_login__main_header_md_PaddingRight",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-login__main-header--md--PaddingLeft",
      "value": "3rem",
      "token": "c_login__main_header_md_PaddingLeft",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-login__main-header--ColumnGap",
      "value": "1rem",
      "token": "c_login__main_header_ColumnGap",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__main-header--RowGap",
      "value": "1rem",
      "token": "c_login__main_header_RowGap",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__main-header-desc--MarginBottom",
      "value": "0.5rem",
      "token": "c_login__main_header_desc_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-login__main-header-desc--md--MarginBottom",
      "value": "0",
      "token": "c_login__main_header_desc_md_MarginBottom"
    }, {
      "property": "--pf-c-login__main-header-desc--FontSize",
      "value": "0.875rem",
      "token": "c_login__main_header_desc_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-login__main-body--PaddingRight",
      "value": "2rem",
      "token": "c_login__main_body_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-login__main-body--PaddingBottom",
      "value": "2rem",
      "token": "c_login__main_body_PaddingBottom",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-login__main-body--PaddingLeft",
      "value": "2rem",
      "token": "c_login__main_body_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-login__main-body--md--PaddingRight",
      "value": "3rem",
      "token": "c_login__main_body_md_PaddingRight",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-login__main-body--md--PaddingLeft",
      "value": "3rem",
      "token": "c_login__main_body_md_PaddingLeft",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-login__main-body--c-form__helper-text-icon--FontSize",
      "value": "1.125rem",
      "token": "c_login__main_body_c_form__helper_text_icon_FontSize",
      "values": ["--pf-global--icon--FontSize--md", "$pf-global--icon--FontSize--md", "pf-font-prem(18px)", "1.125rem"]
    }, {
      "property": "--pf-c-login__main-body--c-form__helper-text-icon--MarginRight",
      "value": "0.5rem",
      "token": "c_login__main_body_c_form__helper_text_icon_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-login__main-footer--PaddingBottom",
      "value": "4rem",
      "token": "c_login__main_footer_PaddingBottom",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-login__main-footer--c-title--MarginBottom",
      "value": "1rem",
      "token": "c_login__main_footer_c_title_MarginBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__main-footer-links--PaddingTop",
      "value": "0.5rem",
      "token": "c_login__main_footer_links_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-login__main-footer-links--PaddingRight",
      "value": "4rem",
      "token": "c_login__main_footer_links_PaddingRight",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-login__main-footer-links--PaddingBottom",
      "value": "2rem",
      "token": "c_login__main_footer_links_PaddingBottom",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-login__main-footer-links--PaddingLeft",
      "value": "4rem",
      "token": "c_login__main_footer_links_PaddingLeft",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-login__main-footer-links-item--PaddingRight",
      "value": "1rem",
      "token": "c_login__main_footer_links_item_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__main-footer-links-item--PaddingLeft",
      "value": "1rem",
      "token": "c_login__main_footer_links_item_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__main-footer-links-item--MarginBottom",
      "value": "0.5rem",
      "token": "c_login__main_footer_links_item_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-login__main-footer-links-item-link-svg--Fill",
      "value": "#737679",
      "token": "c_login__main_footer_links_item_link_svg_Fill",
      "values": ["--pf-global--icon--Color--light", "$pf-global--icon--Color--light", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-login__main-footer-links-item-link-svg--Width",
      "value": "1.5rem",
      "token": "c_login__main_footer_links_item_link_svg_Width",
      "values": ["--pf-global--icon--FontSize--lg", "$pf-global--icon--FontSize--lg", "pf-font-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-login__main-footer-links-item-link-svg--Height",
      "value": "1.5rem",
      "token": "c_login__main_footer_links_item_link_svg_Height",
      "values": ["--pf-global--icon--FontSize--lg", "$pf-global--icon--FontSize--lg", "pf-font-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-login__main-footer-links-item-link-svg--hover--Fill",
      "value": "#151515",
      "token": "c_login__main_footer_links_item_link_svg_hover_Fill",
      "values": ["--pf-global--icon--Color--dark", "$pf-global--icon--Color--dark", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-login__main-footer-band--PaddingTop",
      "value": "1.5rem",
      "token": "c_login__main_footer_band_PaddingTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-login__main-footer-band--PaddingRight",
      "value": "1rem",
      "token": "c_login__main_footer_band_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__main-footer-band--PaddingBottom",
      "value": "1.5rem",
      "token": "c_login__main_footer_band_PaddingBottom",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-login__main-footer-band--PaddingLeft",
      "value": "1rem",
      "token": "c_login__main_footer_band_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__main-footer-band--BackgroundColor",
      "value": "#ededed",
      "token": "c_login__main_footer_band_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--300", "$pf-global--BackgroundColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-login__main-footer-band-item--PaddingTop",
      "value": "1rem",
      "token": "c_login__main_footer_band_item_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__footer--sm--PaddingLeft",
      "value": "1rem",
      "token": "c_login__footer_sm_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__footer--sm--PaddingRight",
      "value": "1rem",
      "token": "c_login__footer_sm_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__footer--c-list--PaddingTop",
      "value": "1rem",
      "token": "c_login__footer_c_list_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-login__footer--c-list--xl--PaddingTop",
      "value": "3rem",
      "token": "c_login__footer_c_list_xl_PaddingTop",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }]
  };
});