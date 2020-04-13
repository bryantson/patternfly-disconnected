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
    ".pf-c-progress": [{
      "property": "--pf-c-progress--GridGap",
      "value": "1rem",
      "token": "c_progress_GridGap",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-progress__bar--before--BackgroundColor",
      "value": "#06c",
      "token": "c_progress__bar_before_BackgroundColor",
      "values": ["--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-progress__bar--Height",
      "value": "1rem",
      "token": "c_progress__bar_Height",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-progress__bar--BackgroundColor",
      "value": "#fff",
      "token": "c_progress__bar_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-100", "$pf-global--BackgroundColor--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-progress__status-icon--Color",
      "value": "#151515",
      "token": "c_progress__status_icon_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-progress__status-icon--MarginLeft",
      "value": "0.5rem",
      "token": "c_progress__status_icon_MarginLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-progress__bar--before--Opacity",
      "value": ".2",
      "token": "c_progress__bar_before_Opacity"
    }, {
      "property": "--pf-c-progress__indicator--Height",
      "value": "1rem",
      "token": "c_progress__indicator_Height",
      "values": ["--pf-c-progress__bar--Height", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-progress__indicator--BackgroundColor",
      "value": "#06c",
      "token": "c_progress__indicator_BackgroundColor",
      "values": ["--pf-c-progress__bar--before--BackgroundColor", "--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-progress--m-danger__bar--BackgroundColor",
      "value": "#c9190b",
      "token": "c_progress_m_danger__bar_BackgroundColor",
      "values": ["--pf-global--danger-color--100", "$pf-global--danger-color--100", "$pf-color-red-100", "#c9190b"]
    }, {
      "property": "--pf-c-progress--m-success__bar--BackgroundColor",
      "value": "#92d400",
      "token": "c_progress_m_success__bar_BackgroundColor",
      "values": ["--pf-global--success-color--100", "$pf-global--success-color--100", "$pf-color-light-green-400", "#92d400"]
    }, {
      "property": "--pf-c-progress--m-danger__status-icon--Color",
      "value": "#c9190b",
      "token": "c_progress_m_danger__status_icon_Color",
      "values": ["--pf-global--danger-color--100", "$pf-global--danger-color--100", "$pf-color-red-100", "#c9190b"]
    }, {
      "property": "--pf-c-progress--m-success__status-icon--Color",
      "value": "#92d400",
      "token": "c_progress_m_success__status_icon_Color",
      "values": ["--pf-global--success-color--100", "$pf-global--success-color--100", "$pf-color-light-green-400", "#92d400"]
    }, {
      "property": "--pf-c-progress--m-inside__indicator--MinWidth",
      "value": "2rem",
      "token": "c_progress_m_inside__indicator_MinWidth",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-progress--m-inside__measure--Color",
      "value": "#fff",
      "token": "c_progress_m_inside__measure_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-progress--m-success--m-inside__measure--Color",
      "value": "#151515",
      "token": "c_progress_m_success_m_inside__measure_Color",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-progress--m-inside__measure--FontSize",
      "value": "0.875rem",
      "token": "c_progress_m_inside__measure_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-progress--m-outside__measure--FontSize",
      "value": "0.875rem",
      "token": "c_progress_m_outside__measure_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-progress--m-sm__bar--Height",
      "value": "0.5rem",
      "token": "c_progress_m_sm__bar_Height",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-progress--m-sm__description--FontSize",
      "value": "0.875rem",
      "token": "c_progress_m_sm__description_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-progress--m-sm__measure--FontSize",
      "value": "0.875rem",
      "token": "c_progress_m_sm__measure_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-progress--m-lg__bar--Height",
      "value": "1.5rem",
      "token": "c_progress_m_lg__bar_Height",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-c-progress.pf-m-sm": [{
      "property": "--pf-c-progress__bar--Height",
      "value": "0.5rem",
      "token": "c_progress__bar_Height",
      "values": ["--pf-c-progress--m-sm__bar--Height", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-progress.pf-m-lg": [{
      "property": "--pf-c-progress__bar--Height",
      "value": "1.5rem",
      "token": "c_progress__bar_Height",
      "values": ["--pf-c-progress--m-lg__bar--Height", "--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-c-progress.pf-m-success": [{
      "property": "--pf-c-progress__bar--before--BackgroundColor",
      "value": "#92d400",
      "token": "c_progress__bar_before_BackgroundColor",
      "values": ["--pf-c-progress--m-success__bar--BackgroundColor", "--pf-global--success-color--100", "$pf-global--success-color--100", "$pf-color-light-green-400", "#92d400"]
    }, {
      "property": "--pf-c-progress__status-icon--Color",
      "value": "#92d400",
      "token": "c_progress__status_icon_Color",
      "values": ["--pf-c-progress--m-success__status-icon--Color", "--pf-global--success-color--100", "$pf-global--success-color--100", "$pf-color-light-green-400", "#92d400"]
    }, {
      "property": "--pf-c-progress--m-inside__measure--Color",
      "value": "#151515",
      "token": "c_progress_m_inside__measure_Color",
      "values": ["--pf-c-progress--m-success--m-inside__measure--Color", "--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }],
    ".pf-c-progress.pf-m-danger": [{
      "property": "--pf-c-progress__bar--before--BackgroundColor",
      "value": "#c9190b",
      "token": "c_progress__bar_before_BackgroundColor",
      "values": ["--pf-c-progress--m-danger__bar--BackgroundColor", "--pf-global--danger-color--100", "$pf-global--danger-color--100", "$pf-color-red-100", "#c9190b"]
    }, {
      "property": "--pf-c-progress__status-icon--Color",
      "value": "#c9190b",
      "token": "c_progress__status_icon_Color",
      "values": ["--pf-c-progress--m-danger__status-icon--Color", "--pf-global--danger-color--100", "$pf-global--danger-color--100", "$pf-color-red-100", "#c9190b"]
    }]
  };
});