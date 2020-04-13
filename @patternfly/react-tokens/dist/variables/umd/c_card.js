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
    ".pf-c-card": [{
      "property": "--pf-c-card--BackgroundColor",
      "value": "#fff",
      "token": "c_card_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-card--BoxShadow",
      "value": "0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.2)",
      "token": "c_card_BoxShadow",
      "values": ["--pf-global--BoxShadow--sm", "$pf-global--BoxShadow--sm", "0 pf-size-prem(1) pf-size-prem(2) 0 rgba($pf-color-black-1000, .2)", "0 pf-size-prem(1) pf-size-prem(2) 0 rgba(#030303, .2)", "0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.2)"]
    }, {
      "property": "--pf-c-card--m-hoverable--hover--BoxShadow",
      "value": "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)",
      "token": "c_card_m_hoverable_hover_BoxShadow",
      "values": ["--pf-global--BoxShadow--lg", "$pf-global--BoxShadow--lg", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba($pf-color-black-1000, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba($pf-color-black-1000, .12)", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba(#030303, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba(#030303, .12)", "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)"]
    }, {
      "property": "--pf-c-card--m-selectable--hover--BoxShadow",
      "value": "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)",
      "token": "c_card_m_selectable_hover_BoxShadow",
      "values": ["--pf-global--BoxShadow--lg", "$pf-global--BoxShadow--lg", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba($pf-color-black-1000, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba($pf-color-black-1000, .12)", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba(#030303, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba(#030303, .12)", "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)"]
    }, {
      "property": "--pf-c-card--m-selectable--focus--BoxShadow",
      "value": "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)",
      "token": "c_card_m_selectable_focus_BoxShadow",
      "values": ["--pf-global--BoxShadow--lg", "$pf-global--BoxShadow--lg", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba($pf-color-black-1000, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba($pf-color-black-1000, .12)", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba(#030303, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba(#030303, .12)", "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)"]
    }, {
      "property": "--pf-c-card--m-selectable--active--BoxShadow",
      "value": "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)",
      "token": "c_card_m_selectable_active_BoxShadow",
      "values": ["--pf-global--BoxShadow--lg", "$pf-global--BoxShadow--lg", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba($pf-color-black-1000, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba($pf-color-black-1000, .12)", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba(#030303, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba(#030303, .12)", "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)"]
    }, {
      "property": "--pf-c-card--m-selectable--m-selected--BoxShadow",
      "value": "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)",
      "token": "c_card_m_selectable_m_selected_BoxShadow",
      "values": ["--pf-global--BoxShadow--lg", "$pf-global--BoxShadow--lg", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba($pf-color-black-1000, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba($pf-color-black-1000, .12)", "0 pf-size-prem(3) pf-size-prem(7) pf-size-prem(3) rgba(#030303, .13), 0 pf-size-prem(11) pf-size-prem(24) pf-size-prem(16) rgba(#030303, .12)", "0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12)"]
    }, {
      "property": "--pf-c-card--m-selectable--m-selected--before--Height",
      "value": "3px",
      "token": "c_card_m_selectable_m_selected_before_Height",
      "values": ["--pf-global--BorderWidth--lg", "$pf-global--BorderWidth--lg", "3px"]
    }, {
      "property": "--pf-c-card--m-selectable--m-selected--before--BackgroundColor",
      "value": "#06c",
      "token": "c_card_m_selectable_m_selected_before_BackgroundColor",
      "values": ["--pf-global--active-color--100", "$pf-global--active-color--100", "$pf-color-blue-400", "#06c"]
    }, {
      "property": "--pf-c-card--m-compact__body--FontSize",
      "value": "0.875rem",
      "token": "c_card_m_compact__body_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-card--m-compact__footer--FontSize",
      "value": "0.875rem",
      "token": "c_card_m_compact__footer_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-card--m-compact--first-child--PaddingTop",
      "value": "1rem",
      "token": "c_card_m_compact_first_child_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-card--m-compact--child--PaddingRight",
      "value": "1rem",
      "token": "c_card_m_compact_child_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-card--m-compact--child--PaddingBottom",
      "value": "1rem",
      "token": "c_card_m_compact_child_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-card--m-compact--child--PaddingLeft",
      "value": "1rem",
      "token": "c_card_m_compact_child_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-card--m-compact__header--not-last-child--PaddingBottom",
      "value": "0.5rem",
      "token": "c_card_m_compact__header_not_last_child_PaddingBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-card--first-child--PaddingTop",
      "value": "1.5rem",
      "token": "c_card_first_child_PaddingTop",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-card--child--PaddingRight",
      "value": "1.5rem",
      "token": "c_card_child_PaddingRight",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-card--child--PaddingBottom",
      "value": "1.5rem",
      "token": "c_card_child_PaddingBottom",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-card--child--PaddingLeft",
      "value": "1.5rem",
      "token": "c_card_child_PaddingLeft",
      "values": ["--pf-global--spacer--lg", "$pf-global--spacer--lg", "pf-size-prem(24px)", "1.5rem"]
    }, {
      "property": "--pf-c-card__header--not-last-child--PaddingBottom",
      "value": "1rem",
      "token": "c_card__header_not_last_child_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-card__body--FontSize",
      "value": "1rem",
      "token": "c_card__body_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-card__footer--FontSize",
      "value": "1rem",
      "token": "c_card__footer_FontSize",
      "values": ["--pf-global--FontSize--md", "$pf-global--FontSize--md", "pf-font-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-card__actions--PaddingLeft",
      "value": "1rem",
      "token": "c_card__actions_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-card__actions--child--MarginLeft",
      "value": "0.5rem",
      "token": "c_card__actions_child_MarginLeft",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }],
    ".pf-c-card.pf-m-compact": [{
      "property": "--pf-c-card__body--FontSize",
      "value": "0.875rem",
      "token": "c_card__body_FontSize",
      "values": ["--pf-c-card--m-compact__body--FontSize", "--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-card__footer--FontSize",
      "value": "0.875rem",
      "token": "c_card__footer_FontSize",
      "values": ["--pf-c-card--m-compact__footer--FontSize", "--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-card--first-child--PaddingTop",
      "value": "1rem",
      "token": "c_card_first_child_PaddingTop",
      "values": ["--pf-c-card--m-compact--first-child--PaddingTop", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-card--child--PaddingRight",
      "value": "1rem",
      "token": "c_card_child_PaddingRight",
      "values": ["--pf-c-card--m-compact--child--PaddingRight", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-card--child--PaddingBottom",
      "value": "1rem",
      "token": "c_card_child_PaddingBottom",
      "values": ["--pf-c-card--m-compact--child--PaddingBottom", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-card--child--PaddingLeft",
      "value": "1rem",
      "token": "c_card_child_PaddingLeft",
      "values": ["--pf-c-card--m-compact--child--PaddingLeft", "--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-card__header--not-last-child--PaddingBottom",
      "value": "0.5rem",
      "token": "c_card__header_not_last_child_PaddingBottom",
      "values": ["--pf-c-card--m-compact__header--not-last-child--PaddingBottom", "--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }]
  };
});