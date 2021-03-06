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
    ".pf-c-list": [{
      "property": "--pf-c-list--PaddingLeft",
      "value": "1.5rem",
      "token": "c_list_PaddingLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-list--nested--MarginTop",
      "value": "0.5rem",
      "token": "c_list_nested_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-list--nested--MarginLeft",
      "value": "0.5rem",
      "token": "c_list_nested_MarginLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-list--ul--ListStyle",
      "value": "disc outside",
      "token": "c_list_ul_ListStyle",
      "values": ["--pf-global--ListStyle", "$pf-global--ListStyle", "disc outside"]
    }, {
      "property": "--pf-c-list--li--MarginTop",
      "value": "0.5rem",
      "token": "c_list_li_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-list--m-inline--li--MarginRight",
      "value": "1.5rem",
      "token": "c_list_m_inline_li_MarginRight",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }],
    ".pf-c-list.pf-m-inline": [{
      "property": "--pf-c-list--PaddingLeft",
      "value": "0",
      "token": "c_list_PaddingLeft"
    }],
    ".pf-c-list.pf-m-inline li": [{
      "property": "--pf-c-list--li--MarginTop",
      "value": "0",
      "token": "c_list_li_MarginTop"
    }]
  };
});