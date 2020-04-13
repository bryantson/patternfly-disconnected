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
    ".pf-c-modal-box": [{
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
      "property": "--pf-c-modal-box--BackgroundColor",
      "value": "#fff",
      "token": "c_modal_box_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-modal-box--BorderColor",
      "value": "transparent",
      "token": "c_modal_box_BorderColor"
    }, {
      "property": "--pf-c-modal-box--PaddingTop",
      "value": "2rem",
      "token": "c_modal_box_PaddingTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-modal-box--PaddingRight",
      "value": "2rem",
      "token": "c_modal_box_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-modal-box--PaddingBottom",
      "value": "2rem",
      "token": "c_modal_box_PaddingBottom",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-modal-box--PaddingLeft",
      "value": "2rem",
      "token": "c_modal_box_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-modal-box--BorderSize",
      "value": "1px",
      "token": "c_modal_box_BorderSize",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-modal-box--BoxShadow",
      "value": "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)",
      "token": "c_modal_box_BoxShadow",
      "values": ["--pf-global--BoxShadow--lg", "$pf-global--BoxShadow--lg", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba($pf-color-black-1000, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba($pf-color-black-1000, .12)", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba(#030303, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba(#030303, .12)", "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)"]
    }, {
      "property": "--pf-c-modal-box--ZIndex",
      "value": "500",
      "token": "c_modal_box_ZIndex",
      "values": ["--pf-global--ZIndex--xl", "$pf-global--ZIndex--xl", "500"]
    }, {
      "property": "--pf-c-modal-box--Width",
      "value": "100%",
      "token": "c_modal_box_Width"
    }, {
      "property": "--pf-c-modal-box--MaxWidth",
      "value": "calc(100% - 2rem)",
      "token": "c_modal_box_MaxWidth",
      "values": ["calc(100% - --pf-global--spacer--xl)", "calc(100% - $pf-global--spacer--xl)", "calc(100% - pf-size-prem(32px))", "calc(100% - 2rem)"]
    }, {
      "property": "--pf-c-modal-box--m-sm--sm--MaxWidth",
      "value": "35rem",
      "token": "c_modal_box_m_sm_sm_MaxWidth"
    }, {
      "property": "--pf-c-modal-box--m-lg--lg--MaxWidth",
      "value": "70rem",
      "token": "c_modal_box_m_lg_lg_MaxWidth"
    }, {
      "property": "--pf-c-modal-box--MaxHeight",
      "value": "calc(100vh - 3rem)",
      "token": "c_modal_box_MaxHeight",
      "values": ["calc(100vh - --pf-global--spacer--2xl)", "calc(100vh - $pf-global--spacer--2xl)", "calc(100vh - pf-size-prem(48px))", "calc(100vh - 3rem)"]
    }, {
      "property": "--pf-c-modal-box__c-title--description--MarginTop",
      "value": "0.5rem",
      "token": "c_modal_box__c_title_description_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-modal-box--body--MinHeight",
      "value": "calc(1rem * 1.5)",
      "token": "c_modal_box_body_MinHeight",
      "values": ["calc(--pf-global--FontSize--md * --pf-global--LineHeight--md)", "calc($pf-global--FontSize--md * $pf-global--LineHeight--md)", "calc(pf-font-prem(16px) * 1.5)", "calc(1rem * 1.5)"]
    }, {
      "property": "--pf-c-modal-box__description--body--MarginTop",
      "value": "1.5rem",
      "token": "c_modal_box__description_body_MarginTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-modal-box--c-title--body--MarginTop",
      "value": "1.5rem",
      "token": "c_modal_box_c_title_body_MarginTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-modal-box--c-button--Top",
      "value": "calc(2rem - 0.375rem + 0.0625rem)",
      "token": "c_modal_box_c_button_Top",
      "values": ["calc(--pf-c-modal-box--PaddingTop - --pf-global--spacer--form-element + 0.0625rem)", "calc(--pf-global--spacer--xl - $pf-global--spacer--form-element + 0.0625rem)", "calc($pf-global--spacer--xl - $pf-global--spacer--form-element + 0.0625rem)", "calc(pf-size-prem(32px) - pf-size-prem(6px) + 0.0625rem)", "calc(2rem - 0.375rem + 0.0625rem)"]
    }, {
      "property": "--pf-c-modal-box--c-button--Right",
      "value": "1rem",
      "token": "c_modal_box_c_button_Right",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-modal-box--c-button--sibling--MarginRight",
      "value": "2rem",
      "token": "c_modal_box_c_button_sibling_MarginRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-modal-box__footer--MarginTop",
      "value": "2rem",
      "token": "c_modal_box__footer_MarginTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-modal-box__footer--c-button--MarginRight",
      "value": "1rem",
      "token": "c_modal_box__footer_c_button_MarginRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-modal-box__footer--c-button--sm--MarginRight",
      "value": "calc(1rem / 2)",
      "token": "c_modal_box__footer_c_button_sm_MarginRight",
      "values": ["calc(--pf-c-modal-box__footer--c-button--MarginRight / 2)", "calc(--pf-global--spacer--md / 2)", "calc($pf-global--spacer--md / 2)", "calc(pf-size-prem(16px) / 2)", "calc(1rem / 2)"]
    }, {
      "property": "--pf-c-modal-box__footer__c-button--first-of-type--MarginLeft",
      "value": "auto",
      "token": "c_modal_box__footer__c_button_first_of_type_MarginLeft"
    }],
    ".pf-c-modal-box__footer.pf-m-align-left": [{
      "property": "--pf-c-modal-box__footer__c-button--first-of-type--MarginLeft",
      "value": "0",
      "token": "c_modal_box__footer__c_button_first_of_type_MarginLeft"
    }]
  };
});