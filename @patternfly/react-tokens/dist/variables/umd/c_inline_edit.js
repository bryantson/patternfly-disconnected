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
    ".pf-c-inline-edit": [{
      "property": "--pf-c-inline-edit__group--item--MarginRight",
      "value": "0.5rem",
      "token": "c_inline_edit__group_item_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-inline-edit__action--c-button--m-valid--m-plain--Color",
      "value": "#06c",
      "token": "c_inline_edit__action_c_button_m_valid_m_plain_Color",
      "values": ["--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-inline-edit__action--c-button--m-valid--m-plain--hover--Color",
      "value": "#004080",
      "token": "c_inline_edit__action_c_button_m_valid_m_plain_hover_Color",
      "values": ["--pf-global--link--Color--hover", "$pf-global--link--Color--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }, {
      "property": "--pf-c-inline-edit__action--m-icon-group--item--MarginRight",
      "value": "0",
      "token": "c_inline_edit__action_m_icon_group_item_MarginRight"
    }, {
      "property": "--pf-c-inline-edit__group--m-footer--MarginTop",
      "value": "2rem",
      "token": "c_inline_edit__group_m_footer_MarginTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-inline-edit__label--m-bold--FontWeight",
      "value": "500",
      "token": "c_inline_edit__label_m_bold_FontWeight",
      "values": ["--pf-global--FontWeight--semi-bold", "$pf-global--FontWeight--semi-bold", "500"]
    }],
    ".pf-c-inline-edit__group.pf-m-icon-group": [{
      "property": "--pf-c-inline-edit__group--item--MarginRight",
      "value": "0",
      "token": "c_inline_edit__group_item_MarginRight",
      "values": ["--pf-c-inline-edit__action--m-icon-group--item--MarginRight", "0"]
    }],
    ".pf-c-inline-edit__group.pf-m-column": [{
      "property": "--pf-c-inline-edit__group--item--MarginRight",
      "value": "0",
      "token": "c_inline_edit__group_item_MarginRight"
    }],
    ".pf-c-inline-edit__group > :last-child": [{
      "property": "--pf-c-inline-edit__group--item--MarginRight",
      "value": "0",
      "token": "c_inline_edit__group_item_MarginRight"
    }],
    ".pf-c-inline-edit__action.pf-m-valid .pf-c-button.pf-m-plain": [{
      "property": "--pf-c-button--m-plain--Color",
      "value": "#06c",
      "token": "c_button_m_plain_Color",
      "values": ["--pf-c-inline-edit__action--c-button--m-valid--m-plain--Color", "--pf-global--link--Color", "$pf-global--link--Color", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }],
    ".pf-c-inline-edit__action.pf-m-valid .pf-c-button.pf-m-plain:hover": [{
      "property": "--pf-c-button--m-plain--Color",
      "value": "#004080",
      "token": "c_button_m_plain_Color",
      "values": ["--pf-c-inline-edit__action--c-button--m-valid--m-plain--hover--Color", "--pf-global--link--Color--hover", "$pf-global--link--Color--hover", "$pf-global--primary-color--200", "$pf-color-blue-500", "#004080"]
    }]
  };
});