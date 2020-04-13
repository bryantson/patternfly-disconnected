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
    ".pf-c-divider": [{
      "property": "--pf-c-divider--Height",
      "value": "1px",
      "token": "c_divider_Height",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-divider--BackgroundColor",
      "value": "#d2d2d2",
      "token": "c_divider_BackgroundColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-divider--after--Height",
      "value": "1px",
      "token": "c_divider_after_Height",
      "values": ["--pf-c-divider--Height", "--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-divider--after--BackgroundColor",
      "value": "#d2d2d2",
      "token": "c_divider_after_BackgroundColor",
      "values": ["--pf-c-divider--BackgroundColor", "--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-divider--after--FlexBasis",
      "value": "100%",
      "token": "c_divider_after_FlexBasis"
    }, {
      "property": "--pf-c-divider--after--Inset",
      "value": "0%",
      "token": "c_divider_after_Inset"
    }, {
      "property": "--pf-c-divider--m-vertical--after--FlexBasis",
      "value": "100%",
      "token": "c_divider_m_vertical_after_FlexBasis"
    }, {
      "property": "--pf-c-divider--m-vertical--after--Width",
      "value": "1px",
      "token": "c_divider_m_vertical_after_Width",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }],
    ".pf-c-divider.pf-m-inset-none": [{
      "property": "--pf-c-divider--after--Inset",
      "value": "0%",
      "token": "c_divider_after_Inset"
    }],
    ".pf-c-divider.pf-m-inset-sm": [{
      "property": "--pf-c-divider--after--Inset",
      "value": "0.5rem",
      "token": "c_divider_after_Inset",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-divider.pf-m-inset-md": [{
      "property": "--pf-c-divider--after--Inset",
      "value": "1rem",
      "token": "c_divider_after_Inset",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-divider.pf-m-inset-lg": [{
      "property": "--pf-c-divider--after--Inset",
      "value": "1.5rem",
      "token": "c_divider_after_Inset",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-c-divider.pf-m-inset-xl": [{
      "property": "--pf-c-divider--after--Inset",
      "value": "2rem",
      "token": "c_divider_after_Inset",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }],
    ".pf-c-divider.pf-m-inset-2xl": [{
      "property": "--pf-c-divider--after--Inset",
      "value": "3rem",
      "token": "c_divider_after_Inset",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }],
    ".pf-c-divider.pf-m-inset-3xl": [{
      "property": "--pf-c-divider--after--Inset",
      "value": "4rem",
      "token": "c_divider_after_Inset",
      "values": ["--pf-global--spacer--3xl", "$pf-global--spacer--3xl", "pf-size-prem(64px)", "4rem"]
    }]
  };
});