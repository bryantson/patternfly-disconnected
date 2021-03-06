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
    ".pf-c-expandable": [{
      "property": "--pf-c-expandable__toggle--PaddingTop",
      "value": "0.375rem",
      "token": "c_expandable__toggle_PaddingTop",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-expandable__toggle--PaddingRight",
      "value": "1rem",
      "token": "c_expandable__toggle_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-expandable__toggle--PaddingBottom",
      "value": "0.375rem",
      "token": "c_expandable__toggle_PaddingBottom",
      "values": ["--pf-global--spacer--form-element", "$pf-global--spacer--form-element", "pf-size-prem(6px)", "0.375rem"]
    }, {
      "property": "--pf-c-expandable__toggle--PaddingLeft",
      "value": "0",
      "token": "c_expandable__toggle_PaddingLeft"
    }, {
      "property": "--pf-c-expandable__toggle--FontWeight",
      "value": "500",
      "token": "c_expandable__toggle_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-expandable__toggle--Color",
      "value": "#06c",
      "token": "c_expandable__toggle_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-expandable__toggle--hover--Color",
      "value": "#004080",
      "token": "c_expandable__toggle_hover_Color",
      "values": ["--pf-global--link--Color--hover", "$pf-global--link--Color--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }, {
      "property": "--pf-c-expandable__toggle--active--Color",
      "value": "#004080",
      "token": "c_expandable__toggle_active_Color",
      "values": ["--pf-global--link--Color--hover", "$pf-global--link--Color--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }, {
      "property": "--pf-c-expandable__toggle--focus--Color",
      "value": "#004080",
      "token": "c_expandable__toggle_focus_Color",
      "values": ["--pf-global--link--Color--hover", "$pf-global--link--Color--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }, {
      "property": "--pf-c-expandable__toggle--m-expanded--Color",
      "value": "#004080",
      "token": "c_expandable__toggle_m_expanded_Color",
      "values": ["--pf-global--link--Color--hover", "$pf-global--link--Color--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }, {
      "property": "--pf-c-expandable__toggle-icon--Transition",
      "value": ".2s ease-in 0s",
      "token": "c_expandable__toggle_icon_Transition"
    }, {
      "property": "--pf-c-expandable--m-expanded__toggle-icon--Transform",
      "value": "rotate(90deg)",
      "token": "c_expandable_m_expanded__toggle_icon_Transform"
    }, {
      "property": "--pf-c-expandable__toggle-icon--MarginRight",
      "value": "0.5rem",
      "token": "c_expandable__toggle_icon_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-expandable__toggle-icon--Color",
      "value": "#151515",
      "token": "c_expandable__toggle_icon_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-expandable__content--MarginTop",
      "value": "1rem",
      "token": "c_expandable__content_MarginTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }],
    ".pf-c-expandable.pf-m-expanded": [{
      "property": "--pf-c-expandable__toggle--Color",
      "value": "#004080",
      "token": "c_expandable__toggle_Color",
      "values": ["--pf-c-expandable__toggle--m-expanded--Color", "--pf-global--link--Color--hover", "$pf-global--link--Color--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }],
    ".pf-c-expandable .pf-c-expandable__toggle:hover": [{
      "property": "--pf-c-expandable__toggle--Color",
      "value": "#004080",
      "token": "c_expandable__toggle_Color",
      "values": ["--pf-c-expandable__toggle--hover--Color", "--pf-global--link--Color--hover", "$pf-global--link--Color--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }],
    ".pf-c-expandable .pf-c-expandable__toggle:active": [{
      "property": "--pf-c-expandable__toggle--Color",
      "value": "#004080",
      "token": "c_expandable__toggle_Color",
      "values": ["--pf-c-expandable__toggle--active--Color", "--pf-global--link--Color--hover", "$pf-global--link--Color--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }],
    ".pf-c-expandable .pf-c-expandable__toggle:focus": [{
      "property": "--pf-c-expandable__toggle--Color",
      "value": "#004080",
      "token": "c_expandable__toggle_Color",
      "values": ["--pf-c-expandable__toggle--focus--Color", "--pf-global--link--Color--hover", "$pf-global--link--Color--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }],
    ".pf-m-redhat-font .pf-c-expandable__toggle": [{
      "property": "--pf-c-expandable__toggle--FontWeight",
      "value": "400",
      "token": "c_expandable__toggle_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }]
  };
});