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
    ".pf-c-title": [{
      "property": "--pf-c-title--FontFamily",
      "value": "\"overpass\", overpass, \"open sans\", -apple-system, blinkmacsystemfont, \"Segoe UI\", roboto, \"Helvetica Neue\", arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
      "token": "c_title_FontFamily",
      "values": ["--pf-global--FontFamily--heading--sans-serif", "$pf-global--FontFamily--heading--sans-serif", "$pf-global--FontFamily--sans-serif", "\"overpass\", overpass, \"open sans\", -apple-system, blinkmacsystemfont, \"Segoe UI\", roboto, \"Helvetica Neue\", arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""]
    }, {
      "property": "--pf-c-title--m-4xl--LineHeight",
      "value": "1.3",
      "token": "c_title_m_4xl_LineHeight",
      "values": ["--pf-global--LineHeight--sm", "$pf-global--LineHeight--sm", "1.3"]
    }, {
      "property": "--pf-c-title--m-4xl--FontSize",
      "value": "2.25rem",
      "token": "c_title_m_4xl_FontSize",
      "values": ["--pf-global--FontSize--4xl", "$pf-global--FontSize--4xl", "pf-font-prem(36px)", "2.25rem"]
    }, {
      "property": "--pf-c-title--m-4xl--FontWeight",
      "value": "400",
      "token": "c_title_m_4xl_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-title--m-3xl--LineHeight",
      "value": "1.3",
      "token": "c_title_m_3xl_LineHeight",
      "values": ["--pf-global--LineHeight--sm", "$pf-global--LineHeight--sm", "1.3"]
    }, {
      "property": "--pf-c-title--m-3xl--FontSize",
      "value": "1.75rem",
      "token": "c_title_m_3xl_FontSize",
      "values": ["--pf-global--FontSize--3xl", "$pf-global--FontSize--3xl", "pf-font-prem(28px)", "1.75rem"]
    }, {
      "property": "--pf-c-title--m-3xl--FontWeight",
      "value": "400",
      "token": "c_title_m_3xl_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-title--m-2xl--LineHeight",
      "value": "1.3",
      "token": "c_title_m_2xl_LineHeight",
      "values": ["--pf-global--LineHeight--sm", "$pf-global--LineHeight--sm", "1.3"]
    }, {
      "property": "--pf-c-title--m-2xl--FontSize",
      "value": "1.5rem",
      "token": "c_title_m_2xl_FontSize",
      "values": ["--pf-global--FontSize--2xl", "$pf-global--FontSize--2xl", "pf-font-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-title--m-2xl--FontWeight",
      "value": "400",
      "token": "c_title_m_2xl_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-title--m-xl--LineHeight",
      "value": "1.5",
      "token": "c_title_m_xl_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-title--m-xl--FontSize",
      "value": "1.25rem",
      "token": "c_title_m_xl_FontSize",
      "values": ["--pf-global--FontSize--xl", "$pf-global--FontSize--xl", "pf-font-prem(20px)", "1.25rem"]
    }, {
      "property": "--pf-c-title--m-xl--FontWeight",
      "value": "400",
      "token": "c_title_m_xl_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-title--m-lg--LineHeight",
      "value": "1.5",
      "token": "c_title_m_lg_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-title--m-lg--FontSize",
      "value": "1.125rem",
      "token": "c_title_m_lg_FontSize",
      "values": ["--pf-global--FontSize--lg", "$pf-global--FontSize--lg", "pf-font-prem(18px)", "1.125rem"]
    }, {
      "property": "--pf-c-title--m-lg--FontWeight",
      "value": "500",
      "token": "c_title_m_lg_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-title--m-md--LineHeight",
      "value": "1.5",
      "token": "c_title_m_md_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-title--m-md--FontSize",
      "value": "1rem",
      "token": "c_title_m_md_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-title--m-md--FontWeight",
      "value": "500",
      "token": "c_title_m_md_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }],
    ".pf-m-redhat-font .pf-c-title": [{
      "property": "--pf-c-title--m-lg--FontWeight",
      "value": "400",
      "token": "c_title_m_lg_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-title--m-md--FontWeight",
      "value": "400",
      "token": "c_title_m_md_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }]
  };
});