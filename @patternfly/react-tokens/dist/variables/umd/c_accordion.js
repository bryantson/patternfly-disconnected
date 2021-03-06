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
    ".pf-c-accordion": [{
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
      "property": "--pf-c-accordion--BackgroundColor",
      "value": "#fff",
      "token": "c_accordion_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-accordion--BorderWidth",
      "value": "1px",
      "token": "c_accordion_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-accordion--BoxShadow",
      "value": "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)",
      "token": "c_accordion_BoxShadow",
      "values": ["--pf-global--BoxShadow--md", "$pf-global--BoxShadow--md", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba($pf-color-black-1000, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba($pf-color-black-1000, .06)", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba(#030303, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba(#030303, .06)", "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)"]
    }, {
      "property": "--pf-c-accordion--PaddingTop",
      "value": "2rem",
      "token": "c_accordion_PaddingTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-accordion--PaddingBottom",
      "value": "2rem",
      "token": "c_accordion_PaddingBottom",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-accordion__toggle--PaddingTop",
      "value": "0.5rem",
      "token": "c_accordion__toggle_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-accordion__toggle--PaddingRight",
      "value": "2rem",
      "token": "c_accordion__toggle_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-accordion__toggle--PaddingBottom",
      "value": "0.5rem",
      "token": "c_accordion__toggle_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-accordion__toggle--PaddingLeft",
      "value": "2rem",
      "token": "c_accordion__toggle_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-accordion__toggle--BorderLeftColor",
      "value": "transparent",
      "token": "c_accordion__toggle_BorderLeftColor"
    }, {
      "property": "--pf-c-accordion__toggle--hover--BackgroundColor",
      "value": "#f5f5f5",
      "token": "c_accordion__toggle_hover_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--150", "$pf-global--BackgroundColor--150", "$pf-color-black-150", "#f5f5f5"]
    }, {
      "property": "--pf-c-accordion__toggle--focus--BackgroundColor",
      "value": "#f5f5f5",
      "token": "c_accordion__toggle_focus_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--150", "$pf-global--BackgroundColor--150", "$pf-color-black-150", "#f5f5f5"]
    }, {
      "property": "--pf-c-accordion__toggle--active--BackgroundColor",
      "value": "#f5f5f5",
      "token": "c_accordion__toggle_active_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--150", "$pf-global--BackgroundColor--150", "$pf-color-black-150", "#f5f5f5"]
    }, {
      "property": "--pf-c-accordion__toggle--m-expanded--BorderWidth",
      "value": "3px",
      "token": "c_accordion__toggle_m_expanded_BorderWidth",
      "values": ["--pf-global--BorderWidth--lg", "$pf-global--BorderWidth--lg", "3px"]
    }, {
      "property": "--pf-c-accordion__toggle--m-expanded--BorderLeftColor",
      "value": "#06c",
      "token": "c_accordion__toggle_m_expanded_BorderLeftColor",
      "values": ["--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-accordion__toggle-text--hover--Color",
      "value": "#06c",
      "token": "c_accordion__toggle_text_hover_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-accordion__toggle-text--hover--FontWeight",
      "value": "500",
      "token": "c_accordion__toggle_text_hover_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-accordion__toggle-text--active--Color",
      "value": "#06c",
      "token": "c_accordion__toggle_text_active_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-accordion__toggle-text--active--FontWeight",
      "value": "500",
      "token": "c_accordion__toggle_text_active_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-accordion__toggle-text--focus--Color",
      "value": "#06c",
      "token": "c_accordion__toggle_text_focus_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-accordion__toggle-text--focus--FontWeight",
      "value": "500",
      "token": "c_accordion__toggle_text_focus_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-accordion__toggle-text--expanded--Color",
      "value": "#06c",
      "token": "c_accordion__toggle_text_expanded_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-accordion__toggle-text--expanded--FontWeight",
      "value": "500",
      "token": "c_accordion__toggle_text_expanded_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-accordion__toggle-text--MaxWidth",
      "value": "calc(100% - 1.5rem)",
      "token": "c_accordion__toggle_text_MaxWidth",
      "values": ["calc(100% - --pf-global--spacer--lg)", "calc(100% - $pf-global--spacer--lg)", "calc(100% - pf-size-prem(24px))", "calc(100% - 1.5rem)"]
    }, {
      "property": "--pf-c-accordion__toggle-icon--LineHeight",
      "value": "1.5",
      "token": "c_accordion__toggle_icon_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-accordion__toggle-icon--Transition",
      "value": ".2s ease-in 0s",
      "token": "c_accordion__toggle_icon_Transition"
    }, {
      "property": "--pf-c-accordion__toggle--m-expanded__toggle-icon--Transform",
      "value": "rotate(90deg)",
      "token": "c_accordion__toggle_m_expanded__toggle_icon_Transform"
    }, {
      "property": "--pf-c-accordion__expanded-content-body--PaddingTop",
      "value": "0.5rem",
      "token": "c_accordion__expanded_content_body_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-accordion__expanded-content-body--PaddingRight",
      "value": "2rem",
      "token": "c_accordion__expanded_content_body_PaddingRight",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-accordion__expanded-content-body--PaddingBottom",
      "value": "0.5rem",
      "token": "c_accordion__expanded_content_body_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-accordion__expanded-content-body--PaddingLeft",
      "value": "2rem",
      "token": "c_accordion__expanded_content_body_PaddingLeft",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-accordion__expanded-content--Color",
      "value": "#737679",
      "token": "c_accordion__expanded_content_Color",
      "values": ["--pf-global--secondary-color--100", "$pf-global--secondary-color--100", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-accordion__expanded-content--FontSize",
      "value": "0.875rem",
      "token": "c_accordion__expanded_content_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-accordion__expanded-content--BorderLeftColor",
      "value": "transparent",
      "token": "c_accordion__expanded_content_BorderLeftColor"
    }, {
      "property": "--pf-c-accordion__expanded-content--m-expanded--BorderWidth",
      "value": "3px",
      "token": "c_accordion__expanded_content_m_expanded_BorderWidth",
      "values": ["--pf-global--BorderWidth--lg", "$pf-global--BorderWidth--lg", "3px"]
    }, {
      "property": "--pf-c-accordion__expanded-content--m-expanded--BorderLeftColor",
      "value": "#06c",
      "token": "c_accordion__expanded_content_m_expanded_BorderLeftColor",
      "values": ["--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-accordion__expanded-content--m-fixed--MaxHeight",
      "value": "9.375rem",
      "token": "c_accordion__expanded_content_m_fixed_MaxHeight"
    }],
    ".pf-c-accordion.pf-m-no-box-shadow": [{
      "property": "--pf-c-accordion--BoxShadow",
      "value": "none",
      "token": "c_accordion_BoxShadow"
    }],
    ".pf-c-accordion__toggle.pf-m-expanded": [{
      "property": "--pf-c-accordion__toggle--BorderLeftColor",
      "value": "#06c",
      "token": "c_accordion__toggle_BorderLeftColor",
      "values": ["--pf-c-accordion__toggle--m-expanded--BorderLeftColor", "--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-accordion__expanded-content.pf-m-expanded": [{
      "property": "--pf-c-accordion__expanded-content--BorderLeftColor",
      "value": "#06c",
      "token": "c_accordion__expanded_content_BorderLeftColor",
      "values": ["--pf-c-accordion__expanded-content--m-expanded--BorderLeftColor", "--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }]
  };
});