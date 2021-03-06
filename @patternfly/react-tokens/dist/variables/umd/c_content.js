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
    ".pf-c-content": [{
      "property": "--pf-c-content--MarginBottom",
      "value": "1rem",
      "token": "c_content_MarginBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--LineHeight",
      "value": "1.5",
      "token": "c_content_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-content--FontSize",
      "value": "1rem",
      "token": "c_content_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--FontWeight",
      "value": "400",
      "token": "c_content_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-content--Color",
      "value": "#151515",
      "token": "c_content_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-content--heading--FontFamily",
      "value": "\"overpass\", overpass, \"open sans\", -apple-system, blinkmacsystemfont, \"Segoe UI\", roboto, \"Helvetica Neue\", arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
      "token": "c_content_heading_FontFamily",
      "values": ["--pf-global--FontFamily--heading--sans-serif", "$pf-global--FontFamily--heading--sans-serif", "$pf-global--FontFamily--sans-serif", "\"overpass\", overpass, \"open sans\", -apple-system, blinkmacsystemfont, \"Segoe UI\", roboto, \"Helvetica Neue\", arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""]
    }, {
      "property": "--pf-c-content--h1--MarginTop",
      "value": "1.5rem",
      "token": "c_content_h1_MarginTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-content--h1--MarginBottom",
      "value": "0.5rem",
      "token": "c_content_h1_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--h1--LineHeight",
      "value": "1.3",
      "token": "c_content_h1_LineHeight",
      "values": ["--pf-global--LineHeight--sm", "$pf-global--LineHeight--sm", "1.3"]
    }, {
      "property": "--pf-c-content--h1--FontSize",
      "value": "1.5rem",
      "token": "c_content_h1_FontSize",
      "values": ["--pf-global--FontSize--2xl", "$pf-global--FontSize--2xl", "pf-font-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-content--h1--FontWeight",
      "value": "400",
      "token": "c_content_h1_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-content--h2--MarginTop",
      "value": "1.5rem",
      "token": "c_content_h2_MarginTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-content--h2--MarginBottom",
      "value": "0.5rem",
      "token": "c_content_h2_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--h2--LineHeight",
      "value": "1.3",
      "token": "c_content_h2_LineHeight",
      "values": ["--pf-global--LineHeight--sm", "$pf-global--LineHeight--sm", "1.3"]
    }, {
      "property": "--pf-c-content--h2--FontSize",
      "value": "1.25rem",
      "token": "c_content_h2_FontSize",
      "values": ["--pf-global--FontSize--xl", "$pf-global--FontSize--xl", "pf-font-prem(20px)", "1.25rem"]
    }, {
      "property": "--pf-c-content--h2--FontWeight",
      "value": "400",
      "token": "c_content_h2_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-content--h3--MarginTop",
      "value": "1.5rem",
      "token": "c_content_h3_MarginTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-content--h3--MarginBottom",
      "value": "0.5rem",
      "token": "c_content_h3_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--h3--LineHeight",
      "value": "1.5",
      "token": "c_content_h3_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-content--h3--FontSize",
      "value": "1.125rem",
      "token": "c_content_h3_FontSize",
      "values": ["--pf-global--FontSize--lg", "$pf-global--FontSize--lg", "pf-font-prem(18px)", "1.125rem"]
    }, {
      "property": "--pf-c-content--h3--FontWeight",
      "value": "400",
      "token": "c_content_h3_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-content--h4--MarginTop",
      "value": "1.5rem",
      "token": "c_content_h4_MarginTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-content--h4--MarginBottom",
      "value": "0.5rem",
      "token": "c_content_h4_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--h4--LineHeight",
      "value": "1.5",
      "token": "c_content_h4_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-content--h4--FontSize",
      "value": "1rem",
      "token": "c_content_h4_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--h4--FontWeight",
      "value": "500",
      "token": "c_content_h4_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-content--h5--MarginTop",
      "value": "1.5rem",
      "token": "c_content_h5_MarginTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-content--h5--MarginBottom",
      "value": "0.5rem",
      "token": "c_content_h5_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--h5--LineHeight",
      "value": "1.5",
      "token": "c_content_h5_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-content--h5--FontSize",
      "value": "1rem",
      "token": "c_content_h5_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--h5--FontWeight",
      "value": "500",
      "token": "c_content_h5_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-content--h6--MarginTop",
      "value": "1.5rem",
      "token": "c_content_h6_MarginTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-content--h6--MarginBottom",
      "value": "0.5rem",
      "token": "c_content_h6_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--h6--LineHeight",
      "value": "1.5",
      "token": "c_content_h6_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-content--h6--FontSize",
      "value": "1rem",
      "token": "c_content_h6_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--h6--FontWeight",
      "value": "500",
      "token": "c_content_h6_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-content--small--MarginBottom",
      "value": "1rem",
      "token": "c_content_small_MarginBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--small--LineHeight",
      "value": "1.5",
      "token": "c_content_small_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-content--small--FontSize",
      "value": "0.875rem",
      "token": "c_content_small_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-content--small--Color",
      "value": "#737679",
      "token": "c_content_small_Color",
      "values": ["--pf-global--Color--200", "$pf-global--Color--200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-content--small--FontWeight",
      "value": "500",
      "token": "c_content_small_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-content--a--Color",
      "value": "#06c",
      "token": "c_content_a_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-content--a--TextDecoration",
      "value": "none",
      "token": "c_content_a_TextDecoration",
      "values": ["--pf-global--link--TextDecoration", "$pf-global--link--TextDecoration", "none"]
    }, {
      "property": "--pf-c-content--a--hover--Color",
      "value": "#004080",
      "token": "c_content_a_hover_Color",
      "values": ["--pf-global--link--Color--hover", "$pf-global--link--Color--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }, {
      "property": "--pf-c-content--a--hover--TextDecoration",
      "value": "underline",
      "token": "c_content_a_hover_TextDecoration",
      "values": ["--pf-global--link--TextDecoration--hover", "$pf-global--link--TextDecoration--hover", "underline"]
    }, {
      "property": "--pf-c-content--blockquote--PaddingTop",
      "value": "1rem",
      "token": "c_content_blockquote_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--blockquote--PaddingRight",
      "value": "1rem",
      "token": "c_content_blockquote_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--blockquote--PaddingBottom",
      "value": "1rem",
      "token": "c_content_blockquote_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--blockquote--PaddingLeft",
      "value": "1rem",
      "token": "c_content_blockquote_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--blockquote--FontWeight",
      "value": "300",
      "token": "c_content_blockquote_FontWeight",
      "values": ["--pf-global--FontWeight--light", "$pf-global--FontWeight--light", "300"]
    }, {
      "property": "--pf-c-content--blockquote--Color",
      "value": "#737679",
      "token": "c_content_blockquote_Color",
      "values": ["--pf-global--Color--200", "$pf-global--Color--200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-content--blockquote--BorderLeftColor",
      "value": "#d2d2d2",
      "token": "c_content_blockquote_BorderLeftColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-content--blockquote--BorderLeftWidth",
      "value": "3px",
      "token": "c_content_blockquote_BorderLeftWidth",
      "values": ["--pf-global--BorderWidth--lg", "$pf-global--BorderWidth--lg", "3px"]
    }, {
      "property": "--pf-c-content--ol--PaddingLeft",
      "value": "1.5rem",
      "token": "c_content_ol_PaddingLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-content--ol--MarginTop",
      "value": "1rem",
      "token": "c_content_ol_MarginTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--ol--MarginLeft",
      "value": "1.5rem",
      "token": "c_content_ol_MarginLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-content--ol--nested--MarginTop",
      "value": "0.5rem",
      "token": "c_content_ol_nested_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--ol--nested--MarginLeft",
      "value": "0.5rem",
      "token": "c_content_ol_nested_MarginLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--ul--PaddingLeft",
      "value": "1.5rem",
      "token": "c_content_ul_PaddingLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-content--ul--MarginTop",
      "value": "1rem",
      "token": "c_content_ul_MarginTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--ul--MarginLeft",
      "value": "1.5rem",
      "token": "c_content_ul_MarginLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-content--ul--nested--MarginTop",
      "value": "0.5rem",
      "token": "c_content_ul_nested_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--ul--nested--MarginLeft",
      "value": "0.5rem",
      "token": "c_content_ul_nested_MarginLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--ul--ListStyle",
      "value": "disc outside",
      "token": "c_content_ul_ListStyle",
      "values": ["--pf-global--ListStyle", "$pf-global--ListStyle", "disc outside"]
    }, {
      "property": "--pf-c-content--li--MarginTop",
      "value": "0.5rem",
      "token": "c_content_li_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--dl--ColumnGap",
      "value": "3rem",
      "token": "c_content_dl_ColumnGap",
      "values": ["--pf-global--spacer--2xl", "$pf-global--spacer--2xl", "pf-size-prem(48px)", "3rem"]
    }, {
      "property": "--pf-c-content--dl--RowGap",
      "value": "1rem",
      "token": "c_content_dl_RowGap",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--dt--FontWeight",
      "value": "500",
      "token": "c_content_dt_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }, {
      "property": "--pf-c-content--dt--MarginTop",
      "value": "1rem",
      "token": "c_content_dt_MarginTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-content--dt--sm--MarginTop",
      "value": "0",
      "token": "c_content_dt_sm_MarginTop"
    }, {
      "property": "--pf-c-content--hr--Height",
      "value": "1px",
      "token": "c_content_hr_Height",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-content--hr--BackgroundColor",
      "value": "#d2d2d2",
      "token": "c_content_hr_BackgroundColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }],
    ".pf-c-content a:hover": [{
      "property": "--pf-c-content--a--Color",
      "value": "#004080",
      "token": "c_content_a_Color",
      "values": ["--pf-c-content--a--hover--Color", "--pf-global--link--Color--hover", "$pf-global--link--Color--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }, {
      "property": "--pf-c-content--a--TextDecoration",
      "value": "underline",
      "token": "c_content_a_TextDecoration",
      "values": ["--pf-c-content--a--hover--TextDecoration", "--pf-global--link--TextDecoration--hover", "$pf-global--link--TextDecoration--hover", "underline"]
    }],
    ".pf-c-content ol ul": [{
      "property": "--pf-c-content--ul--MarginTop",
      "value": "0.5rem",
      "token": "c_content_ul_MarginTop",
      "values": ["--pf-c-content--ul--nested--MarginTop", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--ul--MarginLeft",
      "value": "0.5rem",
      "token": "c_content_ul_MarginLeft",
      "values": ["--pf-c-content--ul--nested--MarginLeft", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-content ol ol": [{
      "property": "--pf-c-content--ol--MarginTop",
      "value": "0.5rem",
      "token": "c_content_ol_MarginTop",
      "values": ["--pf-c-content--ol--nested--MarginTop", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--ol--MarginLeft",
      "value": "0.5rem",
      "token": "c_content_ol_MarginLeft",
      "values": ["--pf-c-content--ol--nested--MarginLeft", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-content ul ul": [{
      "property": "--pf-c-content--ul--MarginTop",
      "value": "0.5rem",
      "token": "c_content_ul_MarginTop",
      "values": ["--pf-c-content--ul--nested--MarginTop", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--ul--MarginLeft",
      "value": "0.5rem",
      "token": "c_content_ul_MarginLeft",
      "values": ["--pf-c-content--ul--nested--MarginLeft", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-content ul ol": [{
      "property": "--pf-c-content--ol--MarginTop",
      "value": "0.5rem",
      "token": "c_content_ol_MarginTop",
      "values": ["--pf-c-content--ol--nested--MarginTop", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-content--ol--MarginLeft",
      "value": "0.5rem",
      "token": "c_content_ol_MarginLeft",
      "values": ["--pf-c-content--ol--nested--MarginLeft", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-m-redhat-font .pf-c-content": [{
      "property": "--pf-c-content--h2--LineHeight",
      "value": "1.5",
      "token": "c_content_h2_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-content--blockquote--FontWeight",
      "value": "400",
      "token": "c_content_blockquote_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-content--h4--FontWeight",
      "value": "400",
      "token": "c_content_h4_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-content--h5--FontWeight",
      "value": "400",
      "token": "c_content_h5_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-content--h6--FontWeight",
      "value": "400",
      "token": "c_content_h6_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }]
  };
});