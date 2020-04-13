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
    ".pf-c-badge": [{
      "property": "--pf-c-badge--BorderRadius",
      "value": "30em",
      "token": "c_badge_BorderRadius",
      "values": ["--pf-global--BorderRadius--lg", "$pf-global--BorderRadius--lg", "30em"]
    }, {
      "property": "--pf-c-badge--FontSize",
      "value": "0.75rem",
      "token": "c_badge_FontSize",
      "values": ["--pf-global--FontSize--xs", "$pf-global--FontSize--xs", "pf-font-prem(12px)", "0.75rem"]
    }, {
      "property": "--pf-c-badge--FontWeight",
      "value": "600",
      "token": "c_badge_FontWeight",
      "values": ["--pf-global--FontWeight--bold", "$pf-global--FontWeight--bold", "600"]
    }, {
      "property": "--pf-c-badge--PaddingRight",
      "value": "0.5rem",
      "token": "c_badge_PaddingRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-badge--PaddingLeft",
      "value": "0.5rem",
      "token": "c_badge_PaddingLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-badge--Color",
      "value": "#151515",
      "token": "c_badge_Color",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-badge--MinWidth",
      "value": "2rem",
      "token": "c_badge_MinWidth",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-badge--m-read--BackgroundColor",
      "value": "#ededed",
      "token": "c_badge_m_read_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--300", "$pf-global--BackgroundColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-badge--m-read--Color",
      "value": "#151515",
      "token": "c_badge_m_read_Color",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-badge--m-unread--BackgroundColor",
      "value": "#06c",
      "token": "c_badge_m_unread_BackgroundColor",
      "values": ["--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-badge--m-unread--Color",
      "value": "#fff",
      "token": "c_badge_m_unread_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }],
    ".pf-c-badge.pf-m-read": [{
      "property": "--pf-c-badge--Color",
      "value": "#151515",
      "token": "c_badge_Color",
      "values": ["--pf-c-badge--m-read--Color", "--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-badge--BackgroundColor",
      "value": "#ededed",
      "token": "c_badge_BackgroundColor",
      "values": ["--pf-c-badge--m-read--BackgroundColor", "--pf-global--BackgroundColor--300", "$pf-global--BackgroundColor--300", "$pf-color-black-200", "#ededed"]
    }],
    ".pf-c-badge.pf-m-unread": [{
      "property": "--pf-c-badge--Color",
      "value": "#fff",
      "token": "c_badge_Color",
      "values": ["--pf-c-badge--m-unread--Color", "--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-badge--BackgroundColor",
      "value": "#06c",
      "token": "c_badge_BackgroundColor",
      "values": ["--pf-c-badge--m-unread--BackgroundColor", "--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }]
  };
});