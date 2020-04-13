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
    ".pf-l-gallery": [{
      "property": "--pf-l-gallery--m-gutter--GridGap",
      "value": "1.5rem",
      "token": "l_gallery_m_gutter_GridGap",
      "values": ["--pf-global--gutter", "$pf-global--gutter", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-l-gallery--m-gutter--md--GridGap",
      "value": "1rem",
      "token": "l_gallery_m_gutter_md_GridGap",
      "values": ["--pf-global--gutter--md", "$pf-global--gutter--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-l-gallery--GridTemplateColumns",
      "value": "repeat(auto-fill, minmax(250px, 1fr))",
      "token": "l_gallery_GridTemplateColumns"
    }, {
      "property": "--pf-l-gallery--GridTemplateRows",
      "value": "auto",
      "token": "l_gallery_GridTemplateRows"
    }]
  };
});