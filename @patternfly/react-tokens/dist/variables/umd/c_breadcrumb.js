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
    ".pf-c-breadcrumb": [{
      "property": "--pf-c-breadcrumb__item--FontSize",
      "value": "0.875rem",
      "token": "c_breadcrumb__item_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-breadcrumb__item--FontWeight",
      "value": "500",
      "token": "c_breadcrumb__item_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-breadcrumb__item--LineHeight",
      "value": "1.3",
      "token": "c_breadcrumb__item_LineHeight",
      "values": ["--pf-global--LineHeight--sm", "$pf-global--LineHeight--sm", "1.3"]
    }, {
      "property": "--pf-c-breadcrumb__item--MarginRight",
      "value": "0.5rem",
      "token": "c_breadcrumb__item_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-breadcrumb__item-divider--Color",
      "value": "#8a8d90",
      "token": "c_breadcrumb__item_divider_Color",
      "values": ["--pf-global--BorderColor--200", "$pf-global--BorderColor--200", "$pf-color-black-500", "#8a8d90"]
    }, {
      "property": "--pf-c-breadcrumb__item-divider--MarginLeft",
      "value": "0.5rem",
      "token": "c_breadcrumb__item_divider_MarginLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-breadcrumb__item-divider--FontSize",
      "value": "0.875rem",
      "token": "c_breadcrumb__item_divider_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-breadcrumb__link--FontWeight",
      "value": "500",
      "token": "c_breadcrumb__link_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-breadcrumb__link--m-current--Color",
      "value": "#151515",
      "token": "c_breadcrumb__link_m_current_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-breadcrumb__heading--FontSize",
      "value": "0.875rem",
      "token": "c_breadcrumb__heading_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }],
    ".pf-m-redhat-font .pf-c-breadcrumb": [{
      "property": "--pf-c-breadcrumb__link--FontWeight",
      "value": "400",
      "token": "c_breadcrumb__link_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-breadcrumb__item--FontWeight",
      "value": "400",
      "token": "c_breadcrumb__item_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }]
  };
});