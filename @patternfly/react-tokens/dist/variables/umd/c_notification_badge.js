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
    ".pf-c-notification-badge": [{
      "property": "--pf-c-notification-badge--after--BorderColor",
      "value": "#fff",
      "token": "c_notification_badge_after_BorderColor",
      "values": ["--pf-global--BackgroundColor--100", "$pf-global--BackgroundColor--100", "$pf-color-white", "#fff"]
    }, {
      "property": "--pf-c-notification-badge--after--BorderRadius",
      "value": "30em",
      "token": "c_notification_badge_after_BorderRadius",
      "values": ["--pf-global--BorderRadius--lg", "$pf-global--BorderRadius--lg", "30em"]
    }, {
      "property": "--pf-c-notification-badge--after--BorderWidth",
      "value": "1px",
      "token": "c_notification_badge_after_BorderWidth",
      "values": ["--pf-global--BorderWidth--sm", "$pf-global--BorderWidth--sm", "1px"]
    }, {
      "property": "--pf-c-notification-badge--after--Top",
      "value": "0",
      "token": "c_notification_badge_after_Top"
    }, {
      "property": "--pf-c-notification-badge--after--Right",
      "value": "0",
      "token": "c_notification_badge_after_Right"
    }, {
      "property": "--pf-c-notification-badge--after--Width",
      "value": "calc(0.5rem + 1px + 1px)",
      "token": "c_notification_badge_after_Width",
      "values": ["calc(--pf-global--spacer--sm + --pf-c-notification-badge--after--BorderWidth + --pf-c-notification-badge--after--BorderWidth)", "calc($pf-global--spacer--sm + --pf-global--BorderWidth--sm + --pf-global--BorderWidth--sm)", "calc($pf-global--spacer--sm + $pf-global--BorderWidth--sm + $pf-global--BorderWidth--sm)", "calc(pf-size-prem(8px) + 1px + 1px)", "calc(0.5rem + 1px + 1px)"]
    }, {
      "property": "--pf-c-notification-badge--after--Height",
      "value": "calc(0.5rem + 1px + 1px)",
      "token": "c_notification_badge_after_Height",
      "values": ["calc(--pf-global--spacer--sm + --pf-c-notification-badge--after--BorderWidth + --pf-c-notification-badge--after--BorderWidth)", "calc($pf-global--spacer--sm + --pf-global--BorderWidth--sm + --pf-global--BorderWidth--sm)", "calc($pf-global--spacer--sm + $pf-global--BorderWidth--sm + $pf-global--BorderWidth--sm)", "calc(pf-size-prem(8px) + 1px + 1px)", "calc(0.5rem + 1px + 1px)"]
    }, {
      "property": "--pf-c-notification-badge--after--BackgroundColor",
      "value": "transparent",
      "token": "c_notification_badge_after_BackgroundColor"
    }, {
      "property": "--pf-c-notification-badge--after--TranslateX",
      "value": "50%",
      "token": "c_notification_badge_after_TranslateX"
    }, {
      "property": "--pf-c-notification-badge--after--TranslateY",
      "value": "calc(1px * -1)",
      "token": "c_notification_badge_after_TranslateY",
      "values": ["calc(--pf-c-notification-badge--after--BorderWidth * -1)", "calc(--pf-global--BorderWidth--sm * -1)", "calc($pf-global--BorderWidth--sm * -1)", "calc(1px * -1)"]
    }, {
      "property": "--pf-c-notification-badge__i--Width",
      "value": "1rem",
      "token": "c_notification_badge__i_Width",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-badge__i--Height",
      "value": "1rem",
      "token": "c_notification_badge__i_Height",
      "values": ["--pf-global--spacer--md", "$pf-global--spacer--md", "pf-size-prem(16px)", "1rem"]
    }, {
      "property": "--pf-c-notification-badge--m-read--after--BackgroundColor",
      "value": "transparent",
      "token": "c_notification_badge_m_read_after_BackgroundColor"
    }, {
      "property": "--pf-c-notification-badge--m-read--after--BorderColor",
      "value": "transparent",
      "token": "c_notification_badge_m_read_after_BorderColor"
    }, {
      "property": "--pf-c-notification-badge--m-unread--after--BackgroundColor",
      "value": "#2b9af3",
      "token": "c_notification_badge_m_unread_after_BackgroundColor",
      "values": ["--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }],
    ".pf-c-notification-badge.pf-m-unread::after": [{
      "property": "--pf-c-notification-badge--after--BackgroundColor",
      "value": "#2b9af3",
      "token": "c_notification_badge_after_BackgroundColor",
      "values": ["--pf-c-notification-badge--m-unread--after--BackgroundColor", "--pf-global--active-color--400", "$pf-global--active-color--400", "$pf-color-blue-300", "#2b9af3"]
    }],
    ".pf-c-notification-badge.pf-m-read::after": [{
      "property": "--pf-c-notification-badge--after--BackgroundColor",
      "value": "transparent",
      "token": "c_notification_badge_after_BackgroundColor",
      "values": ["--pf-c-notification-badge--m-read--after--BackgroundColor", "transparent"]
    }, {
      "property": "--pf-c-notification-badge--after--BorderColor",
      "value": "transparent",
      "token": "c_notification_badge_after_BorderColor",
      "values": ["--pf-c-notification-badge--m-read--after--BorderColor", "transparent"]
    }]
  };
});