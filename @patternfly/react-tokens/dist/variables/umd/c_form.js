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
    ".pf-c-form": [{
      "property": "--pf-c-form--GridGap",
      "value": "1.5rem",
      "token": "c_form_GridGap",
      "values": ["--pf-global--gutter", "$pf-global--gutter", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-form__label--Color",
      "value": "#151515",
      "token": "c_form__label_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-form__label--FontWeight",
      "value": "400",
      "token": "c_form__label_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-form__label--FontSize",
      "value": "0.875rem",
      "token": "c_form__label_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-form__label--LineHeight",
      "value": "1.3",
      "token": "c_form__label_LineHeight",
      "values": ["--pf-global--LineHeight--sm", "$pf-global--LineHeight--sm", "1.3"]
    }, {
      "property": "--pf-c-form__label--PaddingTop",
      "value": "0.5rem",
      "token": "c_form__label_PaddingTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-form__label--PaddingBottom",
      "value": "0.5rem",
      "token": "c_form__label_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-form__label--m-disabled--Color",
      "value": "#737679",
      "token": "c_form__label_m_disabled_Color",
      "values": ["--pf-global--disabled-color--100", "$pf-global--disabled-color--100", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-form__label-text--FontWeight",
      "value": "600",
      "token": "c_form__label_text_FontWeight",
      "values": ["--pf-global--FontWeight--bold", "$pf-global--FontWeight--bold", "600"]
    }, {
      "property": "--pf-c-form__label-required--MarginLeft",
      "value": "0.25rem",
      "token": "c_form__label_required_MarginLeft",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-form__label-required--FontSize",
      "value": "0.875rem",
      "token": "c_form__label_required_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-form__label-required--Color",
      "value": "#c9190b",
      "token": "c_form__label_required_Color",
      "values": ["--pf-global--danger-color--100", "$pf-global--danger-color--100", "$pf-color-red-100", "#c9190b"]
    }, {
      "property": "--pf-c-form__group--MarginLeft",
      "value": "0.5rem",
      "token": "c_form__group_MarginLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-form--m-horizontal--md__group--GridTemplateColumns",
      "value": "150px 1fr",
      "token": "c_form_m_horizontal_md__group_GridTemplateColumns"
    }, {
      "property": "--pf-c-form__group--m-action--MarginTop",
      "value": "2rem",
      "token": "c_form__group_m_action_MarginTop",
      "values": ["--pf-global--spacer--xl", "$pf-global--spacer--xl", "pf-size-prem(32px)", "2rem"]
    }, {
      "property": "--pf-c-form__actions--child--MarginTop",
      "value": "0.5rem",
      "token": "c_form__actions_child_MarginTop",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-form__actions--child--MarginRight",
      "value": "0.5rem",
      "token": "c_form__actions_child_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-form__actions--child--MarginBottom",
      "value": "0.5rem",
      "token": "c_form__actions_child_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-form__actions--child--MarginLeft",
      "value": "0.5rem",
      "token": "c_form__actions_child_MarginLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-form__actions--MarginTop",
      "value": "calc(0.5rem * -1)",
      "token": "c_form__actions_MarginTop",
      "values": ["calc(--pf-c-form__actions--child--MarginTop * -1)", "calc(--pf-global--spacer--sm * -1)", "calc($pf-global--spacer--sm * -1)", "calc(pf-size-prem(8px) * -1)", "calc(0.5rem * -1)"]
    }, {
      "property": "--pf-c-form__actions--MarginRight",
      "value": "calc(0.5rem * -1)",
      "token": "c_form__actions_MarginRight",
      "values": ["calc(--pf-c-form__actions--child--MarginRight * -1)", "calc(--pf-global--spacer--sm * -1)", "calc($pf-global--spacer--sm * -1)", "calc(pf-size-prem(8px) * -1)", "calc(0.5rem * -1)"]
    }, {
      "property": "--pf-c-form__actions--MarginBottom",
      "value": "calc(0.5rem * -1)",
      "token": "c_form__actions_MarginBottom",
      "values": ["calc(--pf-c-form__actions--child--MarginBottom * -1)", "calc(--pf-global--spacer--sm * -1)", "calc($pf-global--spacer--sm * -1)", "calc(pf-size-prem(8px) * -1)", "calc(0.5rem * -1)"]
    }, {
      "property": "--pf-c-form__actions--MarginLeft",
      "value": "calc(0.5rem * -1)",
      "token": "c_form__actions_MarginLeft",
      "values": ["calc(--pf-c-form__actions--child--MarginLeft * -1)", "calc(--pf-global--spacer--sm * -1)", "calc($pf-global--spacer--sm * -1)", "calc(pf-size-prem(8px) * -1)", "calc(0.5rem * -1)"]
    }, {
      "property": "--pf-c-form__helper-text--MarginTop",
      "value": "0.25rem",
      "token": "c_form__helper_text_MarginTop",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-form__helper-text--FontSize",
      "value": "0.875rem",
      "token": "c_form__helper_text_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-form__helper-text--Color",
      "value": "#151515",
      "token": "c_form__helper_text_Color",
      "values": ["--pf-global--Color--100", "$pf-global--Color--100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-form--m-inline--MarginRight",
      "value": "1.5rem",
      "token": "c_form_m_inline_MarginRight",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-form--m-error--Color",
      "value": "#c9190b",
      "token": "c_form_m_error_Color",
      "values": ["--pf-global--danger-color--100", "$pf-global--danger-color--100", "$pf-color-red-100", "#c9190b"]
    }, {
      "property": "--pf-c-form--m-success--Color",
      "value": "#486b00",
      "token": "c_form_m_success_Color",
      "values": ["--pf-global--success-color--200", "$pf-global--success-color--200", "$pf-color-light-green-600", "#486b00"]
    }],
    ".pf-c-form__label.pf-m-disabled": [{
      "property": "--pf-c-form__label--Color",
      "value": "#737679",
      "token": "c_form__label_Color",
      "values": ["--pf-c-form__label--m-disabled--Color", "--pf-global--disabled-color--100", "$pf-global--disabled-color--100", "$pf-color-black-600", "#737679"]
    }],
    ".pf-c-form__helper-text.pf-m-error": [{
      "property": "--pf-c-form__helper-text--Color",
      "value": "#c9190b",
      "token": "c_form__helper_text_Color",
      "values": ["--pf-c-form--m-error--Color", "--pf-global--danger-color--100", "$pf-global--danger-color--100", "$pf-color-red-100", "#c9190b"]
    }],
    ".pf-c-form__helper-text.pf-m-success": [{
      "property": "--pf-c-form__helper-text--Color",
      "value": "#486b00",
      "token": "c_form__helper_text_Color",
      "values": ["--pf-c-form--m-success--Color", "--pf-global--success-color--200", "$pf-global--success-color--200", "$pf-color-light-green-600", "#486b00"]
    }]
  };
});