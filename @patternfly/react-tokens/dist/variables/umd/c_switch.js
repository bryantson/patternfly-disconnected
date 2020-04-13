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
    ".pf-c-switch": [{
      "property": "--pf-c-switch--FontSize",
      "value": "1rem",
      "token": "c_switch_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-switch__toggle-icon--FontSize",
      "value": "calc(1rem * .625)",
      "token": "c_switch__toggle_icon_FontSize",
      "values": ["calc(--pf-c-switch--FontSize * .625)", "calc(--pf-global--FontSize--md * .625)", "calc($pf-global--FontSize--md * .625)", "calc(pf-font-prem(16px) * .625)", "calc(1rem * .625)"]
    }, {
      "property": "--pf-c-switch__toggle-icon--Color",
      "value": "#fff",
      "token": "c_switch__toggle_icon_Color",
      "values": ["--pf-global--Color--light-100", "$pf-global--Color--light-100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-switch__toggle-icon--PaddingLeft",
      "value": "calc(1rem * .4)",
      "token": "c_switch__toggle_icon_PaddingLeft",
      "values": ["calc(--pf-c-switch--FontSize * .4)", "calc(--pf-global--FontSize--md * .4)", "calc($pf-global--FontSize--md * .4)", "calc(pf-font-prem(16px) * .4)", "calc(1rem * .4)"]
    }, {
      "property": "--pf-c-switch__toggle-icon--Top",
      "value": "50%",
      "token": "c_switch__toggle_icon_Top"
    }, {
      "property": "--pf-c-switch__toggle-icon--Left",
      "value": "0",
      "token": "c_switch__toggle_icon_Left"
    }, {
      "property": "--pf-c-switch__toggle-icon--Transform",
      "value": "translateY(-50%)",
      "token": "c_switch__toggle_icon_Transform"
    }, {
      "property": "--pf-c-switch__toggle-icon--Offset",
      "value": "0.125rem",
      "token": "c_switch__toggle_icon_Offset"
    }, {
      "property": "--pf-c-switch--LineHeight",
      "value": "1.5",
      "token": "c_switch_LineHeight",
      "values": ["--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-switch--Height",
      "value": "calc(1rem * 1.5)",
      "token": "c_switch_Height",
      "values": ["calc(--pf-c-switch--FontSize * --pf-c-switch--LineHeight)", "calc(--pf-global--FontSize--md * --pf-global--LineHeight--md)", "calc($pf-global--FontSize--md * $pf-global--LineHeight--md)", "calc(pf-font-prem(16px) * 1.5)", "calc(1rem * 1.5)"]
    }, {
      "property": "--pf-c-switch__input--checked__toggle--BackgroundColor",
      "value": "#06c",
      "token": "c_switch__input_checked__toggle_BackgroundColor",
      "values": ["--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-switch__input--checked__toggle--before--Transform",
      "value": "translateX(calc(100% + 0.125rem))",
      "token": "c_switch__input_checked__toggle_before_Transform",
      "values": ["translateX(calc(100% + --pf-c-switch__toggle-icon--Offset))", "translateX(calc(100% + 0.125rem))"]
    }, {
      "property": "--pf-c-switch__input--checked__label--Color",
      "value": "#151515",
      "token": "c_switch__input_checked__label_Color",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }, {
      "property": "--pf-c-switch__input--not-checked__label--Color",
      "value": "#737679",
      "token": "c_switch__input_not_checked__label_Color",
      "values": ["--pf-global--disabled-color--100", "$pf-global--disabled-color--100", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-switch__input--disabled__label--Color",
      "value": "#737679",
      "token": "c_switch__input_disabled__label_Color",
      "values": ["--pf-global--disabled-color--100", "$pf-global--disabled-color--100", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-switch__input--disabled__toggle--BackgroundColor",
      "value": "#737679",
      "token": "c_switch__input_disabled__toggle_BackgroundColor",
      "values": ["--pf-global--Color--dark-200", "$pf-global--Color--dark-200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-switch__input--disabled__toggle--before--BackgroundColor",
      "value": "#d2d2d2",
      "token": "c_switch__input_disabled__toggle_before_BackgroundColor",
      "values": ["--pf-global--disabled-color--200", "$pf-global--disabled-color--200", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-switch__input--focus__toggle--OutlineWidth",
      "value": "2px",
      "token": "c_switch__input_focus__toggle_OutlineWidth",
      "values": ["--pf-global--BorderWidth--md", "$pf-global--BorderWidth--md", "2px"]
    }, {
      "property": "--pf-c-switch__input--focus__toggle--OutlineOffset",
      "value": "0.5rem",
      "token": "c_switch__input_focus__toggle_OutlineOffset",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-switch__input--focus__toggle--OutlineColor",
      "value": "#06c",
      "token": "c_switch__input_focus__toggle_OutlineColor",
      "values": ["--pf-global--primary-color--100", "$pf-global--primary-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-switch__toggle--BackgroundColor",
      "value": "#d2d2d2",
      "token": "c_switch__toggle_BackgroundColor",
      "values": ["--pf-global--disabled-color--200", "$pf-global--disabled-color--200", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-switch__toggle--BorderRadius",
      "value": "calc(1rem * 1.5)",
      "token": "c_switch__toggle_BorderRadius",
      "values": ["--pf-c-switch--Height", "calc(--pf-c-switch--FontSize * --pf-c-switch--LineHeight)", "calc(--pf-global--FontSize--md * --pf-global--LineHeight--md)", "calc($pf-global--FontSize--md * $pf-global--LineHeight--md)", "calc(pf-font-prem(16px) * 1.5)", "calc(1rem * 1.5)"]
    }, {
      "property": "--pf-c-switch__toggle--before--Width",
      "value": "calc(1rem - 0.125rem)",
      "token": "c_switch__toggle_before_Width",
      "values": ["calc(--pf-c-switch--FontSize - --pf-c-switch__toggle-icon--Offset)", "calc(--pf-global--FontSize--md - 0.125rem)", "calc($pf-global--FontSize--md - 0.125rem)", "calc(pf-font-prem(16px) - 0.125rem)", "calc(1rem - 0.125rem)"]
    }, {
      "property": "--pf-c-switch__toggle--before--Height",
      "value": "calc(1rem - 0.125rem)",
      "token": "c_switch__toggle_before_Height",
      "values": ["--pf-c-switch__toggle--before--Width", "calc(--pf-c-switch--FontSize - --pf-c-switch__toggle-icon--Offset)", "calc(--pf-global--FontSize--md - 0.125rem)", "calc($pf-global--FontSize--md - 0.125rem)", "calc(pf-font-prem(16px) - 0.125rem)", "calc(1rem - 0.125rem)"]
    }, {
      "property": "--pf-c-switch__toggle--before--Top",
      "value": "calc((calc(1rem * 1.5) - calc(1rem - 0.125rem)) / 2)",
      "token": "c_switch__toggle_before_Top",
      "values": ["calc((--pf-c-switch--Height - --pf-c-switch__toggle--before--Height) / 2)", "calc((calc(--pf-c-switch--FontSize * --pf-c-switch--LineHeight) - --pf-c-switch__toggle--before--Width) / 2)", "calc((calc(--pf-global--FontSize--md * --pf-global--LineHeight--md) - calc(--pf-c-switch--FontSize - --pf-c-switch__toggle-icon--Offset)) / 2)", "calc((calc($pf-global--FontSize--md * $pf-global--LineHeight--md) - calc(--pf-global--FontSize--md - 0.125rem)) / 2)", "calc((calc($pf-global--FontSize--md * $pf-global--LineHeight--md) - calc($pf-global--FontSize--md - 0.125rem)) / 2)", "calc((calc(pf-font-prem(16px) * 1.5) - calc(pf-font-prem(16px) - 0.125rem)) / 2)", "calc((calc(1rem * 1.5) - calc(1rem - 0.125rem)) / 2)"]
    }, {
      "property": "--pf-c-switch__toggle--before--Left",
      "value": "calc((calc(1rem * 1.5) - calc(1rem - 0.125rem)) / 2)",
      "token": "c_switch__toggle_before_Left",
      "values": ["--pf-c-switch__toggle--before--Top", "calc((--pf-c-switch--Height - --pf-c-switch__toggle--before--Height) / 2)", "calc((calc(--pf-c-switch--FontSize * --pf-c-switch--LineHeight) - --pf-c-switch__toggle--before--Width) / 2)", "calc((calc(--pf-global--FontSize--md * --pf-global--LineHeight--md) - calc(--pf-c-switch--FontSize - --pf-c-switch__toggle-icon--Offset)) / 2)", "calc((calc($pf-global--FontSize--md * $pf-global--LineHeight--md) - calc(--pf-global--FontSize--md - 0.125rem)) / 2)", "calc((calc($pf-global--FontSize--md * $pf-global--LineHeight--md) - calc($pf-global--FontSize--md - 0.125rem)) / 2)", "calc((calc(pf-font-prem(16px) * 1.5) - calc(pf-font-prem(16px) - 0.125rem)) / 2)", "calc((calc(1rem * 1.5) - calc(1rem - 0.125rem)) / 2)"]
    }, {
      "property": "--pf-c-switch__toggle--before--BackgroundColor",
      "value": "#fff",
      "token": "c_switch__toggle_before_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-switch__toggle--before--BorderRadius",
      "value": "30em",
      "token": "c_switch__toggle_before_BorderRadius",
      "values": ["--pf-global--BorderRadius--lg", "$pf-global--BorderRadius--lg", "30em"]
    }, {
      "property": "--pf-c-switch__toggle--before--BoxShadow",
      "value": "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)",
      "token": "c_switch__toggle_before_BoxShadow",
      "values": ["--pf-global--BoxShadow--md", "$pf-global--BoxShadow--md", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba($pf-color-black-1000, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba($pf-color-black-1000, .06)", "0 pf-size-prem(1) pf-size-prem(1) pf-size-prem(0) rgba(#030303, .05), 0 pf-size-prem(4) pf-size-prem(8) pf-size-prem(4) rgba(#030303, .06)", "0 0.0625rem 0.0625rem 0rem rgba(3, 3, 3, 0.05), 0 0.25rem 0.5rem 0.25rem rgba(3, 3, 3, 0.06)"]
    }, {
      "property": "--pf-c-switch__toggle--before--Transition",
      "value": "transform .25s ease 0s",
      "token": "c_switch__toggle_before_Transition"
    }, {
      "property": "--pf-c-switch--Width",
      "value": "calc(calc(1rem * 1.5) + 0.125rem + calc(1rem - 0.125rem))",
      "token": "c_switch_Width",
      "values": ["calc(--pf-c-switch--Height + --pf-c-switch__toggle-icon--Offset + --pf-c-switch__toggle--before--Width)", "calc(calc(--pf-c-switch--FontSize * --pf-c-switch--LineHeight) + 0.125rem + calc(--pf-c-switch--FontSize - --pf-c-switch__toggle-icon--Offset))", "calc(calc(--pf-global--FontSize--md * --pf-global--LineHeight--md) + 0.125rem + calc(--pf-global--FontSize--md - 0.125rem))", "calc(calc($pf-global--FontSize--md * $pf-global--LineHeight--md) + 0.125rem + calc($pf-global--FontSize--md - 0.125rem))", "calc(calc(pf-font-prem(16px) * 1.5) + 0.125rem + calc(pf-font-prem(16px) - 0.125rem))", "calc(calc(1rem * 1.5) + 0.125rem + calc(1rem - 0.125rem))"]
    }, {
      "property": "--pf-c-switch__label--PaddingLeft",
      "value": "1rem",
      "token": "c_switch__label_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-switch__label--FontSize",
      "value": "1rem",
      "token": "c_switch__label_FontSize",
      "values": ["--pf-c-switch--FontSize", "--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-switch__label--FontWeight",
      "value": "400",
      "token": "c_switch__label_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-switch__label--LineHeight",
      "value": "1.5",
      "token": "c_switch__label_LineHeight",
      "values": ["--pf-c-switch--LineHeight", "--pf-global--LineHeight--md", "$pf-global--LineHeight--md", "1.5"]
    }, {
      "property": "--pf-c-switch__label--Color",
      "value": "#151515",
      "token": "c_switch__label_Color",
      "values": ["--pf-global--Color--dark-100", "$pf-global--Color--dark-100", "$pf-color-black-900", "#151515"]
    }]
  };
});