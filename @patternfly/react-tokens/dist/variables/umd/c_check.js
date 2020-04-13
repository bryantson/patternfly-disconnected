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
    ".pf-c-check": [{
      "property": "--pf-c-check--GridGap",
      "value": "0.25rem 0.5rem",
      "token": "c_check_GridGap",
      "values": ["--pf-global--spacer--xs --pf-global--spacer--sm", "$pf-global--spacer--xs $pf-global--spacer--sm", "pf-size-prem(4px) pf-size-prem(8px)", "0.25rem 0.5rem"]
    }, {
      "property": "--pf-c-check__label--disabled--Color",
      "value": "#737679",
      "token": "c_check__label_disabled_Color",
      "values": ["--pf-global--disabled-color--100", "$pf-global--disabled-color--100", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-check__label--Color",
      "value": "#151515",
      "token": "c_check__label_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-check__label--FontWeight",
      "value": "400",
      "token": "c_check__label_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-check__label--FontSize",
      "value": "1rem",
      "token": "c_check__label_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-check__label--LineHeight",
      "value": "1.3",
      "token": "c_check__label_LineHeight",
      "values": ["--pf-global--LineHeight--sm", "$pf-global--LineHeight--sm", "1.3"]
    }, {
      "property": "--pf-c-check__input--MarginTop",
      "value": "-0.1875rem",
      "token": "c_check__input_MarginTop"
    }, {
      "property": "--pf-c-check__description--FontSize",
      "value": "0.875rem",
      "token": "c_check__description_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-check__description--Color",
      "value": "#737679",
      "token": "c_check__description_Color",
      "values": ["--pf-global--Color--200", "$pf-global--Color--200", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-check__label:disabled": [{
      "property": "--pf-c-check__label--Color",
      "value": "#737679",
      "token": "c_check__label_Color",
      "values": ["--pf-c-check__label--disabled--Color", "--pf-global--disabled-color--100", "$pf-global--disabled-color--100", "$pf-color-black-600", "#737679"]
    }]
  };
});