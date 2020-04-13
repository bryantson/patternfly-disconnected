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
    ".pf-c-clipboard-copy": [{
      "property": "--pf-c-clipboard-copy__group-toggle--PaddingRight",
      "value": "1rem",
      "token": "c_clipboard_copy__group_toggle_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--PaddingLeft",
      "value": "1rem",
      "token": "c_clipboard_copy__group_toggle_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--BorderWidth",
      "value": "1px",
      "token": "c_clipboard_copy__group_toggle_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--BorderTopColor",
      "value": "#ededed",
      "token": "c_clipboard_copy__group_toggle_BorderTopColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--BorderRightColor",
      "value": "#ededed",
      "token": "c_clipboard_copy__group_toggle_BorderRightColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--BorderBottomColor",
      "value": "#8a8d90",
      "token": "c_clipboard_copy__group_toggle_BorderBottomColor",
      "values": ["--pf-global--BorderColor--200", "$pf-global--BorderColor--200", "$pf-color-black-500", "#8a8d90"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--BorderLeftColor",
      "value": "#ededed",
      "token": "c_clipboard_copy__group_toggle_BorderLeftColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--hover--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_toggle_hover_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--active--BorderBottomWidth",
      "value": "2px",
      "token": "c_clipboard_copy__group_toggle_active_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--active--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_toggle_active_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--focus--BorderBottomWidth",
      "value": "2px",
      "token": "c_clipboard_copy__group_toggle_focus_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--focus--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_toggle_focus_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--m-expanded--BorderBottomWidth",
      "value": "2px",
      "token": "c_clipboard_copy__group_toggle_m_expanded_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--m-expanded--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_toggle_m_expanded_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle--OutlineOffset",
      "value": "calc(-1 * 0.25rem)",
      "token": "c_clipboard_copy__group_toggle_OutlineOffset",
      "values": ["calc(-1 * --pf-global--spacer--xs)", "calc(-1 * $pf-global--spacer--xs)", "calc(-1 * pf-size-prem(4px))", "calc(-1 * 0.25rem)"]
    }, {
      "property": "--pf-c-clipboard-copy__group-toggle-icon--Transition",
      "value": ".2s ease-in 0s",
      "token": "c_clipboard_copy__group_toggle_icon_Transition"
    }, {
      "property": "--pf-c-clipboard-copy--m-expanded__group-toggle-icon--Transform",
      "value": "rotate(90deg)",
      "token": "c_clipboard_copy_m_expanded__group_toggle_icon_Transform"
    }, {
      "property": "--pf-c-clipboard-copy__group-copy--PaddingRight",
      "value": "1rem",
      "token": "c_clipboard_copy__group_copy_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-clipboard-copy__group-copy--PaddingLeft",
      "value": "1rem",
      "token": "c_clipboard_copy__group_copy_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-clipboard-copy__group-copy--BorderWidth",
      "value": "1px",
      "token": "c_clipboard_copy__group_copy_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-clipboard-copy__group-copy--BorderTopColor",
      "value": "#ededed",
      "token": "c_clipboard_copy__group_copy_BorderTopColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-clipboard-copy__group-copy--BorderRightColor",
      "value": "#ededed",
      "token": "c_clipboard_copy__group_copy_BorderRightColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-clipboard-copy__group-copy--BorderBottomColor",
      "value": "#8a8d90",
      "token": "c_clipboard_copy__group_copy_BorderBottomColor",
      "values": ["--pf-global--BorderColor--200", "$pf-global--BorderColor--200", "$pf-color-black-500", "#8a8d90"]
    }, {
      "property": "--pf-c-clipboard-copy__group-copy--BorderLeftColor",
      "value": "#ededed",
      "token": "c_clipboard_copy__group_copy_BorderLeftColor",
      "values": ["--pf-global--BorderColor--300", "$pf-global--BorderColor--300", "$pf-color-black-200", "#ededed"]
    }, {
      "property": "--pf-c-clipboard-copy__group-copy--hover--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_copy_hover_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-clipboard-copy__group-copy--active--BorderBottomWidth",
      "value": "2px",
      "token": "c_clipboard_copy__group_copy_active_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-clipboard-copy__group-copy--active--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_copy_active_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-clipboard-copy__group-copy--focus--BorderBottomWidth",
      "value": "2px",
      "token": "c_clipboard_copy__group_copy_focus_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-clipboard-copy__group-copy--focus--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_copy_focus_BorderBottomColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-clipboard-copy__expandable-content--PaddingTop",
      "value": "1rem",
      "token": "c_clipboard_copy__expandable_content_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-clipboard-copy__expandable-content--PaddingRight",
      "value": "1rem",
      "token": "c_clipboard_copy__expandable_content_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-clipboard-copy__expandable-content--PaddingBottom",
      "value": "1rem",
      "token": "c_clipboard_copy__expandable_content_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-clipboard-copy__expandable-content--PaddingLeft",
      "value": "1rem",
      "token": "c_clipboard_copy__expandable_content_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-clipboard-copy__expandable-content--BackgroundColor",
      "value": "#fff",
      "token": "c_clipboard_copy__expandable_content_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--light-100", "$pf-global--BackgroundColor--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-clipboard-copy__expandable-content--BorderWidth",
      "value": "1px",
      "token": "c_clipboard_copy__expandable_content_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-clipboard-copy__expandable-content--BoxShadow",
      "value": "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)",
      "token": "c_clipboard_copy__expandable_content_BoxShadow",
      "values": ["--pf-global--BoxShadow--md", "$pf-global--BoxShadow--md", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba($pf-color-black-1000, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba($pf-color-black-1000, .06)", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba(#030303, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba(#030303, .06)", "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)"]
    }, {
      "property": "--pf-c-clipboard-copy__expandable-content--OutlineOffset",
      "value": "calc(-1 * 0.25rem)",
      "token": "c_clipboard_copy__expandable_content_OutlineOffset",
      "values": ["calc(-1 * --pf-global--spacer--xs)", "calc(-1 * $pf-global--spacer--xs)", "calc(-1 * pf-size-prem(4px))", "calc(-1 * 0.25rem)"]
    }],
    ".pf-c-clipboard-copy.pf-m-expanded .pf-c-clipboard-copy__group-toggle::before": [{
      "property": "--pf-c-clipboard-copy__group-toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_toggle_BorderBottomColor",
      "values": ["--pf-c-clipboard-copy__group-toggle--m-expanded--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-clipboard-copy__group-toggle:hover::before": [{
      "property": "--pf-c-clipboard-copy__group-toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_toggle_BorderBottomColor",
      "values": ["--pf-c-clipboard-copy__group-toggle--hover--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-clipboard-copy__group-toggle:active::before": [{
      "property": "--pf-c-clipboard-copy__group-toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_toggle_BorderBottomColor",
      "values": ["--pf-c-clipboard-copy__group-toggle--active--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-clipboard-copy__group-toggle:focus::before": [{
      "property": "--pf-c-clipboard-copy__group-toggle--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_toggle_BorderBottomColor",
      "values": ["--pf-c-clipboard-copy__group-toggle--focus--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-clipboard-copy__group-copy:hover::before": [{
      "property": "--pf-c-clipboard-copy__group-copy--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_copy_BorderBottomColor",
      "values": ["--pf-c-clipboard-copy__group-copy--hover--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-clipboard-copy__group-copy:active::before": [{
      "property": "--pf-c-clipboard-copy__group-copy--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_copy_BorderBottomColor",
      "values": ["--pf-c-clipboard-copy__group-copy--active--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-clipboard-copy__group-copy:focus::before": [{
      "property": "--pf-c-clipboard-copy__group-copy--BorderBottomColor",
      "value": "#06c",
      "token": "c_clipboard_copy__group_copy_BorderBottomColor",
      "values": ["--pf-c-clipboard-copy__group-copy--focus--BorderBottomColor", "--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }]
  };
});