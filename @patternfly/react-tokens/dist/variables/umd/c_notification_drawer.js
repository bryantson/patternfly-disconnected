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
    ".pf-c-notification-drawer": [{
      "property": "--pf-c-notification-drawer--BackgroundColor",
      "value": "#fafafa",
      "token": "c_notification_drawer_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--200", "$pf-global--BackgroundColor--200", "$pf-color-black-100", "#fafafa"]
    }, {
      "property": "--pf-c-notification-drawer__header--PaddingTop",
      "value": "1rem",
      "token": "c_notification_drawer__header_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__header--PaddingRight",
      "value": "1rem",
      "token": "c_notification_drawer__header_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__header--PaddingBottom",
      "value": "1rem",
      "token": "c_notification_drawer__header_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__header--PaddingLeft",
      "value": "1rem",
      "token": "c_notification_drawer__header_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__header--BackgroundColor",
      "value": "#fff",
      "token": "c_notification_drawer__header_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-notification-drawer__header--BoxShadow",
      "value": "0 0.25rem 0.625rem -0.25rem rgba(3, 3, 3, 0.12)",
      "token": "c_notification_drawer__header_BoxShadow",
      "values": ["--pf-global--BoxShadow--sm-bottom", "$pf-global--BoxShadow--sm-bottom", "0 pf-size-prem(4) pf-size-prem(10) pf-size-prem(-4) rgba($pf-color-black-1000, .12)", "0 pf-size-prem(4) pf-size-prem(10) pf-size-prem(-4) rgba(#030303, .12)", "0 0.25rem 0.625rem -0.25rem rgba(3, 3, 3, 0.12)"]
    }, {
      "property": "--pf-c-notification-drawer__header--ZIndex",
      "value": "200",
      "token": "c_notification_drawer__header_ZIndex",
      "values": ["--pf-global--ZIndex--sm", "$pf-global--ZIndex--sm", "200"]
    }, {
      "property": "--pf-c-notification-drawer__header-title--FontSize",
      "value": "1.25rem",
      "token": "c_notification_drawer__header_title_FontSize",
      "values": ["--pf-global--FontSize--xl", "$pf-global--FontSize--xl", "pf-font-prem(20px)", "1.25rem"]
    }, {
      "property": "--pf-c-notification-drawer__header-status--MarginLeft",
      "value": "1rem",
      "token": "c_notification_drawer__header_status_MarginLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__body--ZIndex",
      "value": "100",
      "token": "c_notification_drawer__body_ZIndex",
      "values": ["--pf-global--ZIndex--xs", "$pf-global--ZIndex--xs", "100"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--PaddingTop",
      "value": "1rem",
      "token": "c_notification_drawer__list_item_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--PaddingRight",
      "value": "1rem",
      "token": "c_notification_drawer__list_item_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--PaddingBottom",
      "value": "1rem",
      "token": "c_notification_drawer__list_item_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--PaddingLeft",
      "value": "1rem",
      "token": "c_notification_drawer__list_item_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--BackgroundColor",
      "value": "#fff",
      "token": "c_notification_drawer__list_item_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--BoxShadow",
      "value": "inset 0 0.25rem 0.625rem -0.25rem rgba(3, 3, 3, 0.12)",
      "token": "c_notification_drawer__list_item_BoxShadow",
      "values": ["inset --pf-global--BoxShadow--sm-bottom", "inset $pf-global--BoxShadow--sm-bottom", "inset 0 pf-size-prem(4) pf-size-prem(10) pf-size-prem(-4) rgba($pf-color-black-1000, .12)", "inset 0 pf-size-prem(4) pf-size-prem(10) pf-size-prem(-4) rgba(#030303, .12)", "inset 0 0.25rem 0.625rem -0.25rem rgba(3, 3, 3, 0.12)"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--BorderBottomWidth",
      "value": "1px",
      "token": "c_notification_drawer__list_item_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--BorderBottomColor",
      "value": "transparent",
      "token": "c_notification_drawer__list_item_BorderBottomColor"
    }, {
      "property": "--pf-c-notification-drawer__list-item--OutlineOffset",
      "value": "-0.25rem",
      "token": "c_notification_drawer__list_item_OutlineOffset"
    }, {
      "property": "--pf-c-notification-drawer__list-item--before--Width",
      "value": "3px",
      "token": "c_notification_drawer__list_item_before_Width",
      "values": ["--pf-global--BorderWidth--lg", "$pf-global--BorderWidth--lg", "3px"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--before--Top",
      "value": "0",
      "token": "c_notification_drawer__list_item_before_Top"
    }, {
      "property": "--pf-c-notification-drawer__list-item--before--Bottom",
      "value": "calc(1px * -1)",
      "token": "c_notification_drawer__list_item_before_Bottom",
      "values": ["calc(--pf-c-notification-drawer__list-item--BorderBottomWidth * -1)", "calc(--pf-global--BorderWidth--sm * -1)", "calc($pf-global--BorderWidth--sm * -1)", "calc(1px * -1)"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-info__list-item-header-icon--Color",
      "value": "#73bcf7",
      "token": "c_notification_drawer__list_item_m_info__list_item_header_icon_Color",
      "values": ["--pf-global--info-color--100", "$pf-global--info-color--100", "$pf-color-blue-200", "#73bcf7"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-info__list-item--before--BackgroundColor",
      "value": "#73bcf7",
      "token": "c_notification_drawer__list_item_m_info__list_item_before_BackgroundColor",
      "values": ["--pf-global--info-color--100", "$pf-global--info-color--100", "$pf-color-blue-200", "#73bcf7"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-warning__list-item-header-icon--Color",
      "value": "#f0ab00",
      "token": "c_notification_drawer__list_item_m_warning__list_item_header_icon_Color",
      "values": ["--pf-global--warning-color--100", "$pf-global--warning-color--100", "$pf-color-gold-400", "#f0ab00"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-warning__list-item--before--BackgroundColor",
      "value": "#f0ab00",
      "token": "c_notification_drawer__list_item_m_warning__list_item_before_BackgroundColor",
      "values": ["--pf-global--warning-color--100", "$pf-global--warning-color--100", "$pf-color-gold-400", "#f0ab00"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-danger__list-item-header-icon--Color",
      "value": "#c9190b",
      "token": "c_notification_drawer__list_item_m_danger__list_item_header_icon_Color",
      "values": ["--pf-global--danger-color--100", "$pf-global--danger-color--100", "$pf-color-red-100", "#c9190b"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-danger__list-item--before--BackgroundColor",
      "value": "#c9190b",
      "token": "c_notification_drawer__list_item_m_danger__list_item_before_BackgroundColor",
      "values": ["--pf-global--danger-color--100", "$pf-global--danger-color--100", "$pf-color-red-100", "#c9190b"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-success__list-item-header-icon--Color",
      "value": "#92d400",
      "token": "c_notification_drawer__list_item_m_success__list_item_header_icon_Color",
      "values": ["--pf-global--success-color--100", "$pf-global--success-color--100", "$pf-color-light-green-400", "#92d400"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-success__list-item--before--BackgroundColor",
      "value": "#92d400",
      "token": "c_notification_drawer__list_item_m_success__list_item_before_BackgroundColor",
      "values": ["--pf-global--success-color--100", "$pf-global--success-color--100", "$pf-color-light-green-400", "#92d400"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-read--BackgroundColor",
      "value": "#fafafa",
      "token": "c_notification_drawer__list_item_m_read_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--200", "$pf-global--BackgroundColor--200", "$pf-color-black-100", "#fafafa"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-read--BorderBottomColor",
      "value": "#d2d2d2",
      "token": "c_notification_drawer__list_item_m_read_BorderBottomColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-read--before--Top",
      "value": "calc(1px * -1)",
      "token": "c_notification_drawer__list_item_m_read_before_Top",
      "values": ["calc(--pf-c-notification-drawer__list-item--BorderBottomWidth * -1)", "calc(--pf-global--BorderWidth--sm * -1)", "calc($pf-global--BorderWidth--sm * -1)", "calc(1px * -1)"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-read--before--Bottom",
      "value": "0",
      "token": "c_notification_drawer__list_item_m_read_before_Bottom"
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-read--before--BackgroundColor",
      "value": "transparent",
      "token": "c_notification_drawer__list_item_m_read_before_BackgroundColor"
    }, {
      "property": "--pf-c-notification-drawer__list-item--list-item--m-read--before--Top",
      "value": "0",
      "token": "c_notification_drawer__list_item_list_item_m_read_before_Top"
    }, {
      "property": "--pf-c-notification-drawer__list-item--list-item--m-read--BoxShadow",
      "value": "inset 0 0.25rem 0.625rem -0.25rem rgba(3, 3, 3, 0.12)",
      "token": "c_notification_drawer__list_item_list_item_m_read_BoxShadow",
      "values": ["inset --pf-global--BoxShadow--sm-bottom", "inset $pf-global--BoxShadow--sm-bottom", "inset 0 pf-size-prem(4) pf-size-prem(10) pf-size-prem(-4) rgba($pf-color-black-1000, .12)", "inset 0 pf-size-prem(4) pf-size-prem(10) pf-size-prem(-4) rgba(#030303, .12)", "inset 0 0.25rem 0.625rem -0.25rem rgba(3, 3, 3, 0.12)"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-hoverable--hover--ZIndex",
      "value": "100",
      "token": "c_notification_drawer__list_item_m_hoverable_hover_ZIndex",
      "values": ["--pf-global--ZIndex--xs", "$pf-global--ZIndex--xs", "100"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-hoverable--hover--BoxShadow",
      "value": "0 -0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25), 0 0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25)",
      "token": "c_notification_drawer__list_item_m_hoverable_hover_BoxShadow",
      "values": ["--pf-global--BoxShadow--md-top, --pf-global--BoxShadow--md-bottom", "$pf-global--BoxShadow--md-top, $pf-global--BoxShadow--md-bottom", "0 pf-size-prem(-5) pf-size-prem(10) pf-size-prem(-4) rgba($pf-color-black-1000, .25), 0 pf-size-prem(5) pf-size-prem(10) pf-size-prem(-4) rgba($pf-color-black-1000, .25)", "0 pf-size-prem(-5) pf-size-prem(10) pf-size-prem(-4) rgba(#030303, .25), 0 pf-size-prem(5) pf-size-prem(10) pf-size-prem(-4) rgba(#030303, .25)", "0 -0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25), 0 0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25)"]
    }, {
      "property": "--pf-c-notification-drawer__list-item-header--MarginBottom",
      "value": "0.25rem",
      "token": "c_notification_drawer__list_item_header_MarginBottom",
      "values": ["--pf-global--spacer--xs", "$pf-global--spacer--xs", "pf-size-prem(4px)", "0.25rem"]
    }, {
      "property": "--pf-c-notification-drawer__list-item-header-icon--Color",
      "value": "inherit",
      "token": "c_notification_drawer__list_item_header_icon_Color"
    }, {
      "property": "--pf-c-notification-drawer__list-item-header-icon--MarginRight",
      "value": "0.5rem",
      "token": "c_notification_drawer__list_item_header_icon_MarginRight",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-notification-drawer__list-item-header-title--FontWeight",
      "value": "600",
      "token": "c_notification_drawer__list_item_header_title_FontWeight",
      "values": ["--pf-global--FontWeight--bold", "$pf-global--FontWeight--bold", "600"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--m-read__list-item-header-title--FontWeight",
      "value": "400",
      "token": "c_notification_drawer__list_item_m_read__list_item_header_title_FontWeight",
      "values": ["--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }, {
      "property": "--pf-c-notification-drawer__list-item-description--MarginBottom",
      "value": "0.5rem",
      "token": "c_notification_drawer__list_item_description_MarginBottom",
      "values": ["--pf-global--spacer--sm", "$pf-global--spacer--sm", "pf-size-prem(8px)", "0.5rem"]
    }, {
      "property": "--pf-c-notification-drawer__list-item-timestamp--Color",
      "value": "#737679",
      "token": "c_notification_drawer__list_item_timestamp_Color",
      "values": ["--pf-global--Color--200", "$pf-global--Color--200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-notification-drawer__list-item-timestamp--FontSize",
      "value": "0.875rem",
      "token": "c_notification_drawer__list_item_timestamp_FontSize",
      "values": ["--pf-global--FontSize--sm", "$pf-global--FontSize--sm", "pf-font-prem(14px)", "0.875rem"]
    }, {
      "property": "--pf-c-notification-drawer__group--m-expanded--group--BorderTopWidth",
      "value": "1px",
      "token": "c_notification_drawer__group_m_expanded_group_BorderTopWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-notification-drawer__group--m-expanded--group--BorderTopColor",
      "value": "#d2d2d2",
      "token": "c_notification_drawer__group_m_expanded_group_BorderTopColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-notification-drawer__group--m-expanded--MinHeight",
      "value": "18.75rem",
      "token": "c_notification_drawer__group_m_expanded_MinHeight"
    }, {
      "property": "--pf-c-notification-drawer__group-toggle--PaddingTop",
      "value": "1rem",
      "token": "c_notification_drawer__group_toggle_PaddingTop",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__group-toggle--PaddingRight",
      "value": "1rem",
      "token": "c_notification_drawer__group_toggle_PaddingRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__group-toggle--PaddingBottom",
      "value": "1rem",
      "token": "c_notification_drawer__group_toggle_PaddingBottom",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__group-toggle--PaddingLeft",
      "value": "1rem",
      "token": "c_notification_drawer__group_toggle_PaddingLeft",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__group-toggle--BackgroundColor",
      "value": "#fff",
      "token": "c_notification_drawer__group_toggle_BackgroundColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-notification-drawer__group-toggle--BorderColor",
      "value": "#d2d2d2",
      "token": "c_notification_drawer__group_toggle_BorderColor",
      "values": ["--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-notification-drawer__group-toggle--BorderBottomWidth",
      "value": "1px",
      "token": "c_notification_drawer__group_toggle_BorderBottomWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-notification-drawer__group-toggle--OutlineOffset",
      "value": "-0.25rem",
      "token": "c_notification_drawer__group_toggle_OutlineOffset"
    }, {
      "property": "--pf-c-notification-drawer__group-toggle-count--MarginRight",
      "value": "1rem",
      "token": "c_notification_drawer__group_toggle_count_MarginRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__group-toggle-icon--MarginRight",
      "value": "1rem",
      "token": "c_notification_drawer__group_toggle_icon_MarginRight",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-drawer__group-toggle-icon--Color",
      "value": "#737679",
      "token": "c_notification_drawer__group_toggle_icon_Color",
      "values": ["--pf-global--Color--200", "$pf-global--Color--200", "$pf-color-black-600", "#737679"]
    }, {
      "property": "--pf-c-notification-drawer__group-toggle-icon--Transition",
      "value": ".2s ease-in 0s",
      "token": "c_notification_drawer__group_toggle_icon_Transition"
    }, {
      "property": "--pf-c-notification-drawer__group--m-expanded__group-toggle-icon--Transform",
      "value": "rotate(90deg)",
      "token": "c_notification_drawer__group_m_expanded__group_toggle_icon_Transform"
    }],
    ".pf-c-notification-drawer__list-item.pf-m-read": [{
      "property": "--pf-c-notification-drawer__list-item--BoxShadow",
      "value": "none",
      "token": "c_notification_drawer__list_item_BoxShadow"
    }, {
      "property": "--pf-c-notification-drawer__list-item--BorderBottomColor",
      "value": "#d2d2d2",
      "token": "c_notification_drawer__list_item_BorderBottomColor",
      "values": ["--pf-c-notification-drawer__list-item--m-read--BorderBottomColor", "--pf-global--BorderColor--100", "$pf-global--BorderColor--100", "$pf-color-black-300", "#d2d2d2"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--BackgroundColor",
      "value": "#fafafa",
      "token": "c_notification_drawer__list_item_BackgroundColor",
      "values": ["--pf-c-notification-drawer__list-item--m-read--BackgroundColor", "--pf-global--BackgroundColor--200", "$pf-global--BackgroundColor--200", "$pf-color-black-100", "#fafafa"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--before--Top",
      "value": "calc(1px * -1)",
      "token": "c_notification_drawer__list_item_before_Top",
      "values": ["--pf-c-notification-drawer__list-item--m-read--before--Top", "calc(--pf-c-notification-drawer__list-item--BorderBottomWidth * -1)", "calc(--pf-global--BorderWidth--sm * -1)", "calc($pf-global--BorderWidth--sm * -1)", "calc(1px * -1)"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--before--Bottom",
      "value": "0",
      "token": "c_notification_drawer__list_item_before_Bottom",
      "values": ["--pf-c-notification-drawer__list-item--m-read--before--Bottom", "0"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--before--BackgroundColor",
      "value": "transparent",
      "token": "c_notification_drawer__list_item_before_BackgroundColor",
      "values": ["--pf-c-notification-drawer__list-item--m-read--before--BackgroundColor", "transparent"]
    }, {
      "property": "--pf-c-notification-drawer__list-item-header-title--FontWeight",
      "value": "400",
      "token": "c_notification_drawer__list_item_header_title_FontWeight",
      "values": ["--pf-c-notification-drawer__list-item--m-read__list-item-header-title--FontWeight", "--pf-global--FontWeight--normal", "$pf-global--FontWeight--normal", "400"]
    }],
    ".pf-c-notification-drawer__list-item:not(.pf-m-read) + .pf-c-notification-drawer__list-item.pf-m-read": [{
      "property": "--pf-c-notification-drawer__list-item--BoxShadow",
      "value": "inset 0 0.25rem 0.625rem -0.25rem rgba(3, 3, 3, 0.12)",
      "token": "c_notification_drawer__list_item_BoxShadow",
      "values": ["--pf-c-notification-drawer__list-item--list-item--m-read--BoxShadow", "inset --pf-global--BoxShadow--sm-bottom", "inset $pf-global--BoxShadow--sm-bottom", "inset 0 pf-size-prem(4) pf-size-prem(10) pf-size-prem(-4) rgba($pf-color-black-1000, .12)", "inset 0 pf-size-prem(4) pf-size-prem(10) pf-size-prem(-4) rgba(#030303, .12)", "inset 0 0.25rem 0.625rem -0.25rem rgba(3, 3, 3, 0.12)"]
    }, {
      "property": "--pf-c-notification-drawer__list-item--before--Top",
      "value": "0",
      "token": "c_notification_drawer__list_item_before_Top",
      "values": ["--pf-c-notification-drawer__list-item--list-item--m-read--before--Top", "0"]
    }],
    ".pf-c-notification-drawer__list-item.pf-m-info": [{
      "property": "--pf-c-notification-drawer__list-item--before--BackgroundColor",
      "value": "#73bcf7",
      "token": "c_notification_drawer__list_item_before_BackgroundColor",
      "values": ["--pf-c-notification-drawer__list-item--m-info__list-item--before--BackgroundColor", "--pf-global--info-color--100", "$pf-global--info-color--100", "$pf-color-blue-200", "#73bcf7"]
    }, {
      "property": "--pf-c-notification-drawer__list-item-header-icon--Color",
      "value": "#73bcf7",
      "token": "c_notification_drawer__list_item_header_icon_Color",
      "values": ["--pf-c-notification-drawer__list-item--m-info__list-item-header-icon--Color", "--pf-global--info-color--100", "$pf-global--info-color--100", "$pf-color-blue-200", "#73bcf7"]
    }],
    ".pf-c-notification-drawer__list-item.pf-m-warning": [{
      "property": "--pf-c-notification-drawer__list-item--before--BackgroundColor",
      "value": "#f0ab00",
      "token": "c_notification_drawer__list_item_before_BackgroundColor",
      "values": ["--pf-c-notification-drawer__list-item--m-warning__list-item--before--BackgroundColor", "--pf-global--warning-color--100", "$pf-global--warning-color--100", "$pf-color-gold-400", "#f0ab00"]
    }, {
      "property": "--pf-c-notification-drawer__list-item-header-icon--Color",
      "value": "#f0ab00",
      "token": "c_notification_drawer__list_item_header_icon_Color",
      "values": ["--pf-c-notification-drawer__list-item--m-warning__list-item-header-icon--Color", "--pf-global--warning-color--100", "$pf-global--warning-color--100", "$pf-color-gold-400", "#f0ab00"]
    }],
    ".pf-c-notification-drawer__list-item.pf-m-danger": [{
      "property": "--pf-c-notification-drawer__list-item--before--BackgroundColor",
      "value": "#c9190b",
      "token": "c_notification_drawer__list_item_before_BackgroundColor",
      "values": ["--pf-c-notification-drawer__list-item--m-danger__list-item--before--BackgroundColor", "--pf-global--danger-color--100", "$pf-global--danger-color--100", "$pf-color-red-100", "#c9190b"]
    }, {
      "property": "--pf-c-notification-drawer__list-item-header-icon--Color",
      "value": "#c9190b",
      "token": "c_notification_drawer__list_item_header_icon_Color",
      "values": ["--pf-c-notification-drawer__list-item--m-danger__list-item-header-icon--Color", "--pf-global--danger-color--100", "$pf-global--danger-color--100", "$pf-color-red-100", "#c9190b"]
    }],
    ".pf-c-notification-drawer__list-item.pf-m-success": [{
      "property": "--pf-c-notification-drawer__list-item--before--BackgroundColor",
      "value": "#92d400",
      "token": "c_notification_drawer__list_item_before_BackgroundColor",
      "values": ["--pf-c-notification-drawer__list-item--m-success__list-item--before--BackgroundColor", "--pf-global--success-color--100", "$pf-global--success-color--100", "$pf-color-light-green-400", "#92d400"]
    }, {
      "property": "--pf-c-notification-drawer__list-item-header-icon--Color",
      "value": "#92d400",
      "token": "c_notification_drawer__list_item_header_icon_Color",
      "values": ["--pf-c-notification-drawer__list-item--m-success__list-item-header-icon--Color", "--pf-global--success-color--100", "$pf-global--success-color--100", "$pf-color-light-green-400", "#92d400"]
    }],
    ".pf-c-notification-drawer__group .pf-c-notification-drawer__list-item:last-child": [{
      "property": "--pf-c-notification-drawer__list-item--BorderBottomWidth",
      "value": "0",
      "token": "c_notification_drawer__list_item_BorderBottomWidth"
    }]
  };
});