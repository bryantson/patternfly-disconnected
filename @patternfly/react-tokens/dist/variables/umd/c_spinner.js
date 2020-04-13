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
    ".pf-c-spinner": [{
      "property": "--pf-c-spinner--AnimationDuration",
      "value": "1.5s",
      "token": "c_spinner_AnimationDuration"
    }, {
      "property": "--pf-c-spinner--AnimationTimingFunction",
      "value": "cubic-bezier(.77, .005, .315, 1)",
      "token": "c_spinner_AnimationTimingFunction"
    }, {
      "property": "--pf-c-spinner--diameter",
      "value": "3.375rem",
      "token": "c_spinner_diameter",
      "values": ["--pf-global--icon--FontSize--xl", "$pf-global--icon--FontSize--xl", "pf-font-prem(54px)", "3.375rem"]
    }, {
      "property": "--pf-c-spinner--stroke-width-multiplier",
      "value": ".1",
      "token": "c_spinner_stroke_width_multiplier"
    }, {
      "property": "--pf-c-spinner--stroke-width",
      "value": "calc(3.375rem * .1)",
      "token": "c_spinner_stroke_width",
      "values": ["calc(--pf-c-spinner--diameter * --pf-c-spinner--stroke-width-multiplier)", "calc(--pf-global--icon--FontSize--xl * .1)", "calc($pf-global--icon--FontSize--xl * .1)", "calc(pf-font-prem(54px) * .1)", "calc(3.375rem * .1)"]
    }, {
      "property": "--pf-c-spinner--Width",
      "value": "3.375rem",
      "token": "c_spinner_Width",
      "values": ["--pf-c-spinner--diameter", "--pf-global--icon--FontSize--xl", "$pf-global--icon--FontSize--xl", "pf-font-prem(54px)", "3.375rem"]
    }, {
      "property": "--pf-c-spinner--Height",
      "value": "3.375rem",
      "token": "c_spinner_Height",
      "values": ["--pf-c-spinner--diameter", "--pf-global--icon--FontSize--xl", "$pf-global--icon--FontSize--xl", "pf-font-prem(54px)", "3.375rem"]
    }, {
      "property": "--pf-c-spinner--Color",
      "value": "#06c",
      "token": "c_spinner_Color",
      "values": ["--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-spinner--m-sm--diameter",
      "value": "0.625rem",
      "token": "c_spinner_m_sm_diameter",
      "values": ["--pf-global--icon--FontSize--sm", "$pf-global--icon--FontSize--sm", "pf-font-prem(10px)", "0.625rem"]
    }, {
      "property": "--pf-c-spinner--m-md--diameter",
      "value": "1.125rem",
      "token": "c_spinner_m_md_diameter",
      "values": ["--pf-global--icon--FontSize--md", "$pf-global--icon--FontSize--md", "pf-font-prem(18px)", "1.125rem"]
    }, {
      "property": "--pf-c-spinner--m-lg--diameter",
      "value": "1.5rem",
      "token": "c_spinner_m_lg_diameter",
      "values": ["--pf-global--icon--FontSize--lg", "$pf-global--icon--FontSize--lg", "pf-font-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-spinner--m-xl--diameter",
      "value": "3.375rem",
      "token": "c_spinner_m_xl_diameter",
      "values": ["--pf-global--icon--FontSize--xl", "$pf-global--icon--FontSize--xl", "pf-font-prem(54px)", "3.375rem"]
    }, {
      "property": "--pf-c-spinner__clipper--Width",
      "value": "3.375rem",
      "token": "c_spinner__clipper_Width",
      "values": ["--pf-c-spinner--diameter", "--pf-global--icon--FontSize--xl", "$pf-global--icon--FontSize--xl", "pf-font-prem(54px)", "3.375rem"]
    }, {
      "property": "--pf-c-spinner__clipper--Height",
      "value": "3.375rem",
      "token": "c_spinner__clipper_Height",
      "values": ["--pf-c-spinner--diameter", "--pf-global--icon--FontSize--xl", "$pf-global--icon--FontSize--xl", "pf-font-prem(54px)", "3.375rem"]
    }, {
      "property": "--pf-c-spinner__clipper--after--BoxShadowColor",
      "value": "#06c",
      "token": "c_spinner__clipper_after_BoxShadowColor",
      "values": ["--pf-c-spinner--Color", "--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-spinner__clipper--after--Width",
      "value": "3.375rem",
      "token": "c_spinner__clipper_after_Width",
      "values": ["--pf-c-spinner--diameter", "--pf-global--icon--FontSize--xl", "$pf-global--icon--FontSize--xl", "pf-font-prem(54px)", "3.375rem"]
    }, {
      "property": "--pf-c-spinner__clipper--after--Height",
      "value": "3.375rem",
      "token": "c_spinner__clipper_after_Height",
      "values": ["--pf-c-spinner--diameter", "--pf-global--icon--FontSize--xl", "$pf-global--icon--FontSize--xl", "pf-font-prem(54px)", "3.375rem"]
    }, {
      "property": "--pf-c-spinner__clipper--after--BoxShadowSpreadRadius",
      "value": "calc(3.375rem * .1)",
      "token": "c_spinner__clipper_after_BoxShadowSpreadRadius",
      "values": ["--pf-c-spinner--stroke-width", "calc(--pf-c-spinner--diameter * --pf-c-spinner--stroke-width-multiplier)", "calc(--pf-global--icon--FontSize--xl * .1)", "calc($pf-global--icon--FontSize--xl * .1)", "calc(pf-font-prem(54px) * .1)", "calc(3.375rem * .1)"]
    }, {
      "property": "--pf-c-spinner__lead-ball--after--BackgroundColor",
      "value": "#06c",
      "token": "c_spinner__lead_ball_after_BackgroundColor",
      "values": ["--pf-c-spinner--Color", "--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-spinner__ball--after--Width",
      "value": "calc(3.375rem * .1)",
      "token": "c_spinner__ball_after_Width",
      "values": ["--pf-c-spinner--stroke-width", "calc(--pf-c-spinner--diameter * --pf-c-spinner--stroke-width-multiplier)", "calc(--pf-global--icon--FontSize--xl * .1)", "calc($pf-global--icon--FontSize--xl * .1)", "calc(pf-font-prem(54px) * .1)", "calc(3.375rem * .1)"]
    }, {
      "property": "--pf-c-spinner__ball--after--Height",
      "value": "calc(3.375rem * .1)",
      "token": "c_spinner__ball_after_Height",
      "values": ["--pf-c-spinner--stroke-width", "calc(--pf-c-spinner--diameter * --pf-c-spinner--stroke-width-multiplier)", "calc(--pf-global--icon--FontSize--xl * .1)", "calc($pf-global--icon--FontSize--xl * .1)", "calc(pf-font-prem(54px) * .1)", "calc(3.375rem * .1)"]
    }, {
      "property": "--pf-c-spinner__tail-ball--after--BackgroundColor",
      "value": "#06c",
      "token": "c_spinner__tail_ball_after_BackgroundColor",
      "values": ["--pf-c-spinner--Color", "--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-spinner.pf-m-sm": [{
      "property": "--pf-c-spinner--diameter",
      "value": "0.625rem",
      "token": "c_spinner_diameter",
      "values": ["--pf-c-spinner--m-sm--diameter", "--pf-global--icon--FontSize--sm", "$pf-global--icon--FontSize--sm", "pf-font-prem(10px)", "0.625rem"]
    }],
    ".pf-c-spinner.pf-m-md": [{
      "property": "--pf-c-spinner--diameter",
      "value": "1.125rem",
      "token": "c_spinner_diameter",
      "values": ["--pf-c-spinner--m-md--diameter", "--pf-global--icon--FontSize--md", "$pf-global--icon--FontSize--md", "pf-font-prem(18px)", "1.125rem"]
    }],
    ".pf-c-spinner.pf-m-lg": [{
      "property": "--pf-c-spinner--diameter",
      "value": "1.5rem",
      "token": "c_spinner_diameter",
      "values": ["--pf-c-spinner--m-lg--diameter", "--pf-global--icon--FontSize--lg", "$pf-global--icon--FontSize--lg", "pf-font-prem(24px)", "1.5rem"]
    }],
    ".pf-c-spinner.pf-m-xl": [{
      "property": "--pf-c-spinner--diameter",
      "value": "3.375rem",
      "token": "c_spinner_diameter",
      "values": ["--pf-c-spinner--m-xl--diameter", "--pf-global--icon--FontSize--xl", "$pf-global--icon--FontSize--xl", "pf-font-prem(54px)", "3.375rem"]
    }]
  };
});