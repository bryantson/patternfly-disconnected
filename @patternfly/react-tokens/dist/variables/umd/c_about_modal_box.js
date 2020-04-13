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
    ".pf-c-about-modal-box": [{
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
    }, {
      "property": "--pf-c-about-modal-box--BackgroundColor",
      "value": "#030303",
      "token": "c_about_modal_box_BackgroundColor",
      "values": ["--pf-global--palette--black-1000", "$pf-color-black-1000", "#030303"]
    }, {
      "property": "--pf-c-about-modal-box--BoxShadow",
      "value": "0 0 100px 0 rgba(255, 255, 255, .05)",
      "token": "c_about_modal_box_BoxShadow"
    }, {
      "property": "--pf-c-about-modal-box--ZIndex",
      "value": "500",
      "token": "c_about_modal_box_ZIndex",
      "values": ["--pf-global--ZIndex--xl", "$pf-global--ZIndex--xl", "500"]
    }, {
      "property": "--pf-c-about-modal-box--Height",
      "value": "100%",
      "token": "c_about_modal_box_Height"
    }, {
      "property": "--pf-c-about-modal-box--lg--Height",
      "value": "47.625rem",
      "token": "c_about_modal_box_lg_Height"
    }, {
      "property": "--pf-c-about-modal-box--lg--MaxHeight",
      "value": "calc(100% - 2rem)",
      "token": "c_about_modal_box_lg_MaxHeight",
      "values": ["calc(100% - --pf-global--spacer--xl)", "calc(100% - $pf-global--spacer--xl)", "calc(100% - pf-size-prem(32px))", "calc(100% - 2rem)"]
    }, {
      "property": "--pf-c-about-modal-box--Width",
      "value": "100vw",
      "token": "c_about_modal_box_Width"
    }, {
      "property": "--pf-c-about-modal-box--lg--Width",
      "value": "calc(100% - (4rem * 2))",
      "token": "c_about_modal_box_lg_Width",
      "values": ["calc(100% - (--pf-global--spacer--3xl * 2))", "calc(100% - ($pf-global--spacer--3xl * 2))", "calc(100% - (pf-size-prem(64px) * 2))", "calc(100% - (4rem * 2))"]
    }, {
      "property": "--pf-c-about-modal-box--lg--MaxWidth",
      "value": "77rem",
      "token": "c_about_modal_box_lg_MaxWidth"
    }, {
      "property": "--pf-c-about-modal-box--PaddingTop",
      "value": "2rem",
      "token": "c_about_modal_box_PaddingTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box--PaddingRight",
      "value": "2rem",
      "token": "c_about_modal_box_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box--PaddingBottom",
      "value": "2rem",
      "token": "c_about_modal_box_PaddingBottom",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box--PaddingLeft",
      "value": "2rem",
      "token": "c_about_modal_box_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box--sm--PaddingTop",
      "value": "4rem",
      "token": "c_about_modal_box_sm_PaddingTop",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-about-modal-box--sm--PaddingRight",
      "value": "4rem",
      "token": "c_about_modal_box_sm_PaddingRight",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-about-modal-box--sm--PaddingBottom",
      "value": "4rem",
      "token": "c_about_modal_box_sm_PaddingBottom",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-about-modal-box--sm--PaddingLeft",
      "value": "4rem",
      "token": "c_about_modal_box_sm_PaddingLeft",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-about-modal-box--sm--grid-template-columns",
      "value": "5fr 1fr",
      "token": "c_about_modal_box_sm_grid_template_columns"
    }, {
      "property": "--pf-c-about-modal-box--lg--grid-template-columns",
      "value": "1fr .6fr",
      "token": "c_about_modal_box_lg_grid_template_columns"
    }, {
      "property": "--pf-c-about-modal-box__brand--PaddingTop",
      "value": "3rem",
      "token": "c_about_modal_box__brand_PaddingTop",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-about-modal-box__brand--PaddingRight",
      "value": "2rem",
      "token": "c_about_modal_box__brand_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box__brand--PaddingLeft",
      "value": "2rem",
      "token": "c_about_modal_box__brand_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box__brand--PaddingBottom",
      "value": "2rem",
      "token": "c_about_modal_box__brand_PaddingBottom",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box__brand--sm--PaddingRight",
      "value": "4rem",
      "token": "c_about_modal_box__brand_sm_PaddingRight",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-about-modal-box__brand--sm--PaddingLeft",
      "value": "4rem",
      "token": "c_about_modal_box__brand_sm_PaddingLeft",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-about-modal-box__brand--sm--PaddingBottom",
      "value": "4rem",
      "token": "c_about_modal_box__brand_sm_PaddingBottom",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-about-modal-box__close--ZIndex",
      "value": "600",
      "token": "c_about_modal_box__close_ZIndex",
      "values": ["--pf-global--ZIndex--2xl", "$pf-global--ZIndex--2xl", "600"]
    }, {
      "property": "--pf-c-about-modal-box__close--PaddingTop",
      "value": "3rem",
      "token": "c_about_modal_box__close_PaddingTop",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-about-modal-box__close--PaddingRight",
      "value": "2rem",
      "token": "c_about_modal_box__close_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box__close--PaddingBottom",
      "value": "2rem",
      "token": "c_about_modal_box__close_PaddingBottom",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box__close--sm--PaddingBottom",
      "value": "4rem",
      "token": "c_about_modal_box__close_sm_PaddingBottom",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-about-modal-box__close--sm--PaddingRight",
      "value": "0",
      "token": "c_about_modal_box__close_sm_PaddingRight"
    }, {
      "property": "--pf-c-about-modal-box__close--lg--PaddingRight",
      "value": "4rem",
      "token": "c_about_modal_box__close_lg_PaddingRight",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-about-modal-box__close--c-button--Color",
      "value": "#151515",
      "token": "c_about_modal_box__close_c_button_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-about-modal-box__close--c-button--FontSize",
      "value": "1.25rem",
      "token": "c_about_modal_box__close_c_button_FontSize",
      "values": ["--pf-global--FontSize--xl", "$pf-global--FontSize--xl", "pf-font-prem(20px)", "1.25rem"]
    }, {
      "property": "--pf-c-about-modal-box__close--c-button--BorderRadius",
      "value": "30em",
      "token": "c_about_modal_box__close_c_button_BorderRadius",
      "values": ["--pf-global--BorderRadius--lg", "$pf-global--BorderRadius--lg", "30em"]
    }, {
      "property": "--pf-c-about-modal-box__close--c-button--Width",
      "value": "calc(1.25rem * 2)",
      "token": "c_about_modal_box__close_c_button_Width",
      "values": ["calc(--pf-c-about-modal-box__close--c-button--FontSize * 2)", "calc(--pf-global--FontSize--xl * 2)", "calc($pf-global--FontSize--xl * 2)", "calc(pf-font-prem(20px) * 2)", "calc(1.25rem * 2)"]
    }, {
      "property": "--pf-c-about-modal-box__close--c-button--Height",
      "value": "calc(1.25rem * 2)",
      "token": "c_about_modal_box__close_c_button_Height",
      "values": ["calc(--pf-c-about-modal-box__close--c-button--FontSize * 2)", "calc(--pf-global--FontSize--xl * 2)", "calc($pf-global--FontSize--xl * 2)", "calc(pf-font-prem(20px) * 2)", "calc(1.25rem * 2)"]
    }, {
      "property": "--pf-c-about-modal-box__close--c-button--BackgroundColor",
      "value": "#030303",
      "token": "c_about_modal_box__close_c_button_BackgroundColor",
      "values": ["--pf-global--palette--black-1000", "$pf-color-black-1000", "#030303"]
    }, {
      "property": "--pf-c-about-modal-box__close--c-button--hover--BackgroundColor",
      "value": "rgba(3, 3, 3, 0.4)",
      "token": "c_about_modal_box__close_c_button_hover_BackgroundColor"
    }, {
      "property": "--pf-c-about-modal-box__hero--sm--BackgroundImage",
      "value": "url(\"../../assets/images/pfbg_992@2x.jpg\")",
      "token": "c_about_modal_box__hero_sm_BackgroundImage"
    }, {
      "property": "--pf-c-about-modal-box__hero--sm--BackgroundPosition",
      "value": "top left",
      "token": "c_about_modal_box__hero_sm_BackgroundPosition"
    }, {
      "property": "--pf-c-about-modal-box__hero--sm--BackgroundSize",
      "value": "cover",
      "token": "c_about_modal_box__hero_sm_BackgroundSize"
    }, {
      "property": "--pf-c-about-modal-box__brand-image--Height",
      "value": "2.5rem",
      "token": "c_about_modal_box__brand_image_Height"
    }, {
      "property": "--pf-c-about-modal-box__header--PaddingRight",
      "value": "2rem",
      "token": "c_about_modal_box__header_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box__header--PaddingBottom",
      "value": "0.5rem",
      "token": "c_about_modal_box__header_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-about-modal-box__header--PaddingLeft",
      "value": "2rem",
      "token": "c_about_modal_box__header_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box__header--sm--PaddingRight",
      "value": "4rem",
      "token": "c_about_modal_box__header_sm_PaddingRight",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-about-modal-box__header--sm--PaddingLeft",
      "value": "4rem",
      "token": "c_about_modal_box__header_sm_PaddingLeft",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-about-modal-box__strapline--PaddingTop",
      "value": "2rem",
      "token": "c_about_modal_box__strapline_PaddingTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box__strapline--FontSize",
      "value": "0.875rem",
      "token": "c_about_modal_box__strapline_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-about-modal-box__strapline--sm--PaddingTop",
      "value": "3rem",
      "token": "c_about_modal_box__strapline_sm_PaddingTop",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-about-modal-box__content--MarginTop",
      "value": "2rem",
      "token": "c_about_modal_box__content_MarginTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box__content--MarginRight",
      "value": "2rem",
      "token": "c_about_modal_box__content_MarginRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box__content--MarginBottom",
      "value": "2rem",
      "token": "c_about_modal_box__content_MarginBottom",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box__content--MarginLeft",
      "value": "2rem",
      "token": "c_about_modal_box__content_MarginLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-about-modal-box__content--sm--MarginTop",
      "value": "3rem",
      "token": "c_about_modal_box__content_sm_MarginTop",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-about-modal-box__content--sm--MarginRight",
      "value": "4rem",
      "token": "c_about_modal_box__content_sm_MarginRight",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }, {
      "property": "--pf-c-about-modal-box__content--sm--MarginBottom",
      "value": "3rem",
      "token": "c_about_modal_box__content_sm_MarginBottom",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-about-modal-box__content--sm--MarginLeft",
      "value": "4rem",
      "token": "c_about_modal_box__content_sm_MarginLeft",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }],
    ".pf-c-about-modal-box .pf-c-card": [{
      "property": "--pf-c-card--BackgroundColor",
      "value": "rgba(#030303, .32)",
      "token": "c_card_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--dark-transparent-200", "$pf-global--BackgroundColor--dark-transparent-200", "rgba($pf-color-black-1000, .32)", "rgba(#030303, .32)"]
    }],
    ".pf-c-about-modal-box .pf-c-button": [{
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
    ".pf-c-about-modal-box__close .pf-c-button:hover": [{
      "property": "--pf-c-about-modal-box__close--c-button--BackgroundColor",
      "value": "rgba(3, 3, 3, 0.4)",
      "token": "c_about_modal_box__close_c_button_BackgroundColor",
      "values": ["--pf-c-about-modal-box__close--c-button--hover--BackgroundColor", "rgba(3, 3, 3, 0.4)"]
    }]
  };
});