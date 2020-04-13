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
    ".pf-c-alert-group": [{
      "property": "--pf-c-alert-group__item--MarginTop",
      "value": "0.5rem",
      "token": "c_alert_group__item_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-alert-group--m-toast--Top",
      "value": "3rem",
      "token": "c_alert_group_m_toast_Top",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-alert-group--m-toast--Right",
      "value": "2rem",
      "token": "c_alert_group_m_toast_Right",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-alert-group--m-toast--MaxWidth",
      "value": "37.5rem",
      "token": "c_alert_group_m_toast_MaxWidth"
    }, {
      "property": "--pf-c-alert-group--m-toast--ZIndex",
      "value": "600",
      "token": "c_alert_group_m_toast_ZIndex",
      "values": ["--pf-global--ZIndex--2xl", "$pf-global--ZIndex--2xl", "600"]
    }]
  };
});